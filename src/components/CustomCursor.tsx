import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHoveringLink, setIsHoveringLink] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Disable on touch devices or fine pointer absent
    if (window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('a, button, [role="button"], input, textarea, select, [tabindex="0"]');
      setIsHoveringLink(Boolean(interactive));
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) {
    return null;
  }

  return (
    <div
      className="pointer-events-none fixed z-50 transition-transform duration-75 ease-out select-none"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        left: 0,
        top: 0,
      }}
      aria-hidden="true"
    >
      {isHoveringLink ? (
        // Compass needle cursor over links
        <div className="-translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-[#FAF6EE] dark:bg-[#121F33] border border-[#0E4D52] dark:border-[#E9A23B] shadow-lg animate-spin-slow">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            className="text-[#0E4D52] dark:text-[#E9A23B]"
          >
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 2" />
            {/* North pointer red/terracotta */}
            <polygon points="12,4 15,12 12,10 9,12" fill="#C8553D" />
            {/* South pointer teal/gold */}
            <polygon points="12,20 15,12 12,14 9,12" fill="#0E4D52" className="dark:fill-[#E9A23B]" />
            <circle cx="12" cy="12" r="1.5" fill="#18282B" className="dark:fill-white" />
          </svg>
        </div>
      ) : (
        // Subtle dot cursor in idle state
        <div className="-translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#0E4D52]/70 dark:bg-[#E9A23B]/80 transition-all duration-150" />
      )}
    </div>
  );
};
