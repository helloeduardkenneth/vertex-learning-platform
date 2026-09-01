import React from "react";

export interface PageFrameProps {
  children: React.ReactNode;
  className?: string;
}

export function PageFrame({ children, className = "" }: PageFrameProps) {
  return (
    <div className="min-h-screen w-full bg-striped-canvas flex justify-center text-[#0F172A]">
      <div
        className={`relative flex min-h-screen w-full max-w-[1440px] flex-col border-x border-[#F0E7E0] bg-[#FBF8F5] shadow-xs ${className}`}
      >
        {children}
      </div>
    </div>
  );
}
