'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function ARVisionPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [interactionCount, setInteractionCount] = useState(0);
  const [showAchievement, setShowAchievement] = useState(false);
  const [randomValues, setRandomValues] = useState<any[]>([]);
  const [particleValues, setParticleValues] = useState<any[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const voiceRef = useRef<HTMLAudioElement | null>(null);
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const features = [
    {
      title: "Spatial Computing",
      description: "Blend digital content with the physical world in ways that feel natural and intuitive.",
      icon: "🌐",
      color: "from-red-500 to-orange-500",
      voiceClip: "/ar-vision/audio/spatial.mp3"
    },
    {
      title: "Neural Interfaces",
      description: "Direct brain-computer connections that revolutionize how we process visual information.",
      icon: "🧠",
      color: "from-purple-500 to-blue-500",
      voiceClip: "/ar-vision/audio/neural.mp3"
    },
    {
      title: "Holographic Displays",
      description: "True 3D visuals that can be viewed from any angle without special glasses.",
      icon: "👁️",
      color: "from-blue-500 to-cyan-500",
      voiceClip: "/ar-vision/audio/holographic.mp3"
    },
    {
      title: "Gesture Recognition",
      description: "Control digital elements with natural hand movements and gestures.",
      icon: "👋",
      color: "from-green-500 to-teal-500",
      voiceClip: "/ar-vision/audio/gesture.mp3"
    },
    {
      title: "Spatial Audio",
      description: "3D sound that enhances immersion by accurately placing audio in virtual space.",
      icon: "🔊",
      color: "from-yellow-500 to-amber-500",
      voiceClip: "/ar-vision/audio/audio.mp3"
    }
  ];

  // Animation values based on scroll
  const titleOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.1], [0, -100]);
  const bgBlur = useTransform(scrollYProgress, [0, 0.5], [0, 10]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  
  // Cursor effects
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springX = useSpring(cursorX, { stiffness: 100, damping: 30 });
  const springY = useSpring(cursorY, { stiffness: 100, damping: 30 });

  // Generate consistent random values for 3D objects and particles
  useEffect(() => {
    if (typeof window !== 'undefined' && randomValues.length === 0) {
      // Generate random values for 3D objects
      const objectValues = Array.from({ length: 5 }, () => ({
        size: 50 + Math.random() * 100,
        x: Math.random() * 100,
        y: Math.random() * 100,
        z: Math.random() * 500,
        rotateX: Math.random() * 360,
        rotateY: Math.random() * 360,
        rotateZ: Math.random() * 360,
        duration: 30 + Math.random() * 20,
        isRounded: Math.random() > 0.5
      }));
      
      // Generate random values for particles
      const particles = Array.from({ length: 80 }, () => ({
        size: 5 + Math.random() * 15,
        x: Math.random() * 100,
        y: Math.random() * 100,
        depth: 0.5 + Math.random() * 0.5,
        animX: Math.random() * 100 - 50,
        animY: Math.random() * 100 - 50,
        duration: 20 + Math.random() * 20
      }));
      
      setRandomValues(objectValues);
      setParticleValues(particles);
    }
  }, [randomValues.length]);

  useEffect(() => {
    // Set loaded state after a delay to trigger animations
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    // Auto-rotate through features
    const featureInterval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000);
    
    // Initialize audio
    if (typeof window !== 'undefined') {
      audioRef.current = new Audio('/ar-vision/audio/ambient.mp3');
      if (audioRef.current) {
        audioRef.current.loop = true;
        audioRef.current.volume = 0.3;
      }
    }

    return () => {
      clearTimeout(timer);
      clearInterval(featureInterval);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      if (voiceRef.current) {
        voiceRef.current.pause();
        voiceRef.current = null;
      }
    };
  }, [features.length]);
  
  // Play feature voice narration when feature changes
  useEffect(() => {
    if (audioEnabled && features[activeFeature]?.voiceClip) {
      if (voiceRef.current) {
        voiceRef.current.pause();
      }
      voiceRef.current = new Audio(features[activeFeature].voiceClip);
      if (voiceRef.current) {
        voiceRef.current.volume = 0.7;
        voiceRef.current.play().catch(e => console.error("Voice playback failed:", e));
      }
    }
  }, [activeFeature, audioEnabled, features]);
  
  // Achievement system
  useEffect(() => {
    if (interactionCount === 5) {
      setShowAchievement(true);
      setTimeout(() => setShowAchievement(false), 3000);
    }
  }, [interactionCount]);

  // Mouse parallax effect for particles
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2
      });
      
      // Update cursor position for custom cursor
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [cursorX, cursorY]);
  
  // Toggle audio function
  const toggleAudio = () => {
    if (audioRef.current) {
      if (audioEnabled) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.error("Audio playback failed:", e));
      }
      setAudioEnabled(!audioEnabled);
    }
    
    // Increment interaction count for achievement system
    setInteractionCount(prev => prev + 1);
  };
  
  // Handle feature click
  const handleFeatureClick = (index: number) => {
    setActiveFeature(index);
    setInteractionCount(prev => prev + 1);
  };

  // Only render client-side content after hydration
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // If not mounted yet, render a simple loading state that matches the server render
  if (!isMounted) {
    return (
      <div ref={containerRef} className="relative min-h-screen bg-black text-white overflow-hidden">
        <div className="fixed inset-0 z-0 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="absolute inset-0 opacity-20">
            <div className="h-full w-full bg-[linear-gradient(to_right,#4f4f4f20_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f20_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          </div>
        </div>
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center">
          <div className="text-2xl">Loading AR Experience...</div>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative min-h-screen bg-black text-white overflow-hidden cursor-none">
      {/* Custom cursor */}
      <motion.div 
        className="fixed w-8 h-8 rounded-full border-2 border-red-500 pointer-events-none z-50 mix-blend-difference"
        style={{ 
          left: springX, 
          top: springY,
          translateX: "-50%",
          translateY: "-50%"
        }}
      />
      <motion.div 
        className="fixed w-2 h-2 rounded-full bg-red-500 pointer-events-none z-50"
        style={{ 
          left: cursorX, 
          top: cursorY,
          translateX: "-50%",
          translateY: "-50%"
        }}
      />
      
      {/* Achievement notification */}
      <AnimatePresence>
        {showAchievement && (
          <motion.div 
            className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 bg-gradient-to-r from-red-600 to-purple-600 px-6 py-3 rounded-full shadow-lg"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
          >
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🏆</span>
              <div>
                <p className="font-bold">Achievement Unlocked!</p>
                <p className="text-sm">Explorer: Interacted 5 times</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background with gradient and parallax effect */}
      <motion.div 
        className="fixed inset-0 z-0 bg-gradient-to-br from-black via-gray-900 to-black"
        style={{
          scale: bgScale,
          filter: `blur(${bgBlur.get()}px)`
        }}
      >
        {/* Animated grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full bg-[linear-gradient(to_right,#4f4f4f20_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f20_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>
        
        {/* 3D Floating objects */}
        <div className="absolute inset-0 overflow-hidden perspective-1000">
          {randomValues.map((obj, i) => (
            <motion.div
              key={`object-${i}`}
              className="absolute opacity-20"
              style={{
                width: obj.size,
                height: obj.size,
                left: `${obj.x}%`,
                top: `${obj.y}%`,
                translateZ: obj.z,
                rotateX: obj.rotateX,
                rotateY: obj.rotateY,
                rotateZ: obj.rotateZ,
              }}
              animate={{
                rotateX: [obj.rotateX, obj.rotateX + 360],
                rotateY: [obj.rotateY, obj.rotateY + 360],
                rotateZ: [obj.rotateZ, obj.rotateZ + 360],
              }}
              transition={{
                duration: obj.duration,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <div className={`w-full h-full border-2 border-red-500 ${obj.isRounded ? 'rounded-full' : 'rounded-lg'}`} />
            </motion.div>
          ))}
        </div>
        
        {/* Animated particles with parallax effect */}
        <div className="absolute inset-0 overflow-hidden">
          {particleValues.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: particle.size,
                height: particle.size,
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                background: `radial-gradient(circle at center, rgba(255,0,0,${0.3 * particle.depth}), transparent 70%)`,
                x: mousePosition.x * 30 * particle.depth,
                y: mousePosition.y * 30 * particle.depth,
              }}
              animate={{
                y: [0, particle.animY],
                x: [0, particle.animX],
                opacity: [0.2 * particle.depth, 0.8 * particle.depth, 0.2 * particle.depth],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              whileHover={{
                scale: 1.5,
                opacity: 1,
              }}
            />
          ))}
        </div>
        
        {/* Animated lens flare effect */}
        <motion.div 
          className="absolute w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at center, rgba(255,0,0,0.8), transparent 70%)',
            left: `calc(${mousePosition.x * 50 + 50}% - 250px)`,
            top: `calc(${mousePosition.y * 50 + 30}% - 250px)`,
            filter: 'blur(40px)'
          }}
        />
      </motion.div>

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="p-6 flex justify-between items-center">
          <Link href="/" className="text-white hover:text-red-500 transition-colors">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <svg width="30" height="30" viewBox="0 0 30 30" className="mr-2">
                <circle cx="15" cy="15" r="10" fill="none" stroke="#FF0000" strokeWidth="2"/>
              </svg>
              <span className="font-bold text-xl">OCCOTO</span>
            </motion.div>
          </Link>
          
          <div className="flex items-center space-x-4">
            {/* Audio toggle button */}
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, type: "spring" }}
              onClick={toggleAudio}
              className="relative w-12 h-12 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                {audioEnabled ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <line x1="23" y1="9" x2="17" y2="15" />
                    <line x1="17" y1="9" x2="23" y2="15" />
                  </svg>
                )}
              </div>
              <motion.div 
                className="absolute inset-0 rounded-full"
                animate={{ 
                  boxShadow: audioEnabled 
                    ? ['0 0 0px rgba(255,0,0,0)', '0 0 20px rgba(255,0,0,0.5)', '0 0 0px rgba(255,0,0,0)'] 
                    : ['0 0 0px rgba(255,0,0,0)']
                }}
                transition={{ duration: 2, repeat: audioEnabled ? Infinity : 0 }}
              />
            </motion.button>
            
            {/* AR Glasses Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="relative w-12 h-12"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
                  <path d="M2 10C2 6.68629 4.68629 4 8 4H16C19.3137 4 22 6.68629 22 10V14C22 17.3137 19.3137 20 16 20H8C4.68629 20 2 17.3137 2 14V10Z" stroke="#FF0000" strokeWidth="2"/>
                  <circle cx="8" cy="12" r="3" stroke="#FF0000" strokeWidth="2"/>
                  <circle cx="16" cy="12" r="3" stroke="#FF0000" strokeWidth="2"/>
                </svg>
              </div>
              <motion.div 
                className="absolute inset-0 rounded-full"
                animate={{ 
                  boxShadow: ['0 0 0px rgba(255,0,0,0)', '0 0 20px rgba(255,0,0,0.5)', '0 0 0px rgba(255,0,0,0)'] 
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </header>

        {/* Hero Section */}
        <motion.div 
          className="flex-grow flex flex-col items-center justify-center p-6 text-center"
          style={{ opacity: titleOpacity, y: titleY }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-purple-500 to-blue-500"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.8 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              The Future of AR Vision
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-12 text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: isLoaded ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Explore the cutting-edge of augmented reality technology that's transforming how we see and interact with the world around us.
            </motion.p>
            
            {/* Animated Feature Showcase */}
            <div className="relative h-[400px] mb-12 perspective-1000">
              <AnimatePresence mode="wait">
                {features.map((feature, index) => (
                  activeFeature === index && (
                    <motion.div
                      key={feature.title}
                      className={`absolute inset-0 flex flex-col items-center justify-center p-8 rounded-2xl bg-gradient-to-br ${feature.color} bg-opacity-10 backdrop-blur-sm border border-gray-800`}
                      initial={{ opacity: 0, rotateY: -90 }}
                      animate={{ opacity: 1, rotateY: 0 }}
                      exit={{ opacity: 0, rotateY: 90 }}
                      transition={{ duration: 0.5 }}
                      style={{ transformStyle: "preserve-3d" }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <motion.div 
                        className="text-6xl mb-6"
                        animate={{ 
                          scale: [1, 1.2, 1],
                          rotate: [0, 5, -5, 0],
                          y: [0, -10, 0]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        {feature.icon}
                      </motion.div>
                      <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                      <p className="text-lg text-gray-200 max-w-md">{feature.description}</p>
                      
                      {/* Interactive element */}
                      <motion.button
                        className="mt-6 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setInteractionCount(prev => prev + 1)}
                      >
                        Learn more
                      </motion.button>
                    </motion.div>
                  )
                ))}
              </AnimatePresence>
              
              {/* Feature Navigation Dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {features.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleFeatureClick(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${activeFeature === index ? 'bg-red-500 scale-125' : 'bg-gray-500 opacity-50'}`}
                    aria-label={`View feature ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/contact"
                className="inline-block bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-red-500/20"
              >
                Explore AR Solutions
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-red-500 rounded-full flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <motion.div 
              className="w-1 h-2 bg-red-500 rounded-full mt-2"
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
        
        {/* Footer */}
        <footer className="p-6 text-center text-gray-500">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            © {new Date().getFullYear()} OCCOTO. All rights reserved.
          </motion.p>
        </footer>
      </div>
    </div>
  );
} 