import React from "react";
import { VertexLogo, ChevronRightIcon, ChevronLeftIcon } from "./icons";

export interface NavbarProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
  className?: string;
}

export function Navbar({
  activeTab = "Courses",
  onTabChange,
  className = "",
}: NavbarProps) {
  const tabs = ["Courses", "My Learning"];

  return (
    <header
      className={`flex items-center justify-between border-b border-[#E2E8F0] bg-white px-6 py-4 shadow-card-sm ${className}`}
    >
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2.5">
          <VertexLogo size={28} />
          <span className="text-xl font-bold tracking-tight text-[#0F172A]">
            Vertex
          </span>
        </div>

        <nav className="flex items-center gap-6">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => onTabChange?.(tab)}
                className={`text-sm font-medium transition-colors cursor-pointer ${
                  isActive
                    ? "text-[#F97316]"
                    : "text-[#64748B] hover:text-[#0F172A]"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
  onClick?: () => void;
}

export interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({
  items = [
    { label: "All Courses" },
    { label: "Next.js for Production" },
    { label: "Data Fetching & Caching" },
  ],
  className = "",
}: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={`flex items-center gap-2 text-sm ${className}`}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            {index > 0 && (
              <span className="text-[#94A3B8]">
                <ChevronRightIcon size={14} />
              </span>
            )}
            {isLast ? (
              <span className="font-medium text-[#0F172A]">{item.label}</span>
            ) : (
              <button
                type="button"
                onClick={item.onClick}
                className="font-normal text-[#64748B] hover:text-[#0F172A] transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}

export interface PaginationProps {
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
  className?: string;
}

export function Pagination({
  currentPage = 1,
  totalPages = 8,
  onPageChange,
  className = "",
}: PaginationProps) {
  return (
    <div className={`flex items-center gap-1.5 text-sm select-none ${className}`}>
      <button
        type="button"
        disabled={currentPage <= 1}
        onClick={() => onPageChange?.(currentPage - 1)}
        aria-label="Previous page"
        className="flex h-9 w-9 items-center justify-center rounded-[8px] border border-[#E2E8F0] bg-white text-[#64748B] hover:bg-[#F1F5F9] hover:text-[#0F172A] disabled:cursor-not-allowed disabled:opacity-40 transition-colors cursor-pointer"
      >
        <ChevronLeftIcon size={16} />
      </button>

      {[1, 2, 3].map((page) => {
        const isActive = currentPage === page;
        return (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange?.(page)}
            className={`flex h-9 w-9 items-center justify-center rounded-[8px] text-sm font-semibold transition-all cursor-pointer ${
              isActive
                ? "bg-[#F97316] text-white shadow-xs"
                : "border border-transparent text-[#64748B] hover:bg-[#F1F5F9] hover:text-[#0F172A]"
            }`}
          >
            {page}
          </button>
        );
      })}

      <span className="flex h-9 w-7 items-center justify-center text-xs text-[#94A3B8]">
        ...
      </span>

      <button
        type="button"
        onClick={() => onPageChange?.(totalPages)}
        className={`flex h-9 w-9 items-center justify-center rounded-[8px] text-sm font-semibold transition-all cursor-pointer ${
          currentPage === totalPages
            ? "bg-[#F97316] text-white shadow-xs"
            : "border border-transparent text-[#64748B] hover:bg-[#F1F5F9] hover:text-[#0F172A]"
        }`}
      >
        {totalPages}
      </button>

      <button
        type="button"
        disabled={currentPage >= totalPages}
        onClick={() => onPageChange?.(currentPage + 1)}
        aria-label="Next page"
        className="flex h-9 w-9 items-center justify-center rounded-[8px] border border-[#E2E8F0] bg-white text-[#64748B] hover:bg-[#F1F5F9] hover:text-[#0F172A] disabled:cursor-not-allowed disabled:opacity-40 transition-colors cursor-pointer"
      >
        <ChevronRightIcon size={16} />
      </button>
    </div>
  );
}
