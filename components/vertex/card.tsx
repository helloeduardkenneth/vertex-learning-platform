import React from "react";
import { Badge } from "./badge";
import {
  BarChartIcon,
  ClockIcon,
  DocIcon,
  PlayIcon,
  ExternalLinkIcon,
  NextjsLogo,
} from "./icons";

export interface CardBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Card({ children, className = "", ...props }: CardBaseProps) {
  return (
    <div
      className={`group relative flex flex-col justify-between rounded-[16px] border border-[#E2E8F0] bg-white p-6 shadow-card-sm transition-all duration-200 hover:border-[#CBD5E1] hover:shadow-card-md ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export interface CourseCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  level?: string;
  duration?: string;
  modules?: string;
  layout?: "row" | "stacked";
  iconContainerClassName?: string;
  className?: string;
  onClick?: () => void;
}

export function CourseCard({
  icon = <NextjsLogo size={22} className="text-white" />,
  title = "Next.js for Production",
  description = "Build scalable, high-performance web applications with Next.js.",
  level = "Intermediate",
  duration = "18h 24m",
  modules = "12 modules",
  layout = "row",
  iconContainerClassName,
  className = "",
  onClick,
}: CourseCardProps) {
  if (layout === "stacked") {
    const isClickable = Boolean(onClick);
    return (
      <div
        role={isClickable ? "button" : undefined}
        tabIndex={isClickable ? 0 : undefined}
        onKeyDown={
          isClickable
            ? (e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onClick?.();
                }
              }
            : undefined
        }
        className={`group relative flex flex-col justify-between rounded-[20px] border border-[#E2E8F0] bg-white p-7 shadow-card-sm transition-all duration-200 hover:border-[#CBD5E1] hover:shadow-card-md ${
          isClickable ? "cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#FB923C]" : ""
        } ${className}`}
        onClick={onClick}
      >
        <div>
          <div
            className={`flex h-[72px] w-[72px] items-center justify-center rounded-[16px] shadow-xs ${
              iconContainerClassName || "bg-[#0F172A] text-white"
            }`}
          >
            {icon}
          </div>
          <h3 className="mt-6 text-[22px] font-bold font-display text-[#0F172A] leading-snug transition-colors group-hover:text-[#F97316]">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[#64748B]">
            {description}
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-[#F1F5F9] pt-5 text-xs font-medium text-[#64748B]">
          <div className="flex items-center gap-1.5">
            <BarChartIcon size={16} />
            <span>{level}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ClockIcon size={16} />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <DocIcon size={16} />
            <span>{modules}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Card className={`cursor-pointer ${className}`} onClick={onClick}>
      <div>
        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-[10px] bg-[#0F172A] text-white shadow-xs">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-[#0F172A] transition-colors group-hover:text-[#F97316]">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[#64748B]">
          {description}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-[#F1F5F9] pt-4 text-xs font-medium text-[#64748B]">
        <div className="flex items-center gap-1.5">
          <BarChartIcon size={16} />
          <span>{level}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <ClockIcon size={16} />
          <span>{duration}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <DocIcon size={16} />
          <span>{modules}</span>
        </div>
      </div>
    </Card>
  );
}

export interface LessonVideoCardProps {
  badgeText?: string;
  title: string;
  description: string;
  lessonMeta?: string;
  actionText?: string;
  className?: string;
  onActionClick?: () => void;
}

export function LessonVideoCard({
  badgeText = "VIDEO",
  title = "Data Fetching in Server Components",
  description = "Learn how to fetch data on the server using async/await and Next.js best practices.",
  lessonMeta = "Lesson 5.1 • 12:45",
  actionText = "Watch from 12:45",
  className = "",
  onActionClick,
}: LessonVideoCardProps) {
  return (
    <Card className={className}>
      <div>
        <div className="mb-3">
          <Badge variant="video">{badgeText}</Badge>
        </div>
        <h3 className="text-lg font-semibold text-[#0F172A] transition-colors group-hover:text-[#F97316]">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[#64748B]">
          {description}
        </p>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-[#F1F5F9] pt-4 text-xs">
        <span className="font-medium text-[#64748B]">{lessonMeta}</span>
        <button
          type="button"
          onClick={onActionClick}
          className="inline-flex items-center gap-1.5 font-medium text-[#F97316] transition-colors hover:text-[#EA580C] cursor-pointer"
        >
          <PlayIcon size={14} variant="filled" className="text-[#F97316]" />
          <span>{actionText}</span>
        </button>
      </div>
    </Card>
  );
}

export interface LessonArticleCardProps {
  badgeText?: string;
  title: string;
  description: string;
  moduleMeta?: string;
  actionText?: string;
  className?: string;
  onActionClick?: () => void;
}

export function LessonArticleCard({
  badgeText = "LESSON",
  title = "Data Fetching & Caching",
  description = "Explore different data fetching methods in Next.js and how to cache and revalidate data for optimal performance.",
  moduleMeta = "Module 5",
  actionText = "View lesson",
  className = "",
  onActionClick,
}: LessonArticleCardProps) {
  return (
    <Card className={className}>
      <div>
        <div className="mb-3">
          <Badge variant="lesson">{badgeText}</Badge>
        </div>
        <h3 className="text-lg font-semibold text-[#0F172A] transition-colors group-hover:text-[#F97316]">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[#64748B]">
          {description}
        </p>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-[#F1F5F9] pt-4 text-xs">
        <span className="font-medium text-[#64748B]">{moduleMeta}</span>
        <button
          type="button"
          onClick={onActionClick}
          className="inline-flex items-center gap-1 font-medium text-[#F97316] transition-colors hover:text-[#EA580C] cursor-pointer"
        >
          <span>{actionText}</span>
          <ExternalLinkIcon size={14} />
        </button>
      </div>
    </Card>
  );
}

export interface ResourceCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  fileMeta?: string;
  className?: string;
  onDownload?: () => void;
}

export function ResourceCard({
  icon = <DocIcon size={24} className="text-[#0F172A]" />,
  title = "Caching and Revalidation Guide",
  description = "Deep dive into Next.js caching strategies.",
  fileMeta = "PDF • 1.2 MB",
  className = "",
  onDownload,
}: ResourceCardProps) {
  return (
    <Card className={className}>
      <div>
        <div className="mb-3 text-[#0F172A]">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-[#0F172A] transition-colors group-hover:text-[#F97316]">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[#64748B]">
          {description}
        </p>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-[#F1F5F9] pt-4 text-xs">
        <span className="font-medium text-[#64748B]">{fileMeta}</span>
        <button
          type="button"
          onClick={onDownload}
          aria-label="Download resource"
          className="text-[#F97316] transition-colors hover:text-[#EA580C] cursor-pointer"
        >
          <ExternalLinkIcon size={16} />
        </button>
      </div>
    </Card>
  );
}
