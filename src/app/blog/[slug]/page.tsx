'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

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
    content: `
      Quantum-enhanced AI represents a revolutionary leap in computational capabilities, combining the principles of quantum mechanics with artificial intelligence to solve complex problems that were previously intractable. This groundbreaking technology leverages quantum superposition and entanglement to process vast amounts of data simultaneously, enabling AI systems to tackle challenges in optimization, machine learning, and pattern recognition with unprecedented efficiency.

      Key Innovations:
      • Quantum Neural Networks
      • Quantum Machine Learning Algorithms
      • Quantum-Enhanced Data Processing
      • Hybrid Classical-Quantum Systems

      The integration of quantum computing with AI is particularly promising in fields such as:
      1. Drug Discovery and Development
      2. Climate Modeling and Prediction
      3. Financial Market Analysis
      4. Cryptography and Security
      
      As we continue to advance in this field, we're witnessing the emergence of more sophisticated quantum AI applications that are reshaping our understanding of what's computationally possible.
    `,
    tags: ["Quantum AI", "Machine Learning", "Future Tech"],
    gradient: "from-blue-600/20 via-purple-600/20 to-red-600/20"
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
    content: `
      The convergence of Brain-Computer Interfaces (BCIs) and Augmented Reality represents a paradigm shift in how humans interact with digital information. This groundbreaking integration allows users to control and manipulate AR environments directly through neural signals, creating an unprecedented level of immersion and natural interaction.

      Key Technologies:
      • Neural Signal Processing
      • Real-time Brain Activity Mapping
      • AR Environmental Understanding
      • Neural Feedback Systems

      Applications in Development:
      1. Medical Rehabilitation and Training
      2. Enhanced Learning Environments
      3. Intuitive Industrial Controls
      4. Accessibility Solutions

      The potential impact of Neural-AR extends beyond entertainment, offering transformative solutions in healthcare, education, and professional training. As the technology matures, we're seeing increased precision in neural signal interpretation and more sophisticated AR rendering capabilities.
    `,
    tags: ["Neural Interface", "AR", "Innovation"],
    gradient: "from-emerald-600/20 via-teal-600/20 to-blue-600/20"
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
    content: `
      Emotional AI in virtual environments marks a revolutionary step in human-computer interaction, enabling digital spaces that can understand, respond to, and adapt based on users' emotional states. This technology combines advanced emotion recognition algorithms with responsive virtual environments to create deeply personalized and emotionally aware experiences.

      Core Components:
      • Facial Expression Analysis
      • Voice Tone Recognition
      • Physiological Signal Processing
      • Contextual Emotion Mapping

      Implementation Areas:
      1. Mental Health Support
      2. Educational Environments
      3. Customer Experience
      4. Social VR Platforms

      The integration of emotional intelligence in virtual spaces is transforming how we interact with digital environments, making them more human-centric and emotionally responsive. This technology has particular promise in therapeutic applications and social connectivity platforms.
    `,
    tags: ["Emotional AI", "Virtual Reality", "UX"],
    gradient: "from-violet-600/20 via-purple-600/20 to-pink-600/20"
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
    content: `
      The AR Cloud represents the next major evolution in digital infrastructure, creating a persistent, shared spatial computing platform that overlays our physical world. This technology enables collaborative AR experiences and creates a digital twin of our environment that can be accessed and modified by users globally.

      Technical Foundation:
      • Spatial Mapping
      • Cloud-based Persistence
      • Real-time Synchronization
      • Multi-user Interaction Systems

      Key Applications:
      1. Urban Planning and Development
      2. Global Collaboration Platforms
      3. Location-based Services
      4. Interactive City Experiences

      As AR Cloud technology continues to evolve, we're seeing the emergence of more sophisticated applications that blend the physical and digital worlds in ways previously only imagined in science fiction. The implications for business, education, and social interaction are profound.
    `,
    tags: ["AR Cloud", "Digital Twin", "Infrastructure"],
    gradient: "from-cyan-600/20 via-blue-600/20 to-indigo-600/20"
  }
];

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link href="/blog">
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
              Back to Blog
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/60 to-gray-900"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center"
        >
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center space-x-4 mb-6"
            >
              <span className="px-3 py-1 bg-blue-600/30 backdrop-blur-sm rounded-full text-sm font-semibold text-blue-300 border border-blue-500/30">
                {post.category}
              </span>
              <span className="text-gray-400">{post.date}</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              {post.title}
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center space-x-4"
            >
              <div>
                <p className="font-semibold text-white">{post.author}</p>
                <p className="text-gray-400">{post.authorTitle}</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="prose prose-lg prose-invert"
            >
              {post.content.split('\n').map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="mb-6 text-gray-300"
                >
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12 flex flex-wrap gap-2"
            >
              {post.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-gray-800/50 rounded-full text-sm text-gray-300"
                >
                  #{tag}
                </span>
              ))}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-12"
            >
              <Link href="/blog">
                <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                  Back to Blog
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
} 