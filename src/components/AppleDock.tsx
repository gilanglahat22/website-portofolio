"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/contexts/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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
    const maxDistance = 2; // Maximum distance to affect scaling
    if (distance > maxDistance) return 1;
    
    // Smooth scaling function
    const scale = 1 + (1 - distance / maxDistance) * 0.5;
    return scale;
  };

  const handleImageError = (iconPath: string) => {
    console.error(`Failed to load image: ${iconPath}`);
    setImageErrors(prev => ({ ...prev, [iconPath]: true }));
  };

  // Generate fallback icon if the image fails to load
  const FallbackIcon = ({ name }: { name: string }) => {
    const initial = name.charAt(0).toUpperCase();
    const getRandomColor = () => {
      const colors = ['#4F46E5', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];
      const hash = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
      return colors[hash % colors.length];
    };

    return (
      <div 
        className="w-8 h-8 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-white font-bold text-xs sm:text-lg"
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
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className={`fixed bottom-2 sm:bottom-4 left-0 right-0 mx-auto z-50 w-fit ${className}`}
    >
      <div className="relative">
        {/* Dock Background */}
        <motion.div 
          className={`absolute inset-0 backdrop-blur-xl rounded-2xl shadow-2xl border transition-colors duration-300
            ${theme === 'dark' ? 'bg-white/10 border-white/20' : 'bg-black/10 border-black/10'}`}
          layoutId="dock-bg"
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        />
        
        {/* Dock Items */}
        <div className="relative flex items-end gap-1 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2">
          {items.map((item, index) => {
            const isActive = pathname === item.href;
            
            return (
              <motion.div
                key={item.name}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  delay: index * 0.05 
                }}
              >
                <Link
                  href={item.href}
                  className="group relative flex flex-col items-center"
                  onMouseEnter={() => mounted && setHoveredIndex(index)}
                  onMouseLeave={() => mounted && setHoveredIndex(null)}
                >
                  {/* Icon */}
                  <motion.div
                    className="relative transition-all"
                    animate={{ 
                      scale: getScale(index),
                      y: hoveredIndex === index ? -8 : 0
                    }}
                    transition={{ 
                      type: "spring",
                      stiffness: 400,
                      damping: 20
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="w-8 h-8 sm:w-12 sm:h-12 relative flex items-center justify-center">
                      {imageErrors[item.icon] ? (
                        <FallbackIcon name={item.name} />
                      ) : (
                        <motion.img
                          src={item.icon}
                          alt={item.name}
                          className={`w-full h-full object-contain transition-opacity duration-300 ${theme === 'light' ? 'invert' : ''}`}
                          onError={() => handleImageError(item.icon)}
                          whileHover={{ rotate: [0, -10, 10, -5, 5, 0] }}
                          transition={{ duration: 0.5 }}
                        />
                      )}
                    </div>
                    
                    {/* Dot Indicator for Active Link */}
                    <motion.div 
                      className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full
                        ${theme === 'dark' ? 'bg-white/50' : 'bg-black/50'}`}
                      initial={{ scale: 0 }}
                      animate={{ 
                        scale: isActive ? 1 : 0,
                        opacity: isActive ? 1 : 0
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    />
                  </motion.div>
                  
                  {/* Tooltip - Hidden on small screens */}
                  <AnimatePresence>
                    {mounted && hoveredIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: -8 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className={`absolute -top-8 left-1/2 -translate-x-1/2 px-2 sm:px-3 py-0.5 sm:py-1 rounded-lg whitespace-nowrap text-xs sm:text-sm hidden sm:block
                          ${theme === 'dark' ? 'bg-gray-800/90 text-white' : 'bg-white/90 text-gray-800'}`}
                      >
                        {item.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default AppleDock; 