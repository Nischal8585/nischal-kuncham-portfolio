import React from 'react';
import Marquee from 'react-fast-marquee';
import { MARQUEE_WORDS } from '../data/portfolioData';

export const MarqueeBand: React.FC = () => {
  return (
    <section className="py-10 md:py-14 border-y border-white/10 bg-zinc-950 overflow-hidden" data-testid="marquee">
      <Marquee speed={55} gradient={false} autoFill>
        {MARQUEE_WORDS.map((w, i) => (
          <span key={i} className="flex items-center">
            <span className="font-display font-bold text-5xl md:text-7xl px-8 text-stroke select-none">
              {w}
            </span>
            <span className="text-teal-400 text-4xl md:text-6xl select-none">✦</span>
          </span>
        ))}
      </Marquee>
    </section>
  );
};
