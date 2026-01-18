"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
    content,
    contentClassName
}) => {
    const [activeCard, setActiveCard] = React.useState(0);
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
        // target: ref
        container: ref,
        offset: ["start start", "end start"],
    });
    const cardLength = content.length;

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const cardsBreakpoints = content.map((_, index) => index / cardLength);
        const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
            const distance = Math.abs(latest - breakpoint);
            if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
                return index;
            }
            return acc;
        }, 0);
        setActiveCard(closestBreakpointIndex);
    });

    const backgroundColors = [
        "transparent",
        "transparent",
        "transparent",
    ];
    // Using the linear gradients as requested, cycling through them
    const linearGradients = [
        "linear-gradient(to bottom right, #06b6d4, #10b981)", // cyan-500 to emerald-500
        "linear-gradient(to bottom right, #ec4899, #6366f1)", // pink-500 to indigo-500
        "linear-gradient(to bottom right, #f97316, #eab308)", // orange-500 to yellow-500
    ];

    const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

    useEffect(() => {
        setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
    }, [activeCard]);

    return (
        <motion.div
            // Increased height to 30rem to fit the larger card fully
            className="relative flex h-[30rem] justify-center space-x-10 overflow-y-auto rounded-md p-10 no-scrollbar"
            ref={ref}>
            <div className="div relative flex items-start px-4">
                <div className="max-w-2xl">
                    {content.map((item, index) => (
                        <div key={item.title + index} className="my-20" style={{ padding: "28px" }}>
                            <motion.h2
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: activeCard === index ? 1 : 0.3,
                                }}
                                className="text-4xl font-bold text-slate-100" style={{ padding: "28px" }}>
                                {item.title}
                            </motion.h2>
                            <motion.p
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: activeCard === index ? 1 : 0.3,
                                }}
                                className="text-xl mt-10 max-w-sm text-slate-300">
                                {item.description}
                            </motion.p>
                        </div>
                    ))}
                    <div className="h-40" />
                </div>
            </div>
            <div
                className={cn(
                    "sticky top-10 hidden lg:flex flex-col gap-4 w-[30rem]",
                    contentClassName
                )}>
                <div
                    style={{ background: backgroundGradient }}
                    className="h-80 w-full overflow-hidden rounded-md bg-white">
                    {content[activeCard].content ?? null}
                </div>
                <div className="flex gap-7 justify-center">
                    <a href={content[activeCard].visitLink} className="px-6 py-2 rounded-full border border-white/20 bg-black/50 text-white font-bold hover:bg-white/20 transition duration-200 backdrop-blur-sm" style={{ padding: "15px" }}>
                        Visit Site
                    </a>
                    <a href={content[activeCard].githubLink} className="px-6 py-2 rounded-full border border-white/20 bg-black/50 text-white font-bold hover:bg-white/20 transition duration-200 backdrop-blur-sm" style={{ padding: "15px" }}>
                        GitHub
                    </a>
                </div>
            </div>
        </motion.div >
    );
};
