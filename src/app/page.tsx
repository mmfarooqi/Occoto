'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export default function Home() {
  const ref = useRef(null);
  
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    }),
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Parallax */}
      <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ 
            backgroundImage: 'linear-gradient(to right bottom, rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url(/grid.svg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        {/* Floating Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-red-500/10"
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 30 - 15],
                x: [0, Math.random() * 30 - 15],
                scale: [1, Math.random() * 0.3 + 0.8, 1],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 flex flex-col items-center text-center z-10">
          <motion.div 
            className="mb-8 w-[250px] h-[70px] relative"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 20,
              delay: 0.2
            }}
          >
            <Image
              src="/logo.svg"
              alt="OCCOTO Logo"
              fill
              priority
              className="object-contain"
            />
          </motion.div>
          
          {/* Animated Text with Staggered Reveal */}
          <div className="overflow-hidden">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Empowering the Future of{" "}
              <motion.span 
                className="text-red-600 inline-block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 1.3,
                  type: "spring",
                  stiffness: 100
                }}
              >
                IT Solutions
              </motion.span>
            </motion.h1>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="text-xl text-gray-600 mb-10 max-w-2xl"
          >
            We provide cutting-edge IT consulting, software development, cloud solutions, and cybersecurity services.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <motion.a 
              href="/contact" 
              className="px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.a>
            <motion.a 
              href="/services" 
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.a>
          </motion.div>
          
          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 1 }}
          >
            <motion.div
              className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <motion.div 
                className="w-1 h-2 bg-gray-400 rounded-full mt-2"
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section with Staggered Animation */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "IT Consulting",
                description: "Strategic technology planning and digital transformation guidance for your business."
              },
              {
                title: "Software Development",
                description: "Custom software solutions tailored to your specific business needs and challenges."
              },
              {
                title: "Cloud Solutions",
                description: "Secure and scalable cloud infrastructure to optimize your operations."
              },
              {
                title: "Cybersecurity",
                description: "Comprehensive security solutions to protect your valuable data and systems."
              },
              {
                title: "Data Analytics",
                description: "Turn your data into actionable insights with our advanced analytics solutions."
              },
              {
                title: "IT Support",
                description: "24/7 technical support to ensure your systems run smoothly and efficiently."
              }
            ].map((service, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={index}
              >
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section with Reveal Animation */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Why Choose Us
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Expertise",
                description: "Our team consists of highly skilled professionals with years of industry experience."
              },
              {
                title: "Innovation",
                description: "We stay at the forefront of technology to deliver cutting-edge solutions."
              },
              {
                title: "Reliability",
                description: "Count on us for dependable service and consistent results."
              },
              {
                title: "Customer Focus",
                description: "Your success is our priority, and we're committed to exceeding your expectations."
              }
            ].map((reason, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <motion.h3 
                  className="text-xl font-semibold mb-3"
                  whileHover={{ scale: 1.05, color: "#ef4444" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {reason.title}
                </motion.h3>
                <p className="text-gray-600">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 