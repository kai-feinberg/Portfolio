"use client";
import React from "react";
import Nav from "@/components/Nav";
import { LandingProductFeature } from "@/components/ui/LandingProductFeature";
import { Button } from "@/components/ui/button";
import { SiGithub, SiYoutube } from "@icons-pack/react-simple-icons";
import { Globe } from "lucide-react";
import { LinkPreview } from "@/components/ui/link-preview";
import Section from "@/components/ui/experience-section";

export default function N8nWorkshops() {
    return (
        <div className="bg-dot-black/[0.2] dark:bg-dot-white/[0.2] min-h-screen flex flex-col items-center">
            <Nav />

            <LandingProductFeature
                title="n8n Workshops"
                description="Hosted over 10 hours of live workshops teaching businesses how to automate their workflows with n8n."
                imageSrc="/n8n.jpg"
                imagePerspective="left"
                className="max-w-[75%]"
                linkIcons={
                    <div className='flex flex-row gap-4 mt-4'>
                        <LinkPreview url="https://n8n.io/">
                            <Button variant="ghost" size="icon">
                                <Globe size={32} />
                            </Button>
                        </LinkPreview>
                        <LinkPreview url="https://www.youtube.com/watch?v=9mZnx7lpXXY">
                            <Button variant="ghost" size="icon">
                                <SiYoutube size={32} />
                            </Button>
                        </LinkPreview>                      
                    </div>}
            />

            <div className="max-w-[75%] min-w-[300px] md:min-w-[1000px] mt-6 flex flex-col items-start p-8">
                <Section
                    title="The Challenge"
                    content={`
                        In today's fast-paced business environment, repetitive tasks consume valuable time that could be better spent on strategic initiatives. Many small to medium businesses struggle with manual processes that could easily be automated, but lack the technical knowledge to implement solutions.

                        As someone passionate about automation and workflow optimization, I saw an opportunity to bridge this knowledge gap through hands-on education...
                    `}
                    imageSrc="/n8n-automation.png"
                />

                <div className="mt-16">
                    <h2 className="text-4xl font-bold mb-8 text-center">Workshop Series</h2>
                    <p className="text-lg text-center mb-12 text-gray-600 dark:text-gray-300">
                        Complete collection of live workshops covering advanced automation techniques and real-world implementations
                    </p>
                    
                    <div className="grid gap-6 md:gap-4">
                        {[
                            {
                                url: "https://www.youtube.com/watch?v=9mZnx7lpXXY",
                                date: "Aug 26, 2025",
                                title: "Automating VEO3 Video Creation"
                            },
                            {
                                url: "https://www.youtube.com/watch?v=djSkQeJtpec",
                                date: "Aug 19, 2025",
                                title: "Generating Customized Aesthetic Proposals with AI"
                            },
                            {
                                url: "https://www.youtube.com/watch?v=Ea45TswFBXg",
                                date: "Aug 12, 2025",
                                title: "Build an AI Agent That Scrapes & Analyzes Facebook Ads in Your Niche"
                            },
                            {
                                url: "https://www.youtube.com/watch?v=CL25N3WWM2c&t=1s",
                                date: "Aug 5, 2025",
                                title: "Building an Automated TikTok Content Monitor - RSS Feeds, Transcripts & Airtable"
                            },
                            {
                                url: "https://www.youtube.com/watch?v=T4PC3YNZOjQ",
                                date: "Jul 29, 2025",
                                title: "How to Turn Reddit Conversations Into High-Converting Ad Visuals"
                            },
                            {
                                url: "https://www.youtube.com/watch?v=MsfPYBa7KMg",
                                date: "Jul 22, 2025",
                                title: "How to Build a Pain Research Engine"
                            },
                            {
                                url: "https://www.youtube.com/watch?v=NF6x7GTanX0&t=1s",
                                date: "Jul 15, 2025",
                                title: "Automating Personalized Cold Outreach Campaigns"
                            },
                            {
                                url: "https://www.youtube.com/watch?v=ZzrHgz0F-u8",
                                date: "Jul 8, 2025",
                                title: "Building AI Chatbot Widget using N8N"
                            },
                            {
                                url: "https://www.youtube.com/watch?v=SBCaoWQfWn0",
                                date: "Jul 1, 2025",
                                title: "Google + N8N Automation Build"
                            },
                            {
                                url: "https://www.youtube.com/watch?v=D3zQWVlSYlI",
                                date: "Jun 24, 2025",
                                title: "AI Agent Training Call"
                            }
                        ].map((workshop, index) => (
                            <div key={index} className="flex items-center gap-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                                <div className="flex-shrink-0 w-16 h-16 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center">
                                    <SiYoutube size={24} className="text-red-600 dark:text-red-400" />
                                </div>
                                <div className="flex-grow">
                                    <h3 className="font-semibold text-lg mb-1">
                                        <a 
                                            href={workshop.url} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                        >
                                            {workshop.title}
                                        </a>
                                    </h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{workshop.date}</p>
                                </div>
                                <div className="flex-shrink-0">
                                    <a 
                                        href={workshop.url} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
                                    >
                                        Watch
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}