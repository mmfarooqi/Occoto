'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function SecureDashboard() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [localAppStatus, setLocalAppStatus] = useState<'checking' | 'online' | 'offline'>('checking');

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
        const response = await fetch('http://localhost:3000/api/health', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        if (response.ok) {
          setLocalAppStatus('online');
        } else {
          setLocalAppStatus('offline');
        }
      } catch (error) {
        setLocalAppStatus('offline');
      } finally {
        setIsLoading(false);
      }
    };

    checkLocalApp();
  }, [router]);

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
          <h1 className="text-3xl font-bold text-white mb-6">Secure Dashboard</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-700/30 p-6 rounded-xl">
              <h2 className="text-xl font-semibold text-white mb-4">Quick Links</h2>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="http://localhost:3000" 
                    className={`text-blue-400 hover:text-blue-300 flex items-center ${
                      localAppStatus === 'offline' ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    onClick={(e) => {
                      if (localAppStatus === 'offline') {
                        e.preventDefault();
                        alert('Local application is currently offline. Please ensure it is running on port 3000.');
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
                  <a href="#" className="text-blue-400 hover:text-blue-300">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-400 hover:text-blue-300">
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
            </div>
          </div>

          <div className="mt-8">
            <button
              onClick={() => {
                localStorage.removeItem('secureAccessToken');
                router.push('/magic');
              }}
              className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
            >
              Logout
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 