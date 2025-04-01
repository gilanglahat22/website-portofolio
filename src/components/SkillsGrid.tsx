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
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: 'bg-gradient-to-br from-blue-500 to-blue-700', level: 5 },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', color: 'bg-gradient-to-br from-gray-700 to-gray-900', level: 5 },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: 'bg-gradient-to-br from-blue-600 to-blue-800', level: 4 },
    { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg', color: 'bg-gradient-to-br from-cyan-500 to-cyan-700', level: 5 },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: 'bg-gradient-to-br from-yellow-500 to-amber-600', level: 5 },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: 'bg-gradient-to-br from-green-600 to-green-800', level: 4 },
    { name: 'GraphQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg', color: 'bg-gradient-to-br from-pink-600 to-pink-800', level: 3 },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: 'bg-gradient-to-br from-blue-400 to-blue-600', level: 3 },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', color: 'bg-gradient-to-br from-orange-600 to-orange-800', level: 4 },
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', color: 'bg-gradient-to-br from-purple-500 to-purple-700', level: 4 },
    { name: 'Redux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg', color: 'bg-gradient-to-br from-indigo-600 to-indigo-800', level: 4 },
    { name: 'Testing', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg', color: 'bg-gradient-to-br from-red-500 to-red-700', level: 3 },
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
          <p className="text-gray-600 dark:text-gray-400">Technologies I work with regularly</p>
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