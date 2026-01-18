"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
    {
        title: "BlogCraft",
        description:
            "Blogcraft is a full-stack blogging platform built with ejs and Node.js, offering a modern UI and smooth content management experience. It focuses on clean architecture, efficient state handling, and responsive performance for scalable web applications.",
        content: (
            <div className="flex h-full w-full items-center justify-center text-white">
                <img
                    src="/project-images/blogcraft.png"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="BlogCraft Dashboard"
                />
            </div>
        ),
        visitLink: "https://blogcraft-a2nl.onrender.com",
        githubLink: "https://github.com/Shadowblue3/BlogCraft",
    },
    {
        title: "MetalSense",
        description:
            "MetalSense is a full-stack web application built with ejs and Node.js, designed for intelligent metal detection and monitoring. It emphasizes real-time data handling, a clean modern interface, and efficient system integration for reliable and scalable performance.",
        content: (
            <div className="flex h-full w-full items-center justify-center text-white">
                <img
                    src="/project-images/metalsense.png"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="MetalSense Monitor"
                />
            </div>
        ),
        visitLink: "https://metalsense.onrender.com",
        githubLink: "https://github.com/Shadowblue3/MetalSense",
    },
    {
        title: "Ping",
        description:
            "Ping blends a personal gaming portfolio with social networking, creating a space where players can showcase their skills, share moments, and connect with other gamers. Built using React and Node.js, it delivers a fast, immersive interface with real-time interactions tailored for the gaming community.",
        content: (
            <div className="flex h-full w-full items-center justify-center text-white">
                <img
                    src="/project-images/ping.png"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="Ping Social Feed"
                />
            </div>
        ),
        visitLink: "https://ping-murex.vercel.app/",
        githubLink: "https://github.com/aasaan-hainn/Ping",
    },
    {
        title: "ChatHub",
        description:
            "Chathub is a real-time messaging platform inspired by modern chat applications, built with React and Node.js. It enables fast, secure conversations with a clean interface and seamless real-time communication for everyday use.",
        content: (
            <div className="flex h-full w-full items-center justify-center text-white">
                <img
                    src="/project-images/chathub.png"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="ChatHub Interface"
                />
            </div>
        ),
        visitLink: "https://chat-hub-blond.vercel.app/",
        githubLink: "https://github.com/Shadowblue3/ChatHub",
    },
    {
        title: "HealthSync",
        description:
            "HealthSync is a modern healthcare platform designed to efficiently connect doctors and patients through a seamless digital experience. Built with a clean, responsive interface and robust backend architecture, it streamlines communication, appointment management, and access to healthcare services.",
        content: (
            <div className="flex h-full w-full items-center justify-center text-white">
                <img
                    src="/project-images/healthsync.png"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="HealthSync Dashboard"
                />
            </div>
        ),
        visitLink: "https://healthsync-0n0d.onrender.com/",
        githubLink: "https://github.com/aasaan-hainn/HealthSync",
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
