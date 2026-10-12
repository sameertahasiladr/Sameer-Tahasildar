import React from 'react';
import { portfolioData } from '../data/portfolio';
import { AzulejoDivider } from './AzulejoDivider';
import { Train, MapPin, Calendar } from 'lucide-react';
import { PostcardReveal } from './PostcardReveal';

export const TrainJourney: React.FC = () => {
  return (
    <section id="journey" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        <AzulejoDivider variant="ocean" className="mb-14" />

        {/* Section Header */}
        <PostcardReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14" tilt="none">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#0E4D52] dark:text-[#E9A23B] font-semibold">
              <Train className="w-3.5 h-3.5 text-[#C8553D]" />
              <span>Konkan & Coastline Rail Route</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#072B2E] dark:text-[#F3EBDD]">
              Experience Train Journey
            </h2>
            <p className="text-sm sm:text-base text-[#4B6366] dark:text-[#A5B6CE] max-w-xl">
              Chronological professional trajectory rendered as a railway route line with station markers,
              from Verna to Chennai and currently Margao, Goa.
            </p>
          </div>

          <div className="text-xs font-mono text-[#4B6366] dark:text-[#A5B6CE] bg-[#FAF6EE] dark:bg-[#121F33] px-3.5 py-2 rounded-lg border border-[#E3D4BE] dark:border-[#263C5C]">
            <span>ROUTE: VNA → MAS → MAO (PRESENT)</span>
          </div>
        </PostcardReveal>

        {/* Train Line Route Canvas */}
        <div className="relative">
          {/* Continuous Railway Track Line */}
          <div
            className="absolute left-6 md:left-8 top-8 bottom-8 w-1 bg-repeating-linear-gradient"
            style={{
              backgroundImage:
                'repeating-linear-gradient(to bottom, #0E4D52 0, #0E4D52 10px, transparent 10px, transparent 16px)',
            }}
            aria-hidden="true"
          />

          <div className="space-y-12">
            {portfolioData.experiences.map((exp, index) => {
              const stationCodes: Record<string, string> = {
                risban: 'MAO',
                worley: 'MAS',
                'creative-capsule': 'VNA',
              };
              const stationCode = stationCodes[exp.id] || 'STN';

              return (
                <PostcardReveal
                  key={exp.id}
                  delay={index * 0.12}
                  tilt={index % 2 === 0 ? 'subtle' : 'right'}
                  className="relative pl-16 md:pl-20 group"
                >
                  {/* Station Marker Point on Track */}
                  <div
                    className={`absolute left-4 md:left-6 -translate-x-1/2 top-4 w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all ${
                      exp.current
                        ? 'bg-[#C8553D] border-[#FAF6EE] text-white shadow-md ring-4 ring-[#C8553D]/20'
                        : 'bg-[#FAF6EE] dark:bg-[#121F33] border-[#0E4D52] dark:border-[#E9A23B] text-[#0E4D52] dark:text-[#E9A23B]'
                    }`}
                  >
                    <span className="text-[10px] font-mono font-bold">
                      0{portfolioData.experiences.length - index}
                    </span>
                  </div>

                  {/* Station Board Card landing on route map */}
                  <div className="p-6 sm:p-8 rounded-2xl bg-[#FCF8F2] dark:bg-[#121F33] border border-[#E3D4BE] dark:border-[#263C5C] shadow-md hover:border-[#0E4D52] dark:hover:border-[#E9A23B] transition-all">
                    {/* Station Board Top Bar */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-[#E3D4BE]/60 dark:border-[#263C5C]">
                      <div className="flex items-center gap-3">
                        {/* Railway Station Code Plaque */}
                        <span className="px-2.5 py-1 rounded-sm bg-[#0E4D52] text-[#FAF6EE] font-mono text-xs font-bold tracking-widest">
                          {stationCode}
                        </span>
                        <div>
                          <div className="font-serif text-xl sm:text-2xl font-bold text-[#072B2E] dark:text-[#F3EBDD]">
                            {exp.station}
                          </div>
                          <div className="text-xs font-mono text-[#4B6366] dark:text-[#A5B6CE] flex items-center gap-1.5">
                            <MapPin className="w-3 h-3 text-[#C8553D]" />
                            <span>{exp.company} · {exp.location}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-[#072B2E] dark:text-[#F3EBDD] flex items-center gap-1.5 bg-[#FAF6EE] dark:bg-[#1A2C46] px-3 py-1 rounded-md border border-[#E3D4BE]/60 dark:border-[#263C5C]">
                          <Calendar className="w-3 h-3 text-[#E9A23B]" />
                          <span>{exp.period}</span>
                        </span>
                        {exp.current && (
                          <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#C8553D] text-white font-semibold">
                            Current Terminus
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Role Title */}
                    <h3 className="font-serif text-lg font-bold text-[#0E4D52] dark:text-[#E9A23B] mb-4">
                      {exp.role}
                    </h3>

                    {/* Bullet Points */}
                    <ul className="space-y-3 text-sm text-[#072B2E] dark:text-[#F3EBDD] leading-relaxed">
                      {exp.bulletPoints.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-3">
                          <span
                            aria-hidden="true"
                            className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C8553D] dark:bg-[#E9A23B] shrink-0"
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </PostcardReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
