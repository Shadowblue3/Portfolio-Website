"use client";
import React from "react";
import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import {
    SiC,
    SiCplusplus,
    SiPython,
    SiReact,
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiExpress,
    SiNodedotjs,
    SiMongodb,
    SiMongoose,
    SiNumpy,
    SiPandas,
    SiScikitlearn,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

export function Skills() {
    return (
        <div className="w-full">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center" style={{
                marginBottom: "20px",
                padding: "28px",
                textAlign: "center",
                marginTop: "30px",
            }}>Skills & Technologies</h2>
            <div className="py-10 overflow-x-auto overflow-y-hidden scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                <div className="flex flex-row items-stretch gap-6 px-8 pb-4 min-w-max">
                    <Card title="Core Programming">
                        <CanvasRevealEffect
                            animationSpeed={5.1}
                            containerClassName="bg-emerald-900"
                        />
                        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white opacity-0 group-hover/canvas-card:opacity-100 transition duration-200">
                            <ul className="text-center font-bold text-lg flex flex-col gap-2">
                                <li className="flex items-center gap-2 justify-center"><SiC /> C</li>
                                <li className="flex items-center gap-2 justify-center"><SiCplusplus /> C++</li>
                                <li className="flex items-center gap-2 justify-center"><FaJava /> Java</li>
                                <li className="flex items-center gap-2 justify-center"><SiPython /> Python</li>
                            </ul>
                        </div>
                    </Card>
                    <Card title="Webdev (Frontend)">
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
                            <ul className="text-center font-bold text-lg flex flex-col gap-2">
                                <li className="flex items-center gap-2 justify-center"><SiReact /> React</li>
                                <li className="flex items-center gap-2 justify-center"><SiHtml5 /> HTML</li>
                                <li className="flex items-center gap-2 justify-center"><SiCss3 /> CSS</li>
                                <li className="flex items-center gap-2 justify-center"><SiJavascript /> Javascript</li>
                                <li className="flex items-center gap-2 justify-center">ejs</li>
                            </ul>
                        </div>
                    </Card>
                    <Card title="Webdev (Backend)">
                        <CanvasRevealEffect
                            animationSpeed={3}
                            containerClassName="bg-sky-600"
                            colors={[[125, 211, 252]]}
                        />
                        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white opacity-0 group-hover/canvas-card:opacity-100 transition duration-200">
                            <ul className="text-center font-bold text-lg flex flex-col gap-2">
                                <li className="flex items-center gap-2 justify-center"><SiExpress /> Express</li>
                                <li className="flex items-center gap-2 justify-center"><SiNodedotjs /> Node.js</li>
                            </ul>
                        </div>
                    </Card>
                    <Card title="Database">
                        <CanvasRevealEffect
                            animationSpeed={3}
                            containerClassName="bg-amber-600"
                            colors={[[251, 191, 36]]}
                        />
                        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white opacity-0 group-hover/canvas-card:opacity-100 transition duration-200">
                            <ul className="text-center font-bold text-lg flex flex-col gap-2">
                                <li className="flex items-center gap-2 justify-center"><SiMongodb /> MongoDB</li>
                                <li className="flex items-center gap-2 justify-center"><SiMongoose /> Mongoose</li>
                            </ul>
                        </div>
                    </Card>
                    <Card title="AI & Machine Learning">
                        <CanvasRevealEffect
                            animationSpeed={3}
                            containerClassName="bg-purple-900"
                            colors={[[168, 85, 247]]}
                        />
                        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white opacity-0 group-hover/canvas-card:opacity-100 transition duration-200">
                            <ul className="text-center font-bold text-lg flex flex-col gap-2">
                                <li className="flex items-center gap-2 justify-center"><SiNumpy /> Numpy</li>
                                <li className="flex items-center gap-2 justify-center"><SiPandas /> pandas</li>
                                <li className="flex items-center gap-2 justify-center">matplotlib</li>
                                <li className="flex items-center gap-2 justify-center"><SiScikitlearn /> scikit-learn</li>
                            </ul>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}

const Card = ({
    title,
    children,
}) => {
    const [hovered, setHovered] = React.useState(false);
    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="group/canvas-card flex items-center justify-center bg-transparent rounded-xl w-[220px] flex-shrink-0 p-4 relative h-[18rem] overflow-hidden"
        >
            {/* Animated shiny border */}
            <div
                className="absolute inset-0 rounded-xl"
                style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent, rgba(255,255,255,0.4), transparent, rgba(255,255,255,0.1), transparent)',
                    backgroundSize: '200% 100%',
                    animation: 'shimmer 3s linear infinite',
                }}
            />
            <div className="absolute inset-[1px] rounded-xl bg-black/80" />

            {/* Corner Icons */}
            <Icon className="absolute h-5 w-5 -top-2 -left-2 text-white/40 z-10" />
            <Icon className="absolute h-5 w-5 -bottom-2 -left-2 text-white/40 z-10" />
            <Icon className="absolute h-5 w-5 -top-2 -right-2 text-white/40 z-10" />
            <Icon className="absolute h-5 w-5 -bottom-2 -right-2 text-white/40 z-10" />

            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="h-full w-full absolute inset-0 rounded-xl overflow-hidden">
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
            {/* Title visible initially */}
            <h2
                className="absolute z-10 text-lg font-bold text-white opacity-100 group-hover/canvas-card:opacity-0 transition duration-200">
                {title}
            </h2>
        </div>
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
