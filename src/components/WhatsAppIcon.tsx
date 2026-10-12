import React from 'react';

interface WhatsAppIconProps {
  className?: string;
}

export const WhatsAppIcon: React.FC<WhatsAppIconProps> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* Clean WhatsApp outline */}
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    <path d="M9.5 9.5c.3-.3.6-.3.9 0l1 1c.2.2.2.5 0 .8l-.4.4c-.2.2-.2.5 0 .7 1 1.4 2 2.1 3.4 2.7.3.1.5 0 .7-.2l.4-.4c.3-.3.6-.3.8 0l1 1c.3.3.3.6 0 .9-.5.6-1.2 1-2 1-3 0-6.5-3.5-6.5-6.5 0-.8.4-1.5 1-2z" />
  </svg>
);
