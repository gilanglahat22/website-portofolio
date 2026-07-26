import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import AppleDock from "@/components/AppleDock";
import ArticleSection from "@/components/ArticleSection";
import ArticleTOC from "@/components/ArticleTOC";
import ReadingProgressBar from "@/components/ReadingProgressBar";
import { FaArrowLeft, FaArrowRight, FaCalendar, FaClock } from "react-icons/fa";
import { caseStudies, portfolio } from "@/data/portfolio";

export default function CaseStudyPost({ params }: { params: { slug: string } }) {
  const index = caseStudies.findIndex((item) => item.slug === params.slug);
  const post = caseStudies[index];

  if (!post) {
    notFound();
  }

  const isSvg = post.featuredImage.endsWith(".svg");
  const headings = post.sections.map((section) => section.heading);
  const related = caseStudies.filter((_, i) => i !== index).slice(0, 2);

  return (
    <div className="min-h-screen">
      <ReadingProgressBar />

      <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="terminal-command mb-8 inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:border-lime-200/60"
        >
          <FaArrowLeft className="h-3.5 w-3.5" />
          Back to Case Studies
        </Link>

        <article className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_200px]">
          <div className="min-w-0 space-y-8">
            <header className="space-y-5">
              <div className="flex flex-wrap gap-2">
                {post.categories.map((category) => (
                  <span key={category} className="terminal-pill px-3 py-1 text-sm">
                    {category}
                  </span>
                ))}
              </div>

              <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.6rem]">
                {post.title}
              </h1>

              <p className="font-serif text-lg italic leading-8 text-white/70 sm:text-xl">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-4 border-y border-white/10 py-4">
                <div className="relative h-11 w-11 flex-shrink-0 overflow-hidden rounded-full border border-white/15">
                  <Image src="/main_profile.jpeg" alt={portfolio.name} fill className="object-cover object-top" />
                </div>
                <div className="leading-tight">
                  <p className="text-sm font-semibold text-white">{portfolio.name}</p>
                  <p className="text-xs text-white/50">{portfolio.title}</p>
                </div>
                <div className="terminal-label ml-auto flex flex-wrap items-center gap-4 text-xs text-white/55 sm:text-sm">
                  <span className="flex items-center gap-2">
                    <FaCalendar className="h-3.5 w-3.5" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <FaClock className="h-3.5 w-3.5" />
                    {post.readTime} min read
                  </span>
                </div>
              </div>
            </header>

            <div className="relative flex h-64 items-center justify-center overflow-hidden rounded-[1.3rem] border border-white/10 bg-white/5 sm:h-96">
              {isSvg ? (
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  className="h-full w-full object-contain p-8"
                />
              ) : (
                <Image
                  src={post.featuredImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              )}
            </div>

            <div className="space-y-10 pt-2">
              {post.sections.map((section, sectionIndex) => (
                <ArticleSection
                  key={section.heading}
                  heading={section.heading}
                  body={section.body}
                  bullets={section.bullets}
                  index={sectionIndex}
                />
              ))}
            </div>

            <div className="terminal-card mt-4 flex flex-col gap-4 rounded-2xl p-6 sm:flex-row sm:items-center">
              <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full border border-white/15">
                <Image src="/main_profile.jpeg" alt={portfolio.name} fill className="object-cover object-top" />
              </div>
              <div className="flex-1">
                <p className="terminal-kicker text-xs">written by</p>
                <p className="mt-1 text-lg font-semibold text-white">{portfolio.name}</p>
                <p className="mt-1 text-sm leading-6 text-white/65">
                  Software engineer building distributed backend systems and applied AI products, with a
                  background in competitive programming.
                </p>
              </div>
              <Link
                href="/about"
                className="terminal-command flex-shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold"
              >
                View profile
              </Link>
            </div>

            {related.length > 0 ? (
              <div className="space-y-4 pt-4">
                <p className="terminal-kicker text-xs">more case studies</p>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {related.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/blog/${item.slug}`}
                      className="terminal-card group flex flex-col justify-between rounded-2xl p-5 transition hover:-translate-y-1 hover:border-lime-200/40"
                    >
                      <div>
                        <p className="terminal-label text-xs text-white/50">{item.date}</p>
                        <h3 className="mt-2 text-base font-semibold text-white">{item.title}</h3>
                      </div>
                      <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-lime-100">
                        Read case study
                        <FaArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          <ArticleTOC headings={headings} />
        </article>
      </main>

      <AppleDock />
    </div>
  );
}
