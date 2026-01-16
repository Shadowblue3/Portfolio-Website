"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function ThreeDMarquee({
    images,
    className,
}) {
    // Split images into 3 rows for the 3D effect
    const chunkSize = Math.ceil(images.length / 3);
    const rows = [
        images.slice(0, chunkSize),
        images.slice(chunkSize, chunkSize * 2),
        images.slice(chunkSize * 2),
    ];

    return (
        <div
            className={cn(
                "mx-auto flex flex-col gap-8 overflow-hidden",
                className
            )}
            style={{
                transform: "rotateX(55deg) rotateZ(-25deg) scale(1.6) translateY(-10%)",
                transformStyle: "preserve-3d",
                perspective: "1000px",
            }}
        >
            {rows.map((row, rowIndex) => (
                <motion.div
                    key={rowIndex}
                    className="flex gap-6 flex-nowrap"
                    style={{
                        transformStyle: "preserve-3d",
                        marginLeft: `${rowIndex * 100}px`,
                    }}
                    animate={{
                        x: rowIndex % 2 === 0
                            ? ["0%", "-50%"]
                            : ["-50%", "0%"],
                    }}
                    transition={{
                        duration: 60,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {/* Triplicate images for seamless infinite scroll */}
                    {[...row, ...row, ...row, ...row].map((image, index) => (
                        <div
                            key={index}
                            className="relative flex-shrink-0 transition-transform duration-300 hover:scale-105"
                            style={{
                                transformStyle: "preserve-3d",
                                transform: "translateZ(10px)",
                            }}
                        >
                            <img
                                src={image}
                                alt={`Marquee image ${index}`}
                                className="h-40 w-60 rounded-xl object-cover md:h-48 md:w-72 lg:h-56 lg:w-80"
                                style={{
                                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.9), 0 0 30px rgba(59, 130, 246, 0.15)",
                                    border: "1px solid rgba(255, 255, 255, 0.08)",
                                }}
                            />
                        </div>
                    ))}
                </motion.div>
            ))}
        </div>
    );
}

export default ThreeDMarquee;
