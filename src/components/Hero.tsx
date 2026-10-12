import React, { useState, useEffect } from 'react';
import { ArrowDown, Download, Github, Linkedin, Mail, Clock, MapPin, Compass, Phone } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { portfolioData } from '../data/portfolio';
import { WhatsAppIcon } from './WhatsAppIcon';

export const Hero: React.FC = () => {
  const [typedCode, setTypedCode] = useState('');
  const [isResolved, setIsResolved] = useState(false);
  const [goaTime, setGoaTime] = useState('');

  // Live Goa clock (Asia/Kolkata)
  useEffect(() => {
    const updateTime = () => {
      const formatter = new Intl.DateTimeFormat('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });
      setGoaTime(formatter.format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Typewriter code snippet resolving into statement
  useEffect(() => {
    const codeSnippet = portfolioData.personal.codeSnippet;
    let currentIndex = 0;
    let isCancelled = false;

    // Type out code
    const timer = setInterval(() => {
      if (isCancelled) return;
      if (currentIndex <= codeSnippet.length) {
        setTypedCode(codeSnippet.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(timer);
        // After reading pause, resolve into natural editorial statement
        setTimeout(() => {
          if (!isCancelled) {
            setIsResolved(true);
          }
        }, 1600);
      }
    }, 45);

    return () => {
      isCancelled = true;
      clearInterval(timer);
    };
  }, []);

  // Scroll animation for setting sun & waves
  const { scrollY } = useScroll();
  const sunY = useTransform(scrollY, [0, 500], [0, 90]);
  const sunOpacity = useTransform(scrollY, [0, 450], [1, 0.2]);
  const waveOffset = useTransform(scrollY, [0, 500], [0, 40]);

  return (
    <section id="top" className="relative pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden">
      {/* Decorative Postcard Airmail Border Strip at top of hero */}
      <div className="absolute top-0 left-0 right-0 h-1.5 flex" aria-hidden="true">
        <div className="flex-1 bg-repeating-linear-gradient-stripes" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #C8553D 0, #C8553D 16px, #F6EFE3 16px, #F6EFE3 24px, #0E4D52 24px, #0E4D52 40px, #F6EFE3 40px, #F6EFE3 48px)'
        }} />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Top Dispatch Kicker & Live Telemetry Strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 text-xs font-mono text-[#4B6366] dark:text-[#A5B6CE] border-b border-[#E3D4BE]/60 dark:border-[#263C5C] pb-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#C8553D]" />
              <span>Old Goa, India</span>
            </span>
            <span aria-hidden="true" className="text-[#E3D4BE] dark:text-[#263C5C]">|</span>
            <a
              href={`tel:${portfolioData.personal.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 text-[#0E4D52] dark:text-[#E9A23B] hover:underline"
            >
              <Phone className="w-3.5 h-3.5 text-[#C8553D]" />
              <span>{portfolioData.personal.phone}</span>
            </a>
            <span aria-hidden="true" className="text-[#E3D4BE] dark:text-[#263C5C]">|</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#E9A23B]" />
              <span className="tabular-nums font-semibold text-[#072B2E] dark:text-[#F3EBDD]">{goaTime || '11:30 AM IST'}</span>
              <span className="text-[11px] opacity-75">(Asia/Kolkata)</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400" />
              {portfolioData.personal.status}
            </span>
          </div>
        </div>

        {/* Main Hero Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-widest font-mono text-[#C8553D] dark:text-[#E9A23B] font-semibold">
                Postcard from the Malabar Coast
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#072B2E] dark:text-[#F3EBDD] leading-[1.08] text-balance">
                {portfolioData.personal.name}
              </h1>
              <p className="font-serif italic text-xl sm:text-2xl text-[#166A70] dark:text-[#A5B6CE]">
                {portfolioData.personal.role}, {portfolioData.personal.location}
              </p>
            </div>

            {/* Signature Typewriter Code-to-Statement Resolution Box */}
            <div
              className="p-5 rounded-xl border border-[#E3D4BE] dark:border-[#263C5C] bg-[#FAF6EE] dark:bg-[#121F33] relative min-h-[105px] flex items-center transition-all shadow-xs"
              aria-live="polite"
            >
              {!isResolved ? (
                <div className="font-mono text-sm sm:text-base text-[#0E4D52] dark:text-[#E9A23B]">
                  <code>{typedCode}</code>
                  <span className="inline-block w-2 h-4 ml-1 bg-[#C8553D] animate-pulse align-middle" />
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-1"
                >
                  <p className="text-base sm:text-lg text-[#072B2E] dark:text-[#F3EBDD] font-medium leading-relaxed">
                    "{portfolioData.personal.resolvedStatement}"
                  </p>
                  <div className="flex items-center gap-2 pt-1">
                    <span className="text-[11px] font-mono text-[#4B6366] dark:text-[#A5B6CE]">
                      Resolved from TypeScript declaration
                    </span>
                    <button
                      onClick={() => setIsResolved(false)}
                      className="text-[11px] font-mono underline hover:text-[#C8553D] dark:hover:text-[#E9A23B] cursor-pointer"
                    >
                      (replay code)
                    </button>
                  </div>
                </motion.div>
              )}
            </div>

            {/* CTAs and Resume Download */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-[#0E4D52] text-[#F6EFE3] hover:bg-[#072B2E] dark:bg-[#C8553D] dark:text-white dark:hover:bg-[#A43F2A] transition-all shadow-xs group cursor-pointer"
              >
                <span>View Work</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href={portfolioData.personal.resumePath}
                download="Sameer_Tahasildar_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold bg-[#FAF6EE] dark:bg-[#121F33] text-[#072B2E] dark:text-[#F3EBDD] border border-[#E3D4BE] dark:border-[#263C5C] hover:border-[#C8553D] dark:hover:border-[#E9A23B] hover:text-[#C8553D] dark:hover:text-[#E9A23B] transition-all shadow-xs cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              {/* Social Channels with direct links */}
              <div className="flex items-center gap-2.5 sm:ml-auto">
                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="p-2.5 rounded-lg border border-[#E3D4BE] dark:border-[#263C5C] bg-[#FAF6EE] dark:bg-[#121F33] text-[#072B2E] dark:text-[#F3EBDD] hover:text-[#C8553D] dark:hover:text-[#E9A23B] transition-colors"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="p-2.5 rounded-lg border border-[#E3D4BE] dark:border-[#263C5C] bg-[#FAF6EE] dark:bg-[#121F33] text-[#072B2E] dark:text-[#F3EBDD] hover:text-[#C8553D] dark:hover:text-[#E9A23B] transition-colors"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  className="p-2.5 rounded-lg border border-[#E3D4BE] dark:border-[#263C5C] bg-[#FAF6EE] dark:bg-[#121F33] text-[#072B2E] dark:text-[#F3EBDD] hover:text-[#C8553D] dark:hover:text-[#E9A23B] transition-colors"
                  aria-label="Direct Email"
                  title={`Email ${portfolioData.personal.email}`}
                >
                  <Mail className="w-4 h-4" />
                </a>

                <a
                  href={`tel:${portfolioData.personal.phone.replace(/[^0-9+]/g, '')}`}
                  className="p-2.5 rounded-lg border border-[#E3D4BE] dark:border-[#263C5C] bg-[#FAF6EE] dark:bg-[#121F33] text-[#072B2E] dark:text-[#F3EBDD] hover:text-[#C8553D] dark:hover:text-[#E9A23B] transition-colors"
                  aria-label="Call Sameer"
                  title={`Call ${portfolioData.personal.phone}`}
                >
                  <Phone className="w-4 h-4" />
                </a>

                <a
                  href={portfolioData.personal.whatsapp}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="p-2.5 rounded-lg border border-[#E3D4BE] dark:border-[#263C5C] bg-[#FAF6EE] dark:bg-[#121F33] text-[#072B2E] dark:text-[#F3EBDD] hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
                  aria-label="Chat with Sameer on WhatsApp"
                  title={`WhatsApp ${portfolioData.personal.phone}`}
                >
                  <WhatsAppIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Animated Goa Sunset Over Waves Stamp & Illustration (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm aspect-4/3 sm:aspect-square p-4 rounded-2xl bg-[#FAF6EE] dark:bg-[#121F33] border-2 border-[#E3D4BE] dark:border-[#263C5C] shadow-lg rotate-1 hover:rotate-0 transition-transform duration-300">
              {/* Postmark cancellation mark top-right */}
              <div className="absolute -top-3 -right-3 z-20 w-24 h-24 rounded-full border-2 border-[#0E4D52]/60 dark:border-[#E9A23B]/60 p-1 bg-[#F6EFE3] dark:bg-[#0B1522] shadow-sm flex flex-col items-center justify-center text-center -rotate-12 pointer-events-none">
                <span className="text-[9px] font-mono tracking-widest uppercase font-bold text-[#0E4D52] dark:text-[#E9A23B]">
                  OLD GOA GPO
                </span>
                <span className="text-[8px] font-mono text-[#C8553D] font-bold">
                  OCT 2026
                </span>
                <div className="w-14 h-2 flex justify-between items-center opacity-70">
                  <span className="h-0.5 w-full bg-[#0E4D52] dark:bg-[#E9A23B]" />
                </div>
                <span className="text-[8px] font-mono text-[#4B6366] dark:text-[#A5B6CE]">
                  AIR MAIL
                </span>
              </div>

              {/* Handcrafted Animated Sun over Arabian Sea Waves SVG */}
              <div className="w-full h-full rounded-xl overflow-hidden relative bg-linear-to-b from-[#F9EBD7] via-[#F4E1C6] to-[#E3CEB1] dark:from-[#0E1E34] dark:via-[#132A4A] dark:to-[#17375E] flex flex-col justify-end p-4 border border-[#E3D4BE]/50 dark:border-[#263C5C]">
                {/* Lat/Long Compass Watermark */}
                <div className="absolute top-3 left-3 text-[10px] font-mono text-[#0E4D52]/60 dark:text-[#E9A23B]/60 flex items-center gap-1">
                  <Compass className="w-3 h-3" />
                  <span>MANDOVI ESTUARY</span>
                </div>

                {/* Animated Sun */}
                <motion.div
                  style={{ y: sunY, opacity: sunOpacity }}
                  className="absolute left-1/2 -translate-x-1/2 bottom-20 w-28 h-28 rounded-full bg-linear-to-t from-[#E9A23B] to-[#C8553D] shadow-xl flex items-center justify-center"
                >
                  <div className="w-20 h-20 rounded-full bg-linear-to-t from-[#F4BA61] to-[#E9A23B] opacity-90" />
                </motion.div>

                {/* Layered Animated Ocean Waves */}
                <motion.svg
                  style={{ x: waveOffset }}
                  viewBox="0 0 400 120"
                  className="w-[120%] -ml-[10%] relative z-10 text-[#166A70] dark:text-[#0E4D52] opacity-80"
                  fill="currentColor"
                >
                  <path d="M0,40 C80,10 140,70 220,30 C300,-10 350,60 400,20 L400,120 L0,120 Z" />
                </motion.svg>

                <svg
                  viewBox="0 0 400 120"
                  className="w-full relative z-10 -mt-10 text-[#0E4D52] dark:text-[#072B2E]"
                  fill="currentColor"
                >
                  <path d="M0,60 C70,30 150,80 230,45 C310,10 360,70 400,40 L400,120 L0,120 Z" />
                </svg>

                {/* Foreground Palm Silhouette Accent */}
                <div className="absolute bottom-2 left-4 z-20 text-[#072B2E] dark:text-[#E9A23B]/90">
                  <svg width="40" height="50" viewBox="0 0 40 50" fill="currentColor">
                    <path d="M18,50 Q19,25 22,10 Q28,15 38,12 Q27,20 22,25 Q32,32 30,42 Q23,28 18,50 Z" opacity="0.9" />
                    <path d="M18,50 Q16,28 8,14 Q18,18 20,24 Q10,26 4,36 Q15,30 18,50 Z" opacity="0.9" />
                  </svg>
                </div>

                <div className="relative z-20 text-right">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-[#FAF6EE] dark:text-[#E9A23B] font-semibold">
                    Goa · Coastal Sunset
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
