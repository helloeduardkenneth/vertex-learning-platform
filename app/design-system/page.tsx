"use client";

import React, { useState } from "react";
import {
  VertexLogo,
  BellIcon,
  SearchIcon,
  PlayIcon,
  DocIcon,
  BookmarkIcon,
  BarChartIcon,
  ClockIcon,
  UserIcon,
  ChevronRightIcon,
  ExternalLinkIcon,
  EyeIcon,
  GridSquaresIcon,
  TargetIcon,
  AccessibilityIcon,
  Button,
  SearchInput,
  Select,
  Badge,
  StatusIndicator,
  ProgressBar,
  CourseCard,
  LessonVideoCard,
  LessonArticleCard,
  ResourceCard,
  Navbar,
  Breadcrumbs,
  Pagination,
} from "@/components/vertex";

export default function VertexDesignSystemPage() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [progressVal, setProgressVal] = useState<number>(35);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [activeNavTab, setActiveNavTab] = useState<string>("Courses");
  const [searchValue, setSearchValue] = useState<string>("");

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedColor(text);
    setTimeout(() => {
      setCopiedColor(null);
    }, 1800);
  };

  const primaryColors = [
    { name: "Primary 500", hex: "#F97316", bg: "bg-[#F97316]", text: "text-white" },
    { name: "Primary 400", hex: "#FB923C", bg: "bg-[#FB923C]", text: "text-white" },
    { name: "Primary 300", hex: "#FDBA74", bg: "bg-[#FDBA74]", text: "text-[#0F172A]" },
    { name: "Primary 200", hex: "#FED7AA", bg: "bg-[#FED7AA]", text: "text-[#0F172A]" },
    { name: "Primary 100", hex: "#FFEEE5", bg: "bg-[#FFEEE5]", text: "text-[#0F172A]" },
  ];

  const neutralColors = [
    { name: "Neutral 900", hex: "#0F172A", bg: "bg-[#0F172A]", text: "text-white" },
    { name: "Neutral 700", hex: "#334155", bg: "bg-[#334155]", text: "text-white" },
    { name: "Neutral 500", hex: "#64748B", bg: "bg-[#64748B]", text: "text-white" },
    { name: "Neutral 300", hex: "#CBD5E1", bg: "bg-[#CBD5E1]", text: "text-[#0F172A]" },
    { name: "Neutral 200", hex: "#E2E8F0", bg: "bg-[#E2E8F0]", text: "text-[#0F172A]" },
    { name: "Neutral 100", hex: "#F1F5F9", bg: "bg-[#F1F5F9]", text: "text-[#0F172A]" },
    { name: "Neutral 50", hex: "#FAFAFC", bg: "bg-[#FAFAFC]", text: "text-[#0F172A]", border: true },
    { name: "White", hex: "#FFFFFF", bg: "bg-[#FFFFFF]", text: "text-[#0F172A]", border: true },
  ];

  const typeScaleRows = [
    { style: "Display 1", font: "Playfair Display", size: "48 / 56", weight: "Bold", use: "Page titles", sampleClass: "font-display text-[32px] md:text-[48px] leading-[1.15] font-bold" },
    { style: "Display 2", font: "Playfair Display", size: "36 / 44", weight: "Bold", use: "Section titles", sampleClass: "font-display text-[26px] md:text-[36px] leading-[1.2] font-bold" },
    { style: "Heading 1", font: "Inter", size: "28 / 36", weight: "Semi Bold", use: "Card titles", sampleClass: "text-[22px] md:text-[28px] leading-[1.3] font-semibold" },
    { style: "Heading 2", font: "Inter", size: "22 / 30", weight: "Semi Bold", use: "Sub section", sampleClass: "text-[18px] md:text-[22px] leading-[1.35] font-semibold" },
    { style: "Heading 3", font: "Inter", size: "18 / 26", weight: "Medium", use: "Small titles", sampleClass: "text-[16px] md:text-[18px] leading-[1.45] font-medium" },
    { style: "Body Large", font: "Inter", size: "16 / 24", weight: "Regular", use: "Body copy", sampleClass: "text-[16px] leading-[1.5] font-normal" },
    { style: "Body", font: "Inter", size: "14 / 20", weight: "Regular", use: "Supporting text", sampleClass: "text-[14px] leading-[1.4] font-normal" },
    { style: "Small", font: "Inter", size: "12 / 16", weight: "Regular", use: "Captions, meta", sampleClass: "text-[12px] leading-[1.3] font-normal" },
  ];

  const spacingUnits = [
    { px: 4, rem: "0.25rem", size: 4 },
    { px: 8, rem: "0.5rem", size: 8 },
    { px: 12, rem: "0.75rem", size: 12 },
    { px: 16, rem: "1rem", size: 16 },
    { px: 24, rem: "1.5rem", size: 24 },
    { px: 32, rem: "2rem", size: 32 },
    { px: 40, rem: "2.5rem", size: 40 },
    { px: 48, rem: "3rem", size: 48 },
    { px: 64, rem: "4rem", size: 64 },
  ];

  const radiusUnits = [
    { label: "4px", name: "xs", radiusClass: "rounded-[4px]" },
    { label: "8px", name: "sm", radiusClass: "rounded-[8px]" },
    { label: "12px", name: "md", radiusClass: "rounded-[12px]" },
    { label: "16px", name: "lg", radiusClass: "rounded-[16px]" },
    { label: "24px", name: "xl", radiusClass: "rounded-[24px]" },
    { label: "Full", name: "circle", radiusClass: "rounded-full" },
  ];

  const shadowUnits = [
    {
      name: "Sm",
      value: "0 1px 2px 0",
      color: "rgba(15, 23, 42, 0.05)",
      shadowStyle: { boxShadow: "0 1px 2px 0 rgba(15, 23, 42, 0.05)" },
    },
    {
      name: "Md",
      value: "0 4px 12px -2px",
      color: "rgba(15, 23, 42, 0.08)",
      shadowStyle: { boxShadow: "0 4px 12px -2px rgba(15, 23, 42, 0.08)" },
    },
    {
      name: "Lg",
      value: "0 12px 24px -4px",
      color: "rgba(15, 23, 42, 0.10)",
      shadowStyle: { boxShadow: "0 12px 24px -4px rgba(15, 23, 42, 0.10)" },
    },
    {
      name: "Xl",
      value: "0 20px 40px -8px",
      color: "rgba(15, 23, 42, 0.12)",
      shadowStyle: { boxShadow: "0 20px 40px -8px rgba(15, 23, 42, 0.12)" },
    },
  ];

  const iconItems = [
    { name: "Bell", Icon: BellIcon },
    { name: "Search", Icon: SearchIcon },
    { name: "Play", Icon: PlayIcon },
    { name: "Document", Icon: DocIcon },
    { name: "Bookmark", Icon: BookmarkIcon },
    { name: "Chart", Icon: BarChartIcon },
    { name: "Clock", Icon: ClockIcon },
    { name: "User", Icon: UserIcon },
    { name: "Chevron", Icon: ChevronRightIcon },
  ];

  const principles = [
    {
      title: "Clarity First",
      desc: "Every element should communicate clearly.",
      Icon: EyeIcon,
    },
    {
      title: "Consistency",
      desc: "Use components and patterns consistently across the platform.",
      Icon: GridSquaresIcon,
    },
    {
      title: "Focus & Calm",
      desc: "Remove noise and help learners focus on what matters.",
      Icon: TargetIcon,
    },
    {
      title: "Accessible",
      desc: "Design with accessibility and inclusivity in mind.",
      Icon: AccessibilityIcon,
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFC] py-8 md:py-14 px-4 sm:px-6 lg:px-10 text-[#0F172A]">
      {/* Toast Notification for Copied Tokens */}
      {copiedColor && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-xl bg-[#0F172A] px-4 py-2.5 text-xs font-medium text-white shadow-xl animate-in fade-in slide-in-from-bottom-3 duration-200">
          <span className="h-2 w-2 rounded-full bg-[#F97316]" />
          <span>Copied <strong className="text-[#FB923C]">{copiedColor}</strong> to clipboard</span>
        </div>
      )}

      {/* Main Container Card mirroring vertex-designsystem.png */}
      <main className="mx-auto max-w-[1280px] bg-white rounded-[24px] border border-[#E2E8F0] shadow-card-lg p-6 sm:p-10 md:p-14">
        
        {/* ======================================================== */}
        {/* HEADER & SECTION 01: COLORS                              */}
        {/* ======================================================== */}
        <header className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 pb-12 border-b border-[#F1F5F9]">
          {/* Brand & Overview */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <VertexLogo size={36} />
                <span className="text-2xl font-bold tracking-tight text-[#0F172A]">
                  Vertex
                </span>
              </div>

              <h1 className="mt-8 font-display text-4xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-[#0F172A] leading-[1.1]">
                Design System
              </h1>

              <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#64748B] max-w-md">
                A unified design language for Vertex learning platform. Clean,
                modern and focused on clarity, consistency and intuitive
                learning experiences.
              </p>
            </div>

            <div className="mt-8 lg:mt-12 flex items-center gap-2 text-xs font-semibold tracking-wider text-[#94A3B8] uppercase">
              <span>VERSION 1.0</span>
              <span>•</span>
              <span>MAY 2025</span>
            </div>
          </div>

          {/* 01 COLORS */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#0F172A] uppercase mb-4">
                <span className="text-[#F97316]">01</span>
                <span>COLORS</span>
              </div>

              {/* Primary Palette */}
              <div className="mb-6">
                <h4 className="text-xs font-bold text-[#0F172A] mb-3">Primary</h4>
                <div className="grid grid-cols-5 gap-2 sm:gap-3">
                  {primaryColors.map((color) => (
                    <button
                      key={color.name}
                      type="button"
                      onClick={() => copyToClipboard(color.hex)}
                      title="Click to copy hex code"
                      className="group flex flex-col text-left transition-transform hover:-translate-y-0.5 cursor-pointer"
                    >
                      <div
                        className={`h-14 sm:h-16 w-full rounded-[10px] ${color.bg} shadow-xs border border-black/5 group-hover:ring-2 group-hover:ring-[#F97316] transition-all`}
                      />
                      <span className="mt-2 text-[11px] font-semibold text-[#0F172A] truncate">
                        {color.name}
                      </span>
                      <span className="text-[10px] font-mono text-[#64748B] uppercase">
                        {color.hex}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Neutral Palette */}
              <div>
                <h4 className="text-xs font-bold text-[#0F172A] mb-3">Neutral</h4>
                <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 sm:gap-3">
                  {neutralColors.map((color) => (
                    <button
                      key={color.name}
                      type="button"
                      onClick={() => copyToClipboard(color.hex)}
                      title="Click to copy hex code"
                      className="group flex flex-col text-left transition-transform hover:-translate-y-0.5 cursor-pointer"
                    >
                      <div
                        className={`h-12 sm:h-14 w-full rounded-[10px] ${color.bg} shadow-xs ${
                          color.border ? "border border-[#E2E8F0]" : "border border-black/5"
                        } group-hover:ring-2 group-hover:ring-[#FB923C] transition-all`}
                      />
                      <span className="mt-2 text-[10px] font-semibold text-[#0F172A] truncate">
                        {color.name}
                      </span>
                      <span className="text-[9px] font-mono text-[#64748B] uppercase">
                        {color.hex}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* ======================================================== */}
        {/* ROW 2: 02 TYPOGRAPHY & 03 TYPE SCALE                     */}
        {/* ======================================================== */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 py-12 border-b border-[#F1F5F9]">
          {/* 02 TYPOGRAPHY */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#0F172A] uppercase mb-6">
              <span className="text-[#F97316]">02</span>
              <span>TYPOGRAPHY</span>
            </div>

            <div className="space-y-8">
              {/* Playfair Display specimen */}
              <div className="flex items-start gap-6">
                <span className="font-display text-5xl font-bold text-[#0F172A] leading-none select-none">
                  Ag
                </span>
                <div>
                  <h3 className="font-display text-2xl font-bold text-[#0F172A]">
                    Playfair Display
                  </h3>
                  <div className="mt-1 flex items-center gap-2 text-xs text-[#64748B]">
                    <span>Elegant</span>
                    <span className="text-[#F97316]">•</span>
                    <span>Readable</span>
                    <span className="text-[#F97316]">•</span>
                    <span>Timeless</span>
                  </div>
                </div>
              </div>

              {/* Inter specimen */}
              <div className="flex items-start gap-6 pt-4 border-t border-[#F1F5F9]">
                <span className="text-5xl font-normal text-[#0F172A] leading-none select-none">
                  Ag
                </span>
                <div>
                  <h3 className="text-2xl font-medium text-[#0F172A]">
                    Inter
                  </h3>
                  <div className="mt-1 flex items-center gap-2 text-xs text-[#64748B]">
                    <span>Clean</span>
                    <span className="text-[#F97316]">•</span>
                    <span>Modern</span>
                    <span className="text-[#F97316]">•</span>
                    <span>Highly legible</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 03 TYPE SCALE */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#0F172A] uppercase mb-6">
              <span className="text-[#F97316]">03</span>
              <span>TYPE SCALE</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-[#E2E8F0] text-[#64748B] font-medium pb-2">
                    <th className="pb-3 pr-4">Style</th>
                    <th className="pb-3 pr-4">Font</th>
                    <th className="pb-3 pr-4">Size / Line Height</th>
                    <th className="pb-3 pr-4">Weight</th>
                    <th className="pb-3">Use</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F1F5F9]">
                  {typeScaleRows.map((row) => (
                    <tr key={row.style} className="hover:bg-[#FAFAFC] transition-colors">
                      <td className="py-2.5 pr-4 font-semibold text-[#0F172A]">
                        {row.style}
                      </td>
                      <td className="py-2.5 pr-4 text-[#64748B]">{row.font}</td>
                      <td className="py-2.5 pr-4 font-mono text-[#64748B]">{row.size}</td>
                      <td className="py-2.5 pr-4 text-[#64748B]">{row.weight}</td>
                      <td className="py-2.5 text-[#64748B]">{row.use}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* ROW 3: 04 SPACING SYSTEM & 05 RADIUS & SHADOWS           */}
        {/* ======================================================== */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 py-12 border-b border-[#F1F5F9]">
          {/* 04 SPACING SYSTEM */}
          <div className="lg:col-span-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#0F172A] uppercase">
                <span className="text-[#F97316]">04</span>
                <span>SPACING SYSTEM</span>
              </div>
              <span className="text-xs font-medium text-[#64748B]">
                Base unit: 4px
              </span>
            </div>

            <div className="flex items-end justify-between gap-2 pt-6">
              {spacingUnits.map((sp) => (
                <div key={sp.px} className="flex flex-col items-center gap-2 flex-1">
                  <div
                    className="w-full bg-[#FED7AA] rounded-[4px] border border-[#FDBA74]/50 transition-all hover:bg-[#F97316]"
                    style={{ height: `${sp.size}px`, maxHeight: "72px" }}
                  />
                  <div className="text-center">
                    <span className="block text-xs font-bold text-[#0F172A]">
                      {sp.px}
                    </span>
                    <span className="block text-[9px] text-[#94A3B8]">
                      ({sp.rem})
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 05 RADIUS & SHADOWS */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#0F172A] uppercase mb-4">
              <span className="text-[#F97316]">05</span>
              <span>RADIUS & SHADOWS</span>
            </div>

            {/* Radius */}
            <div className="mb-6">
              <h4 className="text-xs font-bold text-[#0F172A] mb-3">Radius</h4>
              <div className="grid grid-cols-6 gap-2 sm:gap-3">
                {radiusUnits.map((rad) => (
                  <div key={rad.name} className="flex flex-col items-center gap-1.5">
                    <div
                      className={`h-11 w-11 sm:h-12 sm:w-12 border border-[#CBD5E1] bg-white ${rad.radiusClass} shadow-xs hover:border-[#F97316] transition-colors`}
                    />
                    <span className="text-[11px] font-bold text-[#0F172A]">
                      {rad.label}
                    </span>
                    <span className="text-[9px] text-[#94A3B8]">({rad.name})</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Shadows */}
            <div>
              <h4 className="text-xs font-bold text-[#0F172A] mb-3">Shadows</h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {shadowUnits.map((sh) => (
                  <div
                    key={sh.name}
                    className="flex flex-col rounded-[12px] border border-[#F1F5F9] bg-white p-3 transition-transform hover:-translate-y-0.5"
                    style={sh.shadowStyle}
                  >
                    <span className="text-xs font-bold text-[#0F172A]">{sh.name}</span>
                    <span className="mt-1 text-[10px] font-mono text-[#64748B]">
                      {sh.value}
                    </span>
                    <span className="text-[9px] font-mono text-[#94A3B8] truncate">
                      {sh.color}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* ROW 4: 06 ICONS, 07 BUTTONS, 08 INPUTS                   */}
        {/* ======================================================== */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 py-12 border-b border-[#F1F5F9]">
          {/* 06 ICONS */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#0F172A] uppercase mb-4">
              <span className="text-[#F97316]">06</span>
              <span>ICONS</span>
            </div>

            {/* Outline Icons */}
            <div className="mb-4">
              <span className="text-xs font-medium text-[#64748B] block mb-2">
                Outline Style
              </span>
              <div className="flex flex-wrap items-center gap-2.5 text-[#0F172A]">
                {iconItems.map((item) => (
                  <div
                    key={item.name}
                    title={`${item.name} (Outline)`}
                    className="flex h-8 w-8 items-center justify-center rounded-[8px] hover:bg-[#F1F5F9] transition-colors"
                  >
                    <item.Icon size={18} variant="outline" />
                  </div>
                ))}
              </div>
            </div>

            {/* Filled Icons */}
            <div className="mb-6">
              <span className="text-xs font-medium text-[#64748B] block mb-2">
                Filled Style
              </span>
              <div className="flex flex-wrap items-center gap-2.5 text-[#0F172A]">
                {iconItems.map((item) => (
                  <div
                    key={item.name}
                    title={`${item.name} (Filled)`}
                    className="flex h-8 w-8 items-center justify-center rounded-[8px] hover:bg-[#F1F5F9] transition-colors"
                  >
                    <item.Icon size={18} variant="filled" />
                  </div>
                ))}
              </div>
            </div>

            {/* Icon Specs */}
            <div className="rounded-[12px] bg-[#FAFAFC] p-3 border border-[#E2E8F0]/60 text-[11px] text-[#64748B] space-y-1">
              <p className="font-bold text-[#0F172A]">Icon Specs</p>
              <p>• 24x24px grid</p>
              <p>• 2px stroke width (outline)</p>
              <p>• Rounded line caps</p>
              <p>• Consistent optical balance</p>
            </div>
          </div>

          {/* 07 BUTTONS */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#0F172A] uppercase mb-4">
              <span className="text-[#F97316]">07</span>
              <span>BUTTONS</span>
            </div>

            <div className="space-y-4">
              {/* Column labels */}
              <div className="grid grid-cols-5 text-[11px] font-semibold text-[#64748B]">
                <span className="col-span-1" />
                <span className="text-center">Primary</span>
                <span className="text-center">Secondary</span>
                <span className="text-center">Tertiary</span>
                <span className="text-center">Text</span>
              </div>

              {/* Default Row */}
              <div className="grid grid-cols-5 items-center gap-2">
                <span className="text-xs font-medium text-[#64748B]">Default</span>
                <Button variant="primary" size="md" className="w-full text-xs">
                  Get Started
                </Button>
                <Button variant="secondary" size="md" className="w-full text-xs">
                  Explore Courses
                </Button>
                <Button
                  variant="tertiary"
                  size="md"
                  rightIcon={<ExternalLinkIcon size={12} />}
                  className="w-full text-xs"
                >
                  View Lesson
                </Button>
                <Button
                  variant="text"
                  size="md"
                  rightIcon={<PlayIcon size={12} variant="filled" />}
                  className="w-full text-xs"
                >
                  Watch Video
                </Button>
              </div>

              {/* Hover Row */}
              <div className="grid grid-cols-5 items-center gap-2">
                <span className="text-xs font-medium text-[#64748B]">Hover</span>
                <Button variant="primary" size="md" forceState="hover" className="w-full text-xs">
                  Get Started
                </Button>
                <Button variant="secondary" size="md" forceState="hover" className="w-full text-xs">
                  Explore Courses
                </Button>
                <Button
                  variant="tertiary"
                  size="md"
                  forceState="hover"
                  rightIcon={<ExternalLinkIcon size={12} />}
                  className="w-full text-xs"
                >
                  View Lesson
                </Button>
                <Button
                  variant="text"
                  size="md"
                  forceState="hover"
                  rightIcon={<PlayIcon size={12} variant="filled" />}
                  className="w-full text-xs"
                >
                  Watch Video
                </Button>
              </div>

              {/* Disabled Row */}
              <div className="grid grid-cols-5 items-center gap-2">
                <span className="text-xs font-medium text-[#64748B]">Disabled</span>
                <Button variant="primary" size="md" forceState="disabled" className="w-full text-xs">
                  Get Started
                </Button>
                <Button variant="secondary" size="md" forceState="disabled" className="w-full text-xs">
                  Explore Courses
                </Button>
                <Button
                  variant="tertiary"
                  size="md"
                  forceState="disabled"
                  rightIcon={<ExternalLinkIcon size={12} />}
                  className="w-full text-xs"
                >
                  View Lesson
                </Button>
                <Button
                  variant="text"
                  size="md"
                  forceState="disabled"
                  rightIcon={<PlayIcon size={12} variant="filled" />}
                  className="w-full text-xs"
                >
                  Watch Video
                </Button>
              </div>
            </div>

            {/* Button Specs */}
            <div className="mt-6 rounded-[12px] bg-[#FAFAFC] p-3 border border-[#E2E8F0]/60 text-[11px] text-[#64748B] space-y-1">
              <p className="font-bold text-[#0F172A]">Button Specs</p>
              <p>• Height: 44px (default)</p>
              <p>• Padding: 0 16px (lg), 0 12px (md)</p>
              <p>• Radius: 12px</p>
              <p>• Font: Inter Medium (14–16px)</p>
            </div>
          </div>

          {/* 08 INPUTS */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#0F172A] uppercase mb-4">
              <span className="text-[#F97316]">08</span>
              <span>INPUTS</span>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-[#64748B] mb-1.5">
                  Search / Text Input
                </label>
                <SearchInput
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="Search anything..."
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#64748B] mb-1.5">
                  Select
                </label>
                <Select
                  options={[
                    { label: "Most Relevant", value: "relevant" },
                    { label: "Newest First", value: "newest" },
                    { label: "Popular", value: "popular" },
                  ]}
                />
              </div>
            </div>

            {/* Field Specs */}
            <div className="mt-6 rounded-[12px] bg-[#FAFAFC] p-3 border border-[#E2E8F0]/60 text-[11px] text-[#64748B] space-y-1">
              <p className="font-bold text-[#0F172A]">Field Specs</p>
              <p>• Height: 44px</p>
              <p>• Radius: 12px</p>
              <p>• Border: 1px solid #E2E8F0</p>
              <p>• Padding: 0 16px</p>
              <p>• Focus: Border color #FB923C</p>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* ROW 5: 09 BADGES, 10 STATUS / INDICATORS, 11 PROGRESS    */}
        {/* ======================================================== */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 py-12 border-b border-[#F1F5F9]">
          {/* 09 BADGES / TAGS */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#0F172A] uppercase mb-4">
              <span className="text-[#F97316]">09</span>
              <span>BADGES / TAGS</span>
            </div>

            <div className="flex items-center gap-6">
              <div>
                <span className="block text-xs font-medium text-[#64748B] mb-2">Video</span>
                <Badge variant="video">VIDEO</Badge>
              </div>
              <div>
                <span className="block text-xs font-medium text-[#64748B] mb-2">Lesson</span>
                <Badge variant="lesson">LESSON</Badge>
              </div>
              <div>
                <span className="block text-xs font-medium text-[#64748B] mb-2">Popular</span>
                <Badge variant="popular">POPULAR</Badge>
              </div>
            </div>
          </div>

          {/* 10 STATUS / INDICATORS */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#0F172A] uppercase mb-4">
              <span className="text-[#F97316]">10</span>
              <span>STATUS / INDICATORS</span>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-1">
              <StatusIndicator status="in-progress" />
              <StatusIndicator status="completed" />
              <StatusIndicator status="now-playing" />
              <StatusIndicator status="locked" />
            </div>
          </div>

          {/* 11 PROGRESS BAR */}
          <div className="lg:col-span-4">
            <div className="flex items-center justify-between gap-2 text-xs font-bold tracking-wider text-[#0F172A] uppercase mb-4">
              <div className="flex items-center gap-2">
                <span className="text-[#F97316]">11</span>
                <span>PROGRESS BAR</span>
              </div>
              <button
                type="button"
                onClick={() => setProgressVal((p) => (p >= 100 ? 0 : p + 25))}
                className="text-[10px] font-semibold text-[#F97316] hover:underline cursor-pointer"
              >
                Simulate +25%
              </button>
            </div>

            <div className="pt-2">
              <ProgressBar value={progressVal} />
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* ROW 6: 12 CARDS                                          */}
        {/* ======================================================== */}
        <section className="py-12 border-b border-[#F1F5F9]">
          <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#0F172A] uppercase mb-6">
            <span className="text-[#F97316]">12</span>
            <span>CARDS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Course Card */}
            <div>
              <span className="block text-xs font-medium text-[#64748B] mb-2">Course Card</span>
              <CourseCard
                title="Next.js for Production"
                description="Build scalable, high-performance web applications with Next.js."
                level="Intermediate"
                duration="18h 24m"
                modules="12 modules"
              />
            </div>

            {/* Lesson Card (Video) */}
            <div>
              <span className="block text-xs font-medium text-[#64748B] mb-2">Lesson Card (Video)</span>
              <LessonVideoCard
                badgeText="VIDEO"
                title="Data Fetching in Server Components"
                description="Learn how to fetch data on the server using async/await and Next.js best practices."
                lessonMeta="Lesson 5.1 • 12:45"
                actionText="Watch from 12:45"
              />
            </div>

            {/* Lesson Card (Lesson) */}
            <div>
              <span className="block text-xs font-medium text-[#64748B] mb-2">Lesson Card (Lesson)</span>
              <LessonArticleCard
                badgeText="LESSON"
                title="Data Fetching & Caching"
                description="Explore different data fetching methods in Next.js and how to cache and revalidate data for optimal performance."
                moduleMeta="Module 5"
                actionText="View lesson"
              />
            </div>

            {/* Resource Card */}
            <div>
              <span className="block text-xs font-medium text-[#64748B] mb-2">Resource Card</span>
              <ResourceCard
                title="Caching and Revalidation Guide"
                description="Deep dive into Next.js caching strategies."
                fileMeta="PDF • 1.2 MB"
              />
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* ROW 7: 13 NAVIGATION                                     */}
        {/* ======================================================== */}
        <section className="py-12 border-b border-[#F1F5F9]">
          <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#0F172A] uppercase mb-6">
            <span className="text-[#F97316]">13</span>
            <span>NAVIGATION</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Header Nav */}
            <div className="lg:col-span-4">
              <Navbar
                activeTab={activeNavTab}
                onTabChange={setActiveNavTab}
                className="rounded-[16px] border border-[#E2E8F0]"
              />
            </div>

            {/* Breadcrumbs */}
            <div className="lg:col-span-5">
              <div className="rounded-[16px] border border-[#E2E8F0] bg-white p-4 shadow-card-sm flex flex-col justify-center">
                <span className="text-[11px] font-medium text-[#94A3B8] mb-1">
                  Breadcrumbs
                </span>
                <Breadcrumbs
                  items={[
                    { label: "All Courses" },
                    { label: "Next.js for Production" },
                    { label: "Data Fetching & Caching" },
                  ]}
                />
              </div>
            </div>

            {/* Pagination */}
            <div className="lg:col-span-3">
              <div className="rounded-[16px] border border-[#E2E8F0] bg-white p-4 shadow-card-sm flex flex-col items-start sm:items-center">
                <span className="text-[11px] font-medium text-[#94A3B8] mb-1 self-start">
                  Pagination
                </span>
                <Pagination
                  currentPage={currentPage}
                  totalPages={8}
                  onPageChange={setCurrentPage}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* ROW 8: 14 PRINCIPLES                                     */}
        {/* ======================================================== */}
        <footer className="pt-12">
          <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#0F172A] uppercase mb-8">
            <span className="text-[#F97316]">14</span>
            <span>PRINCIPLES</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((p) => (
              <div key={p.title} className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-[#FAFAFC] border border-[#E2E8F0] text-[#0F172A]">
                  <p.Icon size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0F172A]">
                    {p.title}
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-[#64748B]">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </footer>

      </main>
    </div>
  );
}
