"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const CanvasRevealEffect = ({
    animationSpeed = 0.4,
    opacities = [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1],
    colors = [[0, 255, 255]],
    containerClassName,
    dotSize,
    showGradient = true,
}) => {
    return (
        <div className={cn("h-full relative bg-black w-full", containerClassName)}>
            <div className="h-full w-full">
                <DotMatrix
                    colors={colors ?? [[0, 255, 255]]}
                    dotSize={dotSize ?? 3}
                    opacities={opacities ?? [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1]}
                    shader={`
            float animation_speed_factor = ${animationSpeed.toFixed(1)};
            float intro_offset = distance(u_resolution / 2.0 / u_total_size, st2) * 0.01 + (random(st2) * 0.15);
            opacity *= step(intro_offset, u_time * animation_speed_factor);
            opacity *= clamp((1.0 - step(intro_offset + 0.1, u_time * animation_speed_factor)) * 1.25, 1.0, 1.25);
          `}
                    center={["x", "y"]}
                />
            </div>
            {showGradient && (
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-[84%]" />
            )}
        </div>
    );
};

const DotMatrix = ({
    colors = [[0, 0, 0]],
    opacities = [0.04, 0.04, 0.04, 0.04, 0.04, 0.08, 0.08, 0.08, 0.08, 0.14],
    totalSize = 4,
    dotSize = 2,
    shader = "",
    center = ["x", "y"],
}) => {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const animationFrameRef = useRef(null);
    const startTimeRef = useRef(Date.now());

    const resizeCanvas = useCallback(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const { width, height } = container.getBoundingClientRect();
        const dpr = window.devicePixelRatio || 1;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
    }, []);

    const drawDots = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const dpr = window.devicePixelRatio || 1;
        const width = canvas.width;
        const height = canvas.height;

        ctx.clearRect(0, 0, width, height);

        const time = (Date.now() - startTimeRef.current) / 1000;
        const centerX = width / 2;
        const centerY = height / 2;
        const maxDist = Math.sqrt(centerX * centerX + centerY * centerY);

        for (let x = 0; x < width; x += totalSize * dpr) {
            for (let y = 0; y < height; y += totalSize * dpr) {
                const dx = x - centerX;
                const dy = y - centerY;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const normDist = dist / maxDist;

                const introOffset = normDist * 0.5 + Math.random() * 0.15;
                const animProgress = time * 0.4;

                if (animProgress > introOffset) {
                    const colorIndex = Math.floor(Math.random() * colors.length);
                    const color = colors[colorIndex];
                    const opacityIndex = Math.floor(Math.random() * opacities.length);
                    let opacity = opacities[opacityIndex];

                    // Fade in effect
                    const fadeIn = Math.min((animProgress - introOffset) * 5, 1);
                    opacity *= fadeIn;

                    ctx.fillStyle = `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${opacity})`;
                    ctx.fillRect(x, y, dotSize * dpr, dotSize * dpr);
                }
            }
        }

        animationFrameRef.current = requestAnimationFrame(drawDots);
    }, [colors, opacities, totalSize, dotSize]);

    useEffect(() => {
        resizeCanvas();
        startTimeRef.current = Date.now();
        drawDots();

        window.addEventListener("resize", resizeCanvas);

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [resizeCanvas, drawDots]);

    return (
        <div ref={containerRef} className="h-full w-full">
            <canvas ref={canvasRef} className="h-full w-full" />
        </div>
    );
};

export const CardContainer = ({
    children,
    className,
    containerClassName,
}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={cn("relative group/canvas-card", containerClassName)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 h-full w-full"
                    >
                        <CanvasRevealEffect
                            animationSpeed={3}
                            containerClassName="bg-transparent"
                            colors={[
                                [125, 211, 252],
                                [167, 139, 250],
                            ]}
                            opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 0.6, 0.6, 0.6, 0.8, 0.8]}
                            dotSize={2}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
            <div className={cn("relative z-20", className)}>{children}</div>
        </div>
    );
};
