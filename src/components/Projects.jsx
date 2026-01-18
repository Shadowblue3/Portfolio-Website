"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
    {
        title: "BlogCraft",
        description:
            "Blogcraft is a full-stack blogging platform built with ejs and Node.js, offering a modern UI and smooth content management experience. It focuses on clean architecture, efficient state handling, and responsive performance for scalable web applications.",
        content: (
            <div
                className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
                Project One
            </div>
        ),
    },
    {
        title: "MetalSense",
        description:
            "MetalSense is a full-stack web application built with ejs and Node.js, designed for intelligent metal detection and monitoring. It emphasizes real-time data handling, a clean modern interface, and efficient system integration for reliable and scalable performance.",
        content: (
            <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--pink-500),var(--indigo-500))] text-white">
                Project Two
            </div>
        ),
    },
    {
        title: "Ping",
        description:
            "Ping blends a personal gaming portfolio with social networking, creating a space where players can showcase their skills, share moments, and connect with other gamers. Built using React and Node.js, it delivers a fast, immersive interface with real-time interactions tailored for the gaming community.",
        content: (
            <div
                className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
                Project Three
            </div>
        ),
    },
    {
        title: "ChatHub",
        description:
            "Chathub is a real-time messaging platform inspired by modern chat applications, built with React and Node.js. It enables fast, secure conversations with a clean interface and seamless real-time communication for everyday use.",
        content: (
            <div
                className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
                Project Four
            </div>
        ),
    },
    {
        title: "HealthSync",
        description:
            "HealthSync is a modern healthcare platform designed to efficiently connect doctors and patients through a seamless digital experience. Built with a clean, responsive interface and robust backend architecture, it streamlines communication, appointment management, and access to healthcare services.",
        content: (
            <div
                className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--pink-500),var(--indigo-500))] text-white">
                Project Five
            </div>
        ),
    },
];

export function Projects() {
    return (
        <div className="w-full py-20 bg-transparent/20 backdrop-blur-md rounded-xl border border-white/10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center" style={{
                    marginBottom: "20px",
                    padding: "28px",
                    textAlign: "center",
                    marginTop: "30px",
                  }}>My Projects</h2>
            <StickyScroll content={content} />
        </div>
    );
}
