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
          
          {/* Achievements Section */}
          <MacOSWindow title="Achievements & Certifications" variant="system">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Achievements & Certifications</h2>
              <p>Recognition and accomplishments from my academic and professional journey.</p>
              
              <div className="space-y-6 py-4">
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