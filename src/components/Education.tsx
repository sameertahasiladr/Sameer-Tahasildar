import React from 'react';
import { portfolioData } from '../data/portfolio';
import { AzulejoDivider } from './AzulejoDivider';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';
import { PostcardReveal } from './PostcardReveal';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <AzulejoDivider variant="gold" className="mb-14" />

        {/* Section Header */}
        <PostcardReveal className="space-y-3 mb-12" tilt="none">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#E9A23B] dark:text-[#E9A23B] font-semibold">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Credentials & Alma Mater</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#072B2E] dark:text-[#F3EBDD]">
            Goa University Degrees
          </h2>
          <p className="text-sm sm:text-base text-[#4B6366] dark:text-[#A5B6CE] max-w-xl">
            Formal foundations in computer science and advanced web information technology systems.
          </p>
        </PostcardReveal>

        {/* Grid of 2 degrees landing on table */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.education.map((item, idx) => (
            <PostcardReveal
              key={item.id}
              delay={idx * 0.14}
              tilt={idx === 0 ? 'subtle' : 'right'}
            >
              <div className="p-7 sm:p-8 rounded-2xl bg-[#FCF8F2] dark:bg-[#121F33] border border-[#E3D4BE] dark:border-[#263C5C] shadow-md relative flex flex-col justify-between hover:border-[#0E4D52] dark:hover:border-[#E9A23B] transition-colors h-full">
                {/* University Seal Watermark Badge */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full border-2 border-dashed border-[#0E4D52]/40 dark:border-[#E9A23B]/40 flex items-center justify-center bg-[#FAF6EE] dark:bg-[#1A2C46]">
                    <Award className="w-6 h-6 text-[#C8553D] dark:text-[#E9A23B]" />
                  </div>
                  <span className="text-xs font-mono text-[#4B6366] dark:text-[#A5B6CE] flex items-center gap-1.5 bg-[#FAF6EE] dark:bg-[#1A2C46] px-3 py-1 rounded-md border border-[#E3D4BE]/60 dark:border-[#263C5C]">
                    <Calendar className="w-3 h-3 text-[#E9A23B]" />
                    <span>{item.period}</span>
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#072B2E] dark:text-[#F3EBDD] leading-snug">
                    {item.degree}
                  </h3>
                  <div className="text-sm font-medium text-[#166A70] dark:text-[#A5B6CE] flex items-center gap-2">
                    <span>{item.institution}</span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1 text-xs font-mono text-[#4B6366] dark:text-[#A5B6CE]">
                      <MapPin className="w-3 h-3 text-[#C8553D]" />
                      {item.location}
                    </span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E3D4BE]/60 dark:border-[#263C5C] flex items-center justify-between text-[11px] font-mono text-[#4B6366] dark:text-[#A5B6CE]">
                  <span>RECORD ID: GU-CS-{idx === 0 ? 'MSCIT' : 'BCA'}</span>
                  <span className="text-[#0E4D52] dark:text-[#E9A23B] font-semibold">VERIFIED</span>
                </div>
              </div>
            </PostcardReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
