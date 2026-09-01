import React from "react";
import { CheckCircleIcon, LockIcon } from "./icons";

export type StatusType = "in-progress" | "completed" | "now-playing" | "locked";

export interface StatusIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
  status: StatusType;
  label?: string;
  showIconOnly?: boolean;
}

export function StatusIndicator({
  status,
  label,
  showIconOnly = false,
  className = "",
  ...props
}: StatusIndicatorProps) {
  const configs = {
    "in-progress": {
      defaultLabel: "In Progress",
      textColor: "text-[#0F172A]",
      icon: (
        <span className="relative flex h-4 w-4 items-center justify-center">
          <svg className="h-4 w-4 animate-spin text-[#F97316]" viewBox="0 0 24 24" fill="none">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="#F97316"
              strokeWidth="3"
            />
            <path
              className="opacity-90"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </span>
      ),
    },
    completed: {
      defaultLabel: "Completed",
      textColor: "text-[#0F172A]",
      icon: (
        <span className="flex h-4 w-4 items-center justify-center text-[#16A34A]">
          <CheckCircleIcon size={16} />
        </span>
      ),
    },
    "now-playing": {
      defaultLabel: "Now Playing",
      textColor: "text-[#0F172A]",
      icon: (
        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#F97316] text-white">
          <svg className="h-2.5 w-2.5 translate-x-[0.5px]" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="6 3 20 12 6 21 6 3" />
          </svg>
        </span>
      ),
    },
    locked: {
      defaultLabel: "Locked",
      textColor: "text-[#64748B]",
      icon: (
        <span className="flex h-4 w-4 items-center justify-center text-[#64748B]">
          <LockIcon size={16} />
        </span>
      ),
    },
  };

  const config = configs[status];
  const displayLabel = label ?? config.defaultLabel;

  return (
    <div
      className={`inline-flex items-center gap-2 text-sm font-medium ${config.textColor} ${className}`}
      {...props}
    >
      {config.icon}
      {!showIconOnly && <span>{displayLabel}</span>}
    </div>
  );
}
