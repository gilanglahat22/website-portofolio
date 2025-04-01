"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// Direct imports for components
import AppleHero from '@/components/AppleHero';
import ServiceSection from '@/components/ServiceSection';
import SkillsGrid from '@/components/SkillsGrid';
import MacOSWindow from '@/components/MacOSWindow';
import AppleDock from '@/components/AppleDock';

// @ts-ignore - Ignore TypeScript errors for this file
export default function Home(): React.ReactElement {
  const [showDemoWindow, setShowDemoWindow] = useState(false);
  
  return (
    // @ts-ignore
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Main Content */}
      {/* @ts-ignore */}
      <main className="pt-4 sm:pt-6 md:pt-8 px-3 sm:px-4 md:px-6 pb-24">
        {/* @ts-ignore */}
        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8 md:space-y-12">
          {/* Hero Section - Simplified without clouds */}
          <div className="text-center py-8 sm:py-12 md:py-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white">
              Bringing UI Engineering{" "}
              <span className="text-blue-400">to Life</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-6 sm:mb-8 px-2">
              I bring digital experiences to life with modern frontend technologies
              and pixel-perfect design implementation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <button className="bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:shadow-lg transition-all transform hover:-translate-y-1 text-sm sm:text-base">
                View My Work
              </button>
              <button className="bg-transparent border border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-white/10 transition-all text-sm sm:text-base">
                Contact Me
              </button>
            </div>
          </div>
          
          {/* About Me Section */}
          {/* @ts-ignore */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8 md:mt-12">
            <MacOSWindow 
              title="About Me" 
              variant="light"
              className="h-full"
            >
              {/* @ts-ignore */}
              <div className="space-y-2 sm:space-y-4">
                {/* @ts-ignore */}
                <h2 className="text-xl sm:text-2xl font-semibold" style={{ color: "#042043" }}>
                  Frontend Developer & UI/UX Enthusiast
                </h2>
                {/* @ts-ignore */}
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  I'm Muhammad Gilang Ramadhan, a skilled Frontend Developer with a passion for creating beautiful, 
                  functional, and user-centered digital experiences. I am proficient in React, Next.js, 
                  TailwindCSS, and TypeScript.
                </p>
                {/* @ts-ignore */}
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  With 3+ years of experience in frontend development, I've worked on numerous projects
                  that have helped me refine my skills in creating responsive, accessible,
                  and performant web applications.
                </p>
                {/* @ts-ignore */}
                <div className="flex flex-wrap gap-2 sm:gap-4 pt-2">
                  {/* @ts-ignore */}
                  <button className="px-3 sm:px-5 py-1.5 sm:py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-xs sm:text-sm font-medium transition-colors">
                    Download CV
                  </button>
                  {/* @ts-ignore */}
                  <button 
                    className="px-3 sm:px-5 py-1.5 sm:py-2 border border-gray-300 hover:border-gray-400 rounded-full text-xs sm:text-sm font-medium transition-colors"
                    onClick={() => setShowDemoWindow(true)}
                  >
                    Open Demo
                  </button>
                </div>
              </div>
            </MacOSWindow>
            
            <MacOSWindow 
              title="Profile Picture" 
              variant="transparent"
              className="h-full flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600"
            >
              {/* @ts-ignore */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64">
                {/* @ts-ignore */}
                <div className="absolute -inset-0.5 bg-white/20 rounded-full blur-md"></div>
                {/* @ts-ignore */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-full"></div>
                <Image 
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" 
                  alt="Muhammad Gilang Ramadhan"
                  width={256}
                  height={256}
                  className="rounded-full object-cover relative z-10 ring-4 ring-white/20"
                />
              </div>
            </MacOSWindow>
          </section>
          
          {/* Skills Grid */}
          <MacOSWindow title="My Technical Skills" variant="light">
            <SkillsGrid />
          </MacOSWindow>
          
          {/* Services Section */}
          <ServiceSection />
          
          {/* Portfolio Preview */}
          <MacOSWindow title="Featured Projects" variant="dark">
            {/* @ts-ignore */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {[1, 2, 3].map((project) => (
                // @ts-ignore
                <div 
                  key={project}
                  className="relative overflow-hidden rounded-lg group"
                >
                  <Image 
                    src={
                      project === 1 
                        ? "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60"
                        : project === 2 
                          ? "https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60"
                          : "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60"
                    }
                    alt={`Project ${project}`}
                    width={400}
                    height={300}
                    className="w-full h-36 sm:h-40 md:h-48 object-cover"
                  />
                  {/* @ts-ignore */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {/* @ts-ignore */}
                  <div className="absolute bottom-0 left-0 p-3 sm:p-4 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    {/* @ts-ignore */}
                    <h3 className="text-base sm:text-lg font-semibold">Project {project}</h3>
                    {/* @ts-ignore */}
                    <p className="text-xs sm:text-sm text-gray-300">Web Application</p>
                  </div>
                </div>
              ))}
            </div>
            {/* @ts-ignore */}
            <div className="mt-4 text-center">
              {/* @ts-ignore */}
              <button className="px-4 sm:px-5 py-1.5 sm:py-2 border border-gray-700 hover:border-gray-500 rounded-full text-xs sm:text-sm font-medium transition-colors">
                View All Projects
              </button>
            </div>
          </MacOSWindow>
        </div>
      </main>
      
      {/* Apple-style Dock at the bottom */}
      <AppleDock />
      
      {/* Demo Window */}
      {showDemoWindow && (
        // @ts-ignore
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <MacOSWindow 
            title="Welcome!" 
            onClose={() => setShowDemoWindow(false)}
            className="w-full max-w-xs sm:max-w-md md:max-w-lg"
          >
            {/* @ts-ignore */}
            <div className="text-center py-4 sm:py-6 space-y-2 sm:space-y-4">
              {/* @ts-ignore */}
              <h3 className="text-lg sm:text-xl font-semibold">Thanks for checking out my portfolio!</h3>
              {/* @ts-ignore */}
              <p className="text-sm sm:text-base">This is an example of the macOS-style window component. Feel free to explore the rest of the site.</p>
              {/* @ts-ignore */}
              <div className="flex justify-center space-x-4 mt-3 sm:mt-4">
                {/* @ts-ignore */}
                <button 
                  className="px-4 sm:px-5 py-1.5 sm:py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm rounded-full transition-colors"
                  onClick={() => setShowDemoWindow(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </MacOSWindow>
        </div>
      )}
    </div>
  );
}
