"use client";

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import MacOSWindow from '@/components/MacOSWindow';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ThemeAwareContent = () => {
  const { theme } = useTheme();
  
  return (
    <div className="w-full max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <MacOSWindow 
          title="Welcome" 
          variant="system"
          className="w-full"
        >
          <div className="py-8 px-4 md:px-8">
            <div className="text-center mb-8">
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.7 }}
              >
                Muhammad Gilang Ramadhan
              </motion.h1>
              <motion.p 
                className="text-lg max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.7 }}
              >
                Software Engineer & Security Analyst from Bandung Institute of Technology.
                Specializing in web development, algorithms, and cybersecurity solutions.
              </motion.p>
            </div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              <Link href="/about" className="block">
                <div className="card p-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  <h3 className="text-xl font-semibold mb-2">About Me</h3>
                  <p>Learn more about my background at ITB, professional experience, and career journey.</p>
                </div>
              </Link>
              
              <Link href="/projects" className="block">
                <div className="card p-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  <h3 className="text-xl font-semibold mb-2">Projects</h3>
                  <p>Explore my portfolio including competitive programming, backend development, and security solutions.</p>
                </div>
              </Link>
              
              <Link href="/skills" className="block">
                <div className="card p-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  <h3 className="text-xl font-semibold mb-2">Skills</h3>
                  <p>Discover my expertise in C++, TypeScript, JavaScript, PHP, and cybersecurity analysis.</p>
                </div>
              </Link>
              
              <Link href="/contact" className="block">
                <div className="card p-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  <h3 className="text-xl font-semibold mb-2">Contact</h3>
                  <p>Connect with me to discuss opportunities, collaborations, or technical inquiries.</p>
                </div>
              </Link>
            </motion.div>
            
            <motion.div 
              className="mt-12 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.7 }}
            >
              <p className="text-sm">
                Use the dock at the bottom of the screen to navigate, or click on the cards above.
              </p>
            </motion.div>
          </div>
        </MacOSWindow>
      </motion.div>
    </div>
  );
};

export default ThemeAwareContent; 