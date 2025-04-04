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
      title: "Junior Software Engineer",
      company: "PT Fata Organa Solusi",
      date: "July 2024 - March 2025",
      description: [
        "Main PIC (Person In Charge) of https://hashigake.jp/ (CAC, Empath Japanese Company project)",
        "Matching application for multiple companies against tenant storage data, JDI and Redis hyperscript",
        "Authored comprehensive software documentation, including detailed design, coding logic, and test results",
        "Implemented secure bus services, grid event, RabbitMQ, OpenIddict, etc."
      ],
      logo: "/images/peta-organa-logo.png",
      skills: ["C#", ".NET", "RabbitMQ", "Redis", "Documentation", "API Design"]
    },
    {
      title: "Full Stack Developer",
      company: "Faina Labs (Freelance)",
      date: "August 2023 - Present",
      description: [
        "Developed APIs with TypeScript, Node.js, Laravel, React, Express, PHP Laravel, Kotlin, MySQL, MongoDB",
        "Processed 100+ projects with 10K+ Indonesian food",
        "Successfully executed several event projects for prestigious clients, including: PMHantim Indonesia, PMHantim Sumsel, Rizki Putri Sumatera, Putra Putri Musi Banyuasin"
      ],
      logo: "https://cdn-icons-png.flaticon.com/512/6214/6214379.png",
      skills: ["TypeScript", "Node.js", "React", "Express", "PHP", "Laravel", "Kotlin", "MySQL", "MongoDB"]
    },
    {
      title: "Web Developer",
      company: "PT Fata Organa Solusi (Part Time)",
      date: "December 2023 - June 2024",
      description: [
        "Developed Fullstack Web App with Vue, React, JS, React, SQL, Devops modules and API Services with Azure",
        "Improved client engagement by achieving 80% server-side performance optimization",
        "Enhanced the Software Development Life Cycle (SDLC) process by improving quality by 40%"
      ],
      logo: "/images/peta-organa-logo.png", 
      skills: ["Vue", "React", "JavaScript", "SQL", "Azure", "DevOps", "Performance Optimization"]
    },
    {
      title: "Software Engineer",
      company: "PT Suitmedia Kreasi Indonesia (Internship)",
      date: "May 2023 - November 2023",
      description: [
        "Developed KLAB Smile Company's platform with Laravel, Nginx, MySQL to increase 222% customer engagement and boost revenue",
        "Performance Optimization: Optimized database queries, reducing response time by 40%",
        "Traffic Improvement: Backend optimizations increased website traffic by 29%",
        "System Integration Testing (SIT): Ensured seamless API communication between services"
      ],
      logo: "https://cdn-icons-png.flaticon.com/512/2721/2721260.png",
      skills: ["Laravel", "Nginx", "MySQL", "Database Optimization", "API Integration", "Testing"]
    },
    {
      title: "Machine Learning Cohort",
      company: "Bangkit Academy led by Google, Tokopedia, Gojek & Traveloka",
      date: "February 2023 - December 2023",
      description: [
        "Completed intensive machine learning training, leveraging platforms like Dicoding and Coursera",
        "Enhanced technical skills using tools and frameworks such as Google Cloud Platform (GCP), TensorFlow, FastAPI",
        "Efficiently dealt with data recovery",
        "Developed a custom app to automate medical processes with 80% accuracy, aiming to improve patient recovery outcomes",
        "Independently implemented end-to-end solutions, integrating advanced technologies into real-world applications"
      ],
      logo: "https://cdn-icons-png.flaticon.com/512/2721/2721224.png",
      skills: ["Machine Learning", "Python", "TensorFlow", "FastAPI", "GCP", "Data Processing"]
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