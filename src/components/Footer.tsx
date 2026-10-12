import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { WhatsAppIcon } from './WhatsAppIcon';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-[#E3D4BE] dark:border-[#263C5C] bg-[#FAF6EE] dark:bg-[#0B1522] py-12 transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#E3D4BE]/60 dark:border-[#263C5C]">
          {/* Brand Wordmark & Location & Discrete formatted Phone */}
          <div className="space-y-1 text-center md:text-left">
            <span className="font-serif text-xl font-bold tracking-tight text-[#072B2E] dark:text-[#F3EBDD]">
              {portfolioData.personal.name}
            </span>
            <p className="text-xs font-mono text-[#4B6366] dark:text-[#A5B6CE]">
              <span>Full Stack Developer · Old Goa, India (15.50° N, 73.91° E)</span>
              <span className="mx-2 hidden sm:inline" aria-hidden="true">·</span>
              <a
                href={`tel:${portfolioData.personal.phone.replace(/[^0-9+]/g, '')}`}
                className="hover:text-[#C8553D] dark:hover:text-[#E9A23B] transition-colors block sm:inline mt-1 sm:mt-0"
                aria-label={`Call ${portfolioData.personal.phone}`}
              >
                {portfolioData.personal.phone}
              </a>
            </p>
          </div>

          {/* Social Links including Phone & WhatsApp */}
          <div className="flex items-center gap-2.5">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noreferrer noopener"
              className="p-2 rounded-lg text-[#072B2E] dark:text-[#F3EBDD] hover:text-[#C8553D] dark:hover:text-[#E9A23B] transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="p-2 rounded-lg text-[#072B2E] dark:text-[#F3EBDD] hover:text-[#C8553D] dark:hover:text-[#E9A23B] transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="p-2 rounded-lg text-[#072B2E] dark:text-[#F3EBDD] hover:text-[#C8553D] dark:hover:text-[#E9A23B] transition-colors"
              aria-label="Email Sameer"
              title={`Email ${portfolioData.personal.email}`}
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={`tel:${portfolioData.personal.phone.replace(/[^0-9+]/g, '')}`}
              className="p-2 rounded-lg text-[#072B2E] dark:text-[#F3EBDD] hover:text-[#C8553D] dark:hover:text-[#E9A23B] transition-colors"
              aria-label="Call Sameer"
              title={`Call ${portfolioData.personal.phone}`}
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.personal.whatsapp}
              target="_blank"
              rel="noreferrer noopener"
              className="p-2 rounded-lg text-[#072B2E] dark:text-[#F3EBDD] hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
              aria-label="Chat with Sameer on WhatsApp"
              title="Chat on WhatsApp (+91-9096265188)"
            >
              <WhatsAppIcon className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              type="button"
              className="ml-3 p-2 rounded-lg border border-[#E3D4BE] dark:border-[#263C5C] text-[#072B2E] dark:text-[#F3EBDD] hover:border-[#C8553D] hover:text-[#C8553D] transition-colors cursor-pointer"
              aria-label="Return to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom row: "Made in Goa" with palm-tree SVG and current year */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#4B6366] dark:text-[#A5B6CE]">
          <div className="flex items-center gap-2">
            <span>Made in Goa</span>
            {/* Small Palm Tree SVG */}
            <svg
              width="18"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0E4D52"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[#0E4D52] dark:text-[#E9A23B]"
              aria-hidden="true"
            >
              <path d="M12 22v-9" stroke="#C8553D" strokeWidth="2.5" />
              <path d="M12 13c0-3-2-5-7-5 0 0 3-1 6-1" stroke="#0E4D52" className="dark:stroke-[#E9A23B]" />
              <path d="M12 13c0-3 2-5 7-5 0 0-3-1-6-1" stroke="#0E4D52" className="dark:stroke-[#E9A23B]" />
              <path d="M12 9c-1-3-4-5-8-4 1 1 2 2 4 3" stroke="#0E4D52" className="dark:stroke-[#E9A23B]" />
              <path d="M12 9c1-3 4-5 8-4-1 1-2 2-4 3" stroke="#0E4D52" className="dark:stroke-[#E9A23B]" />
            </svg>
            <span>· {currentYear}</span>
          </div>

          <div>
            <span>© {currentYear} Sameer Tahasildar. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
