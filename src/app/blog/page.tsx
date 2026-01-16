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

  // Technical blog posts
  const posts: BlogPost[] = [
    {
      title: "AI LLM Engineering: Building Production-Ready Language Model Applications",
      slug: "ai-llm-engineering",
      date: "January 15, 2026",
      readTime: 18,
      excerpt: "A comprehensive guide to designing, implementing, and deploying Large Language Model applications. Covers prompt engineering, RAG architectures, fine-tuning strategies, evaluation metrics, and production deployment patterns.",
      categories: ["AI/ML", "LLM", "Engineering", "Python"],
      featuredImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Building Robust OCR Systems: From Theory to Production",
      slug: "ocr-systems-guide",
      date: "January 10, 2026",
      readTime: 15,
      excerpt: "Deep dive into Optical Character Recognition systems. Covers preprocessing techniques, Tesseract OCR, deep learning approaches with CRNN, handling noisy documents, and building end-to-end OCR pipelines.",
      categories: ["Computer Vision", "OCR", "Deep Learning", "Python"],
      featuredImage: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Microservices Architecture: Understanding CAP Theorem in Distributed Systems",
      slug: "microservices-cap-theorem",
      date: "January 5, 2026",
      readTime: 20,
      excerpt: "Master the CAP Theorem and its implications for distributed system design. Learn about consistency patterns, partition tolerance strategies, eventual consistency, and practical trade-offs in microservices architecture.",
      categories: ["Distributed Systems", "Microservices", "Architecture", "Backend"],
      featuredImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Site Reliability Engineering: SLOs, SLIs, and Error Budgets from Google's Playbook",
      slug: "sre-slo-guide",
      date: "January 1, 2026",
      readTime: 22,
      excerpt: "A practical guide to implementing SRE practices based on Google's SRE guidebooks. Covers Service Level Objectives (SLOs), Service Level Indicators (SLIs), error budgets, incident management, and building a reliability culture.",
      categories: ["SRE", "DevOps", "Reliability", "Google Cloud"],
      featuredImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
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