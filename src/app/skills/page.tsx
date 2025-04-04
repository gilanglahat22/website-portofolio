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
          
          {/* Experience Timeline */}
          <MacOSWindow title="Learning Journey" variant="system">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold mb-4">My Learning Path</h2>
              
              {/* Timeline */}
              <div className="relative pl-8 space-y-8 before:absolute before:left-4 before:h-full before:w-0.5 before:bg-current before:opacity-20">
                {/* Timeline Items */}
                <TimelineItem
                  year="2024"
                  title="Full Stack Development"
                  description="Expanded my expertise in web application development, working as Junior Software Engineer at PT Fata Organa Solusi on the hashigake.jp project and developing complex matching applications."
                />
                <TimelineItem
                  year="2023"
                  title="Machine Learning & Internship"
                  description="Participated in Bangkit Academy led by Google, Tokopedia, Gojek & Traveloka, focusing on machine learning. Interned at PT Suitmedia Kreasi Indonesia, developing the KLAB Smile Company's platform."
                />
                <TimelineItem
                  year="2022"
                  title="Competitive Programming"
                  description="Advanced my problem-solving skills through competitive programming competitions, becoming a finalist in ICPC Asia Jakarta and Gemastik XV Divisi Pemrograman."
                />
                <TimelineItem
                  year="2020"
                  title="Software Engineering Fundamentals"
                  description="Started my Bachelor's in Informatics Engineering at Bandung Institute of Technology, focusing on software engineering, blockchain, and mathematical problems."
                />
              </div>
            </div>
          </MacOSWindow>
          
          {/* Achievements */}
          <MacOSWindow title="Achievements" variant="system">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CertificationCard
                title="Finalist ICPC Asia Jakarta"
                organization="International Collegiate Programming Contest"
                date="2021"
                category="Competitive Programming"
              />
              <CertificationCard
                title="Top 40 Indonesia National Contest"
                organization="National Programming Competition"
                date="2021"
                category="Algorithm Design"
              />
              <CertificationCard
                title="Finalist Gemastik XV"
                organization="National STEM Competition"
                date="2022"
                category="Programming Division"
              />
              <CertificationCard
                title="4th Place ITB Gemastik"
                organization="Bandung Institute of Technology"
                date="2022"
                category="Competitive Programming"
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