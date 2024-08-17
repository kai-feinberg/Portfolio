"use client";
import React from "react";
import Nav from "@/components/Nav";
import { LandingProductFeature } from "@/components/ui/LandingProductFeature";

export default function trailmix() {
    return (
        <div className="bg-dot-black/[0.2] dark:bg-dot-white/[0.2] min-h-screen flex flex-col items-center">
            <Nav />
            
            <LandingProductFeature
                title="Trailmix"
                description="A DeFi project that I worked on in 2023. I worked on the core product and helped with the development of the web app."
                imageSrc="/linear.webp"
                imagePerspective="right"
            />
            <div className="max-w-2xl mt-10 p-8">
                <h1 className="text-4xl font-bold mb-4">Trailmix</h1>
                <p className="text-lg mb-8">
                    A DeFi project that I worked on in 2023. I worked on the core product and helped with the development of the web app.
                </p>

                <h2 className="text-2xl font-semibold mb-4 mr-16 flex items-center dark:text-white">
                    Overview
                </h2>
                <p className="text-lg">I used Python and Figma.</p>
            </div>
        </div>
    );
}