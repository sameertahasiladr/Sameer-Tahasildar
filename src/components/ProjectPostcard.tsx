import React from 'react';
import { ExternalLink, Github, Sparkles, Globe } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { ProjectItem } from '../data/portfolio';

interface ProjectPostcardProps {
  project: ProjectItem;
  index: number;
}

export const ProjectPostcard: React.FC<ProjectPostcardProps> = ({ project, index }) => {
  const shouldReduceMotion = useReducedMotion();

  // Natural resting angle on the table
  const restingRotation = project.postcardRotation || (index % 2 === 0 ? -1.2 : 1.4);

  return (
    <motion.article
      initial={
        shouldReduceMotion
          ? { opacity: 0 }
          : {
              opacity: 0,
              y: 40,
              scale: 1.03,
              rotate: restingRotation * 2,
            }
      }
      whileInView={
        shouldReduceMotion
          ? { opacity: 1 }
          : {
              opacity: 1,
              y: 0,
              scale: 1,
              rotate: restingRotation,
            }
      }
      whileHover={
        shouldReduceMotion
          ? undefined
          : {
              rotate: 0,
              y: -8,
              scale: 1.01,
              boxShadow: '0 20px 30px -10px rgba(14, 77, 82, 0.22)',
            }
      }
      viewport={{ once: true, amount: 0.15, margin: '-40px' }}
      transition={{
        duration: 0.65,
        delay: (index % 2) * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative rounded-2xl bg-[#FCF8F2] dark:bg-[#121F33] border-2 border-[#E3D4BE] dark:border-[#263C5C] p-6 sm:p-7 shadow-md flex flex-col justify-between cursor-pointer"
    >
      {/* Postcard Airmail Corner Accent Header */}
      <div className="flex items-start justify-between gap-4 mb-4 pb-4 border-b border-[#E3D4BE]/70 dark:border-[#263C5C]/70">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono tracking-widest uppercase text-[#C8553D] dark:text-[#E9A23B] font-bold">
              {project.category}
            </span>
            <span className="text-[10px] font-mono text-[#4B6366] dark:text-[#A5B6CE]">
              · {project.postmarkDate}
            </span>
          </div>
          <h3 className="font-serif text-2xl font-bold tracking-tight text-[#072B2E] dark:text-[#F3EBDD]">
            {project.title}
          </h3>
          <p className="font-serif italic text-sm text-[#166A70] dark:text-[#A5B6CE]">
            {project.subtitle}
          </p>
        </div>

        {/* Perforated Postage Stamp in Top-Right Corner */}
        <div className="shrink-0 relative group-hover:scale-105 transition-transform duration-200">
          <div className="w-16 h-20 rounded-xs bg-[#FAF6EE] dark:bg-[#1A2C46] border-2 border-dashed border-[#C8553D] dark:border-[#E9A23B] p-1.5 flex flex-col items-center justify-between text-center shadow-xs">
            <span className="text-[8px] font-mono font-bold tracking-wider text-[#0E4D52] dark:text-[#F3EBDD]">
              GOA
            </span>
            <div className="w-7 h-7 rounded-full bg-[#E9A23B]/20 dark:bg-[#E9A23B]/30 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-[#C8553D] dark:text-[#E9A23B]" />
            </div>
            <span className="text-[8px] font-mono text-[#C8553D] dark:text-[#E9A23B] font-bold">
              {project.stampLabel}
            </span>
          </div>

          {/* Postmark cancellation wave lines over stamp */}
          <div className="absolute -left-5 top-2 pointer-events-none opacity-60">
            <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
              <path d="M0,4 Q10,0 20,4 T40,4" stroke="#0E4D52" strokeWidth="1" className="dark:stroke-[#A5B6CE]" />
              <path d="M0,12 Q10,8 20,12 T40,12" stroke="#0E4D52" strokeWidth="1" className="dark:stroke-[#A5B6CE]" />
              <path d="M0,20 Q10,16 20,20 T40,20" stroke="#0E4D52" strokeWidth="1" className="dark:stroke-[#A5B6CE]" />
            </svg>
          </div>
        </div>
      </div>

      {/* Postcard Graphic Preview Container */}
      <div className="mb-5 rounded-xl overflow-hidden border border-[#E3D4BE] dark:border-[#263C5C] bg-[#F6EFE3] dark:bg-[#0B1522] aspect-16/9 relative p-3 flex flex-col justify-between">
        {/* Mock Browser Header */}
        <div className="flex items-center justify-between pb-2 border-b border-[#E3D4BE]/60 dark:border-[#263C5C]">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C8553D]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#E9A23B]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#0E4D52]/80 dark:bg-[#A5B6CE]/80" />
          </div>
          <span className="text-[10px] font-mono text-[#4B6366] dark:text-[#A5B6CE] truncate max-w-[200px]">
            {project.liveUrl ? project.liveUrl.replace('https://', '') : 'internal-build://cc-labs'}
          </span>
          <Globe className="w-3 h-3 text-[#4B6366] dark:text-[#A5B6CE]" />
        </div>

        {/* Domain-specific stylized wireframe graphic */}
        <div className="flex-1 flex items-center justify-center py-2">
          {project.id === 'itechsolution' && (
            <div className="w-full h-full flex flex-col justify-center space-y-2 px-2">
              <div className="h-4 bg-[#0E4D52]/15 dark:bg-[#A5B6CE]/15 rounded w-2/5" />
              <div className="grid grid-cols-3 gap-2">
                <div className="h-14 rounded bg-[#FAF6EE] dark:bg-[#121F33] border border-[#E3D4BE] dark:border-[#263C5C] p-1.5 flex flex-col justify-between">
                  <div className="w-full h-6 bg-[#0E4D52]/10 dark:bg-white/10 rounded" />
                  <div className="w-3/4 h-2 bg-[#C8553D]/30 rounded" />
                </div>
                <div className="h-14 rounded bg-[#FAF6EE] dark:bg-[#121F33] border border-[#E3D4BE] dark:border-[#263C5C] p-1.5 flex flex-col justify-between">
                  <div className="w-full h-6 bg-[#0E4D52]/10 dark:bg-white/10 rounded" />
                  <div className="w-2/3 h-2 bg-[#E9A23B]/40 rounded" />
                </div>
                <div className="h-14 rounded bg-[#FAF6EE] dark:bg-[#121F33] border border-[#E3D4BE] dark:border-[#263C5C] p-1.5 flex flex-col justify-between">
                  <div className="w-full h-6 bg-[#0E4D52]/10 dark:bg-white/10 rounded" />
                  <div className="w-1/2 h-2 bg-[#0E4D52]/30 rounded" />
                </div>
              </div>
            </div>
          )}

          {project.id === 'realestate' && (
            <div className="w-full h-full flex flex-col justify-center space-y-2 px-2">
              <div className="flex justify-between items-center">
                <div className="h-4 bg-[#C8553D]/20 rounded w-1/3" />
                <div className="h-3 bg-[#E9A23B]/30 rounded w-1/4" />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="h-16 rounded bg-[#FAF6EE] dark:bg-[#121F33] border border-[#E3D4BE] dark:border-[#263C5C] p-2 flex flex-col justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#C8553D]" />
                    <span className="text-[9px] font-mono">Villa Mandovi</span>
                  </div>
                  <div className="w-full h-2 bg-[#0E4D52]/15 dark:bg-white/15 rounded" />
                </div>
                <div className="h-16 rounded bg-[#FAF6EE] dark:bg-[#121F33] border border-[#E3D4BE] dark:border-[#263C5C] p-2 flex flex-col justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#E9A23B]" />
                    <span className="text-[9px] font-mono">Old Goa Estate</span>
                  </div>
                  <div className="w-4/5 h-2 bg-[#0E4D52]/15 dark:bg-white/15 rounded" />
                </div>
              </div>
            </div>
          )}

          {project.id === 'driveingoa' && (
            <div className="w-full h-full flex flex-col justify-center space-y-2 px-2">
              <div className="h-3 bg-[#E9A23B]/30 rounded w-1/2" />
              <div className="p-2 rounded bg-[#FAF6EE] dark:bg-[#121F33] border border-[#E3D4BE] dark:border-[#263C5C] flex items-center justify-between">
                <div className="space-y-1">
                  <div className="text-[10px] font-mono font-bold text-[#0E4D52] dark:text-[#E9A23B]">
                    SUV & Convertible Fleet
                  </div>
                  <div className="text-[9px] font-mono text-[#4B6366] dark:text-[#A5B6CE]">
                    Panaji · Airport · Margao
                  </div>
                </div>
                <span className="text-[10px] font-mono font-bold text-[#C8553D] px-2 py-0.5 rounded bg-[#C8553D]/10">
                  ₹ Daily
                </span>
              </div>
            </div>
          )}

          {project.id === 'photomemory' && (
            <div className="w-full h-full flex items-center justify-center gap-3 px-2">
              <div className="w-16 h-18 bg-[#FAF6EE] dark:bg-[#121F33] p-1.5 shadow-xs border border-[#E3D4BE] dark:border-[#263C5C] -rotate-3 flex flex-col justify-between">
                <div className="w-full h-10 bg-[#0E4D52]/20 dark:bg-white/10 rounded-xs" />
                <div className="text-[7px] font-mono text-center">Miramar 2024</div>
              </div>
              <div className="w-16 h-18 bg-[#FAF6EE] dark:bg-[#121F33] p-1.5 shadow-xs border border-[#E3D4BE] dark:border-[#263C5C] rotate-2 flex flex-col justify-between">
                <div className="w-full h-10 bg-[#C8553D]/20 dark:bg-white/10 rounded-xs" />
                <div className="text-[7px] font-mono text-center">Vagator 2025</div>
              </div>
            </div>
          )}

          {project.id === 'quotes-app' && (
            <div className="w-full h-full flex flex-col justify-center space-y-2 px-4 text-center">
              <span className="font-serif italic text-sm text-[#0E4D52] dark:text-[#E9A23B] leading-relaxed">
                "Words are the architecture of human thought."
              </span>
              <span className="text-[10px] font-mono text-[#C8553D]">
                — Curated Literary Archive · Nuxt.js
              </span>
            </div>
          )}

          {project.id === 'spelling-bee' && (
            <div className="w-full h-full flex flex-col justify-center items-center space-y-2 px-3">
              <div className="text-[10px] font-mono font-bold text-[#0E4D52] dark:text-[#E9A23B]">
                SPELLING CHALLENGE
              </div>
              <div className="flex justify-center gap-1.5 font-mono text-xs">
                {['B', 'E', 'E', 'Z', 'Y'].map((letter, i) => (
                  <span
                    key={i}
                    className={`w-6 h-6 flex items-center justify-center rounded-md border text-[11px] font-bold ${
                      i === 2
                        ? 'border-[#E9A23B] bg-[#E9A23B] text-[#072B2E]'
                        : 'border-[#C8553D] bg-[#FAF6EE] dark:bg-[#121F33] text-[#C8553D]'
                    }`}
                  >
                    {letter}
                  </span>
                ))}
              </div>
              <span className="text-[9px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                +15 Points · Valid Word Found
              </span>
            </div>
          )}

          {project.id === 'doit-today' && (
            <div className="w-full h-full flex flex-col justify-center space-y-1.5 px-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-[#0E4D52] dark:text-[#E9A23B]">Today's Focus</span>
                <span className="text-[9px] font-mono text-[#C8553D] font-semibold">3 / 4 Done</span>
              </div>
              <div className="space-y-1">
                <div className="p-1 rounded bg-[#FAF6EE] dark:bg-[#121F33] border border-[#E3D4BE] dark:border-[#263C5C] flex items-center gap-2 text-[9px] font-mono">
                  <span className="w-2.5 h-2.5 rounded-sm bg-emerald-600 flex items-center justify-center text-[7px] text-white">✓</span>
                  <span className="line-through text-[#4B6366] dark:text-[#A5B6CE]">Ship NestJS REST API endpoints</span>
                </div>
                <div className="p-1 rounded bg-[#FAF6EE] dark:bg-[#121F33] border border-[#E3D4BE] dark:border-[#263C5C] flex items-center gap-2 text-[9px] font-mono">
                  <span className="w-2.5 h-2.5 rounded-sm bg-emerald-600 flex items-center justify-center text-[7px] text-white">✓</span>
                  <span className="line-through text-[#4B6366] dark:text-[#A5B6CE]">Optimize MongoDB query pipelines</span>
                </div>
                <div className="p-1 rounded bg-[#FAF6EE] dark:bg-[#121F33] border border-[#E3D4BE] dark:border-[#263C5C] flex items-center gap-2 text-[9px] font-mono">
                  <span className="w-2.5 h-2.5 rounded-sm border border-[#C8553D]" />
                  <span className="font-semibold text-[#072B2E] dark:text-[#F3EBDD]">Review responsive Tailwind styling</span>
                </div>
              </div>
            </div>
          )}

          {project.id === 'noor-islamic-app' && (
            <div className="w-full h-full flex flex-col justify-center items-center space-y-1.5 px-3 text-center">
              <div className="w-8 h-8 rounded-full border border-[#C8553D] dark:border-[#E9A23B] flex items-center justify-center">
                <span className="text-xs text-[#C8553D] dark:text-[#E9A23B]">☾</span>
              </div>
              <div className="space-y-0.5">
                <div className="font-serif text-xs font-bold text-[#072B2E] dark:text-[#F3EBDD]">
                  Daily Prayer Times & Reflections
                </div>
                <div className="text-[9px] font-mono text-[#4B6366] dark:text-[#A5B6CE]">
                  Fajr · Dhuhr · Asr · Maghrib · Isha
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Postcard stamp watermark */}
        <div className="text-[9px] font-mono text-right text-[#4B6366] dark:text-[#A5B6CE]">
          VERIFIED PRODUCTION DEPLOYMENT
        </div>
      </div>

      {/* Description text */}
      <p className="text-sm text-[#072B2E] dark:text-[#F3EBDD] leading-relaxed mb-5">
        {project.description}
      </p>

      {/* Tech Stack rendered cleanly with dots (no pill boxes) */}
      <div className="pt-4 border-t border-[#E3D4BE]/70 dark:border-[#263C5C]/70 mt-auto">
        <div className="flex flex-wrap items-center gap-y-1 text-xs text-[#4B6366] dark:text-[#A5B6CE] mb-4">
          <span className="font-mono text-[11px] text-[#0E4D52] dark:text-[#E9A23B] font-semibold mr-1.5">
            Stack:
          </span>
          {project.techStack.map((tech, idx) => (
            <React.Fragment key={tech}>
              <span className="text-[#072B2E] dark:text-[#F3EBDD] font-medium">{tech}</span>
              {idx < project.techStack.length - 1 && (
                <span aria-hidden="true" className="mx-1.5 text-[#C8553D]/50 dark:text-[#E9A23B]/50 font-bold">
                  ·
                </span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-[#0E4D52] text-[#F6EFE3] hover:bg-[#072B2E] dark:bg-[#C8553D] dark:text-white dark:hover:bg-[#A43F2A] transition-colors shadow-xs"
            >
              <span>Visit Live</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-[#EFE4D2]/60 dark:bg-[#1A2C46]/60 text-[#4B6366] dark:text-[#A5B6CE]">
              Creative Capsule Client Project
            </span>
          )}

          {/* Code button rendered only where repo exists */}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold border border-[#E3D4BE] dark:border-[#263C5C] text-[#072B2E] dark:text-[#F3EBDD] hover:border-[#C8553D] hover:text-[#C8553D] transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Code</span>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};
