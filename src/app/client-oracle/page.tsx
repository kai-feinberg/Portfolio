"use client";
import React from "react";
import Nav from "@/components/Nav";
import { LandingProductFeature } from "@/components/ui/LandingProductFeature";
import { Button } from "@/components/ui/button";
import { SiGithub, SiOpenai } from "@icons-pack/react-simple-icons";
import { Globe } from "lucide-react";
import { LinkPreview } from "@/components/ui/link-preview";
import Section from "@/components/ui/experience-section";
import MarkdownSection from "@/components/ui/markdown-section";

export default function ClientOracle() {
    return (
        <div className="bg-dot-black/[0.2] dark:bg-dot-white/[0.2] min-h-screen flex flex-col items-center">
            <Nav />

            <LandingProductFeature
                title="Client Oracle"
                description="An Agentic RAG chatbot helping freelancers find clients. Automatic sync with Google Drive indexes the latest strategies."
                imageSrc="/client-oracle.jpg"
                imagePerspective="right"
                className="max-w-[75%]"
                
            />

            <div className="max-w-[75%] min-w-[300px] md:min-w-[1000px] mt-6 flex flex-col items-start p-8">
                <Section
                    title="The Problem"
                    content={`
                        Freelancers spend countless hours searching for potential clients, often struggling to identify the right prospects and craft personalized outreach messages. The process is time-consuming, inefficient, and frequently leads to generic pitches that get ignored.

                        Freelancers need a solution that not only finds potential clients but also provides niche specific insights for how to create A-level deliverables that will create value for clients.

                        This gap in the market inspired the creation of Client Oracle - an AI-powered assistant that transforms how freelancers approach client acquisition.
                    `}
                    imageSrc="/client-oracle/contacts.jpg"
                />

                {/* Architecture Section with Full-Width Image */}
                <div className="mb-16 w-full">
                    <h1 className="text-3xl font-bold mb-6 text-center">The Solution: Agentic RAG Architecture</h1>
                    
                    {/* Full-width horizontal architecture diagram */}
                    <div className="w-full mb-8">
                        <img 
                            src="/client-oracle/architecture.jpg" 
                            alt="Client Oracle Architecture Diagram" 
                            className="w-full rounded-xl shadow-lg"
                        />
                    </div>

                    {/* Content below the image */}
                    <div className="prose prose-lg max-w-none dark:prose-invert">
                        <p className="text-lg mb-6">
                            Client Oracle leverages a sophisticated Retrieval-Augmented Generation (RAG) system that integrates multiple data sources and expert knowledge:
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <h3 className="font-bold text-xl mb-3">🧠 Expert Knowledge Base</h3>
                                <p>Trained on 200+ hours of freelancing content from CopyCoders as well as video content from industry leaders like Alex Hormozi, Jeremy Haynes, and Ryan Clog</p>
                            </div>
                            
                            <div>
                                <h3 className="font-bold text-xl mb-3">👥 Crowdsourced Intelligence</h3>
                                <p>Incorporates strategies from a community of 300+ successful marketers, freelancers, and business owners</p>
                            </div>
                            
                            <div>
                                <h3 className="font-bold text-xl mb-3">🔄 Real-Time Content Integration</h3>
                                <p>Automatically pulls trending insights from YouTube, newsletters, and industry publications</p>
                            </div>
                            
                            <div>
                                <h3 className="font-bold text-xl mb-3">📊 Pre-Vetted Client Database</h3>
                                <p>Access to 1500+ qualified prospects with contact information ready for outreach</p>
                            </div>
                        </div>
                        
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-700">
                            <h3 className="font-bold text-xl mb-3">🤖 Multi-Agent System</h3>
                            <p>6+ specialized AI agents for positioning analysis, offer crafting, outreach writing, and market trend identification</p>
                        </div>
                        
                        <p className="text-lg font-semibold mt-6 text-center italic">
                            This creates the first &quot;All-knowing AI&quot; for client acquisition - constantly updated with the latest strategies and connected to major industry content creators.
                        </p>
                    </div>
                </div>

                <MarkdownSection
                    title="Key Features & Capabilities"
                    content={`
                        **Specialized AI Agents (6+ Sub-Agents)**
                        • Positioning Diagnosis: Analyze your current market position and identify gaps
                        • Next Steps Planning: Intelligent roadmap generation based on your specific situation
                        • Saboteur Detection: Identify potential obstacles and self-limiting behaviors
                        • Cold Outreach Writing: Generate personalized, high-converting outreach messages
                        • Winning Offer Creation: Craft irresistible service packages for your niche
                        • Market Trend Analysis: Real-time insights from trending content and opportunities

                        **Content Creation Suite (10+ Sub-Agents)**
                        • Ad Creation: Generate compelling advertisements across platforms
                        • Email Campaigns: Write high-converting email sequences
                        • Buyer Reports: Create detailed prospect analysis and recommendations
                        • Video Sales Letters: Craft in-feed VSL scripts that convert
                        • Retargeting Campaigns: Develop targeted follow-up sequences
                        • VEO3 Video Ads: Generate video advertisement concepts and scripts

                    `}
                    imageSrc="/client-oracle/agent-options.jpg"
                />

                <MarkdownSection
                    title="What Users Are Saying"
                    content={`
                        **"If I'm being honest it's the first time I've been shocked/scared by an AI tool in a while."** - Luke Iha (6 figure/mo coach)

                        **"Plus I think we just witnessed HISTORY... The first ever 'All-knowing AI' to get you clients. Connected to major industry content creators and players that's constantly updated every time they upload content, using their knowledge, expertise, and business to help you not just contact them but to actually create VALUE (like A-level copy or deliverables) for them in seconds. No more excuses."** - Workshop Participant
                    `}
                    imageSrc="/client-oracle/testimonials.jpg"
                    reverse={true}
                />

            </div>
        </div>
    );
}
