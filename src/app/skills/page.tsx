"use client";

import React, { useState } from 'react';
import AppleDock from '@/components/AppleDock';
import MacOSWindow from '@/components/MacOSWindow';
import SkillsGrid from '@/components/SkillsGrid';
import { useTheme } from '@/contexts/ThemeContext';

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
                As a passionate developer, I've developed expertise across various technologies.
                My skill set reflects my journey in creating intuitive and performant digital experiences.
              </p>
            </div>
          </MacOSWindow>
          
          {/* Skills Section */}
          <MacOSWindow title="Skills Overview" variant="system" className="w-full">
            <SkillsGrid />
          </MacOSWindow>
          
          {/* Experience Timeline */}
          <MacOSWindow title="Learning Journey" variant="system">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold mb-4">My Learning Path</h2>
              
              {/* Timeline */}
              <div className="relative pl-8 space-y-8 before:absolute before:left-4 before:h-full before:w-0.5 before:bg-current before:opacity-20">
                {/* Timeline Items */}
                <TimelineItem
                  year="2023"
                  title="Full Stack Development"
                  description="Mastered modern web development with Next.js, React, and TypeScript. Implemented complex features and optimized performance."
                />
                <TimelineItem
                  year="2022"
                  title="Cloud & DevOps"
                  description="Gained expertise in AWS, Docker, and CI/CD pipelines. Implemented automated deployment workflows and microservices architecture."
                />
                <TimelineItem
                  year="2021"
                  title="Mobile Development"
                  description="Learned React Native and Flutter. Built cross-platform mobile applications with native performance."
                />
                <TimelineItem
                  year="2020"
                  title="Backend Development"
                  description="Focused on Node.js, Express, and database design. Built scalable APIs and implemented security best practices."
                />
              </div>
            </div>
          </MacOSWindow>
          
          {/* Certifications */}
          <MacOSWindow title="Certifications" variant="system">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CertificationCard
                title="AWS Certified Developer"
                organization="Amazon Web Services"
                date="2023"
                category="Cloud Computing"
              />
              <CertificationCard
                title="Professional Web Developer"
                organization="freeCodeCamp"
                date="2022"
                category="Web Development"
              />
              <CertificationCard
                title="React Native Specialist"
                organization="Coursera"
                date="2022"
                category="Mobile Development"
              />
              <CertificationCard
                title="Node.js Advanced Concepts"
                organization="Udemy"
                date="2021"
                category="Backend Development"
              />
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

interface CertificationCardProps {
  title: string;
  organization: string;
  date: string;
  category: string;
}

const CertificationCard: React.FC<CertificationCardProps> = ({ title, organization, date, category }) => {
  return (
    <div className="card rounded-lg p-4">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm mt-1">{organization}</p>
        </div>
        <span className="text-sm">{date}</span>
      </div>
      <div className="mt-3">
        <span className="inline-block px-2 py-1 text-xs rounded-full card">
          {category}
        </span>
      </div>
    </div>
  );
}; 