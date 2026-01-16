"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const TypewriterEffectSmooth = ({
    words,
    className,
    cursorClassName,
}) => {
    // Split text inside of words into array of characters
    const wordsArray = words.map((word) => {
        return {
            ...word,
            text: word.text.split(""),
        };
    });

    const renderWords = () => {
        return (
            <div>
                {wordsArray.map((word, idx) => {
                    return (
                        <div key={`word-${idx}`} className="inline-block">
                            {word.text.map((char, index) => (
                                <span
                                    key={`char-${index}`}
                                    className={cn(`text-white`, word.className)}
                                >
                                    {char}
                                </span>
                            ))}
                            &nbsp;
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <div className={cn("flex space-x-1 my-2", className)}>
            <motion.div
                className="overflow-hidden pb-2"
                initial={{
                    width: "0%",
                }}
                animate={{
                    width: "fit-content",
                }}
                transition={{
                    duration: 2,
                    ease: "linear",
                    delay: 0.5,
                }}
            >
                <div
                    className="text-3xl font-bold md:text-4xl lg:text-5xl xl:text-6xl"
                    style={{
                        whiteSpace: "nowrap",
                    }}
                >
                    {renderWords()}
                </div>
            </motion.div>
            <motion.span
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                className={cn(
                    "block rounded-sm w-[4px] h-8 md:h-10 lg:h-12 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500",
                    cursorClassName
                )}
            ></motion.span>
        </div>
    );
};

export default TypewriterEffectSmooth;
