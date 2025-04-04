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
  
  // Project data for Muhammad Gilang Ramadhan
  const projects: Project[] = [
    {
      title: "Corporatematching Website - Hashigake",
      description: "Built a responsive, dynamic UI for seamless user experience, enabling real-time updates for matching sites with async programming for CAC Finnish Inc.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      tags: ["React", "C#", ".NET", "Microservices", "Redis", "RabbitMQ"],
      category: "web",
      link: "https://hashigake.jp"
    },
    {
      title: "Pondering Circle - Internal Voting Website",
      description: "Developed web app with ASP .NET, React, SQL Server to enhance performance, internal voting, and employee management. Added analytical SQL for bug prevention and improved SDLC.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      tags: ["ASP.NET", "React", "SQL Server", "Analysis", "SDLC"],
      category: "web",
      link: "https://github.com/gilanglahat22/Pondering-Circle"
    },
    {
      title: "BlueSound - Spotify-like Web App",
      description: "Developed a subscription-based music application using microservice architecture divided into four services: User Portal, Admin Dashboard, Subscription management, and Premium song management.",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      tags: ["PHP", "MySQL", "Docker", "Microservices", "REST API"],
      category: "web",
      link: "https://github.com/gilanglahat22/BlueSound"
    },
    {
      title: "DeepCare Mobile App",
      description: "Developed a health application to address urgency of patient conditions in ICUs using Python for backend REST APIs with MongoDB and Firebase, and Kotlin for a user-friendly healthcare professional interface.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      tags: ["Python", "Kotlin", "MongoDB", "Firebase", "Machine Learning", "Healthcare"],
      category: "mobile",
      link: "https://github.com/gilanglahat22/DeepCare"
    },
    {
      title: "Feed Forward Neural Network from Scratch",
      description: "Developed a Python-based machine learning system implementing feed-forward neural networks from scratch without frameworks, with activation functions, model storage, and visualization.",
      image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      tags: ["Python", "Machine Learning", "Neural Networks", "Data Science"],
      category: "ml",
      link: "https://github.com/gilanglahat22/FFNN"
    },
    {
      title: "Competitive Programming Solutions",
      description: "Collection of optimized solutions to competitive programming problems from various contests, including ICPC, Gemastik, and other national and international competitions.",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      tags: ["C++", "Java", "Algorithms", "Data Structures", "Problem Solving"],
      category: "algorithm",
      link: "https://github.com/gilanglahat22/Competitive-Programming"
    },
    {
      title: "Avalanche Consensus Protocol Optimization",
      description: "Research on optimizing blockchain's Avalanche consensus protocol using algorithmic improvements for faster transaction verification while maintaining security.",
      image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      tags: ["Blockchain", "Consensus Algorithms", "Research", "C++"],
      category: "blockchain",
      link: "https://github.com/gilanglahat22/Avalanche-Research"
    },
    {
      title: "KLAB Smile Company Platform",
      description: "Developed corporate platform with Laravel, Nginx, MySQL to increase customer engagement by 222% and boost revenue, optimizing database queries and improving website traffic.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      tags: ["Laravel", "Nginx", "MySQL", "Database Optimization", "API Integration"],
      category: "web",
      link: "https://github.com/gilanglahat22/KLAB-Platform"
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
              <p>A showcase of my work in web development, mobile applications, machine learning, and competitive programming.</p>
              
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
                  <button 
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${filter === 'ml' ? 'bg-blue-600 shadow-sm text-white' : ''}`}
                    onClick={() => setFilter('ml')}
                  >
                    Machine Learning
                  </button>
                  <button 
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${filter === 'algorithm' ? 'bg-blue-600 shadow-sm text-white' : ''}`}
                    onClick={() => setFilter('algorithm')}
                  >
                    Algorithms
                  </button>
                  <button 
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${filter === 'blockchain' ? 'bg-blue-600 shadow-sm text-white' : ''}`}
                    onClick={() => setFilter('blockchain')}
                  >
                    Blockchain
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