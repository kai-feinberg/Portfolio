"use client";
import React from "react";
import Nav from "@/components/Nav";
import { LandingProductFeature } from "@/components/ui/LandingProductFeature";
import MarkdownSection from "@/components/ui/markdown-section";

export default function ExodusAI() {
    return (
        <div className="bg-dot-black/[0.2] dark:bg-dot-white/[0.2] min-h-screen flex flex-col items-center">
            <Nav />

            <LandingProductFeature
                title="Exodus AI"
                description="A daily email engine that business owners use to create content that resonates with their audience. Unlike other AI systems, Exodus comes to users with personalized suggestions based on news topics, RSS feeds, and YouTube content—enabling automated content creation that drives growth."
                imageSrc="/exodus/generate-content.png"
                imagePerspective="left"
                className="max-w-[75%]"
                
            />

            <div className="max-w-[75%] min-w-[300px] md:min-w-[1000px] mt-6 flex flex-col items-start p-8">
                <MarkdownSection
                    title="Personalized AI Content Engine"
                    content={`
                        Exodus is a daily email engine that business owners can use to create content that resonates with their audience. This includes a personalized recommendation system that pulls from news topics as well as scraping RSS feeds, email newsletters, and content from YouTube.

                        Users get a customized system prompt as well as a fine-tuned model tailored to their business needs. Unlike other AI systems, Exodus comes to the user with suggestions—users can simply create based off of the recommendations.

                        Exodus is also expanding to generate short-form content as well as ads and videos with voice-over capabilities, utilizing advanced context engineering to deliver personalized results.
                    `}
                    imageSrc="/exodus/news-ideas.png"
                />

                
                <MarkdownSection
                    title="Expanding Content Capabilities"
                    content={`
                        Exodus is rapidly expanding beyond email to become a comprehensive content creation platform. The system generates daily email content, short-form social media posts, video content with AI-generated voice-over, and advertisement copy through advanced context engineering.

                        Using personalized system prompts that understand brand voice, Exodus creates context-aware content aligned with business goals and automatically adapts based on audience segments. The AI monitors trends and proactively brings relevant content ideas to users, populating content calendars with smart timing recommendations for maximum impact across platforms.
                    `}
                    imageSrc="/exodus/generate-content.png"
                    reverse={true}
                />

                <MarkdownSection
                    title="AI-Driven Automation Architecture"
                    content={`
                        Exodus leverages sophisticated AI and context engineering to automate valuable content creation work for businesses. The platform uses business-specific model training with customized system prompts for each business context, enabling context-aware content generation that understands business goals across text, image, and video formats.

                        The system parses RSS feeds, analyzes email newsletters, monitors YouTube content, and scores news topics for relevance. Through advanced prompt engineering and personalized recommendation algorithms, Exodus adapts content based on audience segments and automatically optimizes for engagement while providing performance analytics and content strategy recommendations based on data.
                    `}
                    imageSrc="/exodus/news-ideas.png"
                />

                <MarkdownSection
                    title="Automating Growth Through AI"
                    content={`
                        Exodus represents a new paradigm in business automation, bringing together AI and business intelligence to automate valuable work that drives growth. The system is specifically designed for small and medium business needs, creating top-of-funnel content that drives awareness and leads through scalable content operations.

                        The platform provides email marketing automation with personalized content, short-form social media generation, video content with AI voice-over capabilities, and advertisement copy creation. Through advanced context engineering and fine-tuned models that understand brand voice, Exodus enables businesses to maintain consistent, high-quality content across multiple channels while focusing on core business operations.
                    `}
                    imageSrc="/exodus/swiped-content.png"
                    reverse={true}
                />

            </div>
        </div>
    );
}