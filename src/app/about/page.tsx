"use client";

import Image from "next/image";
import { useState } from "react";
import AppleDock from "@/components/AppleDock";
import MacOSWindow from "@/components/MacOSWindow";
import { experiences, portfolio, skillGroups } from "@/data/portfolio";

export default function About() {
  const [activeTab, setActiveTab] = useState("profile");

  const photos = [
    {
      id: 1,
      title: "Learning by Building",
      description: "I understand new ideas best by making something, testing it, and learning from what does not work yet.",
      imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 2,
      title: "Systems & Backend",
      description: "I enjoy tracing how data moves through APIs, queues, databases, services, and the people who use them.",
      imageUrl: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 3,
      title: "AI Tinkering",
      description: "I experiment with LLMs, OCR, and small automations to understand where AI is genuinely useful—and where it is not.",
      imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 4,
      title: "Competitive Programming",
      description: "When time allows, I return to algorithmic problems to practice reasoning from constraints and handling edge cases.",
      imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 5,
      title: "Academic Curiosity",
      description: portfolio.education.thesis,
      imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 6,
      title: "Always a Student",
      description: "Documentation, side projects, engineering notes, and conversations with teammates all remain part of how I learn.",
      imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
  ];

  return (
    <div className="min-h-screen">
      <main className="pt-8 px-6 pb-32">
        <div className="max-w-6xl mx-auto">
          <MacOSWindow title="~/about/operator-profile" variant="system">
            <div className="mb-8 flex overflow-x-auto border-b border-white/10 no-scrollbar">
              {[
                ["profile", "Profile"],
                ["photos", "Focus"],
                ["about", "Story"],
              ].map(([key, label]) => (
                <button
                  key={key}
                  className={`terminal-label px-6 py-3 font-medium transition ${activeTab === key ? "border-b-2 border-lime-200 text-lime-100" : "text-white/60 hover:text-white"}`}
                  onClick={() => setActiveTab(key)}
                >
                  {label}
                </button>
              ))}
            </div>

            {activeTab === "profile" ? (
              <div>
                <p className="terminal-kicker mb-3 text-xs">operator profile</p>
                <h2 className="text-3xl font-semibold mb-6">{portfolio.name}</h2>

                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="terminal-card rounded-[1.5rem] overflow-hidden w-full aspect-square mb-4 relative">
                      <Image
                        src="/main_profile.jpeg"
                        alt={portfolio.name}
                        fill
                        className="object-cover object-top"
                      />
                    </div>

                    <div className="space-y-3">
                      <div className="terminal-card p-3 rounded-xl">
                        <h3 className="font-medium">Location</h3>
                        <p>{portfolio.location}</p>
                      </div>

                      <div className="terminal-card p-3 rounded-xl">
                        <h3 className="font-medium">Email</h3>
                        <p className="break-words">{portfolio.email}</p>
                      </div>

                      <div className="terminal-card p-3 rounded-xl">
                        <h3 className="font-medium">Phone</h3>
                        <p>{portfolio.phone}</p>
                      </div>

                      <div className="terminal-card p-3 rounded-xl">
                        <h3 className="font-medium">Profiles</h3>
                        <p>{portfolio.linkedinLabel} | {portfolio.githubLabel}</p>
                      </div>

                      <div className="terminal-card p-3 rounded-xl">
                        <h3 className="font-medium">Languages</h3>
                        <p>{portfolio.languages.join(", ")}</p>
                      </div>
                    </div>
                  </div>

                  <div className="md:w-2/3">
                    <p className="text-lg font-medium text-lime-100 mb-3">
                      {portfolio.title}
                    </p>
                    <p className="mb-4 text-white/70">{portfolio.summary}</p>

                    <p className="mb-6 text-white/70">
                      I am comfortable moving between backend and frontend work, but I do not define myself by
                      one stack. What matters more to me is understanding the problem, asking useful questions,
                      and leaving the code a little clearer than I found it. AI is one of the areas I like to
                      explore, alongside distributed systems, product engineering, and algorithms.
                    </p>

                    <h3 className="text-xl font-medium mb-4">Professional Experience</h3>
                    <div className="space-y-4 mb-6">
                      {experiences.map((experience) => (
                        <div key={`${experience.company}-${experience.date}`} className="border-l-4 border-lime-200/70 pl-4">
                          <h4 className="font-medium">{experience.title}</h4>
                          <p className="text-sm mb-1 text-white/55">{experience.company} | {experience.date}</p>
                          <p className="text-white/70">{experience.description[0]}</p>
                        </div>
                      ))}
                    </div>

                    <h3 className="text-xl font-medium mb-4">Working Toolkit</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                      {skillGroups.slice(0, 4).map((group) => (
                        <div key={group.title} className="terminal-card p-3 rounded-xl">
                          <h4 className="font-medium mb-2">{group.title}</h4>
                          <p className="text-sm text-white/65">{group.items.slice(0, 5).join(", ")}</p>
                        </div>
                      ))}
                    </div>

                    <h3 className="text-xl font-medium mb-4">Education</h3>
                    <div className="space-y-3">
                      <div className="border-l-4 border-lime-200/70 pl-4">
                        <h4 className="font-medium">{portfolio.education.degree}</h4>
                        <p>{portfolio.education.institution}</p>
                        <p className="text-sm">{portfolio.education.date}</p>
                      </div>

                      <div className="border-l-4 border-lime-200/70 pl-4">
                        <h4 className="font-medium">Thesis</h4>
                        <p className="text-sm">{portfolio.education.thesis}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : activeTab === "photos" ? (
              <div>
                <p className="terminal-kicker mb-3 text-xs">things I keep exploring</p>
                <h2 className="text-3xl font-semibold mb-6">What I Am Curious About</h2>
                <p className="mb-8 text-white/70">
                  Engineering is too broad to pretend I have finished learning it. These are a few areas I
                  return to through work, side projects, reading, and practice.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {photos.map((photo) => (
                    <div key={photo.id} className="terminal-card rounded-[1.5rem] overflow-hidden transition hover:-translate-y-1">
                      <div className="relative h-64 w-full">
                        <Image
                          src={photo.imageUrl}
                          alt={photo.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium mb-1">{photo.title}</h3>
                        <p className="text-sm text-white/65">{photo.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <p className="terminal-kicker text-xs">engineering story</p>
                <h2 className="text-3xl font-semibold mb-2">How I Learn and Work</h2>

                <div className="space-y-4 text-white/70">
                  <p>
                    I started taking software seriously at Bandung Institute of Technology. Competitive
                    programming taught me to reason from constraints and check edge cases; coursework and my
                    thesis taught me that real systems are usually messier—and more interesting—than the neat
                    version on paper.
                  </p>

                  <p>
                    Professionally, I have worked on backend services, web applications, document processing,
                    security research, and marketplace products. Each role brought an unfamiliar domain or
                    tool. My usual approach is to understand the context, ask questions early, build a small
                    mental model, and improve it as I work.
                  </p>

                  <p>
                    Outside work, I still like to tinker. Sometimes that means a small AI experiment, sometimes
                    a side project, and sometimes returning to a competitive programming problem. I do it less
                    to collect technologies and more to keep my thinking flexible.
                  </p>
                </div>

                <h3 className="text-xl font-medium mt-8">What Keeps Me Going</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="terminal-card p-4 rounded-2xl">
                    <h4 className="font-medium text-lg mb-2">Learning in Context</h4>
                    <p>
                      I learn quickly when I can connect a new concept to a real problem, test it, and get
                      feedback from the result.
                    </p>
                  </div>

                  <div className="terminal-card p-4 rounded-2xl">
                    <h4 className="font-medium text-lg mb-2">Engineering Thinking</h4>
                    <p>
                      I like turning vague problems into smaller questions, weighing trade-offs, and checking
                      assumptions before reaching for complexity.
                    </p>
                  </div>

                  <div className="terminal-card p-4 rounded-2xl">
                    <h4 className="font-medium text-lg mb-2">Steady Curiosity</h4>
                    <p>
                      There is always another layer to understand. I want to keep learning without pretending
                      to know everything already.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </MacOSWindow>
        </div>
      </main>

      <AppleDock />
    </div>
  );
}
