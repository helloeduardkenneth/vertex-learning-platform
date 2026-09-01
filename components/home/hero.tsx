import React from "react";
import Link from "next/link";
import { SearchIcon, ArrowRightIcon } from "@/components/vertex/icons";
import { Button } from "@/components/vertex/button";

export interface HeroProps {
  className?: string;
}

export function Hero({ className = "" }: HeroProps) {
  return (
    <section
      className={`flex flex-col items-center px-6 py-16 sm:py-20 text-center ${className}`}
    >
      {/* Eyebrow Pill */}
      <div className="inline-flex items-center rounded-full border border-[#FED7AA]/80 bg-[#FFEEE5]/60 px-4 py-1.5 shadow-2xs">
        <span className="text-[11px] font-semibold tracking-[0.14em] text-[#EA580C] uppercase">
          Intelligent Learning
        </span>
      </div>

      {/* Main Heading */}
      <h1 className="mt-8 max-w-2xl font-display text-4xl font-bold tracking-tight text-[#0F172A] sm:text-5xl md:text-[60px] md:leading-[1.12]">
        Search your learning
        <br />
        in plain English.
      </h1>

      {/* Subtitle */}
      <p className="mt-5 max-w-[540px] text-base leading-relaxed text-[#64748B] sm:text-lg">
        Vertex understands what you want to learn and
        <br className="hidden sm:inline" /> finds the exact lessons across all
        your courses.
      </p>

      {/* Primary CTA */}
      <div className="mt-8">
        <Link href="/courses" tabIndex={-1}>
          <Button
            variant="primary"
            size="xl"
            rightIcon={<ArrowRightIcon size={18} />}
            className="shadow-md hover:shadow-lg transition-all"
          >
            Explore Courses
          </Button>
        </Link>
      </div>

      {/* Search Bar */}
      <div className="mt-12 w-full max-w-[750px]">
        <div className="group relative flex h-[68px] sm:h-[76px] w-full items-center rounded-[14px] border border-[#E2E8F0] bg-white px-5 sm:px-6 shadow-card-sm transition-all hover:border-[#CBD5E1] hover:shadow-card-md focus-within:border-[#FB923C] focus-within:ring-2 focus-within:ring-[#FB923C]/20">
          <div className="pointer-events-none flex items-center text-[#64748B]">
            <SearchIcon size={22} />
          </div>

          <input
            type="search"
            aria-label="Search learning content"
            placeholder="Ask anything about your learning..."
            className="h-full w-full bg-transparent pl-4 pr-16 text-base sm:text-[17px] text-[#0F172A] placeholder:text-[#64748B] outline-none"
          />

          <div className="absolute right-4 sm:right-5 flex items-center pointer-events-none">
            <kbd className="inline-flex h-8 items-center justify-center rounded-[8px] border border-[#E2E8F0] bg-[#FAFAFC] px-2.5 text-xs font-semibold text-[#64748B] shadow-2xs">
              ⌘ K
            </kbd>
          </div>
        </div>
      </div>
    </section>
  );
}
