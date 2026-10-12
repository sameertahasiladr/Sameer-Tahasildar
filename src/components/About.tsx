import React from 'react';
import { portfolioData } from '../data/portfolio';
import { AzulejoDivider } from './AzulejoDivider';
import { Sparkles, MapPin, Layers } from 'lucide-react';
import { PostcardReveal } from './PostcardReveal';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Azulejo divider before section */}
        <AzulejoDivider variant="ocean" className="mb-14" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading and Editorial Monograph Title */}
          <PostcardReveal className="lg:col-span-5 space-y-4" tilt="subtle" delay={0.05}>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#C8553D] dark:text-[#E9A23B] font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About The Engineer</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#072B2E] dark:text-[#F3EBDD] leading-tight text-balance">
              {portfolioData.about.heading}
            </h2>

            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#4B6366] dark:text-[#A5B6CE]">
              <MapPin className="w-3.5 h-3.5 text-[#C8553D]" />
              <span>Native of Old Goa, Goa · India</span>
            </div>

            {/* Vintage Postmark Stamp Badge */}
            <div className="pt-6">
              <div className="w-44 p-3 rounded-lg border border-[#E3D4BE] dark:border-[#263C5C] bg-[#FAF6EE] dark:bg-[#121F33] text-center shadow-xs">
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#4B6366] dark:text-[#A5B6CE]">
                  Codebase Provenance
                </div>
                <div className="font-serif text-lg font-bold text-[#0E4D52] dark:text-[#E9A23B]">
                  Full Stack Craft
                </div>
                <div className="text-[10px] font-mono text-[#C8553D]">
                  Frontend · Backend · APIs
                </div>
              </div>
            </div>
          </PostcardReveal>

          {/* Right Column: Editorial Body & Verified Domains landing on table */}
          <PostcardReveal className="lg:col-span-7 space-y-6" tilt="right" delay={0.15}>
            <div className="p-8 rounded-2xl bg-[#FAF6EE] dark:bg-[#121F33] border border-[#E3D4BE] dark:border-[#263C5C] shadow-md relative">
              {/* Corner Postage Marks */}
              <div className="absolute top-3 right-3 text-[10px] font-mono text-[#0E4D52]/40 dark:text-[#E9A23B]/40 select-none">
                REF // ST-GOA-2026
              </div>

              <p className="text-base sm:text-lg text-[#072B2E] dark:text-[#F3EBDD] leading-relaxed font-normal">
                {portfolioData.about.body}
              </p>

              {/* Verified Domain Coverage without pill boxes (unboxed text with separators) */}
              <div className="mt-8 pt-6 border-t border-[#E3D4BE]/70 dark:border-[#263C5C]/70">
                <div className="flex items-center gap-2 mb-3 text-xs font-mono uppercase tracking-wider text-[#4B6366] dark:text-[#A5B6CE] font-semibold">
                  <Layers className="w-3.5 h-3.5 text-[#C8553D]" />
                  <span>Domain Applications</span>
                </div>

                <div className="flex flex-wrap items-center gap-y-2 text-sm text-[#072B2E] dark:text-[#F3EBDD] font-medium">
                  {portfolioData.about.domains.map((domain, index) => (
                    <React.Fragment key={domain}>
                      <span className="hover:text-[#C8553D] dark:hover:text-[#E9A23B] transition-colors">
                        {domain}
                      </span>
                      {index < portfolioData.about.domains.length - 1 && (
                        <span
                          aria-hidden="true"
                          className="mx-2.5 text-[#C8553D]/50 dark:text-[#E9A23B]/50 font-bold"
                        >
                          ·
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </PostcardReveal>
        </div>
      </div>
    </section>
  );
};
