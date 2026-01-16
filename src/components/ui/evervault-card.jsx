"use client";
import { useMotionValue, useMotionTemplate, motion } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export const EvervaultBackground = ({ className, children }) => {
    const containerRef = useRef(null);
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);
    const [isHovering, setIsHovering] = useState(false);
    const [randomString, setRandomString] = useState("");

    useEffect(() => {
        let str = generateRandomString(10000);
        setRandomString(str);
    }, []);

    function onMouseMove(e) {
        if (!containerRef.current) return;
        let { left, top } = containerRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);

        const str = generateRandomString(10000);
        setRandomString(str);
    }

    function onMouseEnter() {
        setIsHovering(true);
    }

    function onMouseLeave() {
        setIsHovering(false);
    }

    let maskImage = useMotionTemplate`radial-gradient(200px at ${mouseX}px ${mouseY}px, white, transparent)`;
    let style = { maskImage, WebkitMaskImage: maskImage };

    return (
        <div
            ref={containerRef}
            onMouseMove={onMouseMove}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className={cn(
                "relative w-full h-full bg-black overflow-hidden",
                className
            )}
        >
            {/* Random letters background - only visible on hover */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400"
                    style={style}
                    animate={{
                        opacity: isHovering ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                />
                <motion.div
                    className="absolute inset-0"
                    style={style}
                    animate={{
                        opacity: isHovering ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <p className="absolute inset-0 text-xs break-words whitespace-pre-wrap text-white/80 font-mono font-bold leading-relaxed p-4">
                        {randomString}
                    </p>
                </motion.div>
            </div>

            {/* Content on top */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
export const generateRandomString = (length) => {
    let result = "";
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
};

export const Icon = ({ className, ...rest }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={className}
            {...rest}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
        </svg>
    );
};
