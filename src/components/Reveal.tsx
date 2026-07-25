import React, { ReactNode } from 'react';
import { motion } from 'motion/react';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}

export const Reveal: React.FC<RevealProps> = ({ children, delay = 0, y = 24, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

interface SectionHeadingProps {
  index: string;
  title: string;
  id?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ index, title, id }) => (
  <div className="w-full mb-10 md:mb-16" id={id}>
    <Reveal>
      <div className="flex items-center gap-4 sm:gap-6 w-full mb-4">
        <span className="font-mono-x text-teal-400 text-sm md:text-base font-medium shrink-0">{index}</span>
        <span className="h-px flex-1 bg-white/10" />
        <span className="font-mono-x text-white/40 text-[11px] sm:text-xs uppercase tracking-[0.3em] font-medium shrink-0">
          {title.toUpperCase()}
        </span>
      </div>
    </Reveal>
    <Reveal delay={0.1}>
      <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-white">
        {title}
      </h2>
    </Reveal>
  </div>
);
