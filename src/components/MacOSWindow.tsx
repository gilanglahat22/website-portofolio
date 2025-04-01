"use client";

import React, { useState } from 'react';

// @ts-ignore
interface MacOSWindowProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'light' | 'dark' | 'transparent';
  onClose?: () => void;
}

// @ts-ignore
const MacOSWindow: React.FC<MacOSWindowProps> = ({ 
  title, 
  children, 
  className = '',
  variant = 'light',
  onClose
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Background styles based on variant
  const getBgStyle = () => {
    switch(variant) {
      case 'dark':
        return 'bg-gray-900 text-white border-gray-700';
      case 'transparent':
        return 'bg-transparent border-white/30 text-white';
      case 'light':
      default:
        return 'bg-white text-gray-900 border-gray-200';
    }
  };
  
  return (
    // @ts-ignore
    <div 
      className={`rounded-xl overflow-hidden border shadow-lg ${getBgStyle()} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Window Header */}
      {/* @ts-ignore */}
      <div className="flex items-center p-3 border-b border-inherit">
        {/* Traffic Light Controls */}
        {/* @ts-ignore */}
        <div className="flex space-x-2 mr-4">
          {/* Close Button */}
          {/* @ts-ignore */}
          <button 
            onClick={onClose}
            className={`w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors ${onClose ? 'cursor-pointer' : 'cursor-default'}`}
            aria-label="Close window"
          />
          {/* Minimize Button */}
          {/* @ts-ignore */}
          <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors" />
          {/* Maximize Button */}
          {/* @ts-ignore */}
          <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors" />
        </div>
        
        {/* Window Title */}
        {/* @ts-ignore */}
        <div className="flex-1 text-center">
          {/* @ts-ignore */}
          <h3 className="text-sm font-medium truncate">{title}</h3>
        </div>
        
        {/* Right spacing to balance the traffic lights */}
        {/* @ts-ignore */}
        <div className="w-14" />
      </div>
      
      {/* Window Content */}
      {/* @ts-ignore */}
      <div className="p-4">
        {children}
      </div>
    </div>
  );
};

export default MacOSWindow; 