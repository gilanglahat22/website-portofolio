// @ts-nocheck
"use client";

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import MacOSWindow from '@/components/MacOSWindow';
import Link from 'next/link';
import Image from 'next/image';
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
              {/* Profile Photo */}
              <motion.div
                className="mb-6 flex justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
              >
                <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden ring-4 ring-offset-2 ring-offset-transparent ring-blue-500/50 shadow-xl">
                  <Image
                    src="/main_profile.jpeg"
                    alt="Muhammad Gilang Ramadhan"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </motion.div>

              <motion.h1
                className="text-4xl md:text-5xl font-bold mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                Muhammad Gilang Ramadhan
              </motion.h1>
              <motion.p
                className="text-lg max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.7 }}
              >
                I'm a passionate Software Engineer with expertise in backend engineering, distributed systems, and management systems, dedicated to delivering value through technology with several Competitive Programming experiences.
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