'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const techProjects = [
  {
    id: 1,
    title: "SmartCity AR Navigation",
    category: "Augmented Reality",
    image: "https://placehold.co/600x400/1a365d/ffffff?text=SmartCity+AR",
    description: "An AR-powered navigation system that overlays real-time directions, points of interest, and urban information directly onto the user's view of the city.",
    technologies: ["React Native", "ARKit", "Node.js", "MongoDB"],
    stats: {
      users: "50K+",
      cities: "12",
      rating: "4.8"
    },
    gradient: "from-emerald-600/20 via-teal-600/20 to-cyan-600/20",
    demoLink: "#",
    year: "2024"
  },
  {
    id: 2,
    title: "AI Health Assistant",
    category: "Artificial Intelligence",
    image: "https://placehold.co/600x400/1a365d/ffffff?text=Health+AI",
    description: "An AI-powered health monitoring system that uses computer vision and machine learning to track vital signs and provide real-time health insights.",
    technologies: ["Python", "TensorFlow", "OpenCV", "Flask"],
    stats: {
      accuracy: "99.2%",
      parameters: "1.2B",
      hospitals: "15"
    },
    gradient: "from-blue-600/20 via-indigo-600/20 to-purple-600/20",
    demoLink: "#",
    year: "2024"
  },
  {
    id: 3,
    title: "Virtual Classroom VR",
    category: "Virtual Reality",
    image: "https://placehold.co/600x400/1a365d/ffffff?text=VR+Classroom",
    description: "A VR-based educational platform that creates immersive learning environments with interactive 3D models and real-time collaboration features.",
    technologies: ["Unity", "C#", "WebXR", "Firebase"],
    stats: {
      students: "25K+",
      courses: "150+",
      institutions: "30"
    },
    gradient: "from-purple-600/20 via-pink-600/20 to-rose-600/20",
    demoLink: "#",
    year: "2025"
  },
  {
    id: 4,
    title: "EcoSense IoT Platform",
    category: "IoT & Analytics",
    image: "https://placehold.co/600x400/1a365d/ffffff?text=EcoSense",
    description: "An IoT platform for environmental monitoring that uses AI to analyze data from distributed sensors and provide predictive insights.",
    technologies: ["Next.js", "Python", "AWS", "TensorFlow"],
    stats: {
      sensors: "1000+",
      locations: "45",
      accuracy: "97%"
    },
    gradient: "from-green-600/20 via-emerald-600/20 to-teal-600/20",
    demoLink: "#",
    year: "2025"
  }
];

const clientProjects = [
  {
    id: 5,
    title: "D&M Builders Website",
    category: "Web Development",
    image: "https://placehold.co/600x400/1a365d/ffffff?text=D%26M+Builders",
    description: "A modern, responsive website for D&M Builders showcasing their construction projects and services.",
    technologies: ["Next.js", "TailwindCSS", "Framer Motion"],
    client: "D&M Builders",
    year: "2024"
  },
  {
    id: 6,
    title: "Saphire Parking Management System",
    category: "Enterprise Software",
    image: "https://placehold.co/600x400/1a365d/ffffff?text=Saphire+Parking",
    description: "Professional parking management system with real-time monitoring and automated billing.",
    technologies: ["React", "Node.js", "PostgreSQL"],
    client: "Saphire Parking",
    year: "2024"
  },
  {
    id: 7,
    title: "Stayeasy Booking Platform",
    category: "Web Application",
    image: "https://placehold.co/600x400/1a365d/ffffff?text=Stayeasy",
    description: "Online booking and management platform for hospitality services.",
    technologies: ["Vue.js", "Express", "MongoDB"],
    client: "Stayeasy",
    year: "2024"
  },
  {
    id: 8,
    title: "Cybernet-G E-commerce",
    category: "E-commerce",
    image: "https://placehold.co/600x400/1a365d/ffffff?text=Cybernet-G",
    description: "Feature-rich e-commerce platform for computer parts and networking equipment.",
    technologies: ["Next.js", "Stripe", "PostgreSQL"],
    client: "Cybernet-G",
    year: "2024"
  }
];

const clients = [
  {
    id: 1,
    name: "D&M Builders",
    logo: "/clients/dnm.svg",
    category: "Construction"
  },
  {
    id: 2,
    name: "Saphire Parking",
    logo: "https://placehold.co/200x200/1a365d/ffffff?text=Saphire",
    category: "Parking Solutions"
  },
  {
    id: 3,
    name: "Cybernet-G",
    logo: "https://placehold.co/200x200/1a365d/ffffff?text=Cybernet-G",
    category: "Technology"
  },
  {
    id: 4,
    name: "Stayeasy",
    logo: "https://placehold.co/200x200/1a365d/ffffff?text=Stayeasy",
    category: "Hospitality"
  },
  {
    id: 5,
    name: "Anwar Baloch",
    logo: "https://placehold.co/200x200/1a365d/ffffff?text=Anwar+Baloch",
    category: "Restaurant"
  },
  {
    id: 6,
    name: "Hassan Zandari",
    logo: "https://placehold.co/200x200/1a365d/ffffff?text=Hassan+Zandari",
    category: "Food & Beverage"
  },
  {
    id: 7,
    name: "Sym Tobacco",
    logo: "https://placehold.co/200x200/1a365d/ffffff?text=Sym+Tobacco",
    category: "Tobacco"
  },
  {
    id: 8,
    name: "Al Haaj Bundoo Khan",
    logo: "https://placehold.co/200x200/1a365d/ffffff?text=Bundoo+Khan",
    category: "Restaurant"
  },
  {
    id: 9,
    name: "Wali Muhammad & Co.",
    logo: "https://placehold.co/200x200/1a365d/ffffff?text=Wali+Muhammad",
    category: "Business"
  },
  {
    id: 10,
    name: "Talha Fast Foods",
    logo: "https://placehold.co/200x200/1a365d/ffffff?text=Talha+Foods",
    category: "Restaurant"
  },
  {
    id: 11,
    name: "Naila Mughal",
    logo: "https://placehold.co/200x200/1a365d/ffffff?text=Naila+Mughal",
    category: "Entertainment"
  },
  {
    id: 12,
    name: "KO Logistic",
    logo: "https://placehold.co/200x200/1a365d/ffffff?text=KO+Logistic",
    category: "Logistics"
  }
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/60 to-gray-900"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-30"></div>
        </div>
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center"
        >
          <motion.h1 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          >
            Our Portfolio
          </motion.h1>
          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl"
          >
            Delivering innovative solutions across industries
          </motion.p>
        </motion.div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
          >
            Trusted by Industry Leaders
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={client.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-60"></div>
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/30 rounded-xl p-6 flex flex-col items-center justify-center text-center">
                  <div className="w-24 h-24 relative mb-4">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      className="object-contain"
                      unoptimized={client.logo.startsWith('https://')}
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-200">{client.name}</h3>
                  <p className="text-xs text-gray-400 mt-1">{client.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
          >
            Innovation Projects
          </motion.h2>

          <div className="grid grid-cols-1 gap-12">
            {techProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
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
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-60`}></div>
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/30 rounded-3xl overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="relative h-[400px] md:h-auto">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        unoptimized={project.image.startsWith('https://')}
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/40 to-transparent"></div>
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="px-3 py-1 bg-blue-600/30 backdrop-blur-sm rounded-full text-xs font-semibold text-blue-300 border border-blue-500/30">
                          {project.category}
                        </span>
                        <span className="text-gray-400 text-sm">{project.year}</span>
                      </div>
                      
                      <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-6">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-800/50 rounded-full text-xs text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="grid grid-cols-3 gap-4 mb-6">
                        {Object.entries(project.stats).map(([key, value], idx) => (
                          <div key={idx} className="text-center p-3 bg-gray-800/30 rounded-xl">
                            <div className="text-xl font-bold text-blue-400">{value}</div>
                            <div className="text-xs text-gray-400 capitalize">{key}</div>
                          </div>
                        ))}
                      </div>
                      
                      <motion.a
                        href={project.demoLink}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center"
                      >
                        View Project
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Projects Section */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
          >
            Client Success Stories
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {clientProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-60"></div>
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/30 rounded-xl overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      unoptimized={project.image.startsWith('https://')}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-blue-600/30 backdrop-blur-sm rounded-full text-xs font-semibold text-blue-300 border border-blue-500/30">
                        {project.category}
                      </span>
                      <span className="text-gray-400 text-sm">{project.year}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 text-gray-100">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-800/50 rounded-full text-xs text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Client: {project.client}</span>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white text-sm font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                      >
                        View Details
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 