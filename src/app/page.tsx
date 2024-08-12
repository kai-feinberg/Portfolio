"use client";
import React from 'react'
import TechStack from '@/components/TechStack';
import Education from '@/components/Education';
import { Hero } from '@/components/hero';
import Experience from '@/components/Experience';
export default function Home() {
  return (

    <div className='bg-dot-black/[0.2]'>
      <Hero />

      <main className="flex min-h-screen flex-col items-center justify-between p-12">
        <TechStack />
        <Education />
        <Experience />
      </main >
    </div>


  );

}
