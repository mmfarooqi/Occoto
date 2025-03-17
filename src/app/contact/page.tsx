'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiMapPin, FiPhone, FiClock, FiMail, FiSend } from 'react-icons/fi';
import { FaWhatsapp, FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';

const services = [
  "AI Development",
  "AR/VR Solutions",
  "IoT Integration",
  "Web Development",
  "Mobile Apps",
  "Enterprise Software",
  "UI/UX Design",
  "Cloud Solutions"
];

const contactInfo = [
  {
    icon: FiMapPin,
    title: "Visit Us",
    details: [
      "Office A-28, Salman Tower",
      "Near Malir Court, Karachi",
      "Pakistan"
    ]
  },
  {
    icon: FiPhone,
    title: "Call Us",
    details: [
      "+92 342 2770074",
      "+92 340 2346743"
    ]
  },
  {
    icon: FiMail,
    title: "Email Us",
    details: [
      "info@occoto.com",
      "support@occoto.com"
    ]
  },
  {
    icon: FiClock,
    title: "Working Hours",
    details: [
      "Mon - Fri: 9:00 AM - 6:00 PM",
      "Sat: 10:00 AM - 2:00 PM"
    ]
  }
];

const socialLinks = [
  {
    icon: FaFacebookF,
    label: "Facebook",
    href: "https://facebook.com/occoto",
    color: "from-blue-600 to-blue-400"
  },
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    href: "https://linkedin.com/company/occoto",
    color: "from-blue-700 to-blue-500"
  },
  {
    icon: FaTwitter,
    label: "Twitter",
    href: "https://twitter.com/occoto",
    color: "from-blue-400 to-blue-300"
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    href: "https://instagram.com/occoto1",
    color: "from-pink-600 to-purple-400"
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (response.ok) {
        setFormStatus({
          type: 'success',
          message: data.message || 'Thank you for your message! We will get back to you soon.'
        });
        
        // Clear the form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: ''
        });
      } else {
        throw new Error(data.message || 'Something went wrong');
      }
      
      // Reset form status after 5 seconds
      setTimeout(() => {
        setFormStatus({
          type: null,
          message: ''
        });
      }, 5000);
    } catch (error) {
      setFormStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Something went wrong. Please try again later.'
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/923422770074?text=${encodeURIComponent('Hi, I would like to discuss a project.')}`, '_blank');
  };

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
            Get in Touch
          </motion.h1>
          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl"
          >
            Let&apos;s discuss how we can help transform your ideas into reality
          </motion.p>
        </motion.div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Quick Contact Options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Quick Connect
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {/* WhatsApp Button */}
              <motion.button
                onClick={handleWhatsAppClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-green-400/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                  <div className="p-4 bg-gradient-to-r from-green-600/20 to-green-400/20 rounded-full mb-4">
                    <FaWhatsapp className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-sm font-semibold text-green-400">Chat on WhatsApp</h3>
                </div>
              </motion.button>

              {/* Social Media Links */}
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${social.color} opacity-20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300`}></div>
                  <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                    <div className={`p-4 bg-gradient-to-r ${social.color} opacity-20 rounded-full mb-4`}>
                      <social.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-sm font-semibold text-gray-200">{social.label}</h3>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 rounded-3xl blur-xl"></div>
              <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/30 rounded-3xl p-8">
                <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                  Send us a Message
                </h2>
                
                {formStatus.type && (
                  <div className={`mb-6 p-4 rounded-xl ${
                    formStatus.type === 'success' ? 'bg-green-500/20 text-green-200' : 'bg-red-500/20 text-red-200'
                  }`}>
                    {formStatus.message}
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Service Interested In</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                      required
                    >
                      <option value="">Select a service</option>
                      {services.map(service => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                      required
                    ></textarea>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Send Message</span>
                    <FiSend className="w-5 h-5" />
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 rounded-2xl blur-lg"></div>
                  <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl">
                        <info.icon className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-200 mb-2">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-400">{detail}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* FAQ Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative mt-12"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 rounded-2xl blur-lg"></div>
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-gray-200 mb-4">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-gray-200 font-medium mb-2">What are your working hours?</h4>
                      <p className="text-gray-400 text-sm">We are available Monday to Friday, 9:00 AM to 6:00 PM, and Saturday 10:00 AM to 2:00 PM (PKT).</p>
                    </div>
                    <div>
                      <h4 className="text-gray-200 font-medium mb-2">How quickly do you respond?</h4>
                      <p className="text-gray-400 text-sm">We typically respond within 2-4 business hours. For urgent matters, please contact us via WhatsApp.</p>
                    </div>
                    <div>
                      <h4 className="text-gray-200 font-medium mb-2">Do you offer remote services?</h4>
                      <p className="text-gray-400 text-sm">Yes, we provide remote services worldwide while maintaining our quality standards.</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Map */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative mt-12"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 rounded-2xl blur-lg"></div>
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-6">
                  <div className="aspect-video w-full bg-gray-800 rounded-xl overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.7731567784487!2d67.20720631500186!3d24.876859984042388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb339999415e0c3%3A0x36742eee0fd9c291!2sMalir%20Court!5e0!3m2!1sen!2s!4v1647893456789!5m2!1sen!2s"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="grayscale"
                    ></iframe>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 