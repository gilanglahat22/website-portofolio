"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/contexts/ThemeContext';

interface DockItem {
  name: string;
  icon: string;
  href: string;
}

interface Props {
  items?: DockItem[];
  className?: string;
}

const AppleDock = ({ items = [], className = '' }: Props) => {
  // Try to use Theme context but fallback gracefully if not available
  let theme = "light";
  
  try {
    const themeContext = useTheme();
    if (themeContext) {
      theme = themeContext.theme;
    }
  } catch (error) {
    console.log("ThemeContext not available in AppleDock, using fallback");
  }
  
  const [mounted, setMounted] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const pathname = usePathname();

  // Wait until after client-side hydration to enable animations
  useEffect(() => {
    setMounted(true);
  }, []);

  // Calculate scale for each item based on distance from hovered item
  const getScale = (index: number) => {
    if (!mounted || hoveredIndex === null) return 1;
    const distance = Math.abs(hoveredIndex - index);
    if (distance > 2) return 1;
    return 1 + (0.5 * (1 - distance / 2));
  };

  const handleImageError = (iconPath: string) => {
    console.error(`Failed to load image: ${iconPath}`);
    setImageErrors(prev => ({ ...prev, [iconPath]: true }));
  };

  // Generate fallback icon if the image fails to load
  const FallbackIcon = ({ name }: { name: string }) => {
    // Get first letter of name for fallback
    const initial = name.charAt(0).toUpperCase();
    const getRandomColor = () => {
      const colors = ['#4F46E5', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];
      const hash = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
      return colors[hash % colors.length];
    };

    return (
      <div 
        className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg"
        style={{ backgroundColor: getRandomColor() }}
      >
        {initial}
      </div>
    );
  };

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className={`fixed bottom-4 left-1/2 -translate-x-1/2 ${className}`}>
      <div className="relative">
        {/* Dock Background */}
        <div className={`absolute inset-0 backdrop-blur-xl rounded-2xl shadow-2xl border transition-colors duration-300
          ${theme === 'dark' ? 'bg-white/10 border-white/20' : 'bg-black/10 border-black/10'}`} />
        
        {/* Dock Items */}
        <div className="relative flex items-end gap-2 px-4 py-2">
          {items.map((item, index) => {
            const isActive = pathname === item.href;
            
            return (
              <Link
                key={item.name}
                href={item.href}
                className="group relative flex flex-col items-center"
                onMouseEnter={() => mounted && setHoveredIndex(index)}
                onMouseLeave={() => mounted && setHoveredIndex(null)}
              >
                {/* Icon */}
                <div
                  className="relative transition-all duration-150 ease-in-out"
                  style={{
                    transform: mounted ? `scale(${getScale(index)})` : 'scale(1)',
                    transformOrigin: 'bottom'
                  }}
                >
                  <div className="w-12 h-12 relative flex items-center justify-center">
                    {imageErrors[item.icon] ? (
                      <FallbackIcon name={item.name} />
                    ) : (
                      <img
                        src={item.icon}
                        alt={item.name}
                        className={`w-full h-full object-contain transition-opacity duration-300 ${theme === 'light' ? 'invert' : ''}`}
                        onError={() => handleImageError(item.icon)}
                      />
                    )}
                  </div>
                  
                  {/* Dot Indicator for Active Link */}
                  <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full transition-opacity
                    ${theme === 'dark' ? 'bg-white/50' : 'bg-black/50'}
                    ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} 
                  />
                </div>
                
                {/* Tooltip */}
                {mounted && (
                  <div className={`absolute -top-8 left-1/2 -translate-x-1/2 px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-sm
                    ${theme === 'dark' ? 'bg-gray-800/90 text-white' : 'bg-white/90 text-gray-800'}`}>
                    {item.name}
                  </div>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AppleDock; 