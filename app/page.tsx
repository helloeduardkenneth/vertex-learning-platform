import React from "react";
import Link from "next/link";
import { PageFrame } from "@/components/layout/page-frame";
import { SiteHeader } from "@/components/layout/site-header";
import { Hero } from "@/components/home/hero";
import { ChartDecoration } from "@/components/home/chart-decoration";
import {
  CourseCard,
  NextjsLogo,
  DockerLogo,
  TypeScriptLogo,
  StarIcon,
  ArrowRightIcon,
} from "@/components/vertex";

interface CourseItem {
  id: string;
  title: string;
  description: string;
  level: string;
  duration: string;
  modules: string;
  icon: React.ReactNode;
  iconContainerClassName?: string;
  href: string;
}

const FEATURED_COURSES: CourseItem[] = [
  {
    id: "nextjs-for-production",
    title: "Next.js for Production",
    description:
      "Build scalable, high-performance web applications with Next.js.",
    level: "Intermediate",
    duration: "18h 24m",
    modules: "12 modules",
    icon: <NextjsLogo size={36} className="text-white" />,
    iconContainerClassName: "bg-[#0F172A] text-white",
    href: "/courses/nextjs-for-production",
  },
  {
    id: "docker-essentials",
    title: "Docker Essentials",
    description:
      "Containerize applications and streamline your development workflow.",
    level: "Beginner",
    duration: "10h 12m",
    modules: "8 modules",
    icon: <DockerLogo size={64} />,
    iconContainerClassName: "bg-transparent",
    href: "/courses/docker-essentials",
  },
  {
    id: "typescript-deep-dive",
    title: "TypeScript Deep Dive",
    description:
      "Go beyond the basics and write safer, more expressive code.",
    level: "Intermediate",
    duration: "14h 36m",
    modules: "10 modules",
    icon: <TypeScriptLogo size={72} />,
    iconContainerClassName: "bg-transparent",
    href: "/courses/typescript-deep-dive",
  },
];

export default function HomePage() {
  return (
    <PageFrame>
      <SiteHeader />

      <main className="flex flex-1 flex-col">
        {/* Hero Section */}
        <Hero />

        {/* Section Divider Hairline */}
        <hr className="w-full border-t border-[#F0E7E0] my-0" />

        {/* All Courses Section */}
        <section className="px-6 py-12 sm:px-10 sm:py-16 lg:px-14">
          {/* Section Header */}
          <div className="flex items-center justify-between">
            <h2 className="font-display text-2xl font-bold tracking-tight text-[#0F172A] sm:text-[30px]">
              All Courses
            </h2>
            <Link
              href="/courses"
              className="group inline-flex items-center gap-1.5 text-sm sm:text-[15px] font-semibold text-[#F97316] transition-colors hover:text-[#EA580C] outline-none focus-visible:ring-2 focus-visible:ring-[#FB923C] rounded"
            >
              <span>View all courses</span>
              <ArrowRightIcon
                size={16}
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          {/* 3-Column Course Cards Grid */}
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {FEATURED_COURSES.map((course) => (
              <Link
                key={course.id}
                href={course.href}
                className="block outline-none focus-visible:ring-2 focus-visible:ring-[#FB923C] rounded-[20px]"
              >
                <CourseCard
                  layout="stacked"
                  title={course.title}
                  description={course.description}
                  level={course.level}
                  duration={course.duration}
                  modules={course.modules}
                  icon={course.icon}
                  iconContainerClassName={course.iconContainerClassName}
                  className="h-full"
                />
              </Link>
            ))}
          </div>

          {/* Footer Note */}
          <div className="mt-14 flex items-center justify-center gap-4">
            <div className="h-[1px] flex-1 bg-[#F0E7E0]" />
            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#0F172A]">
              <StarIcon size={16} aria-hidden="true" className="text-[#F97316]" />
              <span>New courses and lessons added every week.</span>
            </div>
            <div className="h-[1px] flex-1 bg-[#F0E7E0]" />
          </div>
        </section>

        {/* Bottom Graphic Decoration */}
        <ChartDecoration />
      </main>
    </PageFrame>
  );
}
