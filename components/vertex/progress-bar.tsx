import React from "react";

export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number; // 0 to 100
  showLabel?: boolean;
  label?: string;
  size?: "sm" | "md" | "lg";
}

export function ProgressBar({
  value,
  showLabel = true,
  label,
  size = "md",
  className = "",
  ...props
}: ProgressBarProps) {
  const clampedValue = Math.min(100, Math.max(0, value));

  const heightClasses = {
    sm: "h-1.5",
    md: "h-2",
    lg: "h-3",
  }[size];

  return (
    <div className={`flex items-center gap-3 w-full ${className}`} {...props}>
      <div className={`relative flex-1 rounded-full bg-[#E2E8F0] overflow-hidden ${heightClasses}`}>
        <div
          className="h-full rounded-full bg-[#F97316] transition-all duration-300 ease-out"
          style={{ width: `${clampedValue}%` }}
        />
      </div>
      {showLabel && (
        <span className="shrink-0 text-sm font-medium text-[#64748B]">
          {label ?? (
            <>
              <span className="font-semibold text-[#0F172A]">{clampedValue}%</span> complete
            </>
          )}
        </span>
      )}
    </div>
  );
}
