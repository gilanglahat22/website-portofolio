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
            <Link href={link} target="_blank" className="card px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-600 hover:text-white transition-colors">
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

  // Project data from CV
  const projects: Project[] = [
    {
      title: "Nexius AI",
      description: "End-to-end OCR pipeline for financial documents (bank statements, invoices, receipts). Designed modular OCR normalization, feature extraction, and validation pipeline with ambiguous-transaction clustering.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      tags: ["FastAPI", "Python", "LLM", "Langchain", "Clustering", "SSE"],
      category: "ai",
      link: "https://nexiusai.com"
    },
    {
      title: "Avalanche Consensus Service",
      description: "DAG-based consensus engine using dynamic graph algorithms. Engineered network sampling logic with configurable parameters (K, Alpha, BetaVirtuous, BetaRogue) to manage transaction lifecycles.",
      image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      tags: ["Blockchain", "Consensus", "Microservices", "Go", "Research"],
      category: "blockchain",
      link: "https://github.com/gilanglahat22/Avalanche-Consensus"
    },
    {
      title: "Hashigake - Corporate Matching",
      description: "Corporate matching website for CAC Empath with WebSocket integration for meeting platforms, admin management systems, and Azure Bus Services for messaging backend services.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      tags: ["React", "TypeScript", ".NET", "Azure", "WebSocket", "Redux"],
      category: "web",
      link: "https://hashigake.jp"
    },
    {
      title: "DeepCare Mobile App",
      description: "Digital wallet application for healthcare addressing ICU urgency. Backend with FastAPI, MongoDB, and Firebase for real-time sync. TensorFlow models for predicting patient outcomes.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      tags: ["FastAPI", "MongoDB", "Firebase", "TensorFlow", "Kotlin", "BigQuery"],
      category: "mobile",
      link: "https://github.com/gilanglahat22/DeepCare"
    },
    {
      title: "Pondering Circle Website",
      description: "Internal voting website for CAC Empath Inc. employees. Architected scalable backend using ASP.NET, React, SQL Server with optimized stored procedures achieving 50% API response reliability.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      tags: ["ASP.NET", "React", "SQL Server", "Azure", "Analytics"],
      category: "web",
      link: "https://github.com/gilanglahat22/Pondering-Circle"
    },
    {
      title: "Philip Morris International Platforms",
      description: "Developed redeem engines for lucky promos and digital engagement features using ASP.NET and Vue.js integrated with Sitefinity CMS for multiple regional platforms.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      tags: ["ASP.NET", "Vue.js", "Sitefinity", "DDD", "Template Pattern"],
      category: "web",
      link: "https://github.com/gilanglahat22"
    },
    {
      title: "Nakafa AI",
      description: "Open source learning platform for University and High School students, providing AI-powered educational resources and interactive learning experiences.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      tags: ["AI", "Education", "Open Source", "React", "Node.js"],
      category: "ai",
      link: "https://github.com/gilanglahat22/nakafa-ai"
    },
    {
      title: "TELISIK",
      description: "Free learning platform for UTBK (Indonesian university entrance exam) preparation, helping students prepare for their academic future.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      tags: ["Education", "Open Source", "React", "Node.js", "MongoDB"],
      category: "web",
      link: "https://github.com/gilanglahat22/telisik"
    },
    {
      title: "Competitive Programming Solutions",
      description: "Collection of optimized solutions from ICPC, Gemastik, Meta Hacker Cup and other competitions. Ranked 18th in Indonesia for Meta Hacker Cup Round 1 2022.",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      tags: ["C++", "Algorithms", "Data Structures", "Problem Solving"],
      category: "algorithm",
      link: "https://github.com/gilanglahat22/Competitive-Programming"
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
              <p>A showcase of my work in AI/ML, web development, mobile applications, blockchain, and competitive programming.</p>

              {/* Apple-style segmented control filter */}
              <div className="flex justify-center my-6">
                <div className="flex flex-wrap justify-center gap-2 p-1 rounded-xl card w-full sm:w-auto">
                  <button
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${filter === null ? 'bg-blue-600 shadow-sm text-white' : ''}`}
                    onClick={() => setFilter(null)}
                  >
                    All
                  </button>
                  <button
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${filter === 'ai' ? 'bg-blue-600 shadow-sm text-white' : ''}`}
                    onClick={() => setFilter('ai')}
                  >
                    AI/ML
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
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${filter === 'blockchain' ? 'bg-blue-600 shadow-sm text-white' : ''}`}
                    onClick={() => setFilter('blockchain')}
                  >
                    Blockchain
                  </button>
                  <button
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${filter === 'algorithm' ? 'bg-blue-600 shadow-sm text-white' : ''}`}
                    onClick={() => setFilter('algorithm')}
                  >
                    Algorithms
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