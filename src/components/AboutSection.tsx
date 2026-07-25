import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Briefcase } from 'lucide-react';
import { Reveal, SectionHeading } from './Reveal';
import { BIO, PERSONAL_INFO, TIMELINE_DATA } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 lg:py-40">
      <SectionHeading index="01" title="About" />

      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Bio Column with Photo */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28 space-y-8">
            {/* Bio Text */}
            <Reveal>
              <p className="text-white/80 text-base md:text-lg leading-relaxed font-sans">
                {BIO}
              </p>
            </Reveal>
          </div>
        </div>

        {/* Right Timeline Column */}
        <div className="lg:col-span-7">
          <div className="relative pl-6 sm:pl-8 md:pl-10">
            
            {/* Vertical Line */}
            <div className="absolute left-0 top-3 bottom-3 w-px bg-gradient-to-b from-teal-400/50 via-white/10 to-transparent" />

            {TIMELINE_DATA.map((t, i) => (
              <Reveal key={i} delay={i * 0.08} className="relative mb-8 md:mb-10 last:mb-0">
                
                {/* Node Bullet - Mathematically centered on line at left-0 */}
                <motion.span
                  className="absolute -left-6 sm:-left-8 md:-left-10 top-7 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-teal-400 ring-4 ring-zinc-950 shadow-[0_0_12px_#14f1d9] z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08, type: 'spring', stiffness: 300 }}
                />

                {/* Timeline Card */}
                <div className="rounded-2xl border border-white/10 bg-zinc-900/90 p-6 md:p-8 hover:border-teal-400/40 hover:-translate-y-1 transition-all duration-300 shadow-xl">
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <span className="inline-flex items-center gap-2 font-mono-x text-xs uppercase tracking-widest text-teal-400 font-medium">
                      {t.type === 'education' ? <GraduationCap size={15} /> : <Briefcase size={15} />}
                      {t.type}
                    </span>
                    <span className="font-mono-x text-zinc-400 text-xs font-medium">{t.period}</span>
                  </div>

                  <h3 className="font-display font-bold text-xl md:text-2xl text-white">{t.role}</h3>
                  <p className="text-zinc-300 mt-1 font-sans text-sm sm:text-base">
                    {t.org}
                    {t.meta && <span className="text-teal-400 font-mono-x text-xs ml-2">· {t.meta}</span>}
                  </p>

                  {t.points.length > 0 && (
                    <ul className="mt-4 space-y-2.5">
                      {t.points.map((p, j) => (
                        <li key={j} className="text-zinc-300 text-sm flex gap-3 leading-relaxed">
                          <span className="text-teal-400 mt-2 w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

              </Reveal>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};
