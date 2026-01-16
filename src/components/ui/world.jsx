"use client";
import { useEffect, useRef, useCallback, useState } from "react";
import createGlobe from "cobe";

// Arc data - connections from India to various tech hubs
const arcsData = [
    { start: [20.5937, 78.9629], end: [37.7749, -122.4194] }, // India to SF
    { start: [20.5937, 78.9629], end: [51.5072, -0.1276] }, // India to London
    { start: [20.5937, 78.9629], end: [35.6762, 139.6503] }, // India to Tokyo
    { start: [20.5937, 78.9629], end: [1.3521, 103.8198] }, // India to Singapore
    { start: [20.5937, 78.9629], end: [-33.8688, 151.2093] }, // India to Sydney
    { start: [20.5937, 78.9629], end: [40.7128, -74.006] }, // India to New York
    { start: [20.5937, 78.9629], end: [52.52, 13.405] }, // India to Berlin
    { start: [37.7749, -122.4194], end: [40.7128, -74.006] }, // SF to NY
    { start: [51.5072, -0.1276], end: [52.52, 13.405] }, // London to Berlin
];

// Point markers for major locations
const markers = [
    { location: [20.5937, 78.9629], size: 0.1 }, // India (larger)
    { location: [37.7749, -122.4194], size: 0.05 }, // San Francisco
    { location: [51.5072, -0.1276], size: 0.05 }, // London
    { location: [35.6762, 139.6503], size: 0.05 }, // Tokyo
    { location: [1.3521, 103.8198], size: 0.05 }, // Singapore
    { location: [-33.8688, 151.2093], size: 0.05 }, // Sydney
    { location: [52.52, 13.405], size: 0.05 }, // Berlin
    { location: [40.7128, -74.006], size: 0.05 }, // New York
];

export function World({ className }) {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const pointerInteracting = useRef(null);
    const pointerInteractionMovement = useRef(0);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    const updateDimensions = useCallback(() => {
        if (containerRef.current) {
            const { offsetWidth, offsetHeight } = containerRef.current;
            setDimensions({ width: offsetWidth, height: offsetHeight });
        }
    }, []);

    useEffect(() => {
        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, [updateDimensions]);

    useEffect(() => {
        if (!canvasRef.current || dimensions.width === 0) return;

        let phi = 0;
        let theta = 0.3;
        const width = dimensions.width * 2;
        const height = dimensions.height * 2;

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: width,
            height: height,
            phi: 0,
            theta: 0.3,
            dark: 1,
            diffuse: 3,
            mapSamples: 16000,
            mapBrightness: 1.8,
            baseColor: [0.1, 0.1, 0.3],
            markerColor: [0.1, 0.8, 1],
            glowColor: [0.1, 0.2, 0.5],
            markers: markers,
            onRender: (state) => {
                // Auto rotate
                if (!pointerInteracting.current) {
                    phi += 0.003;
                }
                state.phi = phi + pointerInteractionMovement.current;
                state.theta = theta;
                state.width = width;
                state.height = height;
            },
        });

        // Fade in
        if (canvasRef.current) {
            canvasRef.current.style.opacity = "1";
        }

        return () => {
            globe.destroy();
        };
    }, [dimensions]);

    return (
        <div ref={containerRef} className={className} style={{ width: "100%", height: "100%", position: "relative" }}>
            <canvas
                ref={canvasRef}
                onPointerDown={(e) => {
                    pointerInteracting.current = e.clientX - pointerInteractionMovement.current;
                    if (canvasRef.current) canvasRef.current.style.cursor = "grabbing";
                }}
                onPointerUp={() => {
                    pointerInteracting.current = null;
                    if (canvasRef.current) canvasRef.current.style.cursor = "grab";
                }}
                onPointerOut={() => {
                    pointerInteracting.current = null;
                    if (canvasRef.current) canvasRef.current.style.cursor = "grab";
                }}
                onMouseMove={(e) => {
                    if (pointerInteracting.current !== null) {
                        const delta = e.clientX - pointerInteracting.current;
                        pointerInteractionMovement.current = delta / 100;
                    }
                }}
                onTouchMove={(e) => {
                    if (pointerInteracting.current !== null && e.touches[0]) {
                        const delta = e.touches[0].clientX - pointerInteracting.current;
                        pointerInteractionMovement.current = delta / 100;
                    }
                }}
                style={{
                    width: "100%",
                    height: "100%",
                    cursor: "grab",
                    opacity: 0,
                    transition: "opacity 1s ease",
                    contain: "layout paint size",
                }}
            />
            {/* Animated arcs overlay using SVG */}
            <svg
                className="absolute inset-0 pointer-events-none"
                viewBox="0 0 100 100"
                style={{ width: "100%", height: "100%" }}
            >
                <defs>
                    <linearGradient id="arcGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8" />
                    </linearGradient>
                    <linearGradient id="arcGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#6366f1" stopOpacity="0.8" />
                    </linearGradient>
                </defs>
                {/* Animated dot moving along arc 1 */}
                <circle r="1.5" fill="#22d3ee">
                    <animateMotion
                        dur="4s"
                        repeatCount="indefinite"
                        path="M 30,60 Q 50,20 70,55"
                    />
                </circle>
                {/* Animated dot moving along arc 2 */}
                <circle r="1.2" fill="#3b82f6">
                    <animateMotion
                        dur="5s"
                        repeatCount="indefinite"
                        path="M 35,55 Q 55,25 80,45"
                    />
                </circle>
                {/* Animated dot moving along arc 3 */}
                <circle r="1" fill="#6366f1">
                    <animateMotion
                        dur="3.5s"
                        repeatCount="indefinite"
                        path="M 40,58 Q 60,30 75,65"
                    />
                </circle>
                {/* Arc trails */}
                <path
                    d="M 30,60 Q 50,20 70,55"
                    fill="none"
                    stroke="url(#arcGradient1)"
                    strokeWidth="0.3"
                    strokeDasharray="2 1"
                    opacity="0.5"
                >
                    <animate
                        attributeName="stroke-dashoffset"
                        from="0"
                        to="30"
                        dur="3s"
                        repeatCount="indefinite"
                    />
                </path>
                <path
                    d="M 35,55 Q 55,25 80,45"
                    fill="none"
                    stroke="url(#arcGradient2)"
                    strokeWidth="0.3"
                    strokeDasharray="2 1"
                    opacity="0.5"
                >
                    <animate
                        attributeName="stroke-dashoffset"
                        from="0"
                        to="30"
                        dur="4s"
                        repeatCount="indefinite"
                    />
                </path>
                <path
                    d="M 40,58 Q 60,30 75,65"
                    fill="none"
                    stroke="url(#arcGradient1)"
                    strokeWidth="0.3"
                    strokeDasharray="2 1"
                    opacity="0.5"
                >
                    <animate
                        attributeName="stroke-dashoffset"
                        from="0"
                        to="30"
                        dur="3.5s"
                        repeatCount="indefinite"
                    />
                </path>
            </svg>
        </div>
    );
}

export default World;
