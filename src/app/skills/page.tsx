"use client";

import React, { useState } from 'react';
import AppleDock from '@/components/AppleDock';
import MacOSWindow from '@/components/MacOSWindow';
import SkillsGrid from '@/components/SkillsGrid';
import { useTheme } from '@/contexts/ThemeContext';
import CertificationCard from '@/components/CertificationCard';
import MacOSTerminal from '@/components/MacOSTerminal';

export default function Skills() {
  const { theme } = useTheme();
  
  return (
    <div className="min-h-screen">
      {/* Main Content */}
      <main className="pt-8 px-6 pb-32">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <MacOSWindow title="My Skills" variant="system">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold">Technical Skills</h1>
              <p>
                As a Software Engineer specializing in backend development, blockchain, and mathematical problems, 
                I've developed expertise across multiple programming languages and frameworks. My technical foundation 
                is built on solving complex programming challenges and implementing robust software solutions.
              </p>
            </div>
          </MacOSWindow>
          
          {/* Skills Section */}
          <MacOSWindow title="Skills Overview" variant="system" className="w-full">
            <SkillsGrid />
          </MacOSWindow>
          
          {/* Timeline Section */}
          <MacOSWindow title="Experience Timeline" variant="system">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">My Journey</h2>
              <p>A timeline of my learning path and achievements in software development.</p>
              
              <div className="space-y-4 py-4">
                {/* Experience Timeline */}
                <MacOSTerminal title="Timeline">
                  <div className="space-y-4">
                    {/* 2024 */}
                    <div className="border-l-2 border-gray-200 dark:border-neutral-800 pl-4 pb-2 relative">
                      <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-0"></div>
                      <h3 className="text-xl font-bold">2024</h3>
                      <p>Software Engineer at PT Peta Organa Solusi, Jakarta</p>
                    </div>
                    
                    {/* 2023 */}
                    <div className="border-l-2 border-gray-200 dark:border-neutral-800 pl-4 pb-2 relative">
                      <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-0"></div>
                      <h3 className="text-xl font-bold">2023</h3>
                      <p>Graduated from Bandung Institute of Technology</p>
                    </div>
                    
                    {/* 2022 */}
                    <div className="border-l-2 border-gray-200 dark:border-neutral-800 pl-4 pb-2 relative">
                      <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-0"></div>
                      <h3 className="text-xl font-bold">2022</h3>
                      <p>Intern at Smile Inc., Tokyo</p>
                    </div>
                    
                    {/* 2021 */}
                    <div className="border-l-2 border-gray-200 dark:border-neutral-800 pl-4 pb-2 relative">
                      <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-0"></div>
                      <h3 className="text-xl font-bold">2021</h3>
                      <p>Started competitive programming journey</p>
                    </div>
                    
                    {/* 2020 */}
                    <div className="border-l-2 border-gray-200 dark:border-neutral-800 pl-4 relative">
                      <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-0"></div>
                      <h3 className="text-xl font-bold">2020</h3>
                      <p>Began studying Computer Science at Bandung Institute of Technology</p>
                    </div>
                  </div>
                </MacOSTerminal>
              </div>
            </div>
          </MacOSWindow>
          
          {/* Achievements Section */}
          <MacOSWindow title="Achievements & Certifications" variant="system">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Achievements & Certifications</h2>
              <p>Recognition and accomplishments from my academic and professional journey.</p>
              
              <div className="space-y-6 py-4">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Achievements</h3>
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg card relative">
                      <h4 className="text-lg font-medium">National Competitive Programming Winner</h4>
                      <p className="text-sm text-gray-600 dark:text-neutral-400">2022 - Bandung Institute of Technology</p>
                      <p className="mt-2">1st place in the National Algorithm Competition, solving complex algorithmic challenges within tight time constraints.</p>
                    </div>
                    
                    <div className="p-4 rounded-lg card relative">
                      <h4 className="text-lg font-medium">Best Academic Achievement Award</h4>
                      <p className="text-sm text-gray-600 dark:text-neutral-400">2023 - Computer Science Department</p>
                      <p className="mt-2">Recognized for outstanding academic performance and research contributions in algorithms and data structures.</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Certifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <CertificationCard
                      title="Basic Data Science"
                      organization="LinkedIn Learning"
                      date="March 2023"
                      category="Data Science"
                    />
                    <CertificationCard
                      title="Basic SQL"
                      organization="LinkedIn Learning"
                      date="April 2023"
                      category="Database"
                    />
                    <CertificationCard
                      title="Basic Artificial Intelligence"
                      organization="LinkedIn Learning"
                      date="May 2023"
                      category="AI"
                    />
                    <CertificationCard
                      title="Basic Project Management"
                      organization="LinkedIn Learning"
                      date="June 2023"
                      category="Project Management"
                    />
                    <CertificationCard
                      title="Self-Development Strategy"
                      organization="LinkedIn Learning"
                      date="July 2023"
                      category="Personal Growth"
                    />
                    <CertificationCard
                      title="Machine Learning Cohort"
                      organization="LinkedIn Learning"
                      date="August 2023"
                      category="Machine Learning"
                    />
                  </div>
                </div>
              </div>
            </div>
          </MacOSWindow>
        </div>
      </main>
      
      {/* Apple-style Dock */}
      <AppleDock />
    </div>
  );
}

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, description }) => {
  return (
    <div className="relative">
      {/* Circle marker */}
      <div className="absolute -left-8 mt-1.5 h-6 w-6 rounded-full border-2 border-current flex items-center justify-center">
        <span className="text-xs font-medium">{year}</span>
      </div>
      
      {/* Content */}
      <div className="card rounded-lg p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2">{description}</p>
      </div>
    </div>
  );
}; 