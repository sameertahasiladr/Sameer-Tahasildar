/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { TideChart } from './components/TideChart';
import { TrainJourney } from './components/TrainJourney';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CommandPalette } from './components/CommandPalette';
import { CustomCursor } from './components/CustomCursor';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('goa-portfolio-theme');
      if (saved) return saved === 'dark';
    }
    return false; // Default to light warm cream paper as requested
  });

  const [isCommandOpen, setIsCommandOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
      document.body.classList.add('dark');
      document.body.setAttribute('data-theme', 'dark');
      localStorage.setItem('goa-portfolio-theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
      document.body.classList.remove('dark');
      document.body.setAttribute('data-theme', 'light');
      localStorage.setItem('goa-portfolio-theme', 'light');
    }
  }, [isDark]);

  const handleToggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div
      data-theme={isDark ? 'dark' : 'light'}
      className={`min-h-screen ${
        isDark ? 'dark bg-[#0B1522] text-[#F3EBDD]' : 'bg-[#F6EFE3] text-[#072B2E]'
      } paper-grain relative transition-colors duration-300`}
    >
      {/* Nautical Compass Custom Cursor (desktop only) */}
      <CustomCursor />

      {/* Top 3-Zone Navigation */}
      <Navbar
        isDark={isDark}
        onToggleTheme={handleToggleTheme}
        onOpenCommand={() => setIsCommandOpen(true)}
      />

      {/* Main Single-Page Portfolio Flow */}
      <main id="main-content">
        <Hero />
        <About />
        <Projects />
        <TideChart />
        <TrainJourney />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Cmd+K Command Palette */}
      <CommandPalette
        isOpen={isCommandOpen}
        onClose={() => setIsCommandOpen(false)}
        isDark={isDark}
        onToggleTheme={handleToggleTheme}
      />
    </div>
  );
}
