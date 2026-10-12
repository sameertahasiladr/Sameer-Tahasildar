import React from 'react';
import { portfolioData } from '../data/portfolio';
import { ProjectPostcard } from './ProjectPostcard';
import { AzulejoDivider } from './AzulejoDivider';
import { Compass } from 'lucide-react';
import { PostcardReveal } from './PostcardReveal';

export const Projects: React.FC = () => {
  return (
    <section id="work" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        <AzulejoDivider variant="terracotta" className="mb-14" />

        {/* Section Header */}
        <PostcardReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14" tilt="none">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#C8553D] dark:text-[#E9A23B] font-semibold">
              <Compass className="w-3.5 h-3.5" />
              <span>Selected Works & Field Dispatches</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#072B2E] dark:text-[#F3EBDD]">
              Postcards from Production
            </h2>
            <p className="text-sm sm:text-base text-[#4B6366] dark:text-[#A5B6CE] max-w-xl">
              Physical postcard compositions dispatched from Old Goa. Hover any card to inspect
              franking stamps, production architecture, and live deployments.
            </p>
          </div>

          <div className="text-xs font-mono text-[#4B6366] dark:text-[#A5B6CE]">
            <span>SERIES: {portfolioData.projects.length.toString().padStart(2, '0')} VERIFIED ENTRIES</span>
          </div>
        </PostcardReveal>

        {/* Postcards Grid: Editorial Asymmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10">
          {portfolioData.projects.map((project, index) => (
            <div
              key={project.id}
              className={index === 0 ? 'md:col-span-2 lg:col-span-2' : ''}
            >
              <ProjectPostcard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
