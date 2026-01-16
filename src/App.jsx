import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { HoverEffect } from "@/components/ui/HoverEffect";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import './App.css'

// Typewriter words for hero heading
const heroWords = [
  { text: "Hi," },
  { text: "I'm" },
  {
    text: "Your",
    className: "text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
  },
  {
    text: "Name",
    className: "text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
  },
];

// Images for 3D Marquee background
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
      <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full blur-sm opacity-75"></div>

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
      {/* Hero Section with 3D Marquee */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-4 overflow-hidden rounded-3xl">
        {/* 3D Marquee Background */}
        <ThreeDMarquee
          className="pointer-events-none absolute inset-0 h-full w-full"
          images={marqueeImages}
        />

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 z-10 h-full w-full bg-black/80" />

        <div className="relative z-20 max-w-6xl mx-auto w-full">
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
                <a
                  href="#projects"
                  className="px-6 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full hover:opacity-90 transition-all hover:scale-105"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="px-6 py-2.5 text-sm font-medium text-white border border-neutral-700 rounded-full hover:bg-neutral-800 transition-all hover:scale-105"
                >
                  Contact Me
                </a>
              </div>
            </div>

            {/* Profile Image - Right Side */}
            <div className="flex-shrink-0">
              <ProfileImage />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-10">
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

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            About Me
          </h2>
          <div className="glass rounded-2xl p-8">
            <p className="text-neutral-300 text-lg leading-relaxed text-center">
              I'm a passionate full-stack developer with expertise in modern web technologies.
              I love building products that make a difference and solving complex problems
              with elegant solutions. With years of experience in React, Node.js, and cloud
              technologies, I bring ideas to life through clean code and thoughtful design.
            </p>
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
              className="w-full px-8 py-3 text-sm font-medium text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg hover:opacity-90 transition-all"
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
