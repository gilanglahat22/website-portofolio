"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import AppleDock from '@/components/AppleDock';
import MacOSWindow from '@/components/MacOSWindow';
import { useTheme } from "@/contexts/ThemeContext";

export default function About() {
  const [activeTab, setActiveTab] = useState("profile");
  const { theme } = useTheme();

  // Updated photo gallery data
  const photos = [
    {
      id: 1,
      title: "Software Engineering",
      description: "Working on software development projects at Quantum Teknologi Nusantara",
      imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 2,
      title: "Competitive Programming",
      description: "ICPC Asia Jakarta Regional Finalist and Gemastik participant",
      imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 3,
      title: "Fullstack Development",
      description: "Building web applications with modern frameworks",
      imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 4,
      title: "Blockchain Research",
      description: "Working on Avalanche consensus protocol optimization using Microservices Architecture",
      imageUrl: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 5,
      title: "ITB Campus",
      description: "Studying at Bandung Institute of Technology",
      imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 6,
      title: "AI & Machine Learning",
      description: "LLM optimization and OCR services development",
      imageUrl: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
  ];

  return (
    <div className="min-h-screen">
      <main className="pt-8 px-6 pb-32">
        <div className="max-w-6xl mx-auto">
          <MacOSWindow title="About Me" variant="system">
            <div className="flex border-b mb-8 overflow-x-auto no-scrollbar">
              <button
                className={`py-3 px-6 font-medium ${activeTab === 'profile' ? 'border-b-2 border-blue-500 text-blue-500' : ''}`}
                onClick={() => setActiveTab('profile')}
              >
                Profile
              </button>
              <button
                className={`py-3 px-6 font-medium ${activeTab === 'photos' ? 'border-b-2 border-blue-500 text-blue-500' : ''}`}
                onClick={() => setActiveTab('photos')}
              >
                Photos
              </button>
              <button
                className={`py-3 px-6 font-medium ${activeTab === 'about' ? 'border-b-2 border-blue-500 text-blue-500' : ''}`}
                onClick={() => setActiveTab('about')}
              >
                About Me
              </button>
            </div>

            {activeTab === 'profile' ? (
              <div>
                <h2 className="text-3xl font-semibold mb-6">About Me</h2>

                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="card rounded-lg overflow-hidden w-full aspect-square mb-4 relative">
                      <Image
                        src="/main_profile.jpeg"
                        alt="Muhammad Gilang Ramadhan"
                        fill
                        className="object-cover object-top"
                      />
                    </div>

                    <div className="space-y-3">
                      <div className="card p-3 rounded-lg">
                        <h3 className="font-medium">Location</h3>
                        <p>West Jakarta, Jakarta, Indonesia</p>
                      </div>

                      <div className="card p-3 rounded-lg">
                        <h3 className="font-medium">Email</h3>
                        <p>muhgilangramadhan.3011@gmail.com</p>
                      </div>

                      <div className="card p-3 rounded-lg">
                        <h3 className="font-medium">Profiles</h3>
                        <p>LinkedIn | GitHub</p>
                      </div>

                      <div className="card p-3 rounded-lg">
                        <h3 className="font-medium">Languages</h3>
                        <p>Indonesian, English</p>
                      </div>
                    </div>
                  </div>

                  <div className="md:w-2/3">
                    <h3 className="text-xl font-medium mb-4">My Journey</h3>
                    <p className="mb-4">
                      I'm a passionate Software Engineer with expertise in backend engineering, distributed systems, and management systems, dedicated to delivering value through technology with several Competitive Programming experiences.
                    </p>

                    <p className="mb-6">
                      Currently working at Quantum Teknologi Nusantara, I architect and build OCR services using LLM optimization with clustering for the Nexius product. My research focuses on optimizing blockchain's Avalanche Consensus Protocol using Microservices Architecture.
                    </p>

                    <h3 className="text-xl font-medium mb-4">Professional Experience</h3>
                    <div className="space-y-4 mb-6">
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-medium">Software Engineer (Fulltime)</h4>
                        <p className="text-sm mb-1">Quantum Teknologi Nusantara | September 2025 - Present</p>
                        <p>Architecting OCR services using LLM optimization with Langchain for Nexius product, converting bank statements into structured accounting data.</p>
                      </div>

                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-medium">Fullstack Engineer (Freelance)</h4>
                        <p className="text-sm mb-1">One Code Solution | June 2025 - August 2025</p>
                        <p>Architected backend ecosystem for Philip Morris International, supporting multiple regional platforms using Domain-Driven Design and Template Pattern.</p>
                      </div>

                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-medium">R&D Team - Ransomware Detection (Apprenticeship)</h4>
                        <p className="text-sm mb-1">MarkAny | April 2025 - May 2025</p>
                        <p>Researched and developed EDR solutions with focus on IDS. Analyzed user behavior using BSSN dataset.</p>
                      </div>

                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-medium">Junior Software Engineer (Fulltime)</h4>
                        <p className="text-sm mb-1">PT Fata Organa Solusi | July 2024 - March 2025</p>
                        <p>PIC Assistant for Hashigake matching application, architecting multi-tenant system using .NET and React/TypeScript.</p>
                      </div>

                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-medium">Full Stack Developer (Freelance)</h4>
                        <p className="text-sm mb-1">Feline Labs | August 2023 - March 2025</p>
                        <p>Led development of Web Apps using React, Laravel, Kotlin with Payment Gateway integration. Executed projects for PPMaritim and others.</p>
                      </div>

                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-medium">Software Engineer (Internship)</h4>
                        <p className="text-sm mb-1">PT Suitmedia Kreasi Indonesia | May 2023 - November 2023</p>
                        <p>Developed KLAR Smile Company's API and CMS using Laravel, Nginx, MySQL, Docker. Optimized database queries, reducing latency by 30%.</p>
                      </div>
                    </div>

                    <h3 className="text-xl font-medium mb-4">Core Skills</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                      {[
                        'OOP', 'SOLID Design', 'Data Structures', 'Algorithms',
                        'Distributed Systems', 'Backend Engineering', 'System Design',
                        'Microservices', 'RESTful API', 'CI/CD', 'Cloud Computing',
                        'Machine Learning', 'LLM Optimization', 'Langchain'
                      ].map((skill) => (
                        <div key={skill} className="card p-2 rounded-lg text-center border border-blue-100 dark:border-blue-900">
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>

                    <h3 className="text-xl font-medium mb-4">Education</h3>
                    <div className="space-y-3">
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-medium">Bachelor of Informatics Engineering (IF)</h4>
                        <p>Bandung Institute of Technology (ITB)</p>
                        <p className="text-sm">September 2020 - October 2025 (Expected)</p>
                      </div>

                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-medium">Thesis</h4>
                        <p className="text-sm">Research on optimizing blockchain's Avalanche Consensus Protocol Optimization Using Microservices Architecture.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : activeTab === 'photos' ? (
              <div>
                <h2 className="text-3xl font-semibold mb-6">Photo Gallery</h2>
                <p className="mb-8">A glimpse into my professional journey in software engineering and competitive programming.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {photos.map((photo) => (
                    <div key={photo.id} className="card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                      <div className="relative h-64 w-full">
                        <Image
                          src={photo.imageUrl}
                          alt={photo.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium mb-1">{photo.title}</h3>
                        <p className="text-sm">{photo.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <h2 className="text-3xl font-semibold mb-2">My Story</h2>

                <div className="space-y-4">
                  <p>
                    My journey into software engineering began during my studies at Bandung Institute of Technology (ITB), where I'm specializing in Informatics Engineering. My thesis research focuses on optimizing blockchain's Avalanche consensus protocol using Microservices Architecture.
                  </p>

                  <p>
                    With a diverse background in software development, I've worked on a variety of projects from competitive programming challenges to enterprise applications. I've had the opportunity to work with companies like Quantum Teknologi Nusantara, One Code Solution, MarkAny, PT Fata Organa Solusi, Feline Labs, and PT Suitmedia Kreasi Indonesia.
                  </p>

                  <p>
                    I'm particularly interested in backend engineering, distributed systems, and LLM optimization, applying algorithmic principles to solve complex problems and optimize systems. My competitive programming achievements include being an ICPC Asia Jakarta Regional Finalist and reaching Top 7% in Meta Hacker Cup.
                  </p>
                </div>

                <h3 className="text-xl font-medium mt-8">What Drives Me</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="card p-4 rounded-lg">
                    <div className="text-blue-500 mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h4 className="font-medium text-lg mb-2">Technical Innovation</h4>
                    <p>
                      Constantly exploring new technologies like LLM optimization and distributed systems to create efficient software solutions.
                    </p>
                  </div>

                  <div className="card p-4 rounded-lg">
                    <div className="text-green-500 mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h4 className="font-medium text-lg mb-2">Competitive Excellence</h4>
                    <p>
                      Thrive in competitive environments - ICPC Asia Jakarta Finalist, Gemastik participant, and Meta Hacker Cup Top 7%.
                    </p>
                  </div>

                  <div className="card p-4 rounded-lg">
                    <div className="text-purple-500 mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                      </svg>
                    </div>
                    <h4 className="font-medium text-lg mb-2">Continuous Learning</h4>
                    <p>
                      Committed to expanding knowledge across technologies from blockchain consensus to machine learning and cloud computing.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </MacOSWindow>
        </div>
      </main>

      <AppleDock />
    </div>
  );
}