'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const teamMembers = [
  {
    id: 1,
    name: "Mr M Farooqi",
    role: "CEO & Innovation Architect",
    specialties: ["Tech Visionary", "AI/AR Pioneer", "Strategic Innovation", "Digital Transformation"],
    description: "Known as the 'Digital Oracle' for his uncanny ability to predict and shape technological trends. Leading OCCOTO&apos;s vision of merging AI and AR to create groundbreaking solutions.",
    image: "/team/ceo.svg",
    gradient: "from-red-600/20 to-purple-600/20"
  },
  {
    id: 2,
    name: "M Shariq Ayaz",
    role: "Software Engineer & System Analyst",
    specialties: ["AI Development Expert", "System Architecture", "Innovation Lead"],
    description: "Known as the 'AI Cheetah' for his lightning-fast problem-solving abilities and cutting-edge AI implementations. Transforming complex system challenges into elegant, future-proof solutions.",
    image: "/team/engineer.svg",
    gradient: "from-blue-600/20 to-red-600/20"
  },
  {
    id: 3,
    name: "Ismat Fayyaz",
    role: "Creative Director & Digital Innovator",
    specialties: ["UX/UI Mastery", "Digital Experience Design", "Brand Architecture", "Innovation Strategy"],
    description: "The 'Experience Alchemist' transforming complex technical concepts into intuitive, engaging user experiences. Pioneering the fusion of design thinking with emerging technologies.",
    image: "/team/designer.svg",
    gradient: "from-purple-600/20 to-pink-600/20"
  },
  {
    id: 4,
    name: "A Basit",
    role: "Full Stack Developer",
    specialties: ["Mobile Applications", "AI/AR Development", "Web Graphics"],
    description: "The 'AI AR Tiger' mastering full-stack development with a focus on immersive technologies.",
    image: "/team/developer.svg",
    gradient: "from-green-600/20 to-blue-600/20"
  }
];

const techJourney = [
  {
    year: 2023,
    title: "AR Revolution",
    description: "Pioneering augmented reality solutions that transform how we interact with the digital world.",
    icon: "🔮"
  },
  {
    year: 2024,
    title: "AI Integration",
    description: "Developing cutting-edge AI systems that adapt and learn in real-time.",
    icon: "🧠"
  },
  {
    year: 2025,
    title: "Future Vision",
    description: "Leading the convergence of AI and AR technologies to shape tomorrow's digital landscape.",
    icon: "🚀"
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Hero Section with Parallax */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-30"></div>
        </div>
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center"
        >
          <motion.h1 
            variants={fadeIn}
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-300"
          >
            Pioneering Tomorrow's Technology
          </motion.h1>
          <motion.p 
            variants={fadeIn}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-8"
          >
            At OCCOTO, we're not just keeping pace with the future—we're creating it.
          </motion.p>
        </motion.div>
      </section>

      {/* Journey Timeline Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeIn}
              className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-red-500"
            >
              Our Technological Journey
            </motion.h2>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {techJourney.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: {
                      duration: 0.6,
                      delay: index * 0.2
                    }
                  }
                }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/30 p-8 rounded-2xl hover:scale-105 transition-all duration-300">
                  <div className="text-6xl mb-4">{milestone.icon}</div>
                  <div className="text-3xl font-bold text-white mb-2">{milestone.year}</div>
                  <div className="text-xl font-semibold text-purple-400 mb-3">{milestone.title}</div>
                  <p className="text-gray-300">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeIn} className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision for 2025</h2>
              <p className="text-gray-300">
                As we advance towards 2025, we're at the forefront of AI and AR convergence. 
                Our mission is to create intelligent systems that seamlessly blend digital and physical realities, 
                pushing the boundaries of what's possible in human-computer interaction.
              </p>
              <div className="flex gap-4 mt-8">
                <div className="flex items-center space-x-2">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
                    <span className="text-2xl">AR</span>
                  </div>
                  <span className="text-sm">AR Innovation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-600 to-purple-600 flex items-center justify-center">
                    <span className="text-2xl">AI</span>
                  </div>
                  <span className="text-sm">AI Excellence</span>
                </div>
              </div>
            </motion.div>
            <motion.div 
              variants={fadeIn}
              className="relative h-[400px] rounded-2xl overflow-hidden glassmorphism"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent"></div>
              <div className="absolute inset-0 backdrop-blur-sm"></div>
              <div className="relative z-10 p-8 h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">Core Values</h3>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Innovation at Heart</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Client-Centric Approach</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Technical Excellence</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team Section - Updated */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/circuit.svg')] opacity-5"></div>
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold mb-6">
              Meet Our Visionaries
            </motion.h2>
            <motion.p variants={fadeIn} className="text-gray-300 max-w-2xl mx-auto">
              Our leadership team brings together decades of expertise in technology innovation,
              each contributing unique perspectives to drive our mission forward.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                variants={fadeIn}
                className="relative group"
              >
                <div className={`relative h-[400px] rounded-2xl overflow-hidden glassmorphism-card bg-gray-900/50 backdrop-blur-sm border border-gray-700/30 group-hover:scale-105 transition-all duration-300 shadow-xl group-hover:shadow-2xl`}>
                  <div className="absolute inset-0">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-t ${member.gradient} opacity-60 group-hover:opacity-70 transition-opacity duration-300`}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
                  
                  <div className="relative h-full flex flex-col justify-end p-6 text-left">
                    <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-red-300 transition-colors duration-300">{member.name}</h3>
                    <div className="text-red-400 font-semibold mb-4 text-sm uppercase tracking-wider">{member.role}</div>
                    
                    <div className="space-y-2 mb-4">
                      {member.specialties.map((specialty, index) => (
                        <div key={index} className="flex items-center space-x-2 text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                          <span className="group-hover:text-white transition-colors duration-300">{specialty}</span>
                        </div>
                      ))}
                    </div>
                    
                    <p className="text-sm text-gray-400 line-clamp-3 group-hover:line-clamp-none transition-all duration-300 group-hover:text-gray-300">
                      {member.description}
                    </p>
                  </div>

                  <div className="absolute top-4 right-4 flex space-x-2">
                    {member.id === 1 && (
                      <span className="px-3 py-1 bg-purple-600/30 backdrop-blur-sm rounded-full text-xs font-semibold text-purple-300 border border-purple-500/30">
                        Digital Oracle
                      </span>
                    )}
                    {member.id === 2 && (
                      <span className="px-3 py-1 bg-red-600/30 backdrop-blur-sm rounded-full text-xs font-semibold text-red-300 border border-red-500/30">
                        AI Cheetah
                      </span>
                    )}
                    {member.id === 3 && (
                      <span className="px-3 py-1 bg-pink-600/30 backdrop-blur-sm rounded-full text-xs font-semibold text-pink-300 border border-pink-500/30">
                        Experience Alchemist
                      </span>
                    )}
                    {member.id === 4 && (
                      <span className="px-3 py-1 bg-blue-600/30 backdrop-blur-sm rounded-full text-xs font-semibold text-blue-300 border border-blue-500/30">
                        AI AR Tiger
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
} 