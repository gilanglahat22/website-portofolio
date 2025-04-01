"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AppleDock from '@/components/AppleDock';
import MacOSWindow from '@/components/MacOSWindow';

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

// @ts-ignore
const BlogPostCard = ({ post }: { post: BlogPost }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    // @ts-ignore
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
        {/* @ts-ignore */}
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
          
          {/* Post Meta */}
          {/* @ts-ignore */}
          <div className="flex items-center text-xs sm:text-sm text-gray-500">
            {/* @ts-ignore */}
            <span>{post.date}</span>
            {/* @ts-ignore */}
            <span className="mx-2">•</span>
            {/* @ts-ignore */}
            <span>{post.readTime} min read</span>
          </div>
          
          {/* Post Content */}
          {/* @ts-ignore */}
          <div>
            {/* @ts-ignore */}
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">{post.title}</h2>
            {/* @ts-ignore */}
            <p className="text-sm sm:text-base text-gray-600 line-clamp-3">{post.excerpt}</p>
          </div>
          
          {/* Categories & Read More */}
          {/* @ts-ignore */}
          <div className="flex flex-wrap xs:flex-nowrap items-center justify-between gap-2">
            {/* Categories */}
            {/* @ts-ignore */}
            <div className="flex flex-wrap gap-1 sm:gap-2">
              {post.categories.map((category: string, index: number) => (
                // @ts-ignore
                <span 
                  key={index} 
                  className="inline-block px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] xs:text-xs rounded-full bg-gray-100 text-gray-700"
                >
                  {category}
                </span>
              ))}
            </div>
            
            {/* Read More Link */}
            {/* @ts-ignore */}
            <Link 
              href={`/blog/${post.slug}`}
              className="text-blue-600 hover:text-blue-800 font-medium text-xs sm:text-sm flex items-center gap-1 transition-colors whitespace-nowrap"
            >
              Read more
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block sm:w-4 sm:h-4">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </MacOSWindow>
    </div>
  );
};

// @ts-ignore
export default function Blog() {
  // Filter state
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Blog posts data
  const posts: BlogPost[] = [
    {
      title: "Getting Started with React Hooks",
      slug: "getting-started-with-react-hooks",
      date: "May 15, 2023",
      readTime: 8,
      excerpt: "React Hooks have revolutionized how we write React components. Learn how to use useState, useEffect, and custom hooks to build clean, reusable code.",
      categories: ["React", "JavaScript", "Frontend"],
      featuredImage: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "Building Modern UIs with TailwindCSS",
      slug: "building-modern-uis-with-tailwindcss",
      date: "April 28, 2023",
      readTime: 6,
      excerpt: "TailwindCSS is a utility-first CSS framework that allows developers to build custom designs without leaving HTML. Learn how to leverage Tailwind to create beautiful interfaces quickly.",
      categories: ["CSS", "TailwindCSS", "Frontend"],
      featuredImage: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "The Future of Web Development: WebAssembly",
      slug: "future-of-web-development-webassembly",
      date: "April 10, 2023",
      readTime: 10,
      excerpt: "WebAssembly is changing how we think about performance on the web. This post explores what WebAssembly is and why it's poised to revolutionize web development.",
      categories: ["WebAssembly", "Performance", "Web"],
      featuredImage: "https://images.unsplash.com/photo-1617042375876-a13e36732a04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "Optimizing React Applications for Performance",
      slug: "optimizing-react-applications-for-performance",
      date: "March 22, 2023",
      readTime: 12,
      excerpt: "Performance matters in web applications. Learn strategies and techniques to optimize your React applications and deliver a better user experience.",
      categories: ["React", "Performance", "Frontend"],
      featuredImage: "https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "Introduction to TypeScript for JavaScript Developers",
      slug: "introduction-to-typescript-for-javascript-developers",
      date: "March 8, 2023",
      readTime: 7,
      excerpt: "TypeScript adds static typing to JavaScript, making your code more robust and maintainable. This guide helps JavaScript developers get started with TypeScript.",
      categories: ["TypeScript", "JavaScript", "Development"],
      featuredImage: "https://images.unsplash.com/photo-1613490900233-141c5560d75d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80"
    },
    {
      title: "The Art of Clean Code: Best Practices for Web Developers",
      slug: "art-of-clean-code-best-practices",
      date: "February 20, 2023",
      readTime: 9,
      excerpt: "Writing clean code is not just about aesthetics—it's about creating maintainable and scalable applications. Learn the principles and practices that lead to cleaner code.",
      categories: ["Best Practices", "Development", "Code Quality"],
      featuredImage: "https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&auto=format&fit=crop&w=1506&q=80"
    }
  ];
  
  // Get all unique categories
  const allCategories = Array.from(
    new Set(posts.flatMap(post => post.categories))
  ).sort();
  
  // Filter posts by category if one is selected
  const filteredPosts = selectedCategory
    ? posts.filter(post => post.categories.includes(selectedCategory))
    : posts;
  
  // Function to check window width safely for SSR
  const getWindowWidth = (): number => {
    if (typeof window !== 'undefined') {
      return window.innerWidth;
    }
    return 1024; // Default fallback value
  };
  
  return (
    // @ts-ignore
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Main Content */}
      {/* @ts-ignore */}
      <main className="pt-4 sm:pt-6 md:pt-8 px-3 sm:px-4 md:px-6 pb-32">
        {/* @ts-ignore */}
        <div className="max-w-6xl mx-auto space-y-4 sm:space-y-6 md:space-y-8">
          {/* Header */}
          <MacOSWindow title="My Blog" variant="dark">
            {/* @ts-ignore */}
            <div className="space-y-2 sm:space-y-4">
              {/* @ts-ignore */}
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">My Blog</h1>
              {/* @ts-ignore */}
              <p className="text-sm sm:text-base text-gray-300">
                Thoughts, tutorials, and insights on web development, design, and technology.
              </p>
              
              {/* Category Filters - macOS style */}
              {/* @ts-ignore */}
              <div className="flex justify-center my-4 sm:my-6 overflow-x-auto pb-2">
                {/* @ts-ignore */}
                <div className="inline-flex p-1 rounded-xl bg-gray-800">
                  {/* All filter */}
                  {/* @ts-ignore */}
                  <button 
                    className={`px-2 sm:px-3 md:px-4 py-1 sm:py-2 text-xs sm:text-sm font-medium rounded-lg transition-all whitespace-nowrap ${selectedCategory === null ? 'bg-gray-700 shadow-sm text-white' : 'text-gray-400 hover:text-gray-300'}`}
                    onClick={() => setSelectedCategory(null)}
                  >
                    All Posts
                  </button>
                  
                  {/* Category filters - dynamic based on screen size */}
                  {allCategories.slice(0, getWindowWidth() < 640 ? 3 : 5).map((category) => (
                    // @ts-ignore
                    <button 
                      key={category}
                      className={`px-2 sm:px-3 md:px-4 py-1 sm:py-2 text-xs sm:text-sm font-medium rounded-lg transition-all whitespace-nowrap ${selectedCategory === category ? 'bg-gray-700 shadow-sm text-white' : 'text-gray-400 hover:text-gray-300'}`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </MacOSWindow>
          
          {/* Posts List */}
          {filteredPosts.length > 0 ? (
            // @ts-ignore
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
              {filteredPosts.map((post, index) => (
                <BlogPostCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <MacOSWindow title="No Posts Found" variant="system">
              {/* @ts-ignore */}
              <div className="p-4 sm:p-6 text-center">
                {/* @ts-ignore */}
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">No posts found</h3>
                {/* @ts-ignore */}
                <p className="text-sm sm:text-base text-gray-600">
                  No posts were found matching the selected category. Try selecting a different category.
                </p>
                {/* @ts-ignore */}
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="mt-3 sm:mt-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-600 text-white rounded-full text-xs sm:text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  View All Posts
                </button>
              </div>
            </MacOSWindow>
          )}
          
          {/* Newsletter */}
          <MacOSWindow title="Subscribe to Newsletter" variant="dark">
            {/* @ts-ignore */}
            <div className="p-4 sm:p-6 text-center">
              {/* @ts-ignore */}
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3">Stay Updated</h2>
              {/* @ts-ignore */}
              <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">
                Subscribe to our newsletter to receive the latest updates, articles, and resources.
              </p>
              
              {/* @ts-ignore */}
              <form className="flex flex-col sm:flex-row max-w-md mx-auto gap-2 sm:gap-0">
                {/* @ts-ignore */}
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-2 rounded-full sm:rounded-l-full sm:rounded-r-none border-2 border-transparent focus:border-blue-500 focus:outline-none bg-gray-700 text-white text-sm"
                />
                {/* @ts-ignore */}
                <button
                  type="submit"
                  className="bg-blue-600 text-white rounded-full sm:rounded-l-none sm:rounded-r-full px-4 py-2 font-medium text-sm hover:bg-blue-700 transition-colors"
                >
                  Subscribe
                </button>
              </form>
              
              {/* @ts-ignore */}
              <p className="mt-4 text-xs text-gray-400">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </MacOSWindow>
        </div>
      </main>
      
      {/* Apple-style Dock at the bottom */}
      <AppleDock />
    </div>
  );
} 