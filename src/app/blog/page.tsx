"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AppleDock from "@/components/AppleDock";
import MacOSWindow from "@/components/MacOSWindow";
import { CaseStudyItem, caseStudies } from "@/data/portfolio";

const CaseStudyCard = ({ post }: { post: CaseStudyItem }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isSvg = post.featuredImage.endsWith(".svg");

  return (
    <div
      className="mb-6 transition-all duration-300 ease-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <MacOSWindow
        title={`~/case-studies/${post.slug}`}
        variant="system"
        className={`h-full transition-all duration-300 ${isHovered ? "shadow-lg" : "shadow-md"}`}
      >
        <div className="space-y-4">
          <div className="relative flex h-40 items-center justify-center overflow-hidden rounded-[1.2rem] border border-white/10 bg-white/5 sm:h-48">
            {isSvg ? (
              <img
                src={post.featuredImage}
                alt={post.title}
                className="h-full w-full object-contain p-6"
              />
            ) : (
              <Image
                src={post.featuredImage}
                alt={post.title}
                width={800}
                height={400}
                className="h-full w-full object-cover"
              />
            )}
          </div>

          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
              <span className="terminal-label text-white/55">{post.date}</span>
              <span className="terminal-label text-white/55">{post.readTime} min read</span>
            </div>

            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-sm text-white/70">{post.excerpt}</p>

            <div className="flex flex-wrap gap-2 pt-1">
              {post.categories.map((category) => (
                <span key={category} className="terminal-pill px-2 py-1">
                  {category}
                </span>
              ))}
            </div>

            <Link
              href={`/blog/${post.slug}`}
              className="terminal-command inline-flex rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:border-lime-200/60"
            >
              Read Case Study
            </Link>
          </div>
        </div>
      </MacOSWindow>
    </div>
  );
};

export default function Blog() {
  return (
    <div className="min-h-screen">
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <MacOSWindow title="~/case-studies/index" variant="system" className="mb-8">
          <div className="space-y-4">
            <p className="terminal-kicker text-xs">engineering notes</p>
            <h1 className="text-3xl font-bold">CV Case Studies</h1>
            <p className="text-white/70">
              Notes drawn from the attached CV: AI-powered SaaS, backend architecture,
              regional B2B platforms, education products, and the competitive programming
              foundation behind the work.
            </p>
          </div>
        </MacOSWindow>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {caseStudies.map((post) => (
            <CaseStudyCard key={post.slug} post={post} />
          ))}
        </div>
      </main>

      <AppleDock />
    </div>
  );
}
