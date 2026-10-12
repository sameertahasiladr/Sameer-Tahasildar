import React, { useEffect, useState } from 'react';
import { Command } from 'cmdk';
import {
  Compass,
  FileText,
  Mail,
  Moon,
  Sun,
  ExternalLink,
  Code2,
  Briefcase,
  GraduationCap,
  Sparkles,
  Copy,
  Check,
  Phone,
  Github,
} from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { WhatsAppIcon } from './WhatsAppIcon';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  isDark,
  onToggleTheme,
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open handled by parent or toggle
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopiedEmail(true);
    setTimeout(() => {
      setCopiedEmail(false);
      onClose();
    }, 1200);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(portfolioData.personal.phone);
    setCopiedPhone(true);
    setTimeout(() => {
      setCopiedPhone(false);
      onClose();
    }, 1200);
  };

  const handleNavigate = (href: string) => {
    onClose();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = portfolioData.personal.resumePath;
    link.download = 'Sameer_Tahasildar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/50 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl shadow-2xl rounded-xl overflow-hidden border border-[#E3D4BE] dark:border-[#263C5C] bg-[#FAF6EE] dark:bg-[#121F33] text-[#072B2E] dark:text-[#F3EBDD]"
        onClick={(e) => e.stopPropagation()}
      >
        <Command label="Command Menu" className="w-full">
          <div className="flex items-center px-4 border-b border-[#E3D4BE]/60 dark:border-[#263C5C]">
            <Compass className="w-4 h-4 mr-2 text-[#C8553D] dark:text-[#E9A23B]" />
            <Command.Input
              placeholder="Search sections, projects, or commands..."
              className="w-full py-4 bg-transparent outline-none text-sm placeholder:text-[#4B6366] dark:placeholder:text-[#A5B6CE]"
              autoFocus
            />
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#EFE4D2] dark:bg-[#1A2C46] text-[#4B6366] dark:text-[#A5B6CE]">
              ESC
            </span>
          </div>

          <Command.List className="max-h-80 overflow-y-auto p-2 scrollbar-thin">
            <Command.Empty className="py-6 text-center text-xs font-mono text-[#4B6366] dark:text-[#A5B6CE]">
              No matching destinations found.
            </Command.Empty>

            {/* Navigation Group */}
            <Command.Group heading="Navigation">
              <Command.Item
                onSelect={() => handleNavigate('#about')}
                className="flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg hover:bg-[#C8553D]/10 dark:hover:bg-[#E9A23B]/10 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#C8553D]" />
                <span>About Sameer</span>
                <span className="ml-auto text-xs font-mono text-[#4B6366] dark:text-[#A5B6CE]">#about</span>
              </Command.Item>
              <Command.Item
                onSelect={() => handleNavigate('#work')}
                className="flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg hover:bg-[#C8553D]/10 dark:hover:bg-[#E9A23B]/10 cursor-pointer"
              >
                <Code2 className="w-4 h-4 text-[#0E4D52] dark:text-[#E9A23B]" />
                <span>Postcard Projects ({portfolioData.projects.length} Selected Works)</span>
                <span className="ml-auto text-xs font-mono text-[#4B6366] dark:text-[#A5B6CE]">#work</span>
              </Command.Item>
              <Command.Item
                onSelect={() => handleNavigate('#skills')}
                className="flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg hover:bg-[#C8553D]/10 dark:hover:bg-[#E9A23B]/10 cursor-pointer"
              >
                <Compass className="w-4 h-4 text-[#E9A23B]" />
                <span>Skills Tide Chart</span>
                <span className="ml-auto text-xs font-mono text-[#4B6366] dark:text-[#A5B6CE]">#skills</span>
              </Command.Item>
              <Command.Item
                onSelect={() => handleNavigate('#journey')}
                className="flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg hover:bg-[#C8553D]/10 dark:hover:bg-[#E9A23B]/10 cursor-pointer"
              >
                <Briefcase className="w-4 h-4 text-[#0E4D52] dark:text-[#A5B6CE]" />
                <span>Experience Train Journey</span>
                <span className="ml-auto text-xs font-mono text-[#4B6366] dark:text-[#A5B6CE]">#journey</span>
              </Command.Item>
              <Command.Item
                onSelect={() => handleNavigate('#education')}
                className="flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg hover:bg-[#C8553D]/10 dark:hover:bg-[#E9A23B]/10 cursor-pointer"
              >
                <GraduationCap className="w-4 h-4 text-[#0E4D52] dark:text-[#E9A23B]" />
                <span>Education (Goa University)</span>
                <span className="ml-auto text-xs font-mono text-[#4B6366] dark:text-[#A5B6CE]">#education</span>
              </Command.Item>
              <Command.Item
                onSelect={() => handleNavigate('#contact')}
                className="flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg hover:bg-[#C8553D]/10 dark:hover:bg-[#E9A23B]/10 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-[#C8553D]" />
                <span>Postcard Dispatch (Contact)</span>
                <span className="ml-auto text-xs font-mono text-[#4B6366] dark:text-[#A5B6CE]">#contact</span>
              </Command.Item>
            </Command.Group>

            {/* Projects Group */}
            <Command.Group heading="Projects & Repositories">
              {portfolioData.projects.map((project) => (
                <Command.Item
                  key={project.id}
                  onSelect={() => {
                    const target = project.liveUrl || project.repoUrl;
                    if (target) {
                      window.open(target, '_blank', 'noopener,noreferrer');
                      onClose();
                    }
                  }}
                  className="flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg hover:bg-[#C8553D]/10 dark:hover:bg-[#E9A23B]/10 cursor-pointer"
                >
                  {project.liveUrl ? (
                    <ExternalLink className="w-4 h-4 text-[#0E4D52] dark:text-[#E9A23B]" />
                  ) : (
                    <Code2 className="w-4 h-4 text-[#C8553D] dark:text-[#E9A23B]" />
                  )}
                  <span>{project.title}</span>
                  <span className="ml-auto text-xs text-[#4B6366] dark:text-[#A5B6CE] truncate max-w-[160px]">
                    {project.liveUrl ? 'Live Demo' : 'GitHub Repo'}
                  </span>
                </Command.Item>
              ))}
            </Command.Group>

            {/* Quick Actions */}
            <Command.Group heading="Actions">
              <Command.Item
                onSelect={handleCopyEmail}
                className="flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg hover:bg-[#C8553D]/10 dark:hover:bg-[#E9A23B]/10 cursor-pointer"
              >
                {copiedEmail ? (
                  <Check className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Copy className="w-4 h-4 text-[#C8553D]" />
                )}
                <span>
                  {copiedEmail ? 'Email Copied!' : `Copy Email (${portfolioData.personal.email})`}
                </span>
              </Command.Item>
              <Command.Item
                onSelect={handleCopyPhone}
                className="flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg hover:bg-[#C8553D]/10 dark:hover:bg-[#E9A23B]/10 cursor-pointer"
              >
                {copiedPhone ? (
                  <Check className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Phone className="w-4 h-4 text-[#E9A23B]" />
                )}
                <span>
                  {copiedPhone ? 'Phone Copied!' : `Copy Mobile (${portfolioData.personal.phone})`}
                </span>
              </Command.Item>
              <Command.Item
                onSelect={() => {
                  window.location.href = `tel:${portfolioData.personal.phone.replace(/[^0-9+]/g, '')}`;
                  onClose();
                }}
                className="flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg hover:bg-[#C8553D]/10 dark:hover:bg-[#E9A23B]/10 cursor-pointer"
              >
                <Phone className="w-4 h-4 text-[#C8553D]" />
                <span>Call Sameer ({portfolioData.personal.phone})</span>
              </Command.Item>
              <Command.Item
                onSelect={() => {
                  window.open(portfolioData.personal.whatsapp, '_blank', 'noopener,noreferrer');
                  onClose();
                }}
                className="flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg hover:bg-emerald-500/10 dark:hover:bg-emerald-400/10 cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Chat on WhatsApp ({portfolioData.personal.phone})</span>
              </Command.Item>
              <Command.Item
                onSelect={() => {
                  window.open(portfolioData.personal.github, '_blank', 'noopener,noreferrer');
                  onClose();
                }}
                className="flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg hover:bg-[#C8553D]/10 dark:hover:bg-[#E9A23B]/10 cursor-pointer"
              >
                <Github className="w-4 h-4 text-[#0E4D52] dark:text-[#E9A23B]" />
                <span>Open GitHub Profile (sameertahasiladr)</span>
              </Command.Item>
              <Command.Item
                onSelect={handleDownloadResume}
                className="flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg hover:bg-[#C8553D]/10 dark:hover:bg-[#E9A23B]/10 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-[#0E4D52] dark:text-[#E9A23B]" />
                <span>Download Resume (PDF)</span>
              </Command.Item>
              <Command.Item
                onSelect={() => {
                  onToggleTheme();
                  onClose();
                }}
                className="flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg hover:bg-[#C8553D]/10 dark:hover:bg-[#E9A23B]/10 cursor-pointer"
              >
                {isDark ? (
                  <>
                    <Sun className="w-4 h-4 text-[#E9A23B]" />
                    <span>Switch to Sunlit Sand Theme</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-4 h-4 text-[#0E4D52]" />
                    <span>Switch to Night in Goa Theme</span>
                  </>
                )}
              </Command.Item>
            </Command.Group>
          </Command.List>

          <div className="px-4 py-2 bg-[#EFE4D2]/40 dark:bg-[#1A2C46]/40 border-t border-[#E3D4BE]/60 dark:border-[#263C5C] flex items-center justify-between text-[11px] font-mono text-[#4B6366] dark:text-[#A5B6CE]">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>ESC Close</span>
          </div>
        </Command>
      </div>
    </div>
  );
};
