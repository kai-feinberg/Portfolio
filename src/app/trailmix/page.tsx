"use client";
import React from "react";
import Nav from "@/components/Nav";
import { LandingProductFeature } from "@/components/ui/LandingProductFeature";
import { Button } from "@/components/ui/button";
import { SiGithub, SiFarcaster, SiLinkedin, SiX } from "@icons-pack/react-simple-icons";
import { Globe } from "lucide-react";
import { LinkPreview } from "@/components/ui/link-preview";
import Section from "@/components/ui/experience-section";

export default function trailmix() {
    return (
        <div className="bg-dot-black/[0.2] dark:bg-dot-white/[0.2] min-h-screen flex flex-col items-center">
            <Nav />

            <LandingProductFeature
                title="Trailmix"
                description="Automated risk management for your crypto investments. Any token, any (EVM) chain, all non-custodial."
                imageSrc="/linear.webp"
                imagePerspective="right"
                className="max-w-[75%]"
                linkIcons={
                    <div className='flex flex-row gap-4 mt-10'>
                        <LinkPreview url="https://trailmix.cash/">
                            <Button variant="ghost" size="icon">
                                <Globe size={32} />
                            </Button>
                        </LinkPreview>
                        <LinkPreview url="https://github.com/kai-feinberg/TrailMixV2">
                            <Button variant="ghost" size="icon">
                                <SiGithub size={32} />
                            </Button>
                        </LinkPreview>
                        <a href="https://x.com/kai_rypto25" target="_blank" rel="noopener noreferrer">
                            <Button variant="ghost" size="icon">
                                <SiX size={32} />
                            </Button>
                        </a>
                    </div>}
            />

            <div className="max-w-[75%] min-w-[300px] md:min-w-[1000px] mt-6 flex flex-col items-start p-8">
                <Section
                    title="The Problem"
                    content={`
                        When you hear of crypto you probably think of volatility. Take a look at any crypto price chart and it is easy to see why. While speculative markets are inherently risky, crypto takes this to an extreme with token prices surging and crashing 24/7.

                        Fed up with the lack of tools to manage my portfolio around the clock, I decided to fix it myself…
                    `}
                    imageSrc="/solana-pa.png"
                />

                <Section
                    title="Research"
                    content={`
                        As all good designers do, I started with research. I leveraged my schools alumni network to interview venture backed founders, professionals in the space, and other students like me.

                        By the end I was able to better quantify the problem: speed and greed.

                        1. We don't have the time to monitor markets 24/7.
                        2. Our decisions are constantly clouded by emotions.

                        To combat these two fronts I knew I had to make a system that was automated. This would automatically enforce the strategy on top of monitoring the markets 24/7.

                        The tool I decided to use was trailing stop losses.
                    `}
                    imageSrc="/tm-stop-loss.png"
                    reverse={true}
                />

                <Section
                    title="Process"
                    content={`
                        The journey to an MVP was riddled with challenges from bad docs to react state sharing. From Figma, to testnet, to production, I used any and all resources I had to bring this idea to life. I was forced to be resourceful, picking up skills on a need to know basis and making use of open source libraries such as Shadcn and Scaffold Eth.

                        I won't bore you with every single detail. Thats what the Github repo is for.

                        What you need to know is this. TrailMix went through a lot of changes. From crappy figma illustrations to a grossly overpriced proof of concept (seriously $1.5 per strategy is crazy), to its final form (for now)—a fully functional, fully deployed way to manage risk across 15 assets and 2 chains.

                        *now it costs less than a cent per strategy.
                    `}
                    imageSrc="/process-image.png" // Replace with actual image
                    reverse={true}
                />

                <Section
                    title="Conclusion"
                    content={`
                        When I started, I didn't know how to build TrailMix. But that didn't deter me. Because I'm a builder. I learn by building. By combing through docs, and watching countless tutorials. By trial and error and chatGPT. I do what it takes to bring ideas to life.

                        Maybe the real friends are the libraries we learned along the way…
                    `}
                    imageSrc="/conclusion-image.png" // Replace with actual image
                />
            </div>
        </div>
    );
}
