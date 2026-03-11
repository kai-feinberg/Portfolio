"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/wobble-card";
import { LinkPreview } from "./ui/link-preview";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import Link from "next/link";
import { FollowerPointerCard } from "./ui/following-pointer";

export default function Experience() {
    return (
        <div className="flex flex-col items-center">
            <Badge className="text-2xl sm:text-3xl m-8 sm:m-12 p-3 sm:p-4 px-6 sm:px-8 w-max">Experience</Badge>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:w-[95%]">
                <div className="col-span-1 md:col-span-2 lg:col-span-2">
                    <Link href="#">

                            <WobbleCard containerClassName="bg-purple-700 min-h-[350px] sm:min-h-[400px] lg:min-h-[450px] xl:min-h-[300px]">
                                <div className="max-w-sm p-4 sm:p-0">
                                    <p className="text-base sm:text-xl font-semibold absolute top-4 right-4 sm:top-8 sm:right-8 text-white">Associate</p>
                                    <p className="text-base sm:text-xl font-semibold absolute top-12 right-4 sm:top-16 sm:right-8 text-white">Present</p>
                                    <h2 className="max-w-sm md:max-w-lg text-left text-balance text-xl sm:text-2xl md:text-3xl font-semibold tracking-[-0.015em] text-white mt-20 sm:mt-0">
                                        🏢 KPMG
                                    </h2>
                                    <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200 pb-2">
                                        Designing and building projects for clients as a part of the app services and emerging platforms team.
                                    </p>
                                    <div className="flex flex-wrap gap-2 mt-8">
                                        <Badge className="">Azure</Badge>
                                        <Badge className="">Python</Badge>
                                        <Badge className="">React</Badge>
                                    </div>
                                </div>
                            </WobbleCard>
                    </Link>
                </div>

                <div className="col-span-1 md:col-span-2 lg:col-span-3">
                    <Link href="#">

                            <WobbleCard containerClassName="bg-green-700 min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
                                <div className="max-w-sm p-4 sm:p-0">
                                    <p className="text-base sm:text-xl font-semibold absolute top-4 right-4 sm:top-8 sm:right-8 text-white">Head of AI</p>
                                    <p className="text-base sm:text-xl font-semibold absolute top-12 right-4 sm:top-16 sm:right-8 text-white">2025</p>
                                    <h2 className="max-w-sm md:max-w-lg text-left text-balance text-xl sm:text-2xl md:text-3xl font-semibold tracking-[-0.015em] text-white mt-20 sm:mt-0">
                                      📝 CopyCoders
                                    </h2>
                                    <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
                                        A coaching company teaching freelancers and business owners how to use AI to improve their direct response marketing.
                                    </p>
                                    <div className="flex flex-wrap gap-2 mt-8">
                                        <Badge className="">n8n</Badge>
                                        <Badge className="">Vercel AI SDK</Badge>
                                        <Badge className="">Supabase</Badge>
                                        <Badge className="">Pinecone</Badge>
                                        
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
                    </Link>
                </div>

                <div className="col-span-1 md:col-span-2 lg:col-span-3">
                <Link href="/trailmix">

                    <FollowerPointerCard title="Click for case study">
                            <WobbleCard containerClassName="bg-blue-700 min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
                                <div className="max-w-sm p-4 sm:p-0">
                                    <p className="text-base sm:text-xl font-semibold absolute top-4 right-4 sm:top-8 sm:right-8 text-white">Founder</p>
                                    <p className="text-base sm:text-xl font-semibold absolute top-12 right-4 sm:top-16 sm:right-8 text-white">2023-2024</p>
                                    <h2 className="max-w-sm md:max-w-lg text-left text-balance text-xl sm:text-2xl md:text-3xl font-semibold tracking-[-0.015em] text-white mt-20 sm:mt-0">
                                        🗻 TrailMix.cash
                                    </h2>
                                    <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200 pb-2">
                                        A DeFi protocol that provides automated risk management for your crypto assets.
                                    </p>
                                    <div className="flex flex-wrap gap-2 mt-8">
                                        <Badge className="">Typescript</Badge>
                                        <Badge className="">NextJs</Badge>
                                        <Badge className="">Shadcn/ui</Badge>
                                        <Badge className="">Tailwind</Badge>
                                    </div>
                                </div>
                                
                            </WobbleCard>
                        </FollowerPointerCard>
                    </Link>
                </div>

                <div className="col-span-1 md:col-span-1 lg:col-span-2">
                    <Link href="/scout">
                        <FollowerPointerCard title="Click for case study">

                            <WobbleCard containerClassName="bg-indigo-800 min-h-[400px] sm:min-h-[500px] lg:min-h-[500px] xl:min-h-[300px]">
                                <div className="max-w-sm p-4 sm:p-0">
                                    <p className="text-base sm:text-xl font-semibold absolute top-4 right-4 sm:top-8 sm:right-8 text-white">Founder</p>
                                    <p className="text-base sm:text-xl font-semibold absolute top-12 right-4 sm:top-16 sm:right-8 text-white">2021</p>
                                    <h2 className="max-w-80 text-left text-balance text-xl sm:text-2xl md:text-3xl font-semibold tracking-[-0.015em] text-white mt-20 sm:mt-0">
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
                                </div>
                            </WobbleCard>
                        </FollowerPointerCard>

                    </Link>
                </div>


            </div>
        </div>
    );
}
