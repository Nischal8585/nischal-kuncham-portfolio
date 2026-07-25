import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BadgeCheck, Eye, ExternalLink, X, FileText, Image as ImageIcon, ChevronLeft, ChevronRight, Download } from 'lucide-react';
import { Reveal, SectionHeading } from './Reveal';
import { SKILL_GROUPS_DATA, CERTIFICATIONS_DATA } from '../data/portfolioData';
import { Certification } from '../types';

export const SkillsSection: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  const openCertModal = (cert: Certification) => {
    setSelectedCert(cert);
    setActiveImageIndex(0);
  };

  const closeModal = () => {
    setSelectedCert(null);
    setActiveImageIndex(0);
  };

  return (
    <section id="expertise" className="relative bg-zinc-950 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 lg:py-40">
        <SectionHeading index="02" title="Expertise" id="skills" />

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_GROUPS_DATA.map((g, i) => (
            <Reveal key={g.label} delay={i * 0.06} className={g.span}>
              <div className="h-full rounded-2xl border border-white/10 bg-zinc-900 p-7 hover:border-teal-400/40 transition-colors duration-300 group">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-display font-bold text-xl md:text-2xl text-white">{g.label}</h3>
                  <span className="font-mono-x text-white/25 text-sm group-hover:text-teal-400 transition-colors">
                    0{i + 1}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {g.items.map((item) => (
                    <motion.span
                      key={item}
                      whileHover={{ y: -3 }}
                      className="rounded-full bg-white/5 border border-white/10 px-4 py-2 text-sm text-white/80 hover:bg-teal-400 hover:text-zinc-950 hover:border-teal-400 transition-colors duration-200 cursor-default font-sans"
                      data-testid={`skill-${item.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Certifications Section */}
        <Reveal delay={0.1}>
          <div className="mt-16">
            <p className="font-mono-x text-xs uppercase tracking-[0.25em] text-white/40 mb-6">
              Certifications &amp; Accreditations
            </p>
            <div className="flex flex-wrap gap-4">
              {CERTIFICATIONS_DATA.map((cert) => (
                <div
                  key={cert.id}
                  data-testid={`cert-${cert.id}`}
                  onClick={() => openCertModal(cert)}
                  className="group inline-flex items-center gap-3 rounded-xl border border-teal-400/30 bg-teal-500/10 px-5 py-3.5 hover:bg-teal-500/20 hover:border-teal-400/60 transition-all duration-200 cursor-pointer shadow-md hover:-translate-y-0.5"
                >
                  <BadgeCheck size={18} className="text-teal-400 group-hover:scale-110 transition-transform shrink-0" />
                  <span className="text-sm font-semibold text-white/90 group-hover:text-white transition-colors">
                    {cert.title}
                  </span>
                  <ExternalLink size={14} className="text-teal-400/60 group-hover:text-teal-300 ml-1 transition-colors shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </Reveal>

      </div>

      {/* Certificate Viewer Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-zinc-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-4xl bg-zinc-900 border border-white/15 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-zinc-950/60">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-teal-400/10 text-teal-400 border border-teal-400/20">
                    <BadgeCheck size={20} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-white leading-tight">
                      {selectedCert.title}
                    </h3>
                    <p className="text-zinc-400 font-mono-x text-xs">
                      {selectedCert.issuer}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={selectedCert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-teal-400 hover:bg-teal-300 px-3.5 py-1.5 text-xs font-medium text-zinc-950 transition-colors"
                  >
                    <ExternalLink size={14} /> Open Full
                  </a>
                  <button
                    onClick={closeModal}
                    aria-label="Close"
                    className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Modal Body / Viewer */}
              <div className="flex-1 overflow-auto p-4 sm:p-6 bg-zinc-950/40 flex items-center justify-center min-h-[350px]">
                {selectedCert.fileType === 'pdf' ? (
                  <div className="w-full h-[65vh] flex flex-col items-center justify-center rounded-xl overflow-hidden border border-white/10 bg-zinc-900/90 relative">
                    <object
                      data={selectedCert.credentialUrl}
                      type="application/pdf"
                      className="w-full h-full"
                    >
                      <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-zinc-900/95">
                        <div className="w-16 h-16 rounded-2xl bg-teal-400/10 border border-teal-400/30 text-teal-400 flex items-center justify-center mb-4 shadow-lg">
                          <FileText size={32} />
                        </div>
                        <h4 className="font-display font-bold text-xl text-white mb-2 max-w-md">
                          {selectedCert.title}
                        </h4>
                        <p className="text-zinc-400 text-sm max-w-md mb-6 leading-relaxed">
                          Browser security policies prevent inline PDF embedding inside sandboxed frame previews. You can view or download the official certificate directly.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-3">
                          <a
                            href={selectedCert.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-teal-400 hover:bg-teal-300 px-6 py-3 text-sm font-semibold text-zinc-950 transition-colors shadow-lg"
                          >
                            <ExternalLink size={16} /> Open Document in New Tab
                          </a>
                          <a
                            href={selectedCert.credentialUrl}
                            download
                            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-zinc-800 hover:bg-zinc-700 px-6 py-3 text-sm font-medium text-white transition-colors"
                          >
                            <Download size={16} /> Download PDF
                          </a>
                        </div>
                      </div>
                    </object>
                  </div>
                ) : (
                  <div className="relative w-full flex flex-col items-center">
                    {selectedCert.images && selectedCert.images.length > 0 && (
                      <div className="relative w-full flex items-center justify-center group">
                        <img
                          src={selectedCert.images[activeImageIndex]}
                          alt={`${selectedCert.title} - ${activeImageIndex + 1}`}
                          className="max-h-[60vh] object-contain rounded-xl border border-white/10 shadow-2xl"
                        />

                        {selectedCert.images.length > 1 && (
                          <>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveImageIndex((prev) => (prev === 0 ? selectedCert.images!.length - 1 : prev - 1));
                              }}
                              className="absolute left-2 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-zinc-950/80 text-white border border-white/20 hover:bg-teal-400 hover:text-zinc-950 transition-colors shadow-lg"
                              aria-label="Previous image"
                            >
                              <ChevronLeft size={20} />
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveImageIndex((prev) => (prev === selectedCert.images!.length - 1 ? 0 : prev + 1));
                              }}
                              className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-zinc-950/80 text-white border border-white/20 hover:bg-teal-400 hover:text-zinc-950 transition-colors shadow-lg"
                              aria-label="Next image"
                            >
                              <ChevronRight size={20} />
                            </button>
                          </>
                        )}
                      </div>
                    )}

                    {selectedCert.images && selectedCert.images.length > 1 && (
                      <div className="flex items-center gap-3 mt-4">
                        {selectedCert.images.map((img, idx) => (
                          <button
                            key={idx}
                            onClick={() => setActiveImageIndex(idx)}
                            className={`relative rounded-lg overflow-hidden border-2 transition-all w-16 h-12 ${
                              activeImageIndex === idx ? 'border-teal-400 scale-105' : 'border-white/10 opacity-60 hover:opacity-100'
                            }`}
                          >
                            <img src={img} alt={`Thumb ${idx + 1}`} className="w-full h-full object-cover" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-3 border-t border-white/10 bg-zinc-950/60 flex items-center justify-between text-xs font-mono-x text-zinc-400">
                <span>{selectedCert.description}</span>
                <a
                  href={selectedCert.credentialUrl}
                  download
                  className="inline-flex items-center gap-1 hover:text-teal-400 transition-colors shrink-0 ml-4"
                >
                  <Download size={13} /> Download
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
