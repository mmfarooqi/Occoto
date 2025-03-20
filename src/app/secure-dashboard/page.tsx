'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const PRODUCTION_URL = 'https://occoto.com';
const DEVELOPMENT_URL = 'http://127.0.0.1:4000';
const LOCAL_APP_URL = process.env.NEXT_PUBLIC_LOCAL_APP_URL || 'http://localhost:3000';

export default function SecureDashboard() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [localAppStatus, setLocalAppStatus] = useState<'checking' | 'online' | 'offline'>('checking');
  const [error, setError] = useState<string | null>(null);

  const baseUrl = process.env.NODE_ENV === 'production' ? PRODUCTION_URL : DEVELOPMENT_URL;

  useEffect(() => {
    // Check if user is authenticated
    const token = localStorage.getItem('secureAccessToken');
    if (!token) {
      router.push('/magic');
      return;
    }

    // Check if local application is running
    const checkLocalApp = async () => {
      try {
        const response = await fetch(`${LOCAL_APP_URL}/api/health`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });
        
        if (response.ok) {
          const data = await response.json();
          setLocalAppStatus('online');
          setError(null);
        } else {
          setLocalAppStatus('offline');
          setError('Local application returned an error response');
        }
      } catch (error) {
        setLocalAppStatus('offline');
        setError('Could not connect to local application');
      } finally {
        setIsLoading(false);
      }
    };

    checkLocalApp();

    // Set up periodic health check
    const interval = setInterval(checkLocalApp, 30000); // Check every 30 seconds

    return () => clearInterval(interval);
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('secureAccessToken');
    router.push('/magic');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-gray-700">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-white">Secure Dashboard</h1>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
            >
              Logout
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-700/30 p-6 rounded-xl">
              <h2 className="text-xl font-semibold text-white mb-4">Quick Links</h2>
              <ul className="space-y-3">
                <li>
                  <a 
                    href={LOCAL_APP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-blue-400 hover:text-blue-300 flex items-center ${
                      localAppStatus === 'offline' ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    onClick={(e) => {
                      if (localAppStatus === 'offline') {
                        e.preventDefault();
                        alert('Local application is currently offline. Please ensure it is running.');
                      }
                    }}
                  >
                    Local Application
                    {localAppStatus === 'online' && (
                      <span className="ml-2 text-green-500">●</span>
                    )}
                    {localAppStatus === 'offline' && (
                      <span className="ml-2 text-red-500">●</span>
                    )}
                  </a>
                </li>
                <li>
                  <a 
                    href={`${baseUrl}/docs`}
                    className="text-blue-400 hover:text-blue-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a 
                    href={`${baseUrl}/settings`}
                    className="text-blue-400 hover:text-blue-300"
                  >
                    Settings
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-gray-700/30 p-6 rounded-xl">
              <h2 className="text-xl font-semibold text-white mb-4">System Status</h2>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className={`w-3 h-3 rounded-full mr-2 ${
                    localAppStatus === 'online' ? 'bg-green-500' : 'bg-red-500'
                  }`}></div>
                  <span className="text-white">
                    Local Application: {localAppStatus === 'online' ? 'Online' : 'Offline'}
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-white">Dashboard Active</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-white">API Services Active</span>
                </div>
              </div>
              {error && (
                <div className="mt-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg">
                  <p className="text-red-400 text-sm">{error}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 