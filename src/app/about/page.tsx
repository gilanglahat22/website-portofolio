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
      title: "AI-Powered SaaS",
      description: "Building Nexius AI for OCR, parsing, extraction, validation, journal mapping, reports, and delivery.",
      imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 2,
      title: "Backend & Architecture",
      description: "Designing FastAPI, .NET, REST API, Domain-Driven Design, microservice, and event-driven systems.",
      imageUrl: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 3,
      title: "Distributed Delivery",
      description: "Shipping queue-backed workers, Kubernetes/Rancher deployment, observability, and cloud-native services.",
      imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 4,
      title: "AI, Data & Analytics",
      description: "Working with LLM applications, LangChain, OCR pipelines, data extraction, clustering, and evaluation metrics.",
      imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 5,
      title: "ITB Research",
      description: portfolio.education.thesis,
      imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 6,
      title: "Competitive Programming",
      description: "ICPC Asia Jakarta Regional finalist, Gemastik XV participant, and Meta Hacker Cup top 7% finisher.",
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
                      I focus on backend-heavy product engineering: scalable APIs, multi-tenant systems,
                      distributed workers, real-time status tracking, and production web platforms. My recent
                      work spans AI-powered financial document processing, regional digital platforms,
                      corporate matching systems, cybersecurity research, and CMS/API products.
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

                    <h3 className="text-xl font-medium mb-4">Core Skills</h3>
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
                <p className="terminal-kicker mb-3 text-xs">focus areas</p>
                <h2 className="text-3xl font-semibold mb-6">CV Focus Areas</h2>
                <p className="mb-8 text-white/70">
                  A portfolio view of the areas highlighted in the CV, from production backend systems to
                  AI document processing and competitive programming.
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
                <p className="terminal-kicker text-xs">fullstack story</p>
                <h2 className="text-3xl font-semibold mb-2">CV Story</h2>

                <div className="space-y-4 text-white/70">
                  <p>
                    My engineering path started at Bandung Institute of Technology, where I studied
                    Informatics Engineering and researched Avalanche Consensus Protocol optimization with
                    a microservices architecture.
                  </p>

                  <p>
                    Professionally, I have worked across backend, full stack, AI, security, and platform
                    engineering roles. At Quantum Teknologi Nusantara, I build Nexius AI services for
                    financial document processing. Before that, I developed PMI regional platforms with
                    One Code Solution, researched endpoint security concepts at MarkAny, and delivered
                    Japanese corporate matching and internal voting systems at PT Fata Organa Solusi.
                  </p>

                  <p>
                    I enjoy the parts of engineering where product pressure and systems design meet:
                    reliable APIs, distributed processing, observability, domain modeling, and user-facing
                    workflows that make complex operations easier to run.
                  </p>
                </div>

                <h3 className="text-xl font-medium mt-8">What Drives Me</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="terminal-card p-4 rounded-2xl">
                    <h4 className="font-medium text-lg mb-2">Production Reliability</h4>
                    <p>
                      Building systems that remain observable, maintainable, and resilient under real
                      workload pressure.
                    </p>
                  </div>

                  <div className="terminal-card p-4 rounded-2xl">
                    <h4 className="font-medium text-lg mb-2">Algorithmic Thinking</h4>
                    <p>
                      Applying competitive programming habits to debugging, performance tuning, and
                      complex backend design.
                    </p>
                  </div>

                  <div className="terminal-card p-4 rounded-2xl">
                    <h4 className="font-medium text-lg mb-2">Practical AI Systems</h4>
                    <p>
                      Turning OCR, LLM, clustering, and automation workflows into useful production
                      software.
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
