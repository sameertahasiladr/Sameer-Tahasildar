import React, { useState } from 'react';
import { portfolioData, SkillGroup } from '../data/portfolio';
import { Waves, Compass, Info } from 'lucide-react';
import { AzulejoDivider } from './AzulejoDivider';
import { PostcardReveal } from './PostcardReveal';

export const TideChart: React.FC = () => {
  const [activeWaveId, setActiveWaveId] = useState<string | null>(null);

  const activeWave =
    portfolioData.skillWaves.find((w) => w.id === activeWaveId) || null;

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        <AzulejoDivider variant="gold" className="mb-14" />

        {/* Section Header */}
        <PostcardReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12" tilt="none">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#E9A23B] dark:text-[#E9A23B] font-semibold">
              <Waves className="w-3.5 h-3.5" />
              <span>Hydrographic Chart of Competencies</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#072B2E] dark:text-[#F3EBDD]">
              Skills Tide Chart
            </h2>
            <p className="text-sm sm:text-base text-[#4B6366] dark:text-[#A5B6CE] max-w-xl">
              Modeled after the Mandovi River and Arabian Sea hydrographic charts.
              Undulating skill waves grouped by architectural domain instead of generic progress bars.
            </p>
          </div>

          {/* Tide Gauge Legend */}
          <div className="flex items-center gap-4 text-xs font-mono text-[#4B6366] dark:text-[#A5B6CE] bg-[#FAF6EE] dark:bg-[#121F33] px-4 py-2.5 rounded-lg border border-[#E3D4BE] dark:border-[#263C5C]">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-1 bg-[#C8553D] rounded-full" />
              <span>High Crest</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-1 bg-[#E9A23B] rounded-full" />
              <span>Mid Stream</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-1 bg-[#0E4D52] dark:bg-[#166A70] rounded-full" />
              <span>Deep Baseline</span>
            </div>
          </div>
        </PostcardReveal>

        {/* Interactive Tide Wave SVG Graphic */}
        <PostcardReveal tilt="subtle" delay={0.1}>
          <div className="relative p-6 sm:p-8 rounded-2xl bg-[#FAF6EE] dark:bg-[#121F33] border border-[#E3D4BE] dark:border-[#263C5C] shadow-md overflow-hidden">
            {/* Chart Header Meta */}
            <div className="flex items-center justify-between pb-4 border-b border-[#E3D4BE]/60 dark:border-[#263C5C] mb-6 text-xs font-mono text-[#4B6366] dark:text-[#A5B6CE]">
              <div className="flex items-center gap-2">
                <Compass className="w-3.5 h-3.5 text-[#0E4D52] dark:text-[#E9A23B]" />
                <span>STATION: OLD GOA (15°30'N, 73°54'E)</span>
              </div>
              <span>DATUM: MEAN SEA LEVEL + 2.8M</span>
            </div>

            {/* The Wave Graph SVG */}
            <div className="w-full h-48 sm:h-64 relative mb-8">
              <svg
                viewBox="0 0 1000 240"
                preserveAspectRatio="none"
                className="w-full h-full overflow-visible"
                aria-label="Interactive skills tide wave graph"
              >
                <defs>
                  <linearGradient id="waveGradTeal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0E4D52" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#0E4D52" stopOpacity="0.05" />
                  </linearGradient>
                  <linearGradient id="waveGradTerracotta" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#C8553D" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#C8553D" stopOpacity="0.05" />
                  </linearGradient>
                  <linearGradient id="waveGradGold" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#E9A23B" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#E9A23B" stopOpacity="0.05" />
                  </linearGradient>
                </defs>

                {/* Horizontal Tide Grids */}
                <line x1="0" y1="40" x2="1000" y2="40" stroke="currentColor" strokeOpacity="0.1" strokeDasharray="4 4" />
                <line x1="0" y1="100" x2="1000" y2="100" stroke="currentColor" strokeOpacity="0.1" strokeDasharray="4 4" />
                <line x1="0" y1="160" x2="1000" y2="160" stroke="currentColor" strokeOpacity="0.1" strokeDasharray="4 4" />
                <line x1="0" y1="220" x2="1000" y2="220" stroke="currentColor" strokeOpacity="0.15" />

                {/* Vertical Time/Hour Markers */}
                {[100, 250, 400, 550, 700, 850].map((x) => (
                  <line
                    key={x}
                    x1={x}
                    y1="20"
                    x2={x}
                    y2="220"
                    stroke="currentColor"
                    strokeOpacity="0.06"
                  />
                ))}

                {/* Wave 1: Core Foundation & Languages (Teal) */}
                <path
                  d="M 0 170 Q 120 140 250 170 T 500 160 T 750 175 T 1000 165 L 1000 240 L 0 240 Z"
                  fill="url(#waveGradTeal)"
                  className="transition-opacity duration-300"
                  opacity={activeWaveId === 'languages' || !activeWaveId ? 0.9 : 0.25}
                />
                <path
                  d="M 0 170 Q 120 140 250 170 T 500 160 T 750 175 T 1000 165"
                  fill="none"
                  stroke="#0E4D52"
                  strokeWidth="2.5"
                  className="transition-all duration-300"
                />

                {/* Wave 2: Frontend & Interface (Terracotta Crest) */}
                <path
                  d="M 0 130 Q 140 60 280 120 T 560 90 T 840 130 T 1000 100 L 1000 240 L 0 240 Z"
                  fill="url(#waveGradTerracotta)"
                  className="transition-opacity duration-300"
                  opacity={activeWaveId === 'frontend' || !activeWaveId ? 0.85 : 0.25}
                />
                <path
                  d="M 0 130 Q 140 60 280 120 T 560 90 T 840 130 T 1000 100"
                  fill="none"
                  stroke="#C8553D"
                  strokeWidth="2.5"
                  className="transition-all duration-300"
                />

                {/* Wave 3: Backend & APIs (Sunset Gold High Crest) */}
                <path
                  d="M 0 90 Q 160 40 320 85 T 640 60 T 900 110 T 1000 70 L 1000 240 L 0 240 Z"
                  fill="url(#waveGradGold)"
                  className="transition-opacity duration-300"
                  opacity={activeWaveId === 'backend' || !activeWaveId ? 0.8 : 0.25}
                />
                <path
                  d="M 0 90 Q 160 40 320 85 T 640 60 T 900 110 T 1000 70"
                  fill="none"
                  stroke="#E9A23B"
                  strokeWidth="2.5"
                  className="transition-all duration-300"
                />

                {/* Crest Coordinate Labels on Wave peaks */}
                <text x="280" y="55" fill="#C8553D" fontSize="11" fontFamily="JetBrains Mono" fontWeight="600">
                  ▲ FRONTEND CREST
                </text>
                <text x="640" y="45" fill="#E9A23B" fontSize="11" fontFamily="JetBrains Mono" fontWeight="600">
                  ▲ BACKEND STREAM
                </text>
                <text x="120" y="130" fill="#0E4D52" fontSize="11" fontFamily="JetBrains Mono" fontWeight="600">
                  ▲ CORE LANGUAGES
                </text>
              </svg>
            </div>

            {/* Interactive Wave Selectors / Skill Groups */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4 border-t border-[#E3D4BE]/60 dark:border-[#263C5C]">
              {portfolioData.skillWaves.map((group) => {
                const isSelected = activeWaveId === group.id;

                return (
                  <div
                    key={group.id}
                    onClick={() =>
                      setActiveWaveId(isSelected ? null : group.id)
                    }
                    className={`p-4 rounded-xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'border-[#C8553D] bg-[#F6EFE3] dark:bg-[#1A2C46] shadow-sm'
                        : 'border-[#E3D4BE]/70 dark:border-[#263C5C]/70 hover:border-[#0E4D52] dark:hover:border-[#E9A23B]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-serif font-bold text-base text-[#072B2E] dark:text-[#F3EBDD]">
                        {group.name}
                      </span>
                      <span className="text-[11px] font-mono text-[#C8553D] dark:text-[#E9A23B]">
                        {group.depthLabel}
                      </span>
                    </div>

                    {/* Skills unboxed with typographic separators */}
                    <div className="text-xs text-[#4B6366] dark:text-[#A5B6CE] leading-relaxed flex flex-wrap items-center">
                      {group.skills.map((skill, idx) => (
                        <React.Fragment key={skill}>
                          <span className="text-[#072B2E] dark:text-[#F3EBDD] font-medium">
                            {skill}
                          </span>
                          {idx < group.skills.length - 1 && (
                            <span
                              aria-hidden="true"
                              className="mx-1.5 text-[#E3D4BE] dark:text-[#263C5C] font-bold"
                            >
                              ·
                            </span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Chart Footnote */}
            <div className="mt-6 flex items-center gap-2 text-xs font-mono text-[#4B6366] dark:text-[#A5B6CE] pt-2">
              <Info className="w-3.5 h-3.5 text-[#C8553D]" />
              <span>Click any wave card to filter the tidal harmonics. Clean, verified technical proficiencies.</span>
            </div>
          </div>
        </PostcardReveal>
      </div>
    </section>
  );
};
