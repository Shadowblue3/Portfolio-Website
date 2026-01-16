import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { HoverEffect } from "@/components/ui/HoverEffect";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { EvervaultBackground, Icon } from "@/components/ui/evervault-card";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { World } from "@/components/ui/globe";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { motion } from "framer-motion";
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

// Sample projects data - replace with your own
const projects = [
  {
    title: "Project One",
    description:
      "A full-stack web application built with React and Node.js. Features real-time updates and modern UI.",
    link: "#",
  },
  {
    title: "Project Two",
    description:
      "Mobile-first e-commerce platform with seamless payment integration and inventory management.",
    link: "#",
  },
  {
    title: "Project Three",
    description:
      "AI-powered analytics dashboard that visualizes complex data in intuitive charts and graphs.",
    link: "#",
  },
  {
    title: "Project Four",
    description:
      "Open-source CLI tool that automates development workflows and boosts productivity.",
    link: "#",
  },
  {
    title: "Project Five",
    description:
      "Real-time collaboration platform with video conferencing and shared whiteboard features.",
    link: "#",
  },
  {
    title: "Project Six",
    description:
      "Cross-platform mobile app built with React Native featuring offline-first architecture.",
    link: "#",
  },
];

// Profile Image Component (normal image)
const ProfileImage = () => {
  return (
    <div className="relative">
      {/* Gradient ring behind image */}
      <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 rounded-full blur-sm opacity-75"></div>

      {/* Normal Image */}
      <img
        src="https://res.cloudinary.com/dnnkibrq2/image/upload/v1768590659/WhatsApp_Image_2026-01-03_at_11.45.42_PM_odw5hy.jpg"
        alt="Profile"
        className="relative w-64 h-64 md:w-72 md:h-72 object-cover rounded-full border-4 border-neutral-900"
      />
    </div>
  );
};

function App() {
  return (
    <main className="min-h-screen bg-black antialiased">
      {/* Hero Section with Evervault Effect */}
      <EvervaultBackground className="min-h-screen flex flex-col items-center justify-center">
        {/* Corner Icons */}
        <Icon className="absolute h-6 w-6 top-4 left-4 text-white/30 z-30" />
        <Icon className="absolute h-6 w-6 bottom-4 left-4 text-white/30 z-30" />
        <Icon className="absolute h-6 w-6 top-4 right-4 text-white/30 z-30" />
        <Icon className="absolute h-6 w-6 bottom-4 right-4 text-white/30 z-30" />

        <div className="relative z-20 max-w-6xl mx-auto w-full px-4">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16">
            {/* Text Content - Left Side */}
            <div className="flex-1 text-center md:text-left">
              {/* Typewriter Effect Heading */}
              <TypewriterEffectSmooth words={heroWords} />

              <TextGenerateEffect
                words="A passionate developer crafting beautiful digital experiences with modern technologies and creative solutions."
                className="mt-4 max-w-xl"
              />

              <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
                <HoverBorderGradient
                  containerClassName="rounded-full"
                  as="a"
                  href="#projects"
                  className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                >
                  <svg
                    width="66"
                    height="65"
                    viewBox="0 0 66 65"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 text-black dark:text-white"
                  >
                    <path
                      d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
                      stroke="currentColor"
                      strokeWidth="15"
                      strokeMiterlimit="3.86874"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span>View Projects</span>
                </HoverBorderGradient>
                <HoverBorderGradient
                  containerClassName="rounded-full"
                  as="a"
                  href="#contact"
                  className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                >
                  <svg
                    width="66"
                    height="65"
                    viewBox="0 0 66 65"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 text-black dark:text-white"
                  >
                    <path
                      d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
                      stroke="currentColor"
                      strokeWidth="15"
                      strokeMiterlimit="3.86874"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span>Contact Me</span>
                </HoverBorderGradient>
              </div>
            </div>

            {/* Profile Image - Right Side */}
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
      </EvervaultBackground>

      {/* About Section - Bento Grid */}
      <section id="about" className="py-20 px-4 bg-black flex flex-col items-center justify-center">
        <div className="max-w-6xl mx-auto w-full">
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-16 text-center"
            style={{
              marginBottom: "20px",
              padding: "28px",
              textAlign: "left",
            }}
          >
            About
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
            <div className="md:col-span-2 h-[180px] rounded-3xl bg-neutral-900 border border-neutral-800 p-6 flex flex-col justify-center">
              <h3 className="text-xl md:text-2xl font-bold text-white leading-snug">
                Tech enthusiast with a<br />passion for development.
              </h3>
              <div className="mt-4 flex gap-2">
                <div className="w-16 h-1.5 bg-neutral-700 rounded-full"></div>
                <div className="w-10 h-1.5 bg-neutral-600 rounded-full"></div>
              </div>
            </div>

            {/* Row 3 */}
            {/* Card 4 - Currently building (spans full width) */}
            <div className="md:col-span-3 h-[200px] rounded-3xl bg-neutral-900 border border-neutral-800 p-6 relative overflow-hidden">
              <p className="text-neutral-500 text-sm mb-1">The Inside Scoop</p>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                Currently building modern web applications
              </h3>
              <div className="bg-neutral-950 rounded-lg p-4 font-mono text-sm max-w-md">
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
      </section>

      {/* Projects Section with HoverEffect */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">
            My Projects
          </h2>
          <p className="text-neutral-400 text-center mb-8 max-w-2xl mx-auto">
            A collection of projects I've worked on. Each one taught me something new
            and pushed my skills further.
          </p>
          <HoverEffect items={projects} />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["React", "TypeScript", "Node.js", "Python", "PostgreSQL", "MongoDB", "AWS", "Docker"].map((skill) => (
              <div
                key={skill}
                className="glass rounded-xl p-4 text-center hover:border-purple-500/50 transition-colors"
              >
                <span className="text-white font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section with BackgroundBeams */}
      <section id="contact" className="py-20 px-4 relative min-h-[500px]">
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
    </main>
  )
}

export default App
