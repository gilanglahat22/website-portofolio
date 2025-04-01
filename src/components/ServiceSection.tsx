"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import MacOSWindow from './MacOSWindow';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  bgColor: string;
}

const ServiceCard = ({ title, description, icon, bgColor }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      className={`
        relative 
        p-6 
        rounded-2xl 
        ${bgColor}
        overflow-hidden
        transition-all duration-300
        ${isHovered ? 'shadow-lg scale-[1.02]' : 'shadow-md'} 
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Floating icon */}
      <div className={`
        w-14 h-14
        rounded-2xl
        bg-white/20
        backdrop-blur-md
        flex items-center justify-center
        mb-5
        border border-white/30
        shadow-sm
        transition-all duration-300
        ${isHovered ? 'transform -translate-y-1' : ''}
      `}>
        <Image
          src={icon}
          alt={title}
          width={32}
          height={32}
          className="object-contain"
        />
      </div>
      
      {/* Content */}
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-white/80 text-sm">{description}</p>
      
      {/* Floating Orb Decoration */}
      <div className={`
        absolute -right-12 -bottom-12
        w-40 h-40
        rounded-full
        bg-gradient-to-tr from-white/10 to-white/5
        blur-2xl
        transition-all duration-500
        ${isHovered ? 'opacity-90 scale-110' : 'opacity-60'}
      `}/>
    </div>
  );
};

export default function ServiceSection() {
  const services = [
    {
      title: "UI/UX Design",
      description: "Creating intuitive and engaging user interfaces with a focus on user experience and aesthetics.",
      icon: "https://cdn-icons-png.flaticon.com/128/9421/9421426.png",
      bgColor: "bg-gradient-to-br from-purple-600 to-indigo-700"
    },
    {
      title: "Frontend Development",
      description: "Building responsive and performant web applications using modern frontend technologies.",
      icon: "https://cdn-icons-png.flaticon.com/128/8688/8688382.png",
      bgColor: "bg-gradient-to-br from-blue-600 to-blue-800"
    },
    {
      title: "Mobile Apps",
      description: "Developing cross-platform mobile applications with a native feel and optimal performance.",
      icon: "https://cdn-icons-png.flaticon.com/128/545/545245.png",
      bgColor: "bg-gradient-to-br from-green-600 to-green-800"
    },
    {
      title: "Code Reviews",
      description: "Providing thorough code reviews to ensure quality, maintainability, and best practices.",
      icon: "https://cdn-icons-png.flaticon.com/128/9741/9741157.png",
      bgColor: "bg-gradient-to-br from-amber-600 to-orange-700"
    }
  ];
  
  return (
    <MacOSWindow title="Services I Offer" variant="dark">
      <div className="space-y-6">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-white mb-1">Services I Provide</h2>
          <p className="text-gray-300">Specializing in the following areas</p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              bgColor={service.bgColor}
            />
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="mt-8 flex justify-center">
          <button className="
            px-6 py-3
            bg-white/10
            hover:bg-white/20
            backdrop-blur-md
            rounded-full
            text-white
            font-medium
            border border-white/20
            transition-all
            hover:shadow-lg
          ">
            Discuss Your Project
          </button>
        </div>
      </div>
    </MacOSWindow>
  );
} 