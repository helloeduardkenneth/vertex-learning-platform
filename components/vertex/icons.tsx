import React from "react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
  variant?: "outline" | "filled";
}

export function VertexLogo({ size = 32, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Vertex distinct orange geometric chevron/polygon */}
      <path
        d="M6 8L18 28L30 8H23.5L18 17.5L12.5 8H6Z"
        fill="#F97316"
      />
      <path
        d="M13.5 8L18 15.5L22.5 8H13.5Z"
        fill="#EA580C"
      />
    </svg>
  );
}

export function BellIcon({ size = 24, className = "", variant = "outline", ...props }: IconProps) {
  if (variant === "filled") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
        <path d="M12 2C8.686 2 6 4.686 6 8V10.172C6 11.233 5.578 12.25 4.828 13L3.414 14.414C2.523 15.305 3.155 17 4.414 17H19.586C20.845 17 21.477 15.305 20.586 14.414L19.172 13C18.422 12.25 18 11.233 18 10.172V8C18 4.686 15.314 2 12 2ZM12 22C13.105 22 14 21.105 14 20H10C10 21.105 10.895 22 12 22Z" />
      </svg>
    );
  }
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  );
}

export function SearchIcon({ size = 24, className = "", variant = "outline", ...props }: IconProps) {
  if (variant === "filled") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
        <path fillRule="evenodd" clipRule="evenodd" d="M11 4C7.134 4 4 7.134 4 11C4 14.866 7.134 18 11 18C12.659 18 14.181 17.424 15.385 16.457L19.464 20.536C19.757 20.828 20.232 20.828 20.525 20.536C20.818 20.243 20.818 19.768 20.525 19.475L16.457 15.385C17.424 14.181 18 12.659 18 11C18 7.134 14.866 4 11 4ZM6 11C6 8.239 8.239 6 11 6C13.761 6 16 8.239 16 11C16 13.761 13.761 16 11 16C8.239 16 6 13.761 6 11Z" />
      </svg>
    );
  }
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
}

export function PlayIcon({ size = 24, className = "", variant = "outline", ...props }: IconProps) {
  if (variant === "filled") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
        <path d="M7 5.234C7 4.417 7.925 3.94 8.59 4.414L18.825 11.18C19.387 11.573 19.387 12.427 18.825 12.82L8.59 19.586C7.925 20.06 7 19.583 7 18.766V5.234Z" />
      </svg>
    );
  }
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  );
}

export function DocIcon({ size = 24, className = "", variant = "outline", ...props }: IconProps) {
  if (variant === "filled") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
        <path d="M14 2H6C4.895 2 4 2.895 4 4V20C4 21.105 4.895 22 6 22H18C19.105 22 20 21.105 20 20V8L14 2ZM13 3.5L18.5 9H13V3.5ZM8 12H16V13.5H8V12ZM8 15.5H16V17H8V15.5Z" />
      </svg>
    );
  }
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <line x1="10" y1="9" x2="8" y2="9" />
    </svg>
  );
}

export function BookmarkIcon({ size = 24, className = "", variant = "outline", ...props }: IconProps) {
  if (variant === "filled") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
        <path d="M5 4C5 2.895 5.895 2 7 2H17C18.105 2 19 2.895 19 4V21L12 17.5L5 21V4Z" />
      </svg>
    );
  }
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
    </svg>
  );
}

export function BarChartIcon({ size = 24, className = "", variant = "outline", ...props }: IconProps) {
  if (variant === "filled") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
        <path d="M4 19H20V21H4V19ZM5 14H8V17H5V14ZM10.5 9H13.5V17H10.5V9ZM16 4H19V17H16V4Z" />
      </svg>
    );
  }
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  );
}

export function ClockIcon({ size = 24, className = "", variant = "outline", ...props }: IconProps) {
  if (variant === "filled") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM13 7C13 6.448 12.552 6 12 6C11.448 6 11 6.448 11 7V12C11 12.265 11.105 12.52 11.293 12.707L14.293 15.707C14.683 16.098 15.316 16.098 15.707 15.707C16.098 15.316 16.098 14.683 15.707 14.293L13 11.586V7Z" />
      </svg>
    );
  }
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export function UserIcon({ size = 24, className = "", variant = "outline", ...props }: IconProps) {
  if (variant === "filled") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
        <path d="M12 12C14.761 12 17 9.761 17 7C17 4.239 14.761 2 12 2C9.239 2 7 4.239 7 7C7 9.761 9.239 12 12 12ZM4 20C4 16.686 7.582 14 12 14C16.418 14 20 16.686 20 20V22H4V20Z" />
      </svg>
    );
  }
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

export function ChevronRightIcon({ size = 24, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

export function ChevronLeftIcon({ size = 24, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

export function ChevronDownIcon({ size = 24, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export function ExternalLinkIcon({ size = 20, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export function CheckCircleIcon({ size = 20, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

export function LockIcon({ size = 20, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

export function SpinnerIcon({ size = 20, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className={className} {...props}>
      <path d="M12 2A10 10 0 0 0 2 12" />
    </svg>
  );
}

/* Principle Icons */
export function EyeIcon({ size = 24, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export function GridSquaresIcon({ size = 24, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
    </svg>
  );
}

export function TargetIcon({ size = 24, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

export function AccessibilityIcon({ size = 24, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <circle cx="12" cy="4" r="2" />
      <path d="m5 9 14 0" />
      <path d="m12 6v7" />
      <path d="m9 20 3-7 3 7" />
    </svg>
  );
}

export function NextjsLogo({ size = 24, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM18.2323 18.7846L8.43585 6.16615H10.5985L19.4677 17.6523C19.0886 18.0646 18.6738 18.4446 18.2323 18.7846ZM15.5642 6.16615V13.8462H13.7179V6.16615H15.5642Z" />
    </svg>
  );
}
