import React, { useState } from 'react';
import { Download, Eye, Mail, Phone, MapPin } from 'lucide-react';
import { PERSONAL_INFO, BIO_SUMMARY, TIMELINE_DATA, SKILL_GROUPS_DATA, CERTIFICATIONS_LIST } from '../data/portfolioData';

const generateResumeHtml = () => `<!doctype html><html><head><meta charset="utf-8"><title>Nischal Kuncham — Resume</title>
<style>
body{font-family:Arial,Helvetica,sans-serif;max-width:780px;margin:40px auto;color:#111;line-height:1.5;padding:0 24px}
h1{margin:0;font-size:30px;color:#050505}h2{border-bottom:2px solid #14f1d9;padding-bottom:4px;margin-top:28px;font-size:16px;text-transform:uppercase;letter-spacing:1px}
.muted{color:#555}.row{display:flex;justify-content:space-between;align-items:baseline}.tag{display:inline-block;background:#f0f0f0;border-radius:12px;padding:3px 12px;margin:3px;font-size:12px;font-weight:600}
ul{margin:6px 0;padding-left:20px}li{margin-bottom:4px}
</style></head>
<body>
<h1>Nischal Kuncham</h1>
<p class="muted">Full-Stack Developer | React &amp; ML Enthusiast<br>${PERSONAL_INFO.emails[0]} · ${PERSONAL_INFO.phone} · ${PERSONAL_INFO.location}<br>${PERSONAL_INFO.github} · ${PERSONAL_INFO.linkedin}</p>
<h2>Summary</h2><p>${BIO_SUMMARY}</p>
<h2>Experience &amp; Education</h2>${TIMELINE_DATA.map(
  (t) =>
    `<div class="row"><strong>${t.role} — ${t.org}</strong><span class="muted">${t.period}</span></div>${
      t.meta ? `<div class="muted">${t.meta}</div>` : ''
    }${t.points.length ? '<ul>' + t.points.map((p) => `<li>${p}</li>`).join('') + '</ul>' : ''}`
).join('')}
<h2>Skills</h2><p>${SKILL_GROUPS_DATA.map((g) => `<strong>${g.label}:</strong> ${g.items.join(', ')}`).join('<br>')}</p>
<h2>Certifications</h2><p>${CERTIFICATIONS_LIST.map((c) => `<span class="tag">${c}</span>`).join(' ')}</p>
</body></html>`;

export const downloadResumeHtml = () => {
  const a = document.createElement('a');
  a.href = '/my_latest_resume.pdf';
  a.download = 'Nischal_Kuncham_Resume.pdf';
  a.target = '_blank';
  a.click();
};

interface ResumeButtonsProps {
  compact?: boolean;
}

export const ResumeButtons: React.FC<ResumeButtonsProps> = ({ compact = false }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center gap-2.5">
      {/* Quick View Button */}
      <button
        onClick={() => setOpen(true)}
        data-testid="resume-quickview-button"
        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-zinc-900/90 hover:bg-zinc-800/90 px-4 py-2 text-xs sm:text-sm font-mono-x text-zinc-200 hover:text-white transition-colors duration-200 cursor-pointer"
      >
        <Eye size={15} className="text-zinc-300" /> {compact ? 'Resume' : 'Quick View'}
      </button>

      {/* Download CV PDF Button */}
      <a
        href="/my_latest_resume.pdf"
        download="Nischal_Kuncham_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        data-testid="resume-download-button"
        className="inline-flex items-center gap-2 rounded-full bg-teal-400 hover:bg-teal-300 px-4 py-2 text-xs sm:text-sm font-semibold font-mono-x text-zinc-950 transition-colors duration-200 cursor-pointer shadow-md"
      >
        <Download size={15} className="text-zinc-950 stroke-[2.5]" /> {compact ? 'CV' : 'Download CV'}
      </a>

      {/* Modal Quick View Dialog */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div
            data-testid="resume-dialog"
            className="w-full max-w-2xl bg-zinc-900 border border-white/10 text-white rounded-3xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto relative shadow-2xl space-y-5"
          >
            <div className="flex justify-between items-start">
              <div>
                <h2 className="font-display font-bold text-3xl text-zinc-100">Nischal Kuncham</h2>
                <p className="text-teal-400 font-mono-x text-xs sm:text-sm mt-1">Full-Stack Developer | React &amp; ML Enthusiast</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-white/40 hover:text-white p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                aria-label="Close dialog"
              >
                ✕
              </button>
            </div>

            <div className="flex flex-wrap gap-4 text-white/60 text-xs font-mono-x border-y border-white/10 py-3">
              <span className="inline-flex items-center gap-1.5"><Mail size={14} className="text-teal-400" />{PERSONAL_INFO.emails[0]}</span>
              <span className="inline-flex items-center gap-1.5"><Phone size={14} className="text-teal-400" />{PERSONAL_INFO.phone}</span>
              <span className="inline-flex items-center gap-1.5"><MapPin size={14} className="text-teal-400" />{PERSONAL_INFO.location}</span>
            </div>

            <p className="text-white/70 leading-relaxed text-sm">{BIO_SUMMARY}</p>

            <div className="space-y-4 pt-2">
              <h3 className="font-mono-x text-xs uppercase tracking-widest text-teal-400">Experience &amp; Education</h3>
              {TIMELINE_DATA.map((t, i) => (
                <div key={i} className="border-l-2 border-teal-400/40 pl-4 space-y-1">
                  <div className="flex justify-between gap-4">
                    <p className="font-semibold text-sm text-zinc-100">{t.role}</p>
                    <span className="text-white/40 text-xs font-mono-x whitespace-nowrap">{t.period}</span>
                  </div>
                  <p className="text-white/50 text-xs">{t.org}{t.meta ? ` · ${t.meta}` : ''}</p>
                  {t.points.length > 0 && (
                    <ul className="list-disc list-inside text-xs text-white/70 space-y-1 pt-1">
                      {t.points.map((p, idx) => (
                        <li key={idx}>{p}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            <div className="pt-2">
              <h3 className="font-mono-x text-xs uppercase tracking-widest text-teal-400 mb-2">Certifications</h3>
              <div className="flex flex-wrap gap-2">
                {CERTIFICATIONS_LIST.map((c) => (
                  <span key={c} className="text-xs rounded-full bg-white/5 border border-white/10 px-3 py-1 text-white/80 font-mono-x">{c}</span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex justify-end gap-3">
              <button
                onClick={() => setOpen(false)}
                className="px-5 py-2.5 rounded-full border border-white/10 text-xs font-mono-x text-white/60 hover:text-white"
              >
                Close
              </button>
              <a
                href="/my_latest_resume.pdf"
                download="Nischal_Kuncham_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="resume-dialog-download"
                className="inline-flex items-center gap-2 rounded-full bg-teal-400 px-5 py-2.5 text-xs font-semibold font-mono-x text-zinc-950 hover:brightness-110 transition cursor-pointer"
              >
                <Download size={15} /> Download Resume PDF
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
