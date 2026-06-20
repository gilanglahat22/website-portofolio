import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import AppleDock from "@/components/AppleDock";
import MacOSWindow from "@/components/MacOSWindow";
import { FaArrowLeft, FaCalendar, FaClock } from "react-icons/fa";
import { caseStudies } from "@/data/portfolio";

export default function CaseStudyPost({ params }: { params: { slug: string } }) {
  const post = caseStudies.find((item) => item.slug === params.slug);

  if (!post) {
    notFound();
  }

  const isSvg = post.featuredImage.endsWith(".svg");

  return (
    <div className="min-h-screen">
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="terminal-command mb-6 inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:border-lime-200/60"
        >
          <FaArrowLeft className="h-3.5 w-3.5" />
          Back to Case Studies
        </Link>

        <MacOSWindow title={`~/case-studies/${post.slug}`} variant="system">
          <article className="space-y-8">
            <header className="space-y-5">
              <div className="relative flex h-64 items-center justify-center overflow-hidden rounded-[1.3rem] border border-white/10 bg-white/5 sm:h-80">
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

              <div className="space-y-4">
                <div className="terminal-label flex flex-wrap items-center gap-4 text-sm opacity-75">
                  <span className="flex items-center gap-2">
                    <FaCalendar className="h-3.5 w-3.5" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <FaClock className="h-3.5 w-3.5" />
                    {post.readTime} min read
                  </span>
                </div>

                <h1 className="text-3xl font-bold leading-tight sm:text-4xl">{post.title}</h1>
                <p className="text-lg text-white/70">{post.excerpt}</p>

                <div className="flex flex-wrap gap-2">
                  {post.categories.map((category) => (
                    <span key={category} className="terminal-pill px-3 py-1 text-sm">
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            </header>

            <div className="space-y-8">
              {post.sections.map((section) => (
                <section key={section.heading} className="space-y-4">
                  <h2 className="text-2xl font-bold">{section.heading}</h2>
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="leading-7 text-white/75">
                      {paragraph}
                    </p>
                  ))}
                  {section.bullets ? (
                    <ul className="list-disc space-y-2 pl-6">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="leading-7 text-white/75">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}
            </div>
          </article>
        </MacOSWindow>
      </main>

      <AppleDock />
    </div>
  );
}
