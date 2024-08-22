"use client";
import React, { useEffect, useState } from 'react'
import Hero from '@/components/hero';
import Experience from '@/components/Experience';
import Nav from '@/components/Nav';
import { Projects } from '@/components/Projects';
import TechStack from '@/components/TechStack';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      const urlParams = new URLSearchParams(window.location.search);
      const scrollTo = urlParams.get('scrollTo');
      if (scrollTo) {
        const element = document.getElementById(scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  }, [mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <div className='bg-dot-black/[0.2] dark:bg-dot-white/[0.2]'>
      <Nav />
      <main className="flex min-h-screen flex-col items-center justify-between p-12">
        <div id="hero"><Hero/></div>
        <TechStack />
        <div id="experience">
          <Experience />
        </div>
        <div id="projects">
          <Projects />
        </div>
      </main>
    </div>
  );
}
