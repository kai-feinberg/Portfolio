"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Nav from "@/components/Nav";
import { Button } from "@/components/ui/button";
import { Mail, ArrowUpRight } from "lucide-react";
import {
  SiGithub,
  SiLinkedin,
} from "@icons-pack/react-simple-icons";

const featuredProjects = [
  {
    title: "Splat AI",
    href: "/splat",
    image: "/splat/connect-context.jpg",
    alt: "Splat AI canvas with connected context sources",
    summary: "Persistent context canvas for AI conversations across videos, sites, PDFs, and social sources.",
    proof: "Daily-use AI product",
    className: "lg:col-span-2 lg:row-span-2",
    imageClassName: "object-left-top",
  },
  {
    title: "Client Oracle",
    href: "/client-oracle",
    image: "/client-oracle.jpg",
    alt: "Client Oracle AI assistant interface",
    summary: "Agentic RAG system that helps freelancers find clients and craft better outreach.",
    proof: "CopyCoders AI work",
    className: "lg:col-span-1",
    imageClassName: "object-center",
  },
  {
    title: "Exodus AI",
    href: "/exodus-ai",
    image: "/exodus/generate-content.jpg",
    alt: "Exodus AI content generation screen",
    summary: "Personalized content engine that brings business owners daily ideas and draft campaigns.",
    proof: "Automation product",
    className: "lg:col-span-1",
    imageClassName: "object-left-top",
  },
  {
    title: "n8n Workshops",
    href: "/n8n-workshops",
    image: "/n8n.jpg",
    alt: "n8n workshop presentation visual",
    summary: "Live automation workshops teaching operators how to build practical AI workflows.",
    proof: "24+ hours taught",
    className: "lg:col-span-2",
    imageClassName: "object-center",
  },
];

const caseStudies = [
  {
    title: "Scout Protocol",
    href: "/scout",
    image: "/scout-home.jpg",
    alt: "Scout Protocol crypto payment confirmation interface",
    summary: "Safer crypto transfers with contacts, PIN confirmation, and transaction peace of mind.",
    proof: "Hackathon winner",
  },
  {
    title: "Trailmix",
    href: "/trailmix",
    image: "/tm-lp.jpg",
    alt: "Trailmix DeFi risk management landing page",
    summary: "Automated crypto risk management with stop-losses and portfolio protection.",
    proof: "Founder project",
  },
];

const moreBuilds = [
  {
    title: "Can I Park Here?",
    image: "/ciph.gif",
    alt: "Can I Park Here mobile app demo",
    summary: "Photo-to-answer parking sign interpreter.",
  },
  {
    title: "Ask Reddit",
    image: "/reddit-agent.gif",
    alt: "Ask Reddit research agent demo",
    summary: "Reddit research agent built with Python and Pydantic AI.",
  },
  {
    title: "Wildchat",
    image: "/wildchat.jpg",
    alt: "Wildchat Northwestern resource assistant",
    summary: "Northwestern RAG assistant for campus resources.",
  },
  {
    title: "TikTok Fuse",
    image: "/tt-fuse-creator.jpg",
    alt: "TikTok Fuse creator matching prototype",
    summary: "Creator-brand matching prototype for a TikTok externship.",
  },
  {
    title: "Chicken Clip",
    image: "/cc-rendered.jpg",
    alt: "Chicken Clip backpack clip product render",
    summary: "Backpack clip designed during a 10-week product sprint.",
  },
];

const trustBadges = [
  {
    label: "Current: Emerging Platforms at KPMG",
    className: "border-sky-300/70 bg-sky-100/80 text-sky-950 dark:border-sky-300/30 dark:bg-sky-400/15 dark:text-sky-100",
  },
  {
    label: "Former: AI Engineer at CopyCoders",
    className: "border-emerald-300/70 bg-emerald-100/80 text-emerald-950 dark:border-emerald-300/30 dark:bg-emerald-400/15 dark:text-emerald-100",
  },
  {
    label: "$9,175 hackathon winnings",
    className: "border-neutral-950/15 bg-white/70 text-neutral-800 dark:border-white/15 dark:bg-white/10 dark:text-neutral-100",
  },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const urlParams = new URLSearchParams(window.location.search);
    const scrollTo = urlParams.get("scrollTo");
    if (scrollTo === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (scrollTo) {
      const element = document.getElementById(scrollTo);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  }, [mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[oklch(0.985_0.006_120)] text-neutral-950 dark:bg-[oklch(0.16_0.02_248)] dark:text-neutral-50">
      <Nav />
      <main className="mx-auto flex w-full max-w-[1440px] flex-col gap-20 px-4 py-7 sm:px-6 sm:py-9 lg:gap-32 lg:px-10">
        <section
          id="hero"
          className="scroll-mt-20 grid gap-6 lg:grid-cols-[248px_minmax(0,1fr)] lg:items-start xl:grid-cols-[280px_minmax(0,1fr)]"
        >
          <IdentityRail />
          <section id="work" aria-label="Selected work" className="flex min-h-0 scroll-mt-20 flex-col">
            <FeaturedGrid />
          </section>
        </section>

        <section id="case-studies" aria-labelledby="case-studies-heading" className="scroll-mt-20 grid gap-6 lg:grid-cols-[0.22fr_0.78fr]">
          <div className="flex flex-col justify-between gap-4 border-t border-neutral-950/10 pt-5 dark:border-white/15">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                Next up
              </p>
              <h2 id="case-studies-heading" className="mt-2 text-3xl font-black tracking-tight">
                More case studies
              </h2>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {caseStudies.map((project) => (
              <ProjectCard key={project.title} project={project} variant="secondary" />
            ))}
          </div>
        </section>

        <section id="projects" aria-labelledby="more-builds-heading" className="scroll-mt-20 pb-14">
          <div className="mb-5 flex flex-col justify-between gap-3 border-t border-neutral-950/10 pt-5 dark:border-white/15 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                Smaller builds
              </p>
              <h2 id="more-builds-heading" className="mt-2 text-2xl font-black tracking-tight">
                More things I made
              </h2>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {moreBuilds.map((project) => (
              <SmallBuildCard key={project.title} project={project} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

function IdentityRail() {
  const [showMessage, setShowMessage] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("kaiwfeinberg@gmail.com").then(() => {
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 2500);
    });
  };

  return (
    <aside id="experience" className="flex flex-col justify-between gap-5 border-t border-neutral-950/10 pt-5 dark:border-white/15 lg:sticky lg:top-20">
      <div className="flex flex-col gap-5">
        <div className="overflow-hidden rounded-lg border border-neutral-950/10 bg-neutral-200 dark:border-white/15 dark:bg-neutral-900">
          <Image
            src="/headshot.webp"
            width={768}
            height={960}
            priority
            alt="Kai Feinberg"
            className="aspect-[21/9] w-full object-cover lg:aspect-[4/3]"
          />
        </div>

        <div className="space-y-2">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
            Portfolio
          </p>
          <h2 className="text-3xl font-black tracking-tight sm:text-5xl lg:text-3xl xl:text-[2.35rem]">
            Kai Feinberg
          </h2>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {trustBadges.map((badge) => (
            <span
              key={badge.label}
              className={`rounded-md border px-3 py-1.5 text-xs font-bold leading-5 ${badge.className}`}
            >
              {badge.label}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3.5">
        <Button asChild className="h-11 rounded-md bg-neutral-950 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200">
          <Link href="/splat">
            View Splat case study
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <div className="flex items-center gap-2">
          <Button asChild variant="outline" size="icon" className="rounded-md border-neutral-950/15 bg-white/70 dark:border-white/15 dark:bg-white/10">
            <a href="https://github.com/kai-feinberg?tab=repositories" target="_blank" rel="noopener noreferrer" aria-label="Kai Feinberg on GitHub">
              <SiGithub className="h-5 w-5" />
            </a>
          </Button>
          <Button asChild variant="outline" size="icon" className="rounded-md border-neutral-950/15 bg-white/70 dark:border-white/15 dark:bg-white/10">
            <a href="https://www.linkedin.com/in/kai-feinberg/" target="_blank" rel="noopener noreferrer" aria-label="Kai Feinberg on LinkedIn">
              <SiLinkedin className="h-5 w-5" />
            </a>
          </Button>
          <div className="relative">
            {showMessage && (
              <div className="absolute bottom-12 left-0 z-10 w-max rounded-md bg-neutral-950 px-3 py-2 text-xs font-semibold text-white dark:bg-white dark:text-neutral-950">
                Email copied
              </div>
            )}
            <Button
              variant="outline"
              size="icon"
              onClick={handleCopy}
              className="rounded-md border-neutral-950/15 bg-white/70 dark:border-white/15 dark:bg-white/10"
              aria-label="Copy Kai Feinberg's email address"
            >
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </aside>
  );
}

function FeaturedGrid() {
  return (
    <div className="grid auto-rows-[minmax(15rem,1fr)] gap-5 lg:grid-cols-4 xl:auto-rows-[minmax(16rem,1fr)]">
      {featuredProjects.map((project) => (
        <ProjectCard key={project.title} project={project} variant="featured" />
      ))}
    </div>
  );
}

type ProjectCardProps = {
  project: {
    title: string;
    href: string;
    image: string;
    alt: string;
    summary: string;
    proof: string;
    className?: string;
    imageClassName?: string;
  };
  variant: "featured" | "secondary";
};

function ProjectCard({ project, variant }: ProjectCardProps) {
  const isFeatured = variant === "featured";
  const isAnchorCard = project.className?.includes("row-span-2");

  return (
    <Link
      href={project.href}
      className={[
        "group relative isolate flex min-h-[19rem] overflow-hidden rounded-lg border border-neutral-950/15 bg-neutral-900 text-white outline-none transition duration-300 hover:-translate-y-1 hover:border-neutral-950/30 focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 focus-visible:ring-offset-[oklch(0.985_0.006_120)] dark:border-white/15 dark:focus-visible:ring-white dark:focus-visible:ring-offset-[oklch(0.16_0.02_248)]",
        isFeatured ? project.className : "min-h-[23rem]",
      ].join(" ")}
    >
      <Image
        src={project.image}
        width={1200}
        height={800}
        alt={project.alt}
        className={`absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03] ${project.imageClassName ?? "object-center"}`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/10" />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/55 to-transparent" />
      <div className="relative z-10 flex h-full w-full flex-col justify-between gap-10 p-5 sm:p-6">
        <div className="flex justify-between gap-3">
          <span className="rounded-md bg-white px-2.5 py-1 text-xs font-black uppercase tracking-[0.14em] text-neutral-950">
            {project.proof}
          </span>
          <ArrowUpRight className="h-5 w-5 shrink-0 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
        </div>
        <div className="pb-1">
          <h3 className={`${isAnchorCard ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl"} font-black tracking-tight`}>
            {project.title}
          </h3>
          <p className="mt-3 max-w-xl text-sm font-medium leading-6 text-neutral-100 sm:text-base">
            {project.summary}
          </p>
          <span className="mt-4 inline-flex text-sm font-bold">
            Read case study
          </span>
        </div>
      </div>
    </Link>
  );
}

function SmallBuildCard({
  project,
}: {
  project: {
    title: string;
    image: string;
    alt: string;
    summary: string;
  };
}) {
  return (
    <article className="overflow-hidden rounded-lg border border-neutral-950/10 bg-[oklch(0.975_0.006_120)] dark:border-white/15 dark:bg-white/5">
      <Image
        src={project.image}
        width={600}
        height={420}
        alt={project.alt}
        className="aspect-[4/3] w-full object-cover"
      />
      <div className="p-4">
        <h3 className="text-base font-black tracking-tight">{project.title}</h3>
        <p className="mt-2 text-sm leading-5 text-neutral-600 dark:text-neutral-300">
          {project.summary}
        </p>
      </div>
    </article>
  );
}
