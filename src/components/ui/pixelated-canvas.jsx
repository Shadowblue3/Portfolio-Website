"use client";
import React, { useRef, useEffect, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

// Helper function to parse hex color to RGB
const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
        }
        : { r: 255, g: 255, b: 255 };
};

export const PixelatedCanvas = ({
    src,
    width = 400,
    height = 400,
    cellSize = 4,
    dotScale = 0.9,
    shape = "square", // "square" | "circle"
    backgroundColor = "#000000",
    dropoutStrength = 0,
    interactive = true,
    distortionStrength = 0.1,
    distortionRadius = 150,
    distortionMode = "repel", // "repel" | "attract" | "swirl"
    followSpeed = 0.15,
    jitterStrength = 0,
    jitterSpeed = 1,
    sampleAverage = true,
    tintColor = null,
    tintStrength = 0,
    className,
}) => {
    const canvasRef = useRef(null);
    const imageRef = useRef(null);
    const animationRef = useRef(null);
    const mousePos = useRef({ x: -1000, y: -1000 });
    const smoothMousePos = useRef({ x: -1000, y: -1000 });
    const [isLoaded, setIsLoaded] = useState(false);
    const pixelDataRef = useRef([]);
    const timeRef = useRef(0);

    // Parse tint color
    const tintRgb = tintColor ? hexToRgb(tintColor) : null;

    // Load image
    useEffect(() => {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = () => {
            imageRef.current = img;
            setIsLoaded(true);
        };
        img.onerror = () => {
            console.error("Failed to load image:", src);
        };
        img.src = src;

        return () => {
            img.onload = null;
            img.onerror = null;
        };
    }, [src]);

    // Initialize pixel data from image
    const initializePixelData = useCallback(() => {
        if (!imageRef.current || !canvasRef.current) return;

        const offscreen = document.createElement("canvas");
        offscreen.width = width;
        offscreen.height = height;
        const offCtx = offscreen.getContext("2d");

        // Draw image to offscreen canvas
        offCtx.drawImage(imageRef.current, 0, 0, width, height);
        const imageData = offCtx.getImageData(0, 0, width, height);
        const data = imageData.data;

        const pixels = [];
        const cols = Math.ceil(width / cellSize);
        const rows = Math.ceil(height / cellSize);

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                const x = col * cellSize;
                const y = row * cellSize;

                // Apply dropout
                if (dropoutStrength > 0 && Math.random() < dropoutStrength) {
                    continue;
                }

                let r, g, b, a;

                if (sampleAverage) {
                    // Sample average color of the cell
                    let totalR = 0, totalG = 0, totalB = 0, totalA = 0, count = 0;

                    for (let dy = 0; dy < cellSize && y + dy < height; dy++) {
                        for (let dx = 0; dx < cellSize && x + dx < width; dx++) {
                            const idx = ((y + dy) * width + (x + dx)) * 4;
                            totalR += data[idx];
                            totalG += data[idx + 1];
                            totalB += data[idx + 2];
                            totalA += data[idx + 3];
                            count++;
                        }
                    }

                    r = Math.round(totalR / count);
                    g = Math.round(totalG / count);
                    b = Math.round(totalB / count);
                    a = Math.round(totalA / count);
                } else {
                    // Sample center of cell
                    const centerX = Math.min(x + Math.floor(cellSize / 2), width - 1);
                    const centerY = Math.min(y + Math.floor(cellSize / 2), height - 1);
                    const idx = (centerY * width + centerX) * 4;
                    r = data[idx];
                    g = data[idx + 1];
                    b = data[idx + 2];
                    a = data[idx + 3];
                }

                // Apply tint
                if (tintRgb && tintStrength > 0) {
                    r = Math.round(r * (1 - tintStrength) + tintRgb.r * tintStrength);
                    g = Math.round(g * (1 - tintStrength) + tintRgb.g * tintStrength);
                    b = Math.round(b * (1 - tintStrength) + tintRgb.b * tintStrength);
                }

                pixels.push({
                    originalX: x + cellSize / 2,
                    originalY: y + cellSize / 2,
                    x: x + cellSize / 2,
                    y: y + cellSize / 2,
                    color: `rgba(${r}, ${g}, ${b}, ${a / 255})`,
                    size: cellSize * dotScale,
                });
            }
        }

        pixelDataRef.current = pixels;
    }, [width, height, cellSize, dotScale, dropoutStrength, sampleAverage, tintRgb, tintStrength]);

    // Render loop
    const render = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas || !isLoaded) return;

        const ctx = canvas.getContext("2d");
        const dpr = window.devicePixelRatio || 1;

        // Clear canvas
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Smooth mouse position
        smoothMousePos.current.x += (mousePos.current.x - smoothMousePos.current.x) * followSpeed;
        smoothMousePos.current.y += (mousePos.current.y - smoothMousePos.current.y) * followSpeed;

        timeRef.current += 0.016 * jitterSpeed;

        // Draw pixels
        pixelDataRef.current.forEach((pixel, index) => {
            let drawX = pixel.originalX;
            let drawY = pixel.originalY;

            // Apply interactive distortion
            if (interactive && smoothMousePos.current.x > 0) {
                const dx = pixel.originalX - smoothMousePos.current.x;
                const dy = pixel.originalY - smoothMousePos.current.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < distortionRadius) {
                    const force = (1 - dist / distortionRadius) * distortionStrength * cellSize;
                    const angle = Math.atan2(dy, dx);

                    if (distortionMode === "repel") {
                        drawX = pixel.originalX + Math.cos(angle) * force;
                        drawY = pixel.originalY + Math.sin(angle) * force;
                    } else if (distortionMode === "attract") {
                        drawX = pixel.originalX - Math.cos(angle) * force;
                        drawY = pixel.originalY - Math.sin(angle) * force;
                    } else if (distortionMode === "swirl") {
                        // Swirl effect - rotate pixels around cursor
                        const swirlAngle = angle + (force / cellSize) * 0.5;
                        const newDist = dist + force * 0.2;
                        drawX = smoothMousePos.current.x + Math.cos(swirlAngle) * newDist;
                        drawY = smoothMousePos.current.y + Math.sin(swirlAngle) * newDist;
                    }
                }
            }

            // Apply jitter
            if (jitterStrength > 0) {
                const jitterX = Math.sin(timeRef.current + index * 0.1) * jitterStrength;
                const jitterY = Math.cos(timeRef.current + index * 0.15) * jitterStrength;
                drawX += jitterX;
                drawY += jitterY;
            }

            // Draw pixel
            ctx.fillStyle = pixel.color;

            if (shape === "circle") {
                ctx.beginPath();
                ctx.arc(drawX * dpr, drawY * dpr, (pixel.size / 2) * dpr, 0, Math.PI * 2);
                ctx.fill();
            } else {
                const size = pixel.size * dpr;
                ctx.fillRect(
                    (drawX - pixel.size / 2) * dpr,
                    (drawY - pixel.size / 2) * dpr,
                    size,
                    size
                );
            }
        });

        animationRef.current = requestAnimationFrame(render);
    }, [
        isLoaded,
        backgroundColor,
        interactive,
        distortionStrength,
        distortionRadius,
        distortionMode,
        followSpeed,
        jitterStrength,
        jitterSpeed,
        cellSize,
        shape,
    ]);

    // Setup canvas and start animation
    useEffect(() => {
        if (!isLoaded || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const dpr = window.devicePixelRatio || 1;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;

        initializePixelData();
        render();

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [isLoaded, width, height, initializePixelData, render]);

    // Mouse handlers
    const handleMouseMove = (e) => {
        if (!interactive) return;
        const rect = canvasRef.current?.getBoundingClientRect();
        if (rect) {
            mousePos.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            };
        }
    };

    const handleMouseLeave = () => {
        mousePos.current = { x: -1000, y: -1000 };
    };

    return (
        <canvas
            ref={canvasRef}
            className={cn("cursor-pointer", className)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                width,
                height,
            }}
        />
    );
};

export default PixelatedCanvas;
