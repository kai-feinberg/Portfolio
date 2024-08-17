"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/wobble-card";
import { LinkPreview } from "./ui/link-preview";
import { Badge } from "./ui/badge";

export default function Experience() {
    return (
        <div className="flex flex-col items-center">
            <Badge className="text-3xl m-12 p-4 px-8 w-max">Experience</Badge>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-[95%]">
                <WobbleCard
                    containerClassName="col-span-1 lg:col-span-2 h-full bg-red-800 min-h-[500px] lg:min-h-[300px]"
                    className=""
                >
                    <p className="text-xl font-semibold absolute bottom-8 right-8 text-white">Intern</p>
                    <p className="text-xl font-semibold absolute bottom-16 right-8 text-white">2023</p>
                    <div className="max-w-xs">
                        <LinkPreview url="https://x.com/_joinfire" className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                            🔥 JoinFire
                        </LinkPreview>
                        <p className="mt-4 text-left  text-base/6 text-neutral-200">
                            Product intern at venture backed startup. Worked on the core product and helped with
                            the development of the web app.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                            <Badge className="">Python</Badge>
                            <Badge className="">Figma</Badge>
                        </div>
                    </div>
                    {/* <Image
                        src="/linear.webp"
                        width={500}
                        height={500}
                        alt="linear demo image"
                        className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
                    /> */}
                </WobbleCard>
                <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-indigo-800">
                    <p className="text-xl font-semibold absolute top-8 right-8 text-white">Founder</p>
                    <p className="text-xl font-semibold absolute top-16 right-8 text-white">2021</p>
                    <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                        🥇 Scout Protocol
                    </h2>
                    <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
                        A safe way to send crypto assets. Secured by a PIN system you can make sure you are always sending to the right address.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                        <Badge className="">React</Badge>
                        <Badge className="">Typescript</Badge>
                        <Badge className="">NextJs</Badge>
                    </div>
                </WobbleCard>
                <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-700 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
                    <div className="max-w-sm">
                        <p className="text-xl font-semibold absolute top-8 right-8 text-white">Founder</p>
                        <p className="text-xl font-semibold absolute top-16 right-8 text-white">2023-2024</p>
                        <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                            🗻 TrailMix.cash
                        </h2>
                        <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
                            A DeFi protocol that provides automated risk management for your crypto assets.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-8">
                            <Badge className="">React</Badge>
                            <Badge className="">Typescript</Badge>
                            <Badge className="">NextJs</Badge>
                            <Badge className="">Shadcn/ui</Badge>
                            <Badge className="">Tailwind</Badge>
                            <Badge className="">Solidity</Badge>
                        </div>
                    </div>
                    {/* <Image
                        src="/linear.webp"
                        width={500}
                        height={700}
                        alt="linear demo image"
                        className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
                    /> */}
                </WobbleCard>
            </div>
        </div>
    );
}
