"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { useOutsideClick } from "@/app/hooks/use-outside-click";
import { SiExpo, SiFigma, SiOpenai, SiReact } from "@icons-pack/react-simple-icons";
import { icons } from "lucide-react";

export function Projects({ orientation = "horizontal" }) {
    const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
        null
    );
    const id = useId();
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setActive(false);
            }
        }

        if (active && typeof active === "object") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    useOutsideClick(ref, () => setActive(null));

    const isVertical = orientation === "vertical";

    return (
        <>
            <div className="flex justify-center">
                <Badge className="text-3xl m-12 p-4 px-8 w-max">Projects</Badge>
            </div>

            <AnimatePresence>
                {active && typeof active === "object" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/20 h-full w-full z-10"
                    />
                )}
            </AnimatePresence>
            <AnimatePresence>
                {active && typeof active === "object" ? (
                    <div className="fixed inset-0 grid place-items-center z-[100]">
                        <motion.button
                            key={`button-${active.title}-${id}`}
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, transition: { duration: 0.05 } }}
                            className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                            onClick={() => setActive(null)}
                        >
                        </motion.button>
                        <motion.div
                            layoutId={`card-${active.title}-${id}`}
                            ref={ref}
                            className={`w-full ${isVertical ? "max-w-[400px]" : "max-w-[800px]"
                                } h-full md:h-fit md:max-h-[90%] flex ${isVertical ? "flex-col" : "flex-row"
                                } bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden`}
                        >
                            <motion.div
                                layoutId={`image-${active.title}-${id}`}
                                className={isVertical ? "w-full" : "w-1/2"}
                            >
                                <Image
                                    priority
                                    width={isVertical ? 400 : 400}
                                    height={isVertical ? 500 : 400}
                                    src={active.src}
                                    alt={active.title}
                                    className={`${isVertical
                                        ? "w-full h-[500px] max-h-[500px]"
                                        : "w-full h-full"
                                        } sm:rounded-tl-lg ${isVertical ? "sm:rounded-tr-lg" : "sm:rounded-bl-lg"
                                        } object-cover object-center`}
                                />
                            </motion.div>

                            <div className={isVertical ? "w-full" : "w-1/2"}>
                                <div className="flex justify-between items-start p-4">
                                    <div>
                                        <motion.h3
                                            layoutId={`title-${active.title}-${id}`}
                                            className="font-medium text-neutral-700 dark:text-neutral-200 text-3xl mb-2"
                                        >
                                            {active.title}
                                        </motion.h3>
                                        <motion.p
                                            layoutId={`description-${active.description}-${id}`}
                                            className="text-neutral-600 dark:text-neutral-400 text-base"
                                        >
                                            {active.description}
                                        </motion.p>
                                    </div>
                                </div>
                                <div className="pt-4 relative px-4">
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 "
                                    >
                                        <div>
                                            {typeof active.content === "function"
                                                ? active.content()
                                                : active.content}
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                ) : null}
            </AnimatePresence>
            <ul className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-start gap-8">
                {cards.map((card, index) => (
                    <motion.div
                        layoutId={`card-${card.title}-${id}`}
                        key={card.title}
                        onClick={() => setActive(card)}
                        className={`flex ${isVertical ? "flex-col" : "flex-row"
                            } bg-neutral-50 dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-900 rounded-xl cursor-pointer overflow-hidden`}
                    >
                        <motion.div
                            layoutId={`image-${card.title}-${id}`}
                            className={isVertical ? "w-full" : "w-1/2"}
                        >
                            <Image
                                width={isVertical ? 400 : 200}
                                height={isVertical ? 500 : 200}
                                src={card.src}
                                alt={card.title}
                                className={`${isVertical ? "h-[400px]" : "h-full"
                                    } w-full object-cover object-center`}
                            />
                        </motion.div>
                        <div className={`flex flex-col justify-center ${isVertical ? "p-4" : "p-4 w-1/2"}`}>
                            <motion.h3
                                layoutId={`title-${card.title}-${id}`}
                                className="font-semibold text-neutral-800 dark:text-neutral-200 text-2xl"
                            >
                                {card.title}
                            </motion.h3>
                            <motion.div
                                layoutId={`description-${card.description}-${id}`}
                                className="text-neutral-600 dark:text-neutral-400 text-sm mt-2"
                            >
                                <div className="flex justify-start flex-col">
                                    <p>{card.description}</p>
                                    <div className="flex flex-row gap-4">
                                        {card.icons && card.icons.map((icon, index) => (
                                            <icon.component key={index} className="h-6 w-6 mt-8" />
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </ul>
        </>
    );
}

const cards = [
    {
        title: "Can I Park Here?",
        description: "A React Native app to decipher parking signs.",
        src: "/tt-fuse-company.png",
        icons: [{ component: SiExpo }, { component: SiReact }, { component: SiOpenai }],
        content: () => {
            return (
                <div>
                    <p>
                        Frustrated by Evanston’s abysmal parking signs, I made a phone app to tell you if you can park somewhere.
                        Just snap a photo of the sign and get a clear Yes/No answer with a short explanation.
                        Extra useful for those with vision or cognitive impairments and for whom English is their second language.
                    </p>
                    <br />

                    <p>
                        Makes use of OpenAI's gpt-4o-mini model to analyze images taken.
                    </p>
                    <br />

                    <p>
                        Built with Expo, React Native, and OpenAI's API.
                    </p>
                </div>
            );
        },
    },
    {
        title: "TikTok Fuse",
        description: "A tinder interface to connect companies and creators.",
        src: "/tt-fuse-creator.png",
        icons: [{ component: SiFigma }],
        content: () => {
            return (
                <div>
                    <p>
                        In partnership with TikTok, my team was tasked with helping them find a better way to connect companies with creators that fit their brand so they could make ads that better integrated with native content.
                        Our innovative solution was TikTok Fuse, a tinder-esque interface to aggregate data, examples, and costs so companies and creators could find mutually beneficial partnerships.
                    </p>
                    <br />
                    <p>
                        Prototype built in Figma.
                    </p>
                </div>
            );
        },
    },
    {
        title: "Chicken Clip",
        description: "A bag clip designed for backpacks.",
        src: "/cc-rendered.png",
        content: () => {
            return (
                <div>
                    <p>
                        In this 10 week design sprint, my team identified the need to declutter classroom floors.
                        Backpacks strewn all across the ground provided a tripping hazard and traditional bag clips were not designed for the weight and form of backpacks.
                        The chicken clip is a cheap, portable accessory that keeps backpacks off the floor while keeping contents accessible.
                    </p>
                </div>
            );
        },
    },
];
