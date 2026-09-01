import React from "react";

export function ChartDecoration() {
  const leftBars = [
    { height: 60, opacity: 0.25 },
    { height: 100, opacity: 0.4 },
    { height: 140, opacity: 0.55 },
    { height: 190, opacity: 0.75 },
    { height: 170, opacity: 0.65 },
    { height: 120, opacity: 0.45 },
    { height: 160, opacity: 0.6 },
    { height: 180, opacity: 0.7 },
  ];

  const rightBars = [
    { height: 170, opacity: 0.7 },
    { height: 120, opacity: 0.45 },
    { height: 190, opacity: 0.75 },
    { height: 150, opacity: 0.6 },
    { height: 110, opacity: 0.4 },
    { height: 160, opacity: 0.65 },
    { height: 180, opacity: 0.75 },
    { height: 130, opacity: 0.5 },
  ];

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none relative mt-16 h-48 w-full overflow-hidden"
    >
      <div className="absolute inset-x-0 bottom-0 flex justify-between px-2 sm:px-6">
        {/* Left Cluster */}
        <div className="flex items-end gap-1.5 sm:gap-2">
          {leftBars.map((bar, idx) => (
            <div
              key={`left-${idx}`}
              style={{
                height: `${bar.height}px`,
                opacity: bar.opacity,
              }}
              className="w-7 sm:w-10 rounded-t-sm bg-gradient-to-t from-[#F97316] via-[#FB923C]/70 to-transparent blur-[1.5px]"
            />
          ))}
        </div>

        {/* Right Cluster */}
        <div className="flex items-end gap-1.5 sm:gap-2">
          {rightBars.map((bar, idx) => (
            <div
              key={`right-${idx}`}
              style={{
                height: `${bar.height}px`,
                opacity: bar.opacity,
              }}
              className="w-7 sm:w-10 rounded-t-sm bg-gradient-to-t from-[#F97316] via-[#FB923C]/70 to-transparent blur-[1.5px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
