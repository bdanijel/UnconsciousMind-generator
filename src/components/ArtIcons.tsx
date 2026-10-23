import React from 'react';

export const InkpotIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Inkpot base */}
    <path d="M5 19H19L17 10H7L5 19Z" fill="currentColor" fillOpacity="0.15" />
    <path d="M7 10V7C7 5.89543 7.89543 5 9 5H15C16.1046 5 17 5.89543 17 7V10" />
    <path d="M5 19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19" />
    <path d="M10 5V3H14V5" />
    {/* Quill standing in inkpot */}
    <path d="M12 9L18 2" strokeDasharray="1 1" />
    <path d="M18 2C19.5 3 20 5 18 7L13.5 10" />
  </svg>
);

export const CoffeeCupIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 8H19C20.6569 8 22 9.34315 22 11C22 12.6569 20.6569 14 19 14H18" />
    <path d="M3 8H18V13C18 16.3137 15.3137 19 12 19H9C5.68629 19 3 16.3137 3 13V8Z" fill="currentColor" fillOpacity="0.15" />
    <path d="M3 21H19" strokeWidth="2" />
    <path d="M7 3C7 4.5 8 5 8 6" />
    <path d="M11 2C11 3.5 12 4 12 5" />
    <path d="M15 3C15 4.5 16 5 16 6" />
  </svg>
);

export const InkblotIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Symmetrical Rorschach-like inkblot shape */}
    <path
      d="M16 3C14.5 5 12 6 10 5.5C8 5 6 7 7 9.5C8 12 5 13 4 15C3 17 5 19.5 7.5 19C10 18.5 11 21 10 23.5C9 26 12 28 14 27C15 26.5 15.5 28 16 29C16.5 28 17 26.5 18 27C20 28 23 26 22 23.5C21 21 22 18.5 24.5 19C27 19.5 29 17 28 15C27 13 24 12 25 9.5C26 7 24 5 22 5.5C20 6 17.5 5 16 3ZM16 11C17.5 13 18.5 15.5 17 17.5C15.5 19.5 16.5 21.5 16 23C15.5 21.5 16.5 19.5 15 17.5C13.5 15.5 14.5 13 16 11Z"
      opacity="0.85"
    />
  </svg>
);

export const CarriageIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Viennese Fiaker Carriage */}
    <rect x="3" y="6" width="11" height="8" rx="2" fill="currentColor" fillOpacity="0.15" />
    <path d="M3 10H14" />
    <path d="M7 6V10" />
    <path d="M14 8H17L19 12V14H14" />
    <circle cx="6" cy="18" r="3" />
    <circle cx="17" cy="18" r="3" />
    <path d="M9 18H14" />
    <path d="M21 14H23" />
  </svg>
);

export const NotebookIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 19.5V4.5C4 3.67157 4.67157 3 5.5 3H18.5C19.3284 3 20 3.67157 20 4.5V19.5C20 20.3284 19.3284 21 18.5 21H5.5C4.67157 21 4 20.3284 4 19.5Z" fill="currentColor" fillOpacity="0.15" />
    <path d="M4 6H20" />
    <path d="M8 3V21" />
    <path d="M12 11H16" />
    <path d="M12 15H16" />
  </svg>
);

export const DropletClarityIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2.69L6.5 11.5C4.7 14.4 5.3 18.2 8 20.1C10.7 22 14.3 21.6 16.5 19.1C18.7 16.6 18.5 12.8 16 10.3L12 2.69Z" fill="currentColor" fillOpacity="0.2" />
    <path d="M10 16C10 17.1 10.9 18 12 18" strokeDasharray="1 1" />
  </svg>
);
