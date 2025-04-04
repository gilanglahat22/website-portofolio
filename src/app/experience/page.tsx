"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import AppleDock from '@/components/AppleDock';
import MacOSWindow from '@/components/MacOSWindow';
import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';

interface ExperienceItem {
  title: string;
  company: string;
  date: string;
  description: string[];
  logo: string;
  skills: string[];
}

const ExperienceCard = ({ item, isActive }: { item: ExperienceItem; isActive: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`card rounded-lg p-6 transition-all duration-300 ${isHovered ? 'shadow-lg' : 'shadow-md'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start space-x-4">
        {/* Company Logo */}
        <div className="w-12 h-12 card rounded-lg overflow-hidden flex-shrink-0">
          <Image 
            src={item.logo} 
            alt={item.company} 
            width={48} 
            height={48}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Content */}
        <div className="flex-1 space-y-3">
          <div>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-sm">{item.company} • {item.date}</p>
          </div>
          
          <div className="space-y-2">
            {item.description.map((desc, index) => (
              <p key={index} className="text-sm">{desc}</p>
            ))}
          </div>
          
          {/* Skills */}
          <div className="flex flex-wrap gap-2">
            {item.skills.map((skill) => (
              <span 
                key={skill}
                className="card px-2 py-1 text-xs rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Experience() {
  const { theme } = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);
  
  const experiences: ExperienceItem[] = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      date: "2022 - Present",
      description: [
        "Led the development of a next-generation web application using Next.js and TypeScript",
        "Implemented responsive designs and animations using Tailwind CSS and Framer Motion",
        "Mentored junior developers and conducted code reviews"
      ],
      logo: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd",
      date: "2020 - 2022",
      description: [
        "Developed and maintained multiple client projects using React and Node.js",
        "Implemented RESTful APIs and integrated third-party services",
        "Optimized application performance and improved load times by 40%"
      ],
      logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      skills: ["React", "Node.js", "MongoDB", "Express", "REST APIs"]
    },
    {
      title: "Frontend Developer",
      company: "Creative Web Agency",
      date: "2018 - 2020",
      description: [
        "Built responsive websites and web applications for various clients",
        "Collaborated with designers to implement pixel-perfect designs",
        "Improved site performance and SEO rankings"
      ],
      logo: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      skills: ["HTML", "CSS", "JavaScript", "WordPress", "SEO"]
    }
  ];

  return (
    <div className="min-h-screen">
      <main className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Header */}
        <MacOSWindow title="Experience" variant="system" className="mb-8">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">Professional Experience</h1>
            <p>
              A journey through my professional career in web development and software engineering.
            </p>
          </div>
        </MacOSWindow>

        {/* Experience Timeline */}
        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              item={experience}
              isActive={index === activeIndex}
            />
          ))}
        </div>
      </main>
      
      <AppleDock />
    </div>
  );
} 