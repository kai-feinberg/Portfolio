"use client";
import React from "react";
import Nav from "@/components/Nav";
import { LandingProductFeature } from "@/components/ui/LandingProductFeature";
import { Button } from "@/components/ui/button";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { Globe } from "lucide-react";
import { LinkPreview } from "@/components/ui/link-preview";
import {Tweet} from "react-tweet"

export default function scout() {



    return (
        <div className="bg-dot-black/[0.2] dark:bg-dot-white/[0.2] min-h-screen flex flex-col items-center">
            <Nav />


            <LandingProductFeature
                title="Scout"
                description="An intuitive tool to improve the experience of transfering cryptocurrency."
                imageSrc="/scout-home.png"
                imagePerspective="left"
                className="max-w-[75%]" // constricting the width
                linkIcons={
                    <div className='flex flex-row gap-4 mt-4'>
                        <LinkPreview url="https://scoutprotocol.xyz/">
                            <Button variant="ghost" size="icon">
                                <Globe size={32} />
                            </Button>
                        </LinkPreview>
                        <LinkPreview url="https://github.com/kai-feinberg/Mainnet-Scout-Protocol">
                            <Button variant="ghost" size="icon">
                                <SiGithub size={32} />
                            </Button>
                        </LinkPreview>
                        
                    </div>}
            />


            <div className="max-w-[75%] mt-6 flex items-start p-8">
                <div className="flex-1 mr-16">
                    <h1 className="text-3xl font-bold mb-4">The Problem</h1>
                    <p className="text-lg mb-8">
                        Anyone who has ever used crypto knows the gut sinking feeling of waiting for your funds to transfer. Was it the right address? Or did you accidentally send sent <a href="https://x.com/PopPunkOnChain/status/1816939151343656994" target="_blank" className="font-bold underline text-blue-800 dark:text-blue-200">$600k into the abyss? </a>

                        <br/><br/>
                        As an avid believer in crypto this was unnacceptable, and inspired me to take action eventually resulting in 1st place and the grand prize of $7,000 in Mega Hackathon.
                    </p>

                    <h1 className="text-3xl font-bold mb-4">Research</h1>
                    <p className="text-lg mb-2">
                        To confirm this was a real problem I needed data. So I sent out a form in my schools startup accelerator slack. I got two responses. And one of them, Josh, was kind enough to lend me his time (he would eventually go on to found JoinFire.xyz where I would later intern).

                        With some extra help I reached out to alumni, as well as reddit and even connected to another student via LinkedIn.

                        <br/><br/>
                        The issue was quite simple. There was no way to confirm that you were sending funds to the right address. And people were willing to pay for this peace of mind, especially when transferring large funds.
                    </p>



                    <h1 className="text-3xl font-bold mt-8 mb-4">Process</h1>
                    <p className="text-lg mb-8">
                        After a quick detour to learn Solidity and React, I was able to hack together an MVP just 4 months into my freshman year of college. <span className="font-bold underline">And it sucked.</span> It was way too complicated but taught me a valuable lesson about the importance of simplicity. 
                        
                        <br/><br/>
                        So when the summer came around I decided to start over, this time with a much simpler premise, under the name Scout Protocol.
                        <br/><br/>

                        If you’ve ever used venmo, you might have had to input the last 4 digits of the phone number of the recipient as a form of confirmation. In essence, I would build a similar PIN based system for crypto.
                        <br/><br/>

                        I was able to repurpose code from tutorials to patch together the functionality I needed.
                        At the end of the summer I had Scout Protocol. Complete with PIN confirmation, a contacts list, past transactions, and fun gifs, Scout stood out amongst the steep competition from teams from Berkeley, USC, and more (recall I built this by myself!).

                        Not satisfied, I later added support for more chains and more assets, on top of filming an in depth tutorial.
                    </p>


                    <h1 className="text-3xl font-bold mt-8 mb-4">Why was this sunset?</h1>
                    <p className="text-lg mb-8">
                    Frankly this was never meant to be a true business. Any wallet provider could implement this in a second. And with the advent of cheap etherereum names and subdomains, this is a now a mostly solved problem.
                    That being said, the treasurer for the hackathon later lamented that they were sh*tting bricks trying to send the prize money to each winner and wanted to use Scout next year for the peace of mind (alas Mega hacks 2023 never got off the ground).
                    </p>


                </div>

                <div className="flex flex-col">
                    <Tweet id="1816939151343656994" />

                    <div>
                        <img src="/venmo-pin.jpg" alt="Trailmix" className="w-3/4 rounded-xl mt-32" />
                    </div>
                </div>
            </div>






        </div>

    )
}