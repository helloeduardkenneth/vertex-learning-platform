import React from "react";

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  initials?: string;
  size?: number;
  className?: string;
}

export function Avatar({
  src,
  alt = "User Avatar",
  initials = "JD",
  size = 44,
  className = "",
  ...props
}: AvatarProps) {
  return (
    <div
      style={{ width: size, height: size }}
      className={`relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#E2E8F0] bg-[#FFEEE5] text-[#F97316] font-medium select-none shadow-xs ${className}`}
      {...props}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
        />
      ) : (
        <span className="text-sm font-semibold tracking-tight">{initials}</span>
      )}
    </div>
  );
}
