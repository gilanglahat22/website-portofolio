"use client";

import React, { useState } from 'react';
import Image from 'next/image';

// @ts-ignore
interface SkillCardProps {
  name: string;
  icon: string;
  color: string;
  level: number;
}

// @ts-ignore
const SkillCard = ({ name, icon, color, level }: SkillCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    // @ts-ignore
    <div
      className={`
        relative overflow-hidden
        p-4 rounded-2xl
        transition-all duration-300 ease-out
        ${isHovered ? 'scale-105 shadow-lg' : 'shadow-md'}
        ${color}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glass effect container */}
      {/* @ts-ignore */}
      <div className="relative z-10">
        {/* Icon */}
        {/* @ts-ignore */}
        <div className="flex items-center justify-center w-12 h-12 mb-3 rounded-xl bg-white/20 backdrop-blur">
          <Image
            src={icon}
            alt={name}
            width={32}
            height={32}
            className="object-contain"
          />
        </div>
        
        {/* Skill name */}
        {/* @ts-ignore */}
        <h3 className="font-medium text-white text-lg mb-1">{name}</h3>
        
        {/* Skill level */}
        {/* @ts-ignore */}
        <div className="flex space-x-1 mt-2">
          {[...Array(5)].map((_, i) => (
            // @ts-ignore
            <div
              key={i}
              className={`h-1.5 rounded-full ${i < level ? 'bg-white' : 'bg-white/30'} 
              ${i < level ? 'w-4' : 'w-3'} transition-all duration-300`}
            />
          ))}
        </div>
      </div>
      
      {/* Background decoration */}
      {/* @ts-ignore */}
      <div className={`
        absolute right-0 bottom-0 w-24 h-24 rounded-tl-3xl bg-white/10
        transition-all duration-300 ease-out
        ${isHovered ? 'scale-110 rotate-12' : 'scale-100 rotate-0'}
      `}/>
    </div>
  );
};

// @ts-ignore
export default function SkillsGrid() {
  const skills = [
    { name: 'Java', icon: '/icons/skills/java.svg', color: 'bg-gradient-to-br from-orange-600 to-orange-800', level: 5 },
    { name: 'Go', icon: '/icons/skills/go.svg', color: 'bg-gradient-to-br from-blue-400 to-blue-600', level: 5 },
    { name: 'TypeScript', icon: '/icons/skills/typescript.svg', color: 'bg-gradient-to-br from-blue-600 to-blue-800', level: 5 },
    { name: 'C/C++/C#', icon: '/icons/skills/cpp.svg', color: 'bg-gradient-to-br from-purple-600 to-purple-800', level: 5 },
    { name: 'PHP', icon: '/icons/skills/php.svg', color: 'bg-gradient-to-br from-indigo-500 to-purple-600', level: 4 },
    { name: 'Python', icon: '/icons/skills/python.svg', color: 'bg-gradient-to-br from-yellow-500 to-yellow-700', level: 4 },
    { name: 'SQL', icon: '/icons/skills/database.svg', color: 'bg-gradient-to-br from-cyan-500 to-cyan-700', level: 5 },
    { name: 'JavaScript', icon: '/icons/skills/javascript.svg', color: 'bg-gradient-to-br from-yellow-500 to-amber-600', level: 5 },
    { name: 'Kotlin', icon: '/icons/skills/kotlin.svg', color: 'bg-gradient-to-br from-purple-400 to-purple-600', level: 4 },
    { name: 'Rust', icon: '/icons/skills/rust.svg', color: 'bg-gradient-to-br from-orange-700 to-red-800', level: 4 },
    { name: 'Node.js', icon: '/icons/skills/nodejs.svg', color: 'bg-gradient-to-br from-green-600 to-green-800', level: 4 },
    { name: 'Docker', icon: '/icons/skills/docker.svg', color: 'bg-gradient-to-br from-blue-500 to-blue-700', level: 4 },
  ];

  return (
    // @ts-ignore
    <div className="space-y-6">
      {/* @ts-ignore */}
      <div className="flex justify-between items-center mb-6">
        {/* @ts-ignore */}
        <div>
          {/* @ts-ignore */}
          <h2 className="text-2xl font-semibold mb-1" style={{ color: "#042043" }}>Technical Skills</h2>
          {/* @ts-ignore */}
          <p className="text-gray-600 dark:text-gray-400">Programming Languages & Backend Development Technologies</p>
        </div>
        
        {/* @ts-ignore */}
        <div className="px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 text-xs font-medium flex items-center">
          5 = Expert&nbsp;&nbsp;•&nbsp;&nbsp;1 = Beginner
        </div>
      </div>
      
      {/* Skills grid */}
      {/* @ts-ignore */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <SkillCard
            key={skill.name}
            name={skill.name}
            icon={skill.icon}
            color={skill.color}
            level={skill.level}
          />
        ))}
      </div>
    </div>
  );
} 