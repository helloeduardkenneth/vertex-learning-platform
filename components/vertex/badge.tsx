import React from "react";

export type BadgeVariant = "video" | "lesson" | "popular" | "neutral" | "success";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  children: React.ReactNode;
}

export function Badge({ variant = "video", children, className = "", ...props }: BadgeProps) {
  const variantStyles = {
    video: "bg-[#FFEEE5] text-[#F97316] border border-[#FED7AA]/50",
    lesson: "bg-[#E0F2FE] text-[#0284C7] border border-[#BAE6FD]/60",
    popular: "bg-[#FEF3C7] text-[#D97706] border border-[#FDE68A]/60",
    neutral: "bg-[#F1F5F9] text-[#475569] border border-[#E2E8F0]",
    success: "bg-[#ECFDF5] text-[#059669] border border-[#A7F3D0]",
  }[variant];

  return (
    <span
      className={`inline-flex items-center justify-center rounded-[6px] px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider select-none ${variantStyles} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
