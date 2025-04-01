"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import AppleDock from '@/components/AppleDock';
import MacOSWindow from '@/components/MacOSWindow';

// @ts-ignore
const TimelineItem = ({ title, company, date, description, logo, skills, isActive }) => {
  const [isOpen, setIsOpen] = useState(isActive);
  
  return (
    // @ts-ignore
    <div className={`
      mb-8 relative border-l-2
      ${isOpen ? 'border-blue-500' : 'border-gray-700'}
      pl-6
    `}>
      {/* Timeline dot */}
      {/* @ts-ignore */}
      <div className={`
        absolute -left-[9px] mt-1.5
        h-4 w-4 rounded-full 
        ${isOpen ? 'bg-blue-500 ring-4 ring-blue-500/20' : 'bg-gray-700'} 
      `}></div>
      
      {/* Content card */}
      {/* @ts-ignore */}
      <div 
        className={`
          p-6 rounded-xl transition-all duration-300
          ${isOpen ? 'bg-white/10 backdrop-blur-md shadow-lg' : 'bg-gray-800/60 hover:bg-gray-800/80'} 
        `}
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Header */}
        {/* @ts-ignore */}
        <div className="flex items-start justify-between mb-4">
          {/* Company logo & title */}
          {/* @ts-ignore */}
          <div className="flex items-center">
            {/* @ts-ignore */}
            <div className="w-12 h-12 bg-white/10 rounded-lg mr-4 overflow-hidden flex items-center justify-center">
              <Image 
                src={logo} 
                alt={company} 
                width={40} 
                height={40}
                className="object-contain"
              />
            </div>
            {/* @ts-ignore */}
            <div>
              {/* @ts-ignore */}
              <h3 className="text-xl font-bold text-white">{title}</h3>
              {/* @ts-ignore */}
              <div className="flex items-center text-gray-300">
                {/* @ts-ignore */}
                <span className="font-medium">{company}</span>
                {/* @ts-ignore */}
                <span className="mx-2">•</span>
                {/* @ts-ignore */}
                <span className="text-sm">{date}</span>
              </div>
            </div>
          </div>
          
          {/* Toggle button */}
          {/* @ts-ignore */}
          <button 
            className={`
              p-2 rounded-full transition-colors
              ${isOpen ? 'text-blue-400 hover:bg-blue-500/10' : 'text-gray-400 hover:bg-gray-700'}
            `}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
        
        {/* Expanded content */}
        {isOpen && (
          // @ts-ignore
          <div className="mt-4 space-y-4 text-gray-300">
            {/* Description */}
            {/* @ts-ignore */}
            <div className="space-y-2">
              {description.map((item, index) => (
                // @ts-ignore
                <p key={index} className="flex items-start">
                  {/* @ts-ignore */}
                  <span className="inline-block w-4 h-4 mr-2 mt-1 text-blue-400">•</span>
                  {item}
                </p>
              ))}
            </div>
            
            {/* Skills */}
            {/* @ts-ignore */}
            <div className="flex flex-wrap gap-2 mt-4">
              {skills.map((skill, index) => (
                // @ts-ignore
                <span 
                  key={index} 
                  className="px-3 py-1 bg-gray-700/60 backdrop-blur-sm text-xs font-medium rounded-full text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// @ts-ignore
export default function Experience() {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "TechFusion Inc.",
      date: "2022 - Present",
      description: [
        "Lead frontend development for enterprise SaaS platform serving 20,000+ users.",
        "Architected and implemented component system using React, TypeScript and TailwindCSS.",
        "Improved application performance by 40% through code optimization and lazy loading.",
        "Mentored junior developers and conducted code reviews to ensure best practices."
      ],
      logo: "https://randomuser.me/api/portraits/men/1.jpg", // placeholder
      skills: ["React", "TypeScript", "Next.js", "Redux", "TailwindCSS", "Performance Optimization"],
      isActive: true
    },
    {
      title: "Frontend Developer",
      company: "Digital Wave Solutions",
      date: "2020 - 2022",
      description: [
        "Developed responsive web applications for clients across various industries.",
        "Created interactive UI components and animations enhancing user experience.",
        "Collaborated with UX designers to implement pixel-perfect designs.",
        "Integrated RESTful APIs and managed state with Redux."
      ],
      logo: "https://randomuser.me/api/portraits/women/2.jpg", // placeholder
      skills: ["React", "JavaScript", "CSS/SCSS", "RESTful APIs", "Git"],
      isActive: false
    },
    {
      title: "UI/UX Designer & Developer",
      company: "CreativeMinds Studio",
      date: "2018 - 2020",
      description: [
        "Designed user interfaces for mobile and web applications.",
        "Created wireframes, prototypes, and high-fidelity mockups.",
        "Implemented designs using HTML, CSS, and jQuery.",
        "Conducted user research and usability testing."
      ],
      logo: "https://randomuser.me/api/portraits/men/3.jpg", // placeholder
      skills: ["Figma", "Adobe XD", "HTML/CSS", "UI/UX Design", "JavaScript"],
      isActive: false
    },
    {
      title: "Junior Web Developer",
      company: "StarTech Innovations",
      date: "2017 - 2018",
      description: [
        "Developed and maintained company website and client projects.",
        "Built responsive layouts using Bootstrap and custom CSS.",
        "Worked with PHP and MySQL to create dynamic web applications.",
        "Assisted senior developers in troubleshooting and debugging."
      ],
      logo: "https://randomuser.me/api/portraits/women/4.jpg", // placeholder
      skills: ["HTML/CSS", "JavaScript", "PHP", "MySQL", "Bootstrap"],
      isActive: false
    }
  ];

  return (
    // @ts-ignore
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Main Content */}
      {/* @ts-ignore */}
      <main className="pt-8 px-6 pb-32">
        {/* @ts-ignore */}
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <MacOSWindow title="My Experience" variant="dark">
            {/* @ts-ignore */}
            <div className="space-y-4">
              {/* @ts-ignore */}
              <h1 className="text-3xl font-bold text-white">Professional Experience</h1>
              {/* @ts-ignore */}
              <p className="text-gray-300">
                My career journey in technology, showcasing roles where I've contributed to innovative digital solutions.
              </p>
            </div>
          </MacOSWindow>
          
          {/* Stats Cards */}
          {/* @ts-ignore */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <MacOSWindow title="Years of Experience" variant="light" className="h-full">
              {/* @ts-ignore */}
              <div className="flex flex-col items-center justify-center p-6 text-center">
                {/* @ts-ignore */}
                <span className="text-5xl font-bold text-blue-600">5+</span>
                {/* @ts-ignore */}
                <p className="text-gray-600 mt-2">Years in the technology industry</p>
              </div>
            </MacOSWindow>
            
            <MacOSWindow title="Companies" variant="light" className="h-full">
              {/* @ts-ignore */}
              <div className="flex flex-col items-center justify-center p-6 text-center">
                {/* @ts-ignore */}
                <span className="text-5xl font-bold text-purple-600">4</span>
                {/* @ts-ignore */}
                <p className="text-gray-600 mt-2">Companies I've worked with</p>
              </div>
            </MacOSWindow>
            
            <MacOSWindow title="Projects Completed" variant="light" className="h-full">
              {/* @ts-ignore */}
              <div className="flex flex-col items-center justify-center p-6 text-center">
                {/* @ts-ignore */}
                <span className="text-5xl font-bold text-green-600">30+</span>
                {/* @ts-ignore */}
                <p className="text-gray-600 mt-2">Successful projects delivered</p>
              </div>
            </MacOSWindow>
          </div>
          
          {/* Experience Timeline */}
          <MacOSWindow title="Work History" variant="dark">
            {/* @ts-ignore */}
            <div className="p-2">
              {experiences.map((experience, index) => (
                <TimelineItem
                  key={index}
                  title={experience.title}
                  company={experience.company}
                  date={experience.date}
                  description={experience.description}
                  logo={experience.logo}
                  skills={experience.skills}
                  isActive={experience.isActive}
                />
              ))}
            </div>
          </MacOSWindow>
          
          {/* Recommendations */}
          <MacOSWindow title="Recommendations" variant="light">
            {/* @ts-ignore */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Recommendation Card */}
              {/* @ts-ignore */}
              <div className="bg-gray-100 p-6 rounded-xl border border-gray-200">
                {/* @ts-ignore */}
                <div className="flex items-center mb-4">
                  <Image 
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Alex Johnson"
                    width={48}
                    height={48}
                    className="rounded-full mr-4"
                  />
                  {/* @ts-ignore */}
                  <div>
                    {/* @ts-ignore */}
                    <h3 className="font-semibold text-gray-900">Alex Johnson</h3>
                    {/* @ts-ignore */}
                    <p className="text-gray-600 text-sm">CTO at TechFusion</p>
                  </div>
                </div>
                {/* @ts-ignore */}
                <p className="text-gray-700 italic">
                  "An exceptional developer who consistently delivers high-quality work. Their technical expertise and problem-solving abilities have been instrumental to our team's success."
                </p>
              </div>
              
              {/* Recommendation Card */}
              {/* @ts-ignore */}
              <div className="bg-gray-100 p-6 rounded-xl border border-gray-200">
                {/* @ts-ignore */}
                <div className="flex items-center mb-4">
                  <Image 
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="Sarah Miller"
                    width={48}
                    height={48}
                    className="rounded-full mr-4"
                  />
                  {/* @ts-ignore */}
                  <div>
                    {/* @ts-ignore */}
                    <h3 className="font-semibold text-gray-900">Sarah Miller</h3>
                    {/* @ts-ignore */}
                    <p className="text-gray-600 text-sm">Design Lead at Digital Wave</p>
                  </div>
                </div>
                {/* @ts-ignore */}
                <p className="text-gray-700 italic">
                  "A true professional with a keen eye for detail. They bridged the gap between design and development flawlessly, creating outstanding user experiences."
                </p>
              </div>
            </div>
          </MacOSWindow>
        </div>
      </main>
      
      {/* Apple-style Dock at the bottom */}
      <AppleDock />
    </div>
  );
} 