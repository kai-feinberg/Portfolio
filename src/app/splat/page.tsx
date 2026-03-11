"use client";
import React from "react";
import Nav from "@/components/Nav";
import { LandingProductFeature } from "@/components/ui/LandingProductFeature";
import MarkdownSection from "@/components/ui/markdown-section";

export default function Splat() {
    return (
        <div className="bg-dot-black/[0.2] dark:bg-dot-white/[0.2] min-h-screen flex flex-col items-center">
            <Nav />

            <LandingProductFeature
                title="Splat AI"
                description={
                    <>
                        An infinite canvas for AI conversations. Connect YouTube videos, websites, PDFs, and social media posts once — then reuse that context across as many chat threads as you want.
                        <br />
                        <br />
                        <a href="https://youtu.be/9R4c9RgYUh8" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mt-2 inline-block">
                            Watch the demo video (a bit outdated!)
                        </a>
                    </>
                }
                imageSrc="/splat/connect-context.jpg"
                imagePerspective="left"
                className="max-w-[75%]"
            />

            <div className="max-w-[75%] min-w-[300px] md:min-w-[1000px] mt-6 flex flex-col items-start p-8">
                <MarkdownSection
                    title="The Problem: Loading Context"
                    content={`
                        Every time I wanted to reference something in an AI chat — a YouTube video, a post, an article — I had to manually load that context from scratch. Analyzing ten videos meant pasting transcripts ten times. Same videos in a new conversation? Start over.

                        Beyond the repetition, web search in existing AI tools was basically useless. It surfaced articles written to rank on Google, not to inform. Product pages, affiliate content, SEO fluff. I kept getting the same garbage dressed up differently.

                        I wanted AI that already knew what I was working with, and that pulled from sources people actually trusted — not whatever gamed its way to the top of a search results page.
                    `}
                    imageSrc="/splat/add-anything.jpg"
                />

                <MarkdownSection
                    title="The Solution: Persistent Context Canvas"
                    content={`
                        Splat is an infinite canvas where your sources live as nodes. You connect them once — YouTube videos, websites, PDFs, TikToks, Facebook Ads — and they stay there.

                        Chat threads on the canvas automatically inherit whatever context you've connected. Want to analyze ten videos from five different angles? Spin up five threads. They all start with the same context, no re-uploading required.

                        It's a small shift that changes how the whole thing feels. The AI isn't starting from zero every time. It already knows what you're working with.
                    `}
                    imageSrc="/splat/connected-videos.jpg"
                    reverse={true}
                />

                <MarkdownSection
                    title="Filtered Web Search & Social Intelligence"
                    content={`
                        I built a web search layer that filters for quality before passing anything to the AI. Promotional content, thin articles, and SEO filler get stripped out. What's left is actually worth reading.

                        Reddit search runs alongside it. Google surfaces articles written for algorithms. Reddit surfaces what people actually think. Those are different things, and it turns out the latter is much more useful for understanding why content works.

                        The combination means the AI is working from real discussions and vetted sources instead of whatever content farm happened to rank this week.
                    `}
                    imageSrc="/splat/filtered-websearch.jpg"
                />

                <MarkdownSection
                    title="Rich Context Through Transcription & Metadata"
                    content={`
                        For YouTube videos, Splat pulls the full transcript automatically. For social posts, it captures engagement data too — likes, comments, shares — so the AI knows what actually got traction, not just what was posted.

                        That context gets processed once and stored on the canvas. Every chat thread that references it reads from the same cached data, so you're not re-transcribing the same video or re-scraping the same page for each new conversation.

                        It's faster, cheaper per conversation, and means the AI has more to work with than just a title and thumbnail.
                    `}
                    imageSrc="/splat/instant-transcripts.jpg"
                    reverse={true}
                />

                <MarkdownSection
                    title="Organization Collaboration & Credit System"
                    content={`
                        Teams share canvases and pick up each other's threads. Data is scoped to the organization and canvas, so nothing bleeds between workspaces. Multi-tenant support runs through Clerk Organizations.

                        Credits are organization-scoped rather than per-user, with real-time deduction via Convex. Usage is visible, not hidden in a dashboard you have to hunt for, and top-ups are available when a team runs low.

                        Convex also handles live sync across tabs: transcripts and scrapes update as they complete, AI responses stream directly to the canvas, and nothing requires a refresh to see current state.
                    `}
                    imageSrc="/splat/custom-agents.jpg"
                />

                <MarkdownSection
                    title="Not Just for Content Creators"
                    content={`
                        Most of what I described above is framed around content creation, but that's not all I use it for. Some of my most-used canvases have nothing to do with making anything.

                        When I'm trying to understand a topic — a health thing, a technical concept, something in the news — I'll pull in articles, Reddit threads, and YouTube explainers, then just talk through it with the AI. It's faster than reading everything linearly and better than asking ChatGPT cold, because the sources are right there and I can push back on specific claims.

                        Product research works the same way. I'll load reviews, comparison videos, forum posts about real-world issues, and have an actual conversation about the tradeoffs. Not "what's the best standing desk" but "given these five options and these threads about wobble and shipping damage, what would you actually pick." The answer is usually more useful.

                        I've used it to research supplements, compare health insurance plans, figure out what was wrong with my car, and think through some genuinely hard decisions. The persistent canvas means each of those is its own workspace I can come back to, not a chat history I have to scroll through.
                    `}
                    imageSrc="/splat/search-socials.jpg"
                    reverse={true}
                />

                <MarkdownSection
                    title="A Passion Project Born from Frustration"
                    content={`
                        I built this because the tools I was using kept getting in the way. Notes lived in a different app. The AI guessed at videos from titles. Search returned five versions of the same SEO article. At some point it's easier to just build what you want.

                        So I built what I wanted. The canvas, the filtered search, the transcript pipeline — none of it came from a roadmap. It came from hitting a wall and deciding to go around it.

                        I still use it every day. That's probably the most honest thing I can say about it.
                    `}
                    imageSrc="/splat/markdown-editor.jpg"
                    reverse={true}
                />
            </div>
        </div>
    );
}
