import React from 'react';
import { motion } from 'motion/react';
import { ArrowDownRight, ArrowUpRight, Github, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenResume?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 sm:pt-36 pb-20 md:pb-28 overflow-hidden grain bg-[#060606]">
      {/* Background ambient lighting - subtle matte dark atmosphere */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-[#00d6b4]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-[300px] h-[300px] bg-[#00d6b4]/3 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Main Copy & CTA */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            {/* Top Eyebrow Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-mono-x text-teal-400 text-xs sm:text-sm uppercase tracking-[0.25em] font-medium">
                FULL-STACK DEVELOPER — REACT &amp; ML ENTHUSIAST
              </p>
            </motion.div>

            {/* Giant Title: Nischal Kuncham */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="space-y-0"
            >
              <h1 className="font-display font-bold text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[8.5rem] tracking-tight text-white leading-[0.88]">
                Nischal
              </h1>
              <h1 className="font-display font-bold text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[8.5rem] tracking-tight text-stroke-teal leading-[0.88] pt-1 sm:pt-2">
                Kuncham
              </h1>
            </motion.div>

            {/* Subtitle / Intro Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-zinc-400 text-base sm:text-lg md:text-xl font-sans max-w-xl leading-relaxed pt-2"
            >
              Recently graduated Computer Science engineer crafting responsive, component-based interfaces and full-stack systems — with a curiosity for applying machine learning to real-world problems.
            </motion.p>

            {/* Action Buttons & Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4 pt-4"
            >
              <button
                onClick={() => scrollTo('projects')}
                data-testid="hero-view-projects"
                className="group inline-flex items-center gap-2 rounded-full bg-teal-400 hover:bg-teal-300 px-6 sm:px-7 py-3.5 text-sm font-semibold text-zinc-950 transition-colors cursor-pointer font-sans"
              >
                <span>View Projects</span>
                <ArrowDownRight size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                data-testid="hero-contact-me"
                className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-zinc-900/80 px-6 sm:px-7 py-3.5 text-sm font-medium text-zinc-200 hover:border-white/30 hover:bg-zinc-800 transition-colors cursor-pointer font-sans"
              >
                <span>Contact Me</span>
                <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>

              <div className="flex items-center gap-2.5 pl-1 sm:pl-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  data-testid="hero-github"
                  className="w-11 h-11 rounded-full border border-white/10 bg-zinc-900/80 flex items-center justify-center text-zinc-300 hover:text-teal-400 hover:border-white/20 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  data-testid="hero-linkedin"
                  className="w-11 h-11 rounded-full border border-white/10 bg-zinc-900/80 flex items-center justify-center text-zinc-300 hover:text-teal-400 hover:border-white/20 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </motion.div>

          </div>

          {/* Right Column - Framed Portrait Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-md lg:max-w-none"
            >
              {/* Top-Right Teal Accent Frame Bracket */}
              <div className="absolute -top-3 -right-3 w-16 h-16 sm:w-20 sm:h-20 border-t-2 border-r-2 border-teal-400 rounded-tr-3xl pointer-events-none z-20" />

              {/* Card Container */}
              <div className="relative rounded-2xl sm:rounded-3xl border border-white/10 bg-zinc-900/80 overflow-hidden shadow-2xl group">
                <img
                  src={PERSONAL_INFO.photo}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-[460px] sm:h-[520px] lg:h-[560px] object-cover object-center filter grayscale contrast-105 brightness-95 group-hover:scale-102 transition-transform duration-700"
                />

                {/* Bottom Overlay Info Bar */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-transparent flex items-center justify-between">
                  <span className="font-mono-x text-[11px] sm:text-xs uppercase tracking-[0.25em] text-white/80 font-medium">
                    AVAILABLE FOR WORK
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-teal-400 shadow-[0_0_10px_#14f1d9] animate-pulse shrink-0" />
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
