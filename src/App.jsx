import React from "react";
import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { HoverEffect } from "@/components/ui/HoverEffect";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { EvervaultBackground, Icon } from "@/components/ui/evervault-card";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { World } from "@/components/ui/globe";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import LiquidEther from "@/components/ui/liquid-ether";
import { PixelatedCanvas } from "@/components/ui/PixelatedCanvas";
import { motion } from "framer-motion";
import ClickSpark from './components/ui/ClickSpark';

import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import './App.css'



const globeConfig = {
  pointSize: 4,
  globeColor: "#062056",
  showAtmosphere: true,
  atmosphereColor: "#FFFFFF",
  atmosphereAltitude: 0.1,
  emissive: "#062056",
  emissiveIntensity: 0.1,
  shininess: 0.9,
  polygonColor: "rgba(255,255,255,0.7)",
  ambientLight: "#38bdf8",
  directionalLeftLight: "#ffffff",
  directionalTopLight: "#ffffff",
  pointLight: "#ffffff",
  arcTime: 1000,
  arcLength: 0.9,
  rings: 1,
  maxRings: 3,
  initialPosition: { lat: 22.3193, lng: 114.1694 },
  autoRotate: true,
  autoRotateSpeed: 0.5,
};

const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
const sampleArcs = [
  {
    order: 1,
    startLat: -19.885592,
    startLng: -43.951191,
    endLat: -22.9068,
    endLng: -43.1729,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 1,
    startLat: 28.6139,
    startLng: 77.209,
    endLat: 3.139,
    endLng: 101.6869,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 1,
    startLat: -19.885592,
    startLng: -43.951191,
    endLat: -1.303396,
    endLng: 36.852443,
    arcAlt: 0.5,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 2,
    startLat: 1.3521,
    startLng: 103.8198,
    endLat: 35.6762,
    endLng: 139.6503,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 2,
    startLat: 51.5072,
    startLng: -0.1276,
    endLat: 3.139,
    endLng: 101.6869,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 2,
    startLat: -15.785493,
    startLng: -47.909029,
    endLat: 36.162809,
    endLng: -115.119411,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 3,
    startLat: -33.8688,
    startLng: 151.2093,
    endLat: 22.3193,
    endLng: 114.1694,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 3,
    startLat: 21.3099,
    startLng: -157.8581,
    endLat: 40.7128,
    endLng: -74.006,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 3,
    startLat: -6.2088,
    startLng: 106.8456,
    endLat: 51.5072,
    endLng: -0.1276,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 4,
    startLat: 11.986597,
    startLng: 8.571831,
    endLat: -15.595412,
    endLng: -56.05918,
    arcAlt: 0.5,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 4,
    startLat: -34.6037,
    startLng: -58.3816,
    endLat: 22.3193,
    endLng: 114.1694,
    arcAlt: 0.7,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 4,
    startLat: 51.5072,
    startLng: -0.1276,
    endLat: 48.8566,
    endLng: -2.3522,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 5,
    startLat: 14.5995,
    startLng: 120.9842,
    endLat: 51.5072,
    endLng: -0.1276,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 5,
    startLat: 1.3521,
    startLng: 103.8198,
    endLat: -33.8688,
    endLng: 151.2093,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 5,
    startLat: 34.0522,
    startLng: -118.2437,
    endLat: 48.8566,
    endLng: -2.3522,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 6,
    startLat: -15.432563,
    startLng: 28.315853,
    endLat: 1.094136,
    endLng: -63.34546,
    arcAlt: 0.7,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 6,
    startLat: 37.5665,
    startLng: 126.978,
    endLat: 35.6762,
    endLng: 139.6503,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 6,
    startLat: 22.3193,
    startLng: 114.1694,
    endLat: 51.5072,
    endLng: -0.1276,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 7,
    startLat: -19.885592,
    startLng: -43.951191,
    endLat: -15.595412,
    endLng: -56.05918,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 7,
    startLat: 48.8566,
    startLng: -2.3522,
    endLat: 52.52,
    endLng: 13.405,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 7,
    startLat: 52.52,
    startLng: 13.405,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 8,
    startLat: -8.833221,
    startLng: 13.264837,
    endLat: -33.936138,
    endLng: 18.436529,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 8,
    startLat: 49.2827,
    startLng: -123.1207,
    endLat: 52.3676,
    endLng: 4.9041,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 8,
    startLat: 1.3521,
    startLng: 103.8198,
    endLat: 40.7128,
    endLng: -74.006,
    arcAlt: 0.5,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 9,
    startLat: 51.5072,
    startLng: -0.1276,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 9,
    startLat: 22.3193,
    startLng: 114.1694,
    endLat: -22.9068,
    endLng: -43.1729,
    arcAlt: 0.7,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 9,
    startLat: 1.3521,
    startLng: 103.8198,
    endLat: -34.6037,
    endLng: -58.3816,
    arcAlt: 0.5,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 10,
    startLat: -22.9068,
    startLng: -43.1729,
    endLat: 28.6139,
    endLng: 77.209,
    arcAlt: 0.7,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 10,
    startLat: 34.0522,
    startLng: -118.2437,
    endLat: 31.2304,
    endLng: 121.4737,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 10,
    startLat: -6.2088,
    startLng: 106.8456,
    endLat: 52.3676,
    endLng: 4.9041,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 11,
    startLat: 41.9028,
    startLng: 12.4964,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 11,
    startLat: -6.2088,
    startLng: 106.8456,
    endLat: 31.2304,
    endLng: 121.4737,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 11,
    startLat: 22.3193,
    startLng: 114.1694,
    endLat: 1.3521,
    endLng: 103.8198,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 12,
    startLat: 34.0522,
    startLng: -118.2437,
    endLat: 37.7749,
    endLng: -122.4194,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 12,
    startLat: 35.6762,
    startLng: 139.6503,
    endLat: 22.3193,
    endLng: 114.1694,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 12,
    startLat: 22.3193,
    startLng: 114.1694,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 13,
    startLat: 52.52,
    startLng: 13.405,
    endLat: 22.3193,
    endLng: 114.1694,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 13,
    startLat: 11.986597,
    startLng: 8.571831,
    endLat: 35.6762,
    endLng: 139.6503,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 13,
    startLat: -22.9068,
    startLng: -43.1729,
    endLat: -34.6037,
    endLng: -58.3816,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 14,
    startLat: -33.936138,
    startLng: 18.436529,
    endLat: 21.395643,
    endLng: 39.883798,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
];

// Images for 3D Marquee in first bento card
const marqueeImages = [
  "https://assets.aceternity.com/cloudinary_bkp/3d-card.png",
  "https://assets.aceternity.com/animated-modal.png",
  "https://assets.aceternity.com/animated-testimonials.webp",
  "https://assets.aceternity.com/cloudinary_bkp/Tooltip_luwy44.png",
  "https://assets.aceternity.com/github-globe.png",
  "https://assets.aceternity.com/glare-card.png",
  "https://assets.aceternity.com/layout-grid.png",
  "https://assets.aceternity.com/flip-text.png",
  "https://assets.aceternity.com/hero-highlight.png",
  "https://assets.aceternity.com/carousel.webp",
  "https://assets.aceternity.com/placeholders-and-vanish-input.png",
  "https://assets.aceternity.com/shooting-stars-and-stars-background.png",
  "https://assets.aceternity.com/signup-form.png",
  "https://assets.aceternity.com/cloudinary_bkp/stars_sxle3d.png",
  "https://assets.aceternity.com/spotlight-new.webp",
  "https://assets.aceternity.com/cloudinary_bkp/Spotlight_ar5jpr.png",
  "https://assets.aceternity.com/cloudinary_bkp/Parallax_Scroll_pzlatw_anfkh7.png",
  "https://assets.aceternity.com/tabs.png",
  "https://assets.aceternity.com/cloudinary_bkp/Tracing_Beam_npujte.png",
  "https://assets.aceternity.com/cloudinary_bkp/typewriter-effect.png",
  "https://assets.aceternity.com/glowing-effect.webp",
  "https://assets.aceternity.com/hover-border-gradient.png",
  "https://assets.aceternity.com/cloudinary_bkp/Infinite_Moving_Cards_evhzur.png",
  "https://assets.aceternity.com/cloudinary_bkp/Lamp_hlq3ln.png",
  "https://assets.aceternity.com/macbook-scroll.png",
  "https://assets.aceternity.com/cloudinary_bkp/Meteors_fye3ys.png",
  "https://assets.aceternity.com/cloudinary_bkp/Moving_Border_yn78lv.png",
  "https://assets.aceternity.com/multi-step-loader.png",
  "https://assets.aceternity.com/vortex.png",
  "https://assets.aceternity.com/wobble-card.png",
  "https://assets.aceternity.com/world-map.webp",
];

// Typewriter words for hero heading
const heroWords = [
  { text: "Hi," },
  { text: "I'm" },
  {
    text: "Saptarshi",
    className: "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400"
  },
  {
    text: "Bhunia",
    className: "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400"
  },
];



// Profile Image Component with Pixelated Effect on Hover
const ProfileImage = () => {
  const imageUrl = "https://res.cloudinary.com/dnnkibrq2/image/upload/v1768590659/WhatsApp_Image_2026-01-03_at_11.45.42_PM_odw5hy.jpg";

  return (
    <div className="relative">
      {/* Gradient glow behind image */}
      <div className="absolute -inset-3 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 rounded-2xl blur-lg opacity-40"></div>

      {/* Pixelated Canvas with breaking effect */}
      <PixelatedCanvas
        src={imageUrl}
        width={320}
        height={380}
        cellSize={4}
        dotScale={0.85}
        shape="circle"
        backgroundColor="#000000"
        interactive={true}
        distortionStrength={40}
        distortionRadius={120}
        distortionMode="explode"
        followSpeed={0.25}
        jitterStrength={15}
        jitterSpeed={6}
        fadeOnLeave={true}
        fadeSpeed={0.15}
        revealRadius={100}
        className="relative rounded-2xl border border-neutral-800"
      />
    </div>
  );
};

function App() {
  return (
    <main className="min-h-screen bg-black antialiased relative">
      <div className="fixed inset-0 z-0">
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={20}
          cursorSize={100}
          isViscous
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>
      <ClickSpark
        sparkColor='#fff'
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        {/* Your content here */}

        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center relative z-10">
          {/* Content Container */}
          <div className="relative z-20 max-w-5xl mx-auto w-full px-6">
            <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-16">
              {/* Glassy Text Content Container - Left Side */}
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl shadow-2xl relative" style={{ padding: "60px" }}>
                {/* Corner Icons */}
                <Icon className="absolute h-6 w-6 top-4 left-4 text-white/30 z-30" />
                <Icon className="absolute h-6 w-6 bottom-4 left-4 text-white/30 z-30" />
                <Icon className="absolute h-6 w-6 top-4 right-4 text-white/30 z-30" />
                <Icon className="absolute h-6 w-6 bottom-4 right-4 text-white/30 z-30" />

                <div className="text-left">
                  {/* Typewriter Effect Heading */}
                  <TypewriterEffectSmooth words={heroWords} />

                  <TextGenerateEffect
                    words="A passionate developer crafting beautiful digital experiences with modern technologies and creative solutions."
                    className="mt-4 max-w-xl text-sm"
                  />

                  <div className="mt-8 flex flex-wrap gap-4 justify-start" style={{ paddingTop: "20px" }}>
                    <HoverBorderGradient
                      containerClassName="rounded-full"
                      as="a"
                      href="#projects"
                      className="dark:bg-black text-white dark:text-white flex items-center space-x-2"
                    >
                      <span>View Projects</span>
                    </HoverBorderGradient>
                    <HoverBorderGradient
                      containerClassName="rounded-full"
                      as="a"
                      href="#contact"
                      className="dark:bg-black text-white dark:text-white flex items-center space-x-2"
                    >
                      <span>Contact Me</span>
                    </HoverBorderGradient>
                  </div>
                </div>
              </div>

              {/* Profile Image - Right Side (Outside Glass Container) */}
              <div className="flex-shrink-0">
                <ProfileImage />
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-20">
            <svg
              className="w-6 h-6 text-neutral-500"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </section>


        <div className="relative z-10">
          {/* About Section - Bento Grid */}
          <section id="about" className="py-20 px-4 flex flex-col items-center justify-center relative z-10">
            <div className="max-w-6xl mx-auto w-full">
              <h2
                className="text-4xl md:text-5xl font-bold text-white mb-16 text-center"
                style={{
                  marginBottom: "20px",
                  padding: "28px",
                  textAlign: "center",
                  marginTop: "30px",
                }}
              >
                About Me
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                {/* Row 1 */}
                {/* Card 1 - Large card with 3D Marquee background (spans 2 cols) */}
                <div className="md:col-span-2 h-[380px] rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 relative overflow-hidden group">
                  {/* 3D Marquee Background */}
                  <div className="absolute inset-0 opacity-70">
                    <ThreeDMarquee images={marqueeImages} className="h-full w-full" />
                  </div>
                  {/* Gradient overlay for text readability */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-neutral-950 via-neutral-950/90 to-transparent"></div>
                  <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                    <h3 className="p-20 text-xl md:text-2xl lg:text-3xl font-bold text-white leading-snug" style={{ padding: "28px" }}>
                      I prioritize client<br />
                      collaboration, fostering<br />
                      open communication
                    </h3>
                  </div>
                </div>

                {/* Card 2 - Time zone (spans 2 rows on the right) */}
                <div className="md:row-span-2 h-[380px] md:h-auto rounded-3xl bg-black border border-neutral-800 relative overflow-hidden flex flex-col justify-end">
                  <div className="absolute inset-0 z-0">
                    <World globeConfig={globeConfig} data={sampleArcs} />
                  </div>
                  <div className="relative z-10 p-4">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-snug" style={{ padding: "28px" }}>
                      I'm very flexible with time<br />zone communications
                    </h3>
                    <p className="text-neutral-500 text-sm" style={{ padding: "28px" }}>Based in India, available worldwide</p>
                  </div>
                </div>

                {/* Row 2 */}
                {/* Card 3 - Tech enthusiast (1 col, under the 3D marquee) */}
                <div className="md:col-span-2 h-[180px] rounded-3xl bg-neutral-900 border border-neutral-800 p-6 flex flex-col justify-center relative overflow-hidden">
                  <Spotlight className="-top-40 left-0 md:left-60 md:-top-20 h-screen" fill="white" />
                  <h3 className="text-xl md:text-2xl font-bold text-white leading-snug relative z-20"
                    style={{ padding: "28px" }}>
                    Tech enthusiast with a<br />passion for development.
                  </h3>
                </div>

                {/* Row 3 */}
                {/* Card 4 - Currently building (spans full width) */}
                <div className="md:col-span-3 h-[200px] rounded-3xl bg-gradient-to-br from-[#1e1b4b] to-[#0f172a] border border-neutral-800 p-6 relative overflow-hidden">
                  {/* Background Code Pattern */}
                  {/* Background Code Pattern */}
                  <div className="absolute top-[-5%] left-[20%] w-[110%] h-[150%] opacity-40 transform perspective-1000 rotate-12 bg-neutral-900 border border-white/10 rounded-xl overflow-hidden pointer-events-none"
                    style={{
                      transform: "rotateX(40deg) rotateY(-10deg) rotateZ(10deg) scale(0.9) translate3d(0, 0, -50px)",
                      maskImage: "linear-gradient(to bottom, white, transparent)"
                    }}>
                    <div className="flex gap-1.5 p-3 border-b border-white/10 bg-white/5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                    </div>
                    <div className="p-4">
                      <pre className="font-mono text-[10px] text-blue-200 leading-relaxed select-none">
                        {`import React, { useState, useEffect } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'framer-motion';

export function Feature({ children, delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5 }}
          className="feature-card"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const styles = {
  card: {
    padding: '24px',
    borderRadius: '12px',
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  }
};

// 3D Rendering Logic with Three.js
function renderScene() {
  const camera = new THREE.PerspectiveCamera(75);
  const renderer = new THREE.WebGLRenderer({ alpha: true });
  
  if (loading) return <Spinner size="large" />;
  
  return (
    <Feature title="Next Generation">
       <Canvas shadowMap camera={{ position: [0, 0, 5] }}>
         <ambientLight intensity={0.5} />
         <directionalLight position={[10, 10, 5]} />
         <Model3D position={[0, 0, 0]} rotate />
         <OrbitControls enableZoom={false} />
       </Canvas>
       <div className="overlay">
         <h1>Ready for the Future</h1>
         <Button onClick={handleExplore}>Explore Now</Button>
       </div>
    </Feature>
  );
}

export default Feature;`}
                      </pre>
                    </div>
                  </div>

                  <div className="relative z-10" style={{ padding: "28px" }}>
                    <p className="text-neutral-500 text-sm mb-1">The Inside Scoop</p>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                      Currently building modern web applications
                    </h3>
                    <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 font-mono text-sm max-w-md border border-white/5" style={{ padding: "20px" }}>
                      <span className="text-neutral-500">// Building cool stuff</span>
                      <br />
                      <span className="text-blue-400">import</span>
                      <span className="text-white"> creativity </span>
                      <span className="text-blue-400">from</span>
                      <span className="text-green-400"> 'passion'</span>;
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* Projects Section with StickyScroll */}
          <section id="projects" className="py-32 my-20 px-4 flex justify-center items-center relative z-10"
            style={{
              marginBottom: "20px",
              padding: "28px",
              textAlign: "center",
              marginTop: "30px",
            }}>
            <div className="max-w-6xl w-full mx-auto">
              <Projects />
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-20 px-4 flex flex-col items-center justify-center relative overflow-hidden z-10">
            <div className="max-w-6xl mx-auto relative z-10 w-full">
              <Skills />
            </div>
          </section>

          {/* Contact Section with BackgroundBeams */}
          <section id="contact" className="py-20 px-4 relative min-h-[500px] z-10 bg-black">
            <BackgroundBeams className="absolute inset-0" />
            <div className="max-w-2xl mx-auto relative z-10">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Let's Connect
              </h2>
              <p className="text-neutral-400 text-center mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities
                to be part of your vision.
              </p>

              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500 transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full px-8 py-3 text-sm font-medium text-white bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 rounded-lg hover:opacity-90 transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-8 px-4 border-t border-neutral-800">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-neutral-500 text-sm">
                © 2026 Your Name. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                  GitHub
                </a>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                  Twitter
                </a>
              </div>
            </div>
          </footer>
        </div>

      </ClickSpark>
    </main >
  )
}

export default App
