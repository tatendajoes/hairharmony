import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  /** Icon size in px. Default: 22 */
  size?: number;
  /** Stroke color. Default: 'currentColor' */
  color?: string;
}

const defaults = { size: 22, color: 'currentColor', strokeWidth: 1.5 } as const;

export const IconEdit: React.FC<IconProps> = ({ size = defaults.size, color = defaults.color, ...props }) => (
  <svg width={size} height={size} fill="none" stroke={color} strokeWidth={defaults.strokeWidth} viewBox="0 0 24 24" {...props}>
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);

export const IconUserPlus: React.FC<IconProps> = ({ size = defaults.size, color = defaults.color, ...props }) => (
  <svg width={size} height={size} fill="none" stroke={color} strokeWidth={defaults.strokeWidth} viewBox="0 0 24 24" {...props}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="8.5" cy="7" r="4" />
    <path d="M20 8v6m3-3h-6" />
  </svg>
);

export const IconCheckCircle: React.FC<IconProps> = ({ size = defaults.size, color = defaults.color, ...props }) => (
  <svg width={size} height={size} fill="none" stroke={color} strokeWidth={defaults.strokeWidth} viewBox="0 0 24 24" {...props}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

export const IconChat: React.FC<IconProps> = ({ size = defaults.size, color = defaults.color, ...props }) => (
  <svg width={size} height={size} fill="none" stroke={color} strokeWidth={defaults.strokeWidth} viewBox="0 0 24 24" {...props}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

export const IconCheck: React.FC<IconProps> = ({ size = 12, color = defaults.color, ...props }) => (
  <svg width={size} height={size} fill="none" stroke={color} strokeWidth={2} viewBox="0 0 24 24" {...props}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export const IconX: React.FC<IconProps> = ({ size = 12, color = defaults.color, ...props }) => (
  <svg width={size} height={size} fill="none" stroke={color} strokeWidth={2} viewBox="0 0 24 24" {...props}>
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

export const IconDollar: React.FC<IconProps> = ({ size = defaults.size, color = defaults.color, ...props }) => (
  <svg width={size} height={size} fill="none" stroke={color} strokeWidth={defaults.strokeWidth} viewBox="0 0 24 24" {...props}>
    <path d="M12 2v20m-7-7 7 7 7-7" />
  </svg>
);

export const IconFrown: React.FC<IconProps> = ({ size = defaults.size, color = defaults.color, ...props }) => (
  <svg width={size} height={size} fill="none" stroke={color} strokeWidth={defaults.strokeWidth} viewBox="0 0 24 24" {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M8 15s1.5-2 4-2 4 2 4 2m-1-6h.01M9 9h.01" />
  </svg>
);

export const IconShield: React.FC<IconProps> = ({ size = defaults.size, color = defaults.color, ...props }) => (
  <svg width={size} height={size} fill="none" stroke={color} strokeWidth={defaults.strokeWidth} viewBox="0 0 24 24" {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

export const IconImage: React.FC<IconProps> = ({ size = 48, color = defaults.color, ...props }) => (
  <svg width={size} height={size} fill="none" stroke={color} strokeWidth={defaults.strokeWidth} viewBox="0 0 24 24" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <path d="m21 15-5-5L5 21" />
  </svg>
);
