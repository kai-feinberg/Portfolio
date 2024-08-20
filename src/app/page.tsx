"use client";
import React from 'react'
import TechStack from '@/components/TechStack';
import Education from '@/components/Education';
import Hero from '@/components/hero';
import Experience from '@/components/Experience';
import Link from 'next/link';

import Nav from '@/components/Nav';
import { Projects } from '@/components/Projects';
export default function Home() {
  return (

    <div className='bg-dot-black/[0.2] dark:bg-dot-white/[0.2]'>
        <Nav />
      <main className="flex min-h-screen flex-col items-center justify-between p-12">
        <Hero />

        {/* <TechStack /> */}
        {/* <Education /> */}
        <Experience />
        <Projects />

      </main >
    </div>


  );

}
