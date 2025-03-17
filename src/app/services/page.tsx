'use client';

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

const services = [
  {
    id: 1,
    title: "AI Development",
    description: "Cutting-edge artificial intelligence solutions that adapt and evolve. From machine learning to neural networks, we're pushing the boundaries of what's possible.",
    image: "/services/ai-development.webp",
    features: ["Machine Learning", "Neural Networks", "Natural Language Processing", "Computer Vision"],
    gradient: "from-blue-600/20 via-purple-600/20 to-red-600/20"
  },
  {
    id: 2,
    title: "AR Solutions",
    description: "Immersive augmented reality experiences that transform how users interact with the world. Bridging the digital and physical realms.",
    image: "/services/ar-solutions.webp",
    features: ["3D Visualization", "Interactive Environments", "Spatial Computing", "Real-time Tracking"],
    gradient: "from-emerald-600/20 via-teal-600/20 to-blue-600/20"
  },
  {
    id: 3,
    title: "AI Chatbot Solutions",
    description: "Intelligent conversational agents powered by advanced NLP and machine learning. Creating engaging and helpful digital assistants.",
    image: "/services/chatbot.webp",
    features: ["Natural Language Understanding", "Context Awareness", "Multi-language Support", "Custom Training"],
    gradient: "from-violet-600/20 via-purple-600/20 to-pink-600/20"
  },
  {
    id: 4,
    title: "Computer Vision",
    description: "Advanced image and video processing solutions using state-of-the-art computer vision algorithms and deep learning models.",
    image: "/services/computer-vision.webp",
    features: ["Object Detection", "Face Recognition", "Scene Understanding", "Real-time Processing"],
    gradient: "from-cyan-600/20 via-blue-600/20 to-indigo-600/20"
  },
  {
    id: 5,
    title: "Full Stack Development",
    description: "Modern web and mobile applications built with the latest technologies. Seamless, responsive, and scalable solutions for your business.",
    image: "/services/fullstack.webp",
    features: ["Web Applications", "Mobile Apps", "Cloud Solutions", "API Development"],
    gradient: "from-orange-600/20 via-red-600/20 to-purple-600/20"
  },
  {
    id: 6,
    title: "IoT Integration",
    description: "Connecting the physical and digital worlds through smart IoT solutions. Creating intelligent environments and data-driven systems.",
    image: "/services/iot.webp",
    features: ["Sensor Networks", "Real-time Monitoring", "Smart Automation", "Data Analytics"],
    gradient: "from-green-600/20 via-emerald-600/20 to-teal-600/20"
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/services/hero-bg.webp"
            alt="Services Hero"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/60 to-gray-900"></div>
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
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-red-500"
          >
            Our Services
          </motion.h1>
          <motion.p 
            variants={fadeIn}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl"
          >
            Transforming ideas into reality through cutting-edge technology
          </motion.p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
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
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-60`}></div>
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/30 rounded-3xl overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="relative h-[400px] md:h-auto">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/40 to-transparent"></div>
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 mb-6">
                        {service.description}
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        {service.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center space-x-2"
                          >
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span className="text-sm text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-8 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                      >
                        Learn More
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