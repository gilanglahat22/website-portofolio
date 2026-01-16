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
      title: "Software Engineer (Fulltime)",
      company: "Quantum Teknologi Nusantara",
      date: "September 2025 - Present",
      description: [
        "Architecting and building OCR services using LLM optimization with clustering for the Nexius product (https://nexiusai.com) to convert bank statements into structured accounting data.",
        "Leading research and development of new technologies and standardization codes to improve feature performance, OCR accuracy, and reliability.",
        "Helped the infra team migrate Nexius Server from matrix server to layerstack server, and separate monolithic services into distributed services (microservices and background services)."
      ],
      logo: "/icons/quantum.jpeg",
      skills: ["FastAPI", "Python", "Langchain", "LLM", "Clustering", "Microservices"]
    },
    {
      title: "Fullstack Engineer (Freelance)",
      company: "One Code Solution",
      date: "June 2025 - August 2025",
      description: [
        "Architected and maintained a scalable backend ecosystem for Philip Morris International, supporting multiple regional platforms (Kazakhstan, Chesterfield-PH, PRJWHEART).",
        "Implemented Domain-Driven Design (DDD) and Template Pattern for maintainable architecture.",
        "Developed full-stack mobile solutions using Vue.js and Sitefinity with features like biometric credential management, user authentication, and reward redemption engines."
      ],
      logo: "/icons/one_code.jpeg",
      skills: ["Vue.js", "ASP.NET", "Sitefinity", "DDD", "Mobile Development"]
    },
    {
      title: "R&D Team - Ransomware Detection (Fulltime)",
      company: "MarkAny",
      date: "April 2025 - May 2025",
      description: [
        "Researched and developed Endpoint Detection & Response (EDR) solutions with specialized focus on Intrusion Detection Systems (IDS).",
        "Analyzed user behavior monitoring and security patterns utilizing the Indonesian National Cyber and Crypto Agency (BSSN) dataset."
      ],
      logo: "/icons/markany.png",
      skills: ["EDR", "IDS", "Security", "Research", "BSSN Dataset"]
    },
    {
      title: "Junior Software Engineer (Fulltime)",
      company: "PT Fata Organa Solusi",
      date: "July 2024 - March 2025",
      description: [
        "Served as PIC Assistant for Hashigake matching application (https://hashigake.jp/), architecting multi-tenant system using .NET and React/TypeScript.",
        "Collaborated across QA, PM, and Data Science teams for CAC Empath Japanese Company project.",
        "Completed onboarding with Japanese language training and maintained 1-on-1 matching app features."
      ],
      logo: "/icons/fata_organa.jpeg",
      skills: ["C#", ".NET", "TypeScript", "React", "Multi-tenant", "Documentation"]
    },
    {
      title: "Full Stack Developer (Freelance)",
      company: "Feline Labs",
      date: "August 2023 - March 2025",
      description: [
        "Led development of Web Apps using HTML/CSS, Tailwind, React, Express, PHP Laravel, Kotlin, MySQL, MongoDB, CI/CD.",
        "Integrated Payment Gateway (Midtrans) for e-commerce solutions.",
        "Successfully executed event projects for clients including PPMaritim Indonesia, PPMaritim Sumsel, Putra Putri Sriwijaya."
      ],
      logo: "/icons/skills.png",
      skills: ["React", "Laravel", "Kotlin", "MySQL", "MongoDB", "Midtrans", "CI/CD"]
    },
    {
      title: "Web Developer (Part Time)",
      company: "PT Fata Organa Solusi",
      date: "December 2023 - June 2024",
      description: [
        "Developed Fullstack Web App with ASP.Net, React, and SQL Server (including Frontend and API Services with Azure Services) for Pondering Circle Project.",
        "Assisted full-time engineers in bug fixing critical features (voting logic, UI behaviors).",
        "Optimized code quality and stability, reducing average bug rate from 30% to 5% per sprint."
      ],
      logo: "/icons/fata_organa.jpeg",
      skills: ["ASP.NET", "React", "SQL Server", "Azure", "SDLC"]
    },
    {
      title: "Software Engineer (Internship)",
      company: "PT Suitmedia Kreasi Indonesia",
      date: "May 2023 - November 2023",
      description: [
        "Developed KLAR Smile Company's official API and CMS website using Laravel, Nginx, MySQL, and Docker.",
        "Optimized database queries and backend performance, reducing latency by 30%."
      ],
      logo: "/icons/suitmedia.png",
      skills: ["Laravel", "Nginx", "MySQL", "Docker", "API Development"]
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
                My career journey as a Software Engineer with expertise in backend development,
                distributed systems, LLM optimization, and full-stack web applications.
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