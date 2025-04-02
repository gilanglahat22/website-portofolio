"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AppleDock from '@/components/AppleDock';
import MacOSWindow from '@/components/MacOSWindow';
import { useTheme } from '@/contexts/ThemeContext';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, tags, link }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`transition-all duration-300 ${isHovered ? 'scale-[1.02]' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <MacOSWindow 
        title={title}
        variant="system"
        className="h-full"
      >
        <div className="space-y-4">
          {/* Project Image */}
          <div className="relative h-48 w-full overflow-hidden rounded-lg">
            <Image
              src={image}
              alt={title}
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
          </div>
          
          {/* Project Info */}
          <div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="mt-1">{description}</p>
          </div>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag: string) => (
              <span 
                key={tag}
                className="card text-xs font-medium px-2.5 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          
          {/* View Button */}
          <div className="flex justify-end">
            <Link href={link} className="card px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-600 hover:text-white transition-colors">
              View Project
            </Link>
          </div>
        </div>
      </MacOSWindow>
    </div>
  );
};

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  link: string;
}

export default function Projects() {
  const { theme } = useTheme();
  // Filter options in macOS style
  const [filter, setFilter] = useState<string | null>(null);
  
  // Dummy project data
  const projects: Project[] = [
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce platform built with Next.js and Tailwind CSS.",
      image: "https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      tags: ["React", "Next.js", "Tailwind CSS", "Stripe"],
      category: "web",
      link: "#"
    },
    {
      title: "Mobile Banking App",
      description: "A secure mobile banking application with biometric authentication.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      tags: ["React Native", "TypeScript", "Firebase"],
      category: "mobile",
      link: "#"
    },
    {
      title: "Admin Dashboard",
      description: "A comprehensive admin dashboard with data visualization.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      tags: ["React", "D3.js", "Tailwind CSS"],
      category: "web",
      link: "#"
    },
    {
      title: "Social Media Platform",
      description: "A social media platform with real-time messaging and notifications.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80",
      tags: ["Next.js", "Socket.io", "MongoDB"],
      category: "web",
      link: "#"
    },
    {
      title: "Fitness Tracker",
      description: "A fitness tracking application with personalized workout plans.",
      image: "https://images.unsplash.com/photo-1574227492706-f65b24c3688a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80",
      tags: ["React Native", "TypeScript", "HealthKit"],
      category: "mobile",
      link: "#"
    },
    {
      title: "Music Streaming Service",
      description: "A music streaming platform with personalized recommendations.",
      image: "https://images.unsplash.com/photo-1619983081563-430f63602796?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80",
      tags: ["React", "Node.js", "MongoDB"],
      category: "web",
      link: "#"
    }
  ];

  const filteredProjects = filter ? projects.filter(project => project.category === filter) : projects;
  
  return (
    <div className="min-h-screen">
      {/* Main Content */}
      <main className="pt-8 px-6 pb-32">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <MacOSWindow title="My Projects" variant="system">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold">My Projects</h1>
              <p>A collection of my recent work and personal projects.</p>
              
              {/* Apple-style segmented control filter */}
              <div className="flex justify-center my-6">
                <div className="inline-flex p-1 rounded-xl card">
                  <button 
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${filter === null ? 'bg-blue-600 shadow-sm text-white' : ''}`}
                    onClick={() => setFilter(null)}
                  >
                    All
                  </button>
                  <button 
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${filter === 'web' ? 'bg-blue-600 shadow-sm text-white' : ''}`}
                    onClick={() => setFilter('web')}
                  >
                    Web
                  </button>
                  <button 
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${filter === 'mobile' ? 'bg-blue-600 shadow-sm text-white' : ''}`}
                    onClick={() => setFilter('mobile')}
                  >
                    Mobile
                  </button>
                </div>
              </div>
            </div>
          </MacOSWindow>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </main>
      
      {/* Apple-style Dock at the bottom */}
      <AppleDock />
    </div>
  );
} 