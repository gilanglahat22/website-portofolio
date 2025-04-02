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
  
  // Sample photo gallery data
  const photos = [
    {
      id: 1,
      title: "Project Showcase",
      description: "Presenting at the annual tech conference",
      imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 2,
      title: "Team Collaboration",
      description: "Working with my team on a new project",
      imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 3,
      title: "Code Workshop",
      description: "Leading a workshop on modern web development",
      imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 4,
      title: "Design Process",
      description: "Sketching UI designs for a client project",
      imageUrl: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 5,
      title: "Remote Work",
      description: "My productive home office setup",
      imageUrl: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 6,
      title: "Hackathon Winner",
      description: "Celebrating after winning the regional hackathon",
      imageUrl: "https://images.unsplash.com/photo-1525422847952-7f91db09a364?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
  ];
  
  return (
    <div className="min-h-screen">
      <main className="pt-8 px-6 pb-32">
        <div className="max-w-6xl mx-auto">
          <MacOSWindow title="About Me" variant="system">
            <div className="flex border-b mb-8">
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
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" 
                        alt="Profile Photo"
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    <div className="space-y-3">
                      <div className="card p-3 rounded-lg">
                        <h3 className="font-medium">Location</h3>
                        <p>Jambi, Indonesia</p>
                      </div>
                      
                      <div className="card p-3 rounded-lg">
                        <h3 className="font-medium">Email</h3>
                        <p>contact@example.com</p>
                      </div>
                      
                      <div className="card p-3 rounded-lg">
                        <h3 className="font-medium">Experience</h3>
                        <p>3+ years</p>
                      </div>
                      
                      <div className="card p-3 rounded-lg">
                        <h3 className="font-medium">Languages</h3>
                        <p>English, Indonesian</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-medium mb-4">My Journey</h3>
                    <p className="mb-4">
                      I'm a passionate developer with 3+ years of experience creating modern and responsive websites and mobile applications. 
                      My journey began during my college years when I started exploring web development, which then evolved into a profound 
                      interest in mobile development.
                    </p>
                    
                    <p className="mb-6">
                      I specialize in Android development using Kotlin and also have experience with web technologies 
                      like React, Next.js, and Tailwind CSS.
                    </p>
                    
                    <h3 className="text-xl font-medium mb-4">Professional Experience</h3>
                    <div className="space-y-4 mb-6">
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-medium">Mobile Development Cohort</h4>
                        <p className="text-sm mb-1">Bangkit Academy | 2023</p>
                        <p>Participated in a prestigious program led by Google, Tokopedia, Gojek & Traveloka. Developed Android applications using Kotlin and modern architecture components.</p>
                      </div>
                      
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-medium">Mobile Developer</h4>
                        <p className="text-sm mb-1">PT. Amman Karya Indonesia | 2023</p>
                        <p>Developed mobile applications for clients using Kotlin and integrating with back-end services.</p>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-medium mb-4">Skills</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                      {['Kotlin', 'Android', 'Jetpack Compose', 'Room Database', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'Git', 'Agile', 'Problem Solving', 'UI/UX'].map((skill) => (
                        <div key={skill} className="card p-2 rounded-lg text-center border border-blue-100">
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                    
                    <h3 className="text-xl font-medium mb-4">Education</h3>
                    <div className="space-y-3">
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-medium">Computer Science</h4>
                        <p>Universitas Jambi</p>
                      </div>
                      
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-medium">Android Development Certification</h4>
                        <p>Bangkit Academy, 2023</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : activeTab === 'photos' ? (
              <div>
                <h2 className="text-3xl font-semibold mb-6">Photo Gallery</h2>
                <p className="mb-8">A glimpse into my professional journey and work environment.</p>
                
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
                    My journey into the world of programming began during my high school years when I first discovered the power of creating software. What started as a hobby quickly developed into a passion that guided my educational and career path.
                  </p>
                  
                  <p>
                    With a focus on mobile development, I've had the opportunity to work on a variety of projects, from small utility apps to enterprise-level solutions. Each project has added to my skill set and deepened my understanding of software architecture and user experience design.
                  </p>
                  
                  <p>
                    I'm particularly interested in the intersection of technology and daily life - creating applications that solve real problems and enhance how people interact with their devices and each other.
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
                    <h4 className="font-medium text-lg mb-2">Innovation</h4>
                    <p>
                      I'm constantly exploring new technologies and approaches to solve problems more efficiently.
                    </p>
                  </div>
                  
                  <div className="card p-4 rounded-lg">
                    <div className="text-green-500 mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h4 className="font-medium text-lg mb-2">Collaboration</h4>
                    <p>
                      I believe in the power of teamwork and diverse perspectives to create exceptional products.
                    </p>
                  </div>
                  
                  <div className="card p-4 rounded-lg">
                    <div className="text-purple-500 mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                      </svg>
                    </div>
                    <h4 className="font-medium text-lg mb-2">Learning</h4>
                    <p>
                      I'm committed to continuous learning and staying current with the latest industry developments.
                    </p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-medium mb-4">Interests Beyond Code</h3>
                  <p>
                    When I'm not coding, you might find me exploring hiking trails, reading science fiction, or experimenting with new recipes in the kitchen. I believe that diverse interests fuel creativity and bring fresh perspectives to problem-solving.
                  </p>
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