"use client";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export const BackgroundBeams = ({ className }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (event) => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                setMousePosition({
                    x: event.clientX - rect.left,
                    y: event.clientY - rect.top,
                });
            }
        };

        const container = containerRef.current;
        container?.addEventListener("mousemove", handleMouseMove);

        return () => {
            container?.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className={cn(
                "h-full w-full bg-black relative flex items-center justify-center overflow-hidden",
                className
            )}
        >
            <div
                className="pointer-events-none absolute inset-0 z-0"
                style={{
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.15), transparent 40%)`,
                }}
            />
            <svg
                className="pointer-events-none absolute inset-0 z-0 h-full w-full"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <pattern
                        id="grid"
                        width="40"
                        height="40"
                        patternUnits="userSpaceOnUse"
                    >
                        <path
                            d="M 40 0 L 0 0 0 40"
                            fill="none"
                            stroke="rgba(255,255,255,0.03)"
                            strokeWidth="1"
                        />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
        </div>
    );
};
