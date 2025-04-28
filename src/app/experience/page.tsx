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
      title: "Research and Development Team",
      company: "MarkAny",
      date: "April 2022 - Present",
      description: [
        "Research and Develop EndPoint Detection & Response by service in C/C++ and Deep Learning",
        "Architected and implemented a new approach to detect software supply-chain threats with Windows Filtering Platform for malware detection",
        "Designed to optimize 16% time response for real-time checking modules",
        "Researched Security User Interface Implementation and multi-party computation at Badan Siber dan Sandi Negara Indonesia Dataset"
      ],
      logo: "/images/rangoon-tech-logo.png",
      skills: ["C++", "Deep Learning", "Security", "Windows Filtering Platform", "Malware Detection"]
    },
    {
      title: "Junior Software Engineer",
      company: "PT Fata Organa Solusi",
      date: "July 2024 - March 2025",
      description: [
        "Research and Develop In Charge of https://hashigake.jp (CAC, Empath Japanese Company project)",
        "Application for multiple companies against tenant storage using JDI and React with TypeScript",
        "Developed and applied standardized secure client-configuration microservice building blocks",
        "Authored comprehensive software documentation, including detailed design, coding logic, unit test results, system design services, grid solutions, etc."
      ],
      logo: "/images/peta-organa-logo.png",
      skills: ["C#", ".NET", "TypeScript", "React", "Documentation", "Microservices"]
    },
    {
      title: "Full Stack Developer",
      company: "Feline Labs",
      date: "May 2023 - Present",
      description: [
        "Developed Web App with HTML/CSS/Native, Tailwinds, React, Express, Go, Redis, MySQL, MongoDB, CRUD, using Google Cloud for custom domain gateway using miniproxies",
        "Processed 100+ projects with 10K+ Indonesian food",
        "Successfully executed several event projects for prestigious clients, including: PMHantim Indonesia, PMHantim Sumsel, Rizki Putri Sumatera, Putra Putri Musi Banyuasin"
      ],
      logo: "/images/follow-logo.png",
      skills: ["HTML/CSS", "React", "Express", "Go", "Redis", "MySQL", "MongoDB", "Google Cloud"]
    },
    {
      title: "Web Developer",
      company: "PT Fata Organa Solusi",
      date: "December 2023 - June 2024",
      description: [
        "Developed Fullstack Web App with Vue, JS, PHP, .Net, React, SQL Server Database and API Services with Azure",
        "Improved client engagement by achieving 80% server-side performance optimization",
        "Enhanced the Software Development Life Cycle (SDLC), improving code quality by 40%"
      ],
      logo: "/images/peta-organa-logo.png", 
      skills: ["Vue", "JavaScript", "PHP", ".Net", "React", "SQL Server", "Azure", "API Services"]
    },
    {
      title: "Software Engineer",
      company: "PT Suitmedia Kreasi Indonesia",
      date: "May 2023 - November 2023",
      description: [
        "Developed platform with Laravel, Nginx, Redis, MySQL, Docker to increase 22% customer engagement and boost revenue",
        "Performance Optimization: Optimized database queries, reducing response time by 40%",
        "Traffic Improvement: Backend optimizations increased website traffic by 29%",
        "System Integration Testing (SIT): Ensured seamless API communication between services"
      ],
      logo: "/images/rangoon-tech-logo.png",
      skills: ["Laravel", "Nginx", "Redis", "MySQL", "Docker", "API Integration", "Testing"]
    },
    {
      title: "Machine Learning Engineer",
      company: "Bangkit Academy (Bootcamp)",
      date: "August 2022 - December 2023",
      description: [
        "Completed intensive machine learning training, leveraging platforms like Dicoding and Coursera",
        "Enhanced technical skills using tools and frameworks such as Google Cloud Platform (GCP), TensorFlow, FastAPI",
        "Developed a curated application to automate medical processes with 80% accuracy, aiming to improve patient recovery outcomes",
        "Independently implemented end-to-end solutions, integrating advanced technologies into real-world applications"
      ],
      logo: "/images/bangkok-outpatient-logo.png",
      skills: ["Machine Learning", "Python", "TensorFlow", "FastAPI", "GCP", "Medical Applications"]
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <main className="py-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <MacOSWindow title="Professional Experience" variant="system">
          <div className="p-6">
            <div className="mb-8 max-w-3xl mx-auto">
              <h1 className="text-3xl font-bold mb-4">Professional Experience</h1>
              <p className="text-lg">
                My career journey as a Full Stack Developer and Software Engineer, with experience in web development,
                backend systems, and machine learning applications.
              </p>
            </div>
            
            <div className="space-y-6">
              {experiences.map((experience, index) => (
                <ExperienceCard 
                  key={index}
                  item={experience}
                  isActive={activeIndex === index}
                />
              ))}
            </div>
          </div>
        </MacOSWindow>
      </main>
      
      <AppleDock />
    </div>
  );
} 