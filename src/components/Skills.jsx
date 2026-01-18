"use client";
import React from "react";

import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

export function Skills() {
    return (
        <div className="w-full">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center" style={{
                marginBottom: "20px",
                padding: "28px",
                textAlign: "center",
                marginTop: "30px",
            }}>Skills & Technologies</h2>
            <div className="py-20 flex flex-col lg:flex-row items-center justify-center bg-transparent w-full gap-4 mx-auto px-8 flex-wrap">
                <Card title="Core Programming" icon={<AceternityIcon />}>
                    <CanvasRevealEffect
                        animationSpeed={5.1}
                        containerClassName="bg-emerald-900"
                    />
                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white opacity-0 group-hover/canvas-card:opacity-100 transition duration-200">
                        <ul className="text-center font-bold text-lg">
                            <li>C/C++</li>
                            <li>Java</li>
                            <li>Python</li>
                        </ul>
                    </div>
                </Card>
                <Card title="Webdev (Frontend)" icon={<AceternityIcon />}>
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-black"
                        colors={[
                            [236, 72, 153],
                            [232, 121, 249],
                        ]}
                        dotSize={2}
                    />
                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white opacity-0 group-hover/canvas-card:opacity-100 transition duration-200">
                        <ul className="text-center font-bold text-lg">
                            <li>React</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>ejs</li>
                        </ul>
                    </div>
                </Card>
                <Card title="Webdev (Backend)" icon={<AceternityIcon />}>
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-sky-600"
                        colors={[[125, 211, 252]]}
                    />
                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white opacity-0 group-hover/canvas-card:opacity-100 transition duration-200">
                        <ul className="text-center font-bold text-lg">
                            <li>Express</li>
                            <li>Node.js</li>
                        </ul>
                    </div>
                </Card>
                <Card title="Database" icon={<AceternityIcon />}>
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-amber-600"
                        colors={[[251, 191, 36]]}
                    />
                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white opacity-0 group-hover/canvas-card:opacity-100 transition duration-200">
                        <ul className="text-center font-bold text-lg">
                            <li>MongoDB</li>
                            <li>Mongoose</li>
                        </ul>
                    </div>
                </Card>
                <Card title="AI & Machine Learning" icon={<AceternityIcon />}>
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-purple-900"
                        colors={[[168, 85, 247]]}
                    />
                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white opacity-0 group-hover/canvas-card:opacity-100 transition duration-200">
                        <ul className="text-center font-bold text-lg">
                            <li>Numpy</li>
                            <li>pandas</li>
                            <li>matplotlib</li>
                            <li>scikitlearn</li>
                        </ul>
                    </div>
                </Card>
            </div>
        </div>
    );
}

const Card = ({
    title,
    icon,
    children,
}) => {
    const [hovered, setHovered] = React.useState(false);
    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[30rem]">
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon
                className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="h-full w-full absolute inset-0">
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
            <div className="relative z-20">
                <div
                    className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
                    {icon}
                </div>
                <h2
                    className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
                    {title}
                </h2>
            </div>
            {/* Title visible initially */}
            <h2
                className="absolute z-10 text-2xl font-bold text-white opacity-100 group-hover/canvas-card:opacity-0 transition duration-200">
                {title}
            </h2>
        </div>
    );
};

const AceternityIcon = () => {
    return (
        <svg
            width="66"
            height="65"
            viewBox="0 0 66 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white ">
            <path
                d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
                stroke="currentColor"
                strokeWidth="15"
                strokeMiterlimit="3.86874"
                strokeLinecap="round"
                style={{ mixBlendMode: "darken" }} />
        </svg>
    );
};

export const Icon = ({
    className,
    ...rest
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={className}
            {...rest}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
        </svg>
    );
};
