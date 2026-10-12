import React from 'react';

interface AzulejoDividerProps {
  className?: string;
  variant?: 'ocean' | 'terracotta' | 'gold';
}

export const AzulejoDivider: React.FC<AzulejoDividerProps> = ({
  className = '',
  variant = 'ocean',
}) => {
  const strokeColor =
    variant === 'terracotta'
      ? '#C8553D'
      : variant === 'gold'
      ? '#E9A23B'
      : '#0E4D52';

  return (
    <div
      className={`w-full overflow-hidden flex items-center justify-center opacity-70 select-none ${className}`}
      aria-hidden="true"
    >
      <svg
        width="100%"
        height="24"
        viewBox="0 0 1200 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full text-current"
      >
        <pattern
          id={`azulejo-pattern-${variant}`}
          width="48"
          height="24"
          patternUnits="userSpaceOnUse"
        >
          {/* Central diamond */}
          <rect
            x="24"
            y="12"
            width="8"
            height="8"
            transform="rotate(45 24 12)"
            fill="none"
            stroke={strokeColor}
            strokeWidth="1.2"
          />
          {/* Cross lines */}
          <line
            x1="0"
            y1="12"
            x2="48"
            y2="12"
            stroke={strokeColor}
            strokeWidth="0.8"
            strokeDasharray="2 2"
          />
          {/* Floral corner petals */}
          <circle cx="0" cy="12" r="3" fill="none" stroke={strokeColor} strokeWidth="1" />
          <circle cx="48" cy="12" r="3" fill="none" stroke={strokeColor} strokeWidth="1" />
          <path
            d="M24 0 L24 6 M24 18 L24 24"
            stroke={strokeColor}
            strokeWidth="1"
          />
          <path
            d="M12 6 Q24 12 36 6 M12 18 Q24 12 36 18"
            fill="none"
            stroke={strokeColor}
            strokeWidth="0.8"
          />
        </pattern>
        <rect
          width="1200"
          height="24"
          fill={`url(#azulejo-pattern-${variant})`}
        />
      </svg>
    </div>
  );
};
