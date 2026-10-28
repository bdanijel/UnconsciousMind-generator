import React from 'react';

interface IconProps {
  size?: number;
  className?: string;
}

// Inkpot with Quill (Mastionica sa perom)
export const InkpotIcon: React.FC<IconProps> = ({ size = 20, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Inkpot base */}
    <path d="M6 18h12v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2z" fill="currentColor" fillOpacity="0.2" />
    <path d="M7 11h10l1 7H6l1-7z" />
    <path d="M9 8h6v3H9z" />
    <line x1="8" y1="8" x2="16" y2="8" />
    {/* Quill Feather coming out */}
    <path d="M14 8C14 4 18 2 21 2c-1 3-3 5-7 6" />
    <line x1="14" y1="8" x2="18" y2="4" />
  </svg>
);

// Viennese Coffee Cup (Šoljica Bečke Kafe)
export const CoffeeCupIcon: React.FC<IconProps> = ({ size = 20, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Cup */}
    <path d="M17 8h1a3 3 0 0 1 0 6h-1" />
    <path d="M3 8h14v7a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z" fill="currentColor" fillOpacity="0.15" />
    <line x1="2" y1="21" x2="18" y2="21" />
    {/* Steam */}
    <path d="M6 3c0 1.5 1 2 1 3" />
    <path d="M10 2c0 1.5 1 2 1 3" />
    <path d="M14 3c0 1.5 1 2 1 3" />
  </svg>
);

// Heart-Shaped Box Marker (Kutija u obliku srca)
export const HeartBoxIcon: React.FC<IconProps> = ({ size = 20, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" fill="currentColor" fillOpacity="0.2" />
    <path d="M12 5v14" strokeDasharray="2 2" />
  </svg>
);

// Insight Dial (Bročanik Uvida sa 3 prstena)
export const InsightDialIcon: React.FC<IconProps> = ({ size = 20, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity="0.2" />
    <line x1="12" y1="3" x2="12" y2="21" />
    <line x1="4.2" y1="16.5" x2="19.8" y2="7.5" />
    <line x1="4.2" y1="7.5" x2="19.8" y2="16.5" />
  </svg>
);

// Sigmund Freud Figure / Reputation Icon
export const FreudFigureIcon: React.FC<IconProps> = ({ size = 20, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 3a4 4 0 0 1 4 4v1a4 4 0 0 1-8 0V7a4 4 0 0 1 4-4z" />
    <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
    {/* Glasses line */}
    <circle cx="10" cy="7" r="1.5" />
    <circle cx="14" cy="7" r="1.5" />
    <line x1="11.5" y1="7" x2="12.5" y2="7" />
  </svg>
);

// Published Treatise Icon (Objavljeni naučni rad)
export const TreatiseIcon: React.FC<IconProps> = ({ size = 20, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" fill="currentColor" fillOpacity="0.15" />
    <line x1="9" y1="7" x2="16" y2="7" />
    <line x1="9" y1="11" x2="14" y2="11" />
  </svg>
);

// Translucent Grief Layer Icon (Sloj Tuge)
export const GriefLayerIcon: React.FC<IconProps> = ({ size = 20, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="3" y="3" width="18" height="18" rx="2" strokeDasharray="3 3" />
    <path d="M8 12a4 4 0 0 1 8 0" />
    <circle cx="9" cy="9" r="1" fill="currentColor" />
    <circle cx="15" cy="9" r="1" fill="currentColor" />
  </svg>
);

// Bright Idea Token (Svetla Ideja)
export const BrightIdeaIcon: React.FC<IconProps> = ({ size = 20, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1.3.5 2.6 1.5 3.5.8.7 1.3 1.5 1.5 2.5" />
    <path d="M9 18h6" />
    <path d="M10 22h4" />
    <path d="M12 2v2" />
  </svg>
);
