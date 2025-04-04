"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AppleDock from '@/components/AppleDock';
import MacOSWindow from '@/components/MacOSWindow';
import { useTheme } from '@/contexts/ThemeContext';

// Define blog post type
interface BlogPost {
  title: string;
  slug: string;
  date: string;
  readTime: number;
  excerpt: string;
  categories: string[];
  featuredImage: string;
}

const BlogPostCard = ({ post }: { post: BlogPost }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="mb-6 transition-all duration-300 ease-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <MacOSWindow 
        title={post.title} 
        variant="system"
        className={`h-full transition-all duration-300 ${isHovered ? 'shadow-lg' : 'shadow-md'}`}
      >
        <div className="space-y-3 sm:space-y-4">
          {/* Featured Image */}
          {post.featuredImage && (
            <div className="relative h-36 xs:h-40 sm:h-48 overflow-hidden rounded-lg">
              <Image
                src={post.featuredImage}
                alt={post.title}
                width={800}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          )}
          
          {/* Post Info */}
          <div className="space-y-2">
            <div className="flex items-center space-x-4">
              <span className="text-sm">{post.date}</span>
              <span className="text-sm">{post.readTime} min read</span>
            </div>
            
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-sm">{post.excerpt}</p>
            
            {/* Categories */}
            <div className="flex flex-wrap gap-2 pt-2">
              {post.categories.map((category) => (
                <span 
                  key={category}
                  className="card px-2 py-1 text-xs rounded-full"
                >
                  {category}
                </span>
              ))}
            </div>
            
            {/* Read More Link */}
            <Link 
              href={`/blog/${post.slug}`}
              className="card inline-block mt-4 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 hover:text-white transition-colors"
            >
              Read More
            </Link>
          </div>
        </div>
      </MacOSWindow>
    </div>
  );
};

export default function Blog() {
  const { theme } = useTheme();
  
  // Sample blog posts data
  const posts: BlogPost[] = [
    {
      title: "Building a Theme-Aware Portfolio with Next.js",
      slug: "theme-aware-portfolio",
      date: "March 15, 2024",
      readTime: 8,
      excerpt: "Learn how to create a beautiful, theme-aware portfolio website using Next.js, Tailwind CSS, and Framer Motion.",
      categories: ["Next.js", "React", "TypeScript"],
      featuredImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Mastering React Server Components",
      slug: "react-server-components",
      date: "March 10, 2024",
      readTime: 12,
      excerpt: "Deep dive into React Server Components and how they can improve your application's performance.",
      categories: ["React", "Performance", "Web Development"],
      featuredImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "The Power of Tailwind CSS",
      slug: "power-of-tailwind",
      date: "March 5, 2024",
      readTime: 6,
      excerpt: "Discover why Tailwind CSS has become the go-to utility-first framework for modern web development.",
      categories: ["CSS", "Tailwind", "Design"],
      featuredImage: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  return (
    <div className="min-h-screen">
      <main className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Header */}
        <MacOSWindow title="Blog" variant="system" className="mb-8">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">My Blog</h1>
            <p>
              Thoughts, tutorials, and insights about web development, design, and technology.
            </p>
          </div>
        </MacOSWindow>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      </main>
      
      <AppleDock />
    </div>
  );
} 