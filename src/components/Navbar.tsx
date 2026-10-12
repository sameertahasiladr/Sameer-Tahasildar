import React, { useState } from 'react';
import { Sun, Moon, Command as CommandIcon, Menu, X } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
  onOpenCommand: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isDark,
  onToggleTheme,
  onOpenCommand,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#F6EFE3]/90 dark:bg-[#0B1522]/90 backdrop-blur-md border-b border-[#E3D4BE]/70 dark:border-[#263C5C]/70 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element in display serif) */}
        <a
          href="#top"
          className="font-serif text-xl font-bold tracking-tight text-[#072B2E] dark:text-[#F3EBDD] hover:text-[#C8553D] dark:hover:text-[#E9A23B] transition-colors whitespace-nowrap shrink-0"
        >
          {portfolioData.personal.name}
        </a>

        {/* Zone 2: Clean 4–5 single-line text links with subtle hover underlines */}
        <nav
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#4B6366] dark:text-[#A5B6CE]"
          aria-label="Main Navigation"
        >
          <a
            href="#about"
            className="hover:text-[#0E4D52] dark:hover:text-[#F3EBDD] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-[#C8553D]"
          >
            About
          </a>
          <a
            href="#work"
            className="hover:text-[#0E4D52] dark:hover:text-[#F3EBDD] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-[#C8553D]"
          >
            Postcards
          </a>
          <a
            href="#skills"
            className="hover:text-[#0E4D52] dark:hover:text-[#F3EBDD] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-[#C8553D]"
          >
            Tide Chart
          </a>
          <a
            href="#journey"
            className="hover:text-[#0E4D52] dark:hover:text-[#F3EBDD] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-[#C8553D]"
          >
            Route Map
          </a>
          <a
            href="#contact"
            className="hover:text-[#0E4D52] dark:hover:text-[#F3EBDD] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-[#C8553D]"
          >
            Dispatch
          </a>
        </nav>

        {/* Zone 3: Primary Action & Controls (⌘K Trigger + Theme Toggle) */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Cmd+K trigger button */}
          <button
            onClick={onOpenCommand}
            type="button"
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-mono rounded-lg bg-[#FAF6EE] dark:bg-[#121F33] text-[#0E4D52] dark:text-[#A5B6CE] border border-[#E3D4BE] dark:border-[#263C5C] hover:border-[#C8553D] dark:hover:border-[#E9A23B] transition-all whitespace-nowrap cursor-pointer shadow-xs"
            aria-label="Open command palette"
          >
            <CommandIcon className="w-3.5 h-3.5 text-[#C8553D] dark:text-[#E9A23B]" />
            <span className="hidden sm:inline">Press</span>
            <kbd className="px-1.5 py-0.5 rounded bg-[#EFE4D2] dark:bg-[#1A2C46] text-[10px] font-semibold text-[#072B2E] dark:text-[#F3EBDD]">
              ⌘K
            </kbd>
          </button>

          {/* Theme sun/moon toggle */}
          <button
            onClick={onToggleTheme}
            type="button"
            className="p-2 rounded-lg bg-[#FAF6EE] dark:bg-[#121F33] text-[#0E4D52] dark:text-[#E9A23B] border border-[#E3D4BE] dark:border-[#263C5C] hover:text-[#C8553D] transition-colors cursor-pointer"
            aria-label={isDark ? 'Switch to Sunlit Sand mode' : 'Switch to Night in Goa mode'}
            title={isDark ? 'Switch to Sunlit Sand' : 'Switch to Night in Goa'}
          >
            {isDark ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>

          {/* Mobile menu toggle button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="md:hidden p-2 rounded-lg text-[#072B2E] dark:text-[#F3EBDD] hover:bg-[#FAF6EE] dark:hover:bg-[#121F33]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E3D4BE] dark:border-[#263C5C] bg-[#FAF6EE] dark:bg-[#121F33] px-6 py-4 flex flex-col gap-3">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium py-1 text-[#072B2E] dark:text-[#F3EBDD]"
          >
            About Sameer
          </a>
          <a
            href="#work"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium py-1 text-[#072B2E] dark:text-[#F3EBDD]"
          >
            Postcard Projects
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium py-1 text-[#072B2E] dark:text-[#F3EBDD]"
          >
            Skills Tide Chart
          </a>
          <a
            href="#journey"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium py-1 text-[#072B2E] dark:text-[#F3EBDD]"
          >
            Experience Route Map
          </a>
          <a
            href="#education"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium py-1 text-[#072B2E] dark:text-[#F3EBDD]"
          >
            Education
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium py-1 text-[#C8553D] dark:text-[#E9A23B] font-semibold"
          >
            Dispatch Postcard (Contact)
          </a>
          <button
            onClick={() => {
              onToggleTheme();
              setMobileMenuOpen(false);
            }}
            type="button"
            className="flex items-center justify-between text-sm font-medium py-2 px-3 rounded-lg bg-[#FAF6EE] dark:bg-[#1A2C46] border border-[#E3D4BE] dark:border-[#263C5C] text-[#072B2E] dark:text-[#F3EBDD] cursor-pointer"
          >
            <span>{isDark ? 'Switch to Sunlit Sand (Light)' : 'Switch to Night in Goa (Dark)'}</span>
            {isDark ? <Sun className="w-4 h-4 text-[#E9A23B]" /> : <Moon className="w-4 h-4 text-[#0E4D52]" />}
          </button>
        </div>
      )}
    </header>
  );
};
