import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowUpRight,
  Github,
  ExternalLink,
  Sparkles,
  LayoutGrid,
  ListFilter,
  CheckCircle2,
  Terminal,
  ChevronLeft,
  ChevronRight,
  MoveRight,
} from 'lucide-react';
import { Reveal, SectionHeading } from './Reveal';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

const CATEGORIES = [
  { id: 'all', label: 'All Work' },
  { id: 'ml', label: 'AI & Deep Learning' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'web', label: 'Web Apps' },
];

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'ml') return p.category.toLowerCase().includes('deep learning') || p.id === 'lungcd';
    if (activeCategory === 'fullstack')
      return p.category.toLowerCase().includes('full stack') || p.category.toLowerCase().includes('mern');
    if (activeCategory === 'web') return p.category.toLowerCase().includes('web app') || p.id === 'finnews';
    return true;
  });

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = scrollContainerRef.current.clientWidth * 0.75;
    scrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section id="projects" className="relative bg-[#060606] border-t border-white/10 py-24 md:py-32 lg:py-40 grain overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <SectionHeading index="03" title="Projects" />

        {/* View & Filter Controls Toolbar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
          <Reveal delay={0.1}>
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 bg-zinc-900/90 p-1.5 rounded-2xl border border-white/10">
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-mono-x transition-colors duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-teal-400 text-zinc-950 font-semibold'
                        : 'text-zinc-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex items-center gap-3">
              {/* Grid vs List Switcher */}
              <div className="flex items-center gap-1 bg-zinc-900/90 p-1.5 rounded-2xl border border-white/10">
                <button
                  onClick={() => setViewMode('grid')}
                  title="Horizontal Reel View"
                  className={`p-2 rounded-xl text-xs transition-colors cursor-pointer ${
                    viewMode === 'grid' ? 'bg-white/15 text-white' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <LayoutGrid size={16} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  title="Index List View"
                  className={`p-2 rounded-xl text-xs transition-colors cursor-pointer ${
                    viewMode === 'list' ? 'bg-white/15 text-white' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <ListFilter size={16} />
                </button>
              </div>

              {/* Horizontal Scroll Arrows (Visible in Grid Reel mode) */}
              {viewMode === 'grid' && (
                <div className="flex items-center gap-1.5 bg-zinc-900/90 p-1 rounded-2xl border border-white/10">
                  <button
                    onClick={() => handleScroll('left')}
                    aria-label="Scroll Left"
                    className="group p-2 rounded-xl text-zinc-300 hover:text-teal-400 hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    <ChevronLeft size={18} className="transition-transform duration-200 group-hover:-translate-x-0.5" />
                  </button>
                  <button
                    onClick={() => handleScroll('right')}
                    aria-label="Scroll Right"
                    className="group p-2 rounded-xl text-zinc-300 hover:text-teal-400 hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    <ChevronRight size={18} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                  </button>
                </div>
              )}
            </div>
          </Reveal>
        </div>

        {/* View Mode Switcher: Horizontal Carousel vs List */}
        <AnimatePresence mode="wait">
          {viewMode === 'grid' ? (
            /* ==================== HORIZONTAL SCROLL CAROUSEL ==================== */
            <motion.div
              key={`grid-${activeCategory}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              {/* Drag/Swipe Hint */}
              <div className="flex items-center justify-between text-xs font-mono-x text-zinc-500 mb-4 px-1">
                <span className="flex items-center gap-2">
                  <MoveRight size={14} className="text-teal-400 animate-pulse" />
                  Scroll horizontally or click to inspect architecture
                </span>
                <span>{filteredProjects.length} Projects</span>
              </div>

              {/* Horizontal Scroll Row */}
              <div
                ref={scrollContainerRef}
                className="flex gap-6 sm:gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory py-4 px-1 -mx-1 no-scrollbar select-none"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {filteredProjects.map((project, idx) => {
                  const indexNum = String(idx + 1).padStart(2, '0');

                  return (
                    <div
                      key={project.id}
                      onClick={() => onSelectProject(project)}
                      data-testid={`project-${project.id}`}
                      className="group relative flex-none w-[320px] sm:w-[420px] lg:w-[480px] snap-start rounded-3xl border border-white/10 bg-zinc-900/70 hover:border-teal-400/50 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer flex flex-col justify-between overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-teal-500/10"
                    >
                      <div>
                        {/* Fixed Height Image Container with Zoom effect */}
                        <div className="relative overflow-hidden aspect-[16/10] bg-zinc-950">
                          <img
                            src={project.imagePlaceholder}
                            alt={project.title}
                            className="w-full h-full object-cover filter grayscale contrast-105 opacity-70 group-hover:opacity-95 group-hover:scale-110 transition-transform duration-500 ease-out"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/30 to-transparent" />

                          {/* Top Badges */}
                          <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                            <span className="font-mono-x text-xs px-3 py-1 rounded-full bg-zinc-950/85 border border-white/15 text-zinc-300 backdrop-blur-md">
                              {project.category}
                            </span>
                            <span className="font-mono-x text-xs text-zinc-400 font-semibold bg-zinc-950/80 px-2.5 py-1 rounded-md border border-white/10">
                              {indexNum}
                            </span>
                          </div>

                          {/* Feature Badge */}
                          {project.badge && (
                            <div className="absolute bottom-4 left-4">
                              <span className="font-mono-x text-[11px] px-3 py-1 rounded-full bg-zinc-950/90 border border-teal-400/40 text-teal-300 font-medium backdrop-blur-md inline-flex items-center gap-1.5">
                                <Sparkles size={12} className="text-teal-400" /> {project.badge}
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Uniform Card Body Content */}
                        <div className="p-6 sm:p-7 space-y-4">
                          <div className="flex items-start justify-between gap-4">
                            <h3 className="font-display font-bold text-2xl text-white group-hover:text-teal-300 transition-colors">
                              {project.title}
                            </h3>
                            <div className="w-9 h-9 rounded-full bg-zinc-800/90 border border-white/10 flex items-center justify-center text-zinc-300 group-hover:bg-teal-400 group-hover:text-zinc-950 transition-all duration-300 shrink-0">
                              <ArrowUpRight size={17} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </div>
                          </div>

                          <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-sans line-clamp-3">
                            {project.description}
                          </p>

                          {/* Highlights */}
                          <div className="space-y-1.5 pt-1">
                            {project.highlights.slice(0, 2).map((h, i) => (
                              <div key={i} className="flex items-start gap-2 text-xs text-zinc-300 font-sans">
                                <CheckCircle2 size={13} className="text-teal-400 shrink-0 mt-0.5" />
                                <span className="line-clamp-1">{h}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Footer Tech Tags */}
                      <div className="p-6 sm:p-7 pt-0">
                        <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-zinc-300 font-mono-x"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ) : (
            /* ==================== MINIMALIST EDITORIAL INDEX LIST ==================== */
            <motion.div
              key={`list-${activeCategory}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="divide-y divide-white/10 border-t border-b border-white/10"
            >
              {filteredProjects.map((project, idx) => {
                const indexNum = String(idx + 1).padStart(2, '0');

                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    onClick={() => onSelectProject(project)}
                    data-testid={`project-row-${project.id}`}
                    className="group py-8 px-2 sm:px-6 hover:bg-white/[0.02] transition-colors duration-200 cursor-pointer grid lg:grid-cols-12 gap-6 items-center"
                  >
                    {/* Number & Title */}
                    <div className="lg:col-span-5 flex items-center gap-4 sm:gap-6">
                      <span className="font-mono-x text-sm text-zinc-500 group-hover:text-teal-400 transition-colors">
                        {indexNum}
                      </span>
                      <div>
                        <h3 className="font-display font-bold text-2xl sm:text-3xl text-white group-hover:text-teal-300 transition-colors flex items-center gap-2">
                          {project.title}
                        </h3>
                        <p className="font-mono-x text-xs text-zinc-400 mt-1">{project.category}</p>
                      </div>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="lg:col-span-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg border border-white/10 bg-zinc-900/80 px-2.5 py-1 text-xs text-zinc-300 font-mono-x"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action & Trigger */}
                    <div className="lg:col-span-3 flex items-center justify-between lg:justify-end gap-4">
                      {project.badge && (
                        <span className="hidden sm:inline-block font-mono-x text-[11px] text-teal-400 bg-teal-400/10 px-3 py-1 rounded-full border border-teal-400/30">
                          {project.badge}
                        </span>
                      )}

                      <div className="inline-flex items-center gap-2 font-mono-x text-xs text-zinc-300 group-hover:text-teal-400 transition-colors">
                        <span>View Architecture</span>
                        <div className="w-8 h-8 rounded-full border border-white/10 group-hover:border-teal-400/40 flex items-center justify-center text-zinc-300 group-hover:bg-teal-400 group-hover:text-zinc-950 transition-all">
                          <ArrowUpRight size={15} />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* GitHub Footer Banner */}
        <Reveal delay={0.1}>
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-zinc-400 text-xs sm:text-sm font-sans">
              <Terminal size={18} className="text-teal-400" />
              <span>Explore source code, architecture documentation &amp; research code on GitHub</span>
            </div>

            <a
              href="https://github.com/nischal8585"
              target="_blank"
              rel="noreferrer"
              data-testid="projects-github-cta"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-zinc-900/90 px-5 py-2.5 text-xs sm:text-sm font-mono-x text-zinc-200 hover:text-teal-400 hover:border-white/20 transition-colors"
            >
              <Github size={16} /> @nischal8585 <ExternalLink size={14} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
