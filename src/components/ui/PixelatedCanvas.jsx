"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const PixelatedCanvas = ({
    src,
    width = 400,
    height = 500,
    cellSize = 3,
    dotScale = 0.9,
    shape = "square",
    backgroundColor = "#000000",
    className,
    interactive = true,
    distortionStrength = 30,
    distortionRadius = 100,
    distortionMode = "repel",
    followSpeed = 0.2,
    sampleAverage = true,
    maxFps = 60,
    objectFit = "cover",
    jitterStrength = 4,
    jitterSpeed = 4,
    fadeOnLeave = true,
    fadeSpeed = 0.1,
    revealRadius = 120,
}) => {
    const canvasRef = React.useRef(null);
    const samplesRef = React.useRef([]);
    const dimsRef = React.useRef(null);
    const imgRef = React.useRef(null);
    const targetMouseRef = React.useRef({ x: -9999, y: -9999 });
    const animMouseRef = React.useRef({ x: -9999, y: -9999 });
    const rafRef = React.useRef(null);
    const lastFrameRef = React.useRef(0);
    const pointerInsideRef = React.useRef(false);
    const activityRef = React.useRef(0);
    const activityTargetRef = React.useRef(0);

    React.useEffect(() => {
        let isCancelled = false;
        const canvas = canvasRef.current;
        if (!canvas) return;

        const img = new Image();
        img.crossOrigin = "anonymous";
        img.src = src;

        const compute = () => {
            if (!canvas) return;
            const dpr = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;
            const displayWidth = width ?? img.naturalWidth;
            const displayHeight = height ?? img.naturalHeight;

            canvas.width = Math.max(1, Math.floor(displayWidth * dpr));
            canvas.height = Math.max(1, Math.floor(displayHeight * dpr));
            canvas.style.width = `${displayWidth}px`;
            canvas.style.height = `${displayHeight}px`;

            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            ctx.resetTransform();
            ctx.scale(dpr, dpr);

            const offscreen = document.createElement("canvas");
            offscreen.width = Math.max(1, Math.floor(displayWidth));
            offscreen.height = Math.max(1, Math.floor(displayHeight));
            const off = offscreen.getContext("2d");
            if (!off) return;

            const iw = img.naturalWidth || displayWidth;
            const ih = img.naturalHeight || displayHeight;
            let dw = displayWidth, dh = displayHeight, dx = 0, dy = 0;

            if (objectFit === "cover") {
                const scale = Math.max(displayWidth / iw, displayHeight / ih);
                dw = Math.ceil(iw * scale);
                dh = Math.ceil(ih * scale);
                dx = Math.floor((displayWidth - dw) / 2);
                dy = Math.floor((displayHeight - dh) / 2);
            } else if (objectFit === "contain") {
                const scale = Math.min(displayWidth / iw, displayHeight / ih);
                dw = Math.ceil(iw * scale);
                dh = Math.ceil(ih * scale);
                dx = Math.floor((displayWidth - dw) / 2);
                dy = Math.floor((displayHeight - dh) / 2);
            }
            off.drawImage(img, dx, dy, dw, dh);

            let imageData;
            try {
                imageData = off.getImageData(0, 0, offscreen.width, offscreen.height);
            } catch {
                ctx.drawImage(img, 0, 0, displayWidth, displayHeight);
                return;
            }

            const data = imageData.data;
            const stride = offscreen.width * 4;
            const effectiveDotSize = Math.max(1, Math.floor(cellSize * dotScale));

            dimsRef.current = {
                width: displayWidth,
                height: displayHeight,
                dot: effectiveDotSize,
                dx, dy, dw, dh
            };
            imgRef.current = img;

            const hash2D = (ix, iy) => {
                const s = Math.sin(ix * 12.9898 + iy * 78.233) * 43758.5453123;
                return s - Math.floor(s);
            };

            const samples = [];
            for (let y = 0; y < offscreen.height; y += cellSize) {
                const cy = Math.min(offscreen.height - 1, y + Math.floor(cellSize / 2));
                for (let x = 0; x < offscreen.width; x += cellSize) {
                    const cx = Math.min(offscreen.width - 1, x + Math.floor(cellSize / 2));
                    let r = 0, g = 0, b = 0, a = 0;

                    if (!sampleAverage) {
                        const idx = cy * stride + cx * 4;
                        r = data[idx]; g = data[idx + 1]; b = data[idx + 2]; a = data[idx + 3] / 255;
                    } else {
                        let count = 0;
                        for (let oy = -1; oy <= 1; oy++) {
                            for (let ox = -1; ox <= 1; ox++) {
                                const sx = Math.max(0, Math.min(offscreen.width - 1, cx + ox));
                                const sy = Math.max(0, Math.min(offscreen.height - 1, cy + oy));
                                const sIdx = sy * stride + sx * 4;
                                r += data[sIdx]; g += data[sIdx + 1]; b += data[sIdx + 2]; a += data[sIdx + 3] / 255;
                                count++;
                            }
                        }
                        r = Math.round(r / count); g = Math.round(g / count); b = Math.round(b / count); a = a / count;
                    }

                    const seed = hash2D(cx, cy);
                    // Store original position for each pixel
                    samples.push({
                        x,
                        y,
                        origX: x + cellSize / 2,
                        origY: y + cellSize / 2,
                        r, g, b, a,
                        seed
                    });
                }
            }
            samplesRef.current = samples;
        };

        img.onload = () => {
            if (isCancelled) return;
            compute();
            const canvasEl = canvasRef.current;
            if (!canvasEl) return;

            // Draw initial normal image
            const ctx = canvasEl.getContext("2d");
            const dims = dimsRef.current;
            if (ctx && dims) {
                ctx.drawImage(img, dims.dx, dims.dy, dims.dw, dims.dh);
            }

            if (!interactive) return;

            const onPointerMove = (e) => {
                const rect = canvasEl.getBoundingClientRect();
                targetMouseRef.current.x = e.clientX - rect.left;
                targetMouseRef.current.y = e.clientY - rect.top;
                pointerInsideRef.current = true;
                activityTargetRef.current = 1;
            };
            const onPointerEnter = () => {
                pointerInsideRef.current = true;
                activityTargetRef.current = 1;
            };
            const onPointerLeave = () => {
                pointerInsideRef.current = false;
                if (fadeOnLeave) {
                    activityTargetRef.current = 0;
                } else {
                    targetMouseRef.current.x = -9999;
                    targetMouseRef.current.y = -9999;
                }
            };
            canvasEl.addEventListener("pointermove", onPointerMove);
            canvasEl.addEventListener("pointerenter", onPointerEnter);
            canvasEl.addEventListener("pointerleave", onPointerLeave);

            const animate = () => {
                const now = performance.now();
                const minDelta = 1000 / Math.max(1, maxFps);
                if (now - lastFrameRef.current < minDelta) {
                    rafRef.current = requestAnimationFrame(animate);
                    return;
                }
                lastFrameRef.current = now;

                const ctx = canvasEl.getContext("2d");
                const dims = dimsRef.current;
                const samples = samplesRef.current;
                const loadedImg = imgRef.current;

                if (!ctx || !dims || !samples || !loadedImg) {
                    rafRef.current = requestAnimationFrame(animate);
                    return;
                }

                animMouseRef.current.x += (targetMouseRef.current.x - animMouseRef.current.x) * followSpeed;
                animMouseRef.current.y += (targetMouseRef.current.y - animMouseRef.current.y) * followSpeed;

                if (fadeOnLeave) {
                    activityRef.current += (activityTargetRef.current - activityRef.current) * fadeSpeed;
                } else {
                    activityRef.current = pointerInsideRef.current ? 1 : 0;
                }

                const mx = animMouseRef.current.x;
                const my = animMouseRef.current.y;
                const activity = Math.max(0, Math.min(1, activityRef.current));
                const t = now * 0.001 * jitterSpeed;
                const currentRevealRadius = revealRadius * activity;

                // Clear with black background
                ctx.fillStyle = backgroundColor;
                ctx.fillRect(0, 0, dims.width, dims.height);

                // Draw all pixels - those in reveal radius are displaced, others stay in place
                for (const s of samples) {
                    if (s.a <= 0) continue;

                    const origX = s.origX;
                    const origY = s.origY;

                    // Check distance from mouse
                    const dx = origX - mx;
                    const dy = origY - my;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    let drawX = origX;
                    let drawY = origY;
                    let particleAlpha = s.a;

                    // If within reveal radius, break apart the pixels
                    if (dist < currentRevealRadius && activity > 0.01) {
                        // Calculate how much to break based on distance (more at center)
                        const breakIntensity = (1 - dist / currentRevealRadius) * activity;

                        // Apply strong repel distortion - pixels scatter outward
                        if (distortionMode === "repel") {
                            const d = dist + 0.0001;
                            const pushForce = distortionStrength * breakIntensity;
                            drawX += (dx / d) * pushForce;
                            drawY += (dy / d) * pushForce;
                        } else if (distortionMode === "explode") {
                            // Explode outward from center with randomness
                            const d = dist + 0.0001;
                            const angle = Math.atan2(dy, dx) + (s.seed - 0.5) * 0.5;
                            const pushForce = distortionStrength * breakIntensity * (0.5 + s.seed);
                            drawX = origX + Math.cos(angle) * pushForce;
                            drawY = origY + Math.sin(angle) * pushForce;
                        }

                        // Add jitter/shake to broken pixels
                        if (jitterStrength > 0) {
                            const k = s.seed * 43758.5453;
                            drawX += Math.sin(t + k) * jitterStrength * breakIntensity;
                            drawY += Math.cos(t + k * 1.13) * jitterStrength * breakIntensity;
                        }

                        // Fade out pixels that are pushed far (creates gaps)
                        const displacement = Math.sqrt((drawX - origX) ** 2 + (drawY - origY) ** 2);
                        const fadeFactor = Math.max(0, 1 - displacement / (distortionStrength * 1.5));
                        particleAlpha = s.a * (0.3 + fadeFactor * 0.7);
                    }

                    ctx.globalAlpha = particleAlpha;
                    ctx.fillStyle = `rgb(${s.r}, ${s.g}, ${s.b})`;

                    if (shape === "circle") {
                        ctx.beginPath();
                        ctx.arc(drawX, drawY, dims.dot / 2, 0, Math.PI * 2);
                        ctx.fill();
                    } else {
                        ctx.fillRect(drawX - dims.dot / 2, drawY - dims.dot / 2, dims.dot, dims.dot);
                    }
                }
                ctx.globalAlpha = 1;

                rafRef.current = requestAnimationFrame(animate);
            };

            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            rafRef.current = requestAnimationFrame(animate);

            const cleanup = () => {
                canvasEl.removeEventListener("pointermove", onPointerMove);
                canvasEl.removeEventListener("pointerenter", onPointerEnter);
                canvasEl.removeEventListener("pointerleave", onPointerLeave);
                if (rafRef.current) cancelAnimationFrame(rafRef.current);
            };
            img._cleanup = cleanup;
        };

        img.onerror = () => console.error("Failed to load image:", src);

        return () => {
            isCancelled = true;
            if (img._cleanup) img._cleanup();
        };
    }, [src, width, height, cellSize, dotScale, shape, backgroundColor, interactive, distortionStrength, distortionRadius, distortionMode, followSpeed, sampleAverage, maxFps, objectFit, jitterStrength, jitterSpeed, fadeOnLeave, fadeSpeed, revealRadius]);

    return (
        <canvas
            ref={canvasRef}
            className={cn(className)}
            aria-label="Interactive image"
            role="img"
        />
    );
};
