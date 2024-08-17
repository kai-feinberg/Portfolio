
"use client";
import Nav from '@/components/Nav';
import React from 'react'

export default function fire() {
    return (
        <div className='bg-dot-black/[0.2] dark:bg-dot-white/[0.2] min-h-screen flex flex-col items-center'>
            <Nav />
            <div className="max-w-2xl mt-10 p-8"> 
                <h1 className="text-4xl font-bold">Fire</h1>
                <p className="text-lg">Fire is a venture backed startup that I interned at in 2023. I worked on the core product and helped with the development of the web app.</p>
                <p className="text-lg">I used Python and Figma.</p>
            </div>
        </div>

    );

}

