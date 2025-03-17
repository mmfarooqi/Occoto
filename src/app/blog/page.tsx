'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

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

const blogPosts = [
  {
    id: 1,
    slug: 'quantum-enhanced-ai',
    title: "The Rise of Quantum-Enhanced AI: Breaking Computational Boundaries",
    category: "Artificial Intelligence",
    date: "2025",
    author: "M Shariq Ayaz",
    authorTitle: "AI Development Expert",
    image: "/blog/quantum-ai.webp",
    description: "Explore how quantum computing is revolutionizing AI capabilities, enabling unprecedented problem-solving abilities and opening new frontiers in machine learning.",
    tags: ["Quantum AI", "Machine Learning", "Future Tech"],
    gradient: "from-blue-600/20 via-purple-600/20 to-red-600/20",
    readTime: "8 min read"
  },
  {
    id: 2,
    slug: 'neural-ar-convergence',
    title: "Neural-AR: The Convergence of Brain-Computer Interfaces and Augmented Reality",
    category: "AR Technology",
    date: "2025",
    author: "Mr M Farooqi",
    authorTitle: "CEO & Innovation Architect",
    image: "/blog/neural-ar.webp",
    description: "Discover how brain-computer interfaces are merging with AR technology to create immersive experiences controlled directly by neural signals.",
    tags: ["Neural Interface", "AR", "Innovation"],
    gradient: "from-emerald-600/20 via-teal-600/20 to-blue-600/20",
    readTime: "10 min read"
  },
  {
    id: 3,
    slug: 'emotional-ai-virtual-environments',
    title: "AI-Driven Emotional Intelligence in Virtual Environments",
    category: "AI & AR",
    date: "2025",
    author: "Ismat Fayyaz",
    authorTitle: "Creative Director & Digital Innovator",
    image: "/blog/emotional-ai.webp",
    description: "How AI is evolving to understand and respond to human emotions in virtual and augmented reality spaces, creating more meaningful digital interactions.",
    tags: ["Emotional AI", "Virtual Reality", "UX"],
    gradient: "from-violet-600/20 via-purple-600/20 to-pink-600/20",
    readTime: "7 min read"
  },
  {
    id: 4,
    slug: 'ar-cloud-future',
    title: "The Future of AR Cloud: Building the Digital Twin of Our World",
    category: "AR Infrastructure",
    date: "2025",
    author: "A Basit",
    authorTitle: "Full Stack Developer",
    image: "/blog/ar-cloud.webp",
    description: "Exploring the development of AR Cloud infrastructure that will enable persistent, shared AR experiences across the globe.",
    tags: ["AR Cloud", "Digital Twin", "Infrastructure"],
    gradient: "from-cyan-600/20 via-blue-600/20 to-indigo-600/20",
    readTime: "9 min read"
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/blog/hero-bg.webp"
            alt="Blog Hero"
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
            Future Tech Insights
          </motion.h1>
          <motion.p 
            variants={fadeIn}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl"
          >
            Exploring the cutting edge of AI and AR technology
          </motion.p>
        </motion.div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
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
                <div className={`absolute inset-0 bg-gradient-to-r ${post.gradient} rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-60`}></div>
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/30 rounded-3xl overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="relative h-[400px] md:h-auto">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/40 to-transparent"></div>
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="px-3 py-1 bg-blue-600/30 backdrop-blur-sm rounded-full text-xs font-semibold text-blue-300 border border-blue-500/30">
                          {post.category}
                        </span>
                        <span className="text-gray-400 text-sm">{post.readTime}</span>
                      </div>
                      
                      <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-6">
                        {post.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {post.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-800/50 rounded-full text-xs text-gray-300"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="text-sm">
                            <p className="font-semibold text-white">{post.author}</p>
                            <p className="text-gray-400">{post.authorTitle}</p>
                          </div>
                        </div>
                        <Link href={`/blog/${post.slug}`}>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                          >
                            Read More
                          </motion.button>
                        </Link>
                      </div>
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