"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useSpring, animated } from '@react-spring/web';

export default function AppleHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  
  // Track mouse position for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMousePosition({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Check if element is in view
  useEffect(() => {
    const currentRef = heroRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Spring animations
  const titleAnimation = useSpring({
    opacity: isInView ? 1 : 0,
    transform: isInView ? 'translateY(0)' : 'translateY(20px)',
    config: { mass: 1, tension: 180, friction: 12 },
    delay: 100,
  });

  const subtitleAnimation = useSpring({
    opacity: isInView ? 1 : 0,
    transform: isInView ? 'translateY(0)' : 'translateY(20px)',
    config: { mass: 1, tension: 180, friction: 12 },
    delay: 400,
  });

  const buttonAnimation = useSpring({
    opacity: isInView ? 1 : 0,
    transform: isInView ? 'translateY(0)' : 'translateY(20px)',
    config: { mass: 1, tension: 180, friction: 12 },
    delay: 700,
  });

  // Calculate parallax translation based on mouse position
  const getTransform = (factor: number) => {
    const x = (mousePosition.x - 0.5) * factor;
    const y = (mousePosition.y - 0.5) * factor;
    return `translate3d(${x}px, ${y}px, 0)`;
  };
  
  return (
    <section 
      ref={heroRef} 
      className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 min-h-[520px] md:min-h-[700px] mb-12"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Background circles - Apple style */}
        <div 
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-blue-500 opacity-10"
          style={{ transform: getTransform(20) }}
        ></div>
        <div 
          className="absolute bottom-20 -left-20 w-72 h-72 rounded-full bg-purple-500 opacity-10"
          style={{ transform: getTransform(15) }}
        ></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), 
                              linear-gradient(to bottom, white 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-12 md:py-24 flex flex-col justify-center h-full">
        <div className="max-w-3xl">
          <animated.h1 
            style={titleAnimation}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8"
          >
            Bringing UI Engineering
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              {" "}to Life
            </span>
          </animated.h1>
          
          <animated.p 
            style={subtitleAnimation}
            className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed"
          >
            I bring digital experiences to life with modern frontend technologies
            and pixel-perfect design implementation.
          </animated.p>
          
          <animated.div style={buttonAnimation} className="flex gap-4">
            <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-medium hover:shadow-lg transition-all transform hover:-translate-y-1">
              View My Work
            </button>
            <button className="bg-transparent border border-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all">
              Contact Me
            </button>
          </animated.div>
        </div>
      </div>
      
      {/* Floating 3D elements - Apple style */}
      <div 
        className="absolute right-10 bottom-0 w-72 h-72 md:w-96 md:h-96"
        style={{ transform: getTransform(-30) }}
      >
        <div className="w-full h-full relative">
          {/* We'll display a 3D shape here for visual interest */}
          <div className="absolute w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl top-10 right-10" 
               style={{ transform: 'rotateX(30deg) rotateY(-30deg)', boxShadow: '0 15px 35px rgba(0,0,0,0.3)' }}></div>
          <div className="absolute w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full top-40 right-40"
               style={{ transform: 'translateZ(20px)', boxShadow: '0 15px 35px rgba(0,0,0,0.3)' }}></div>
          <div className="absolute w-20 h-20 bg-gradient-to-br from-amber-400 to-red-500 rounded-lg top-20 left-20 rotate-45"
               style={{ transform: 'rotateX(-20deg) rotateY(20deg)', boxShadow: '0 15px 35px rgba(0,0,0,0.3)' }}></div>
        </div>
      </div>
    </section>
  );
} 