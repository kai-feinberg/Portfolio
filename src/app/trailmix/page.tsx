"use client";
import React from "react";
import Nav from "@/components/Nav";
import { LandingProductFeature } from "@/components/ui/LandingProductFeature";
import { Button } from "@/components/ui/button";
import { SiGithub, SiFarcaster, SiLinkedin, SiX } from "@icons-pack/react-simple-icons";
import { Globe } from "lucide-react";
import { LinkPreview } from "@/components/ui/link-preview";

export default function trailmix() {
    return (
        <div className="bg-dot-black/[0.2] dark:bg-dot-white/[0.2] min-h-screen flex flex-col items-center">
            <Nav />

            <LandingProductFeature
                title="Trailmix"
                description="Automated risk management for your crypto investments. Any token, any (EVM) chain, all non-custodial."
                imageSrc="/linear.webp"
                imagePerspective="right"
                className="max-w-[75%]" // constricting the width
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

            <div className="max-w-[75%] mt-6 flex items-start p-8">
                <div className="flex-1 mr-16">
                    <h1 className="text-3xl font-bold mb-4">The Problem</h1>
                    <p className="text-lg mb-8">
                        When you hear of crypto you probably think of volatility. Take a look at any crypto price chart and it is easy to see why. While speculative markets are inherently risky, crypto takes this to an extreme with token prices surging and crashing 24/7.

                        Fed up with the lack of tools to manage my portfolio around the clock, I decided to fix it myself…
                    </p>
                    <h1 className="text-3xl font-bold mb-4">Research</h1>
                    <p className="text-lg mb-2">
                        As all good designers do, I started with research. I leveraged my schools alumni network to interview venture backed founders, professionals in the space, and other students like me.

                        <br /> <br /> By the end I was able to better quantify the problem: speed and greed.
                    </p>
                    <ol className="list-decimal px-12 text-lg">
                        <li>We don't have the time to monitor markets 24/7.</li>
                        <li>Our decisions are constantly clouded by emotions.</li>
                    </ol>

                    <p className="text-lg">
                        <br /> <br />
                        To combat these two fronts I knew I had to make a system that was <span className="font-bold underline inline-block">automated</span>. This would automatically enforce the strategy on top of monitoring the markets 24/7.

                        The tool I decided to use was <LinkPreview url="https://medium.com/@trailmix.crypto/introduction-to-trailmix-8f4cc81375b5" className="font-bold underline text-blue-800">trailing stop losses</LinkPreview>.
                    </p>


                    <h1 className="text-3xl font-bold mt-8 mb-4">Process</h1>
                    <p className="text-lg mb-8">
                        The journey to an MVP was riddled with challenges from bad docs to react state sharing. From Figma, to testnet, to production, I used any and all resources I had to bring this idea to life. I was forced to be resourceful, picking up skills on a need to know basis and making use of open source libraries such as Shadcn and Scaffold Eth.

                        I won’t bore you with every single detail. Thats what the github repo is for (INSERT).

                        What you need to know is this. TrailMix went through a lot of changes. From crappy figma illustrations to a grossly overpriced proof of concept (seriously $1.5 per strategy is crazy), to its final form (for now)—a fully functional, fully deployed way to manage risk across 15 assets and 2 chains.

                        *now it costs less than a cent per strategy.
                    </p>


                    <h1 className="text-3xl font-bold mt-8 mb-4">Conclusion</h1>
                    <p className="text-lg mb-8">
                        When I started, I didn’t know how to build TrailMix. But that didn’t deter me. Because I’m a builder. I learn by building. By combing through docs, and watching countless tutorials. By trial and error and chatGPT. I do what it takes to bring ideas to life.

                        <br/><br/>
                        Maybe the real friends are the libraries we learned along the way…
                    </p>





                </div>
                <img src="/linear.webp" alt="Trailmix" className="w-1/3 rounded-xl" />
            </div>

        </div>
    );
}