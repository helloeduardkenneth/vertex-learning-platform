import React from "react";
import Link from "next/link";
import { VertexLogo, BellIcon } from "@/components/vertex/icons";
import { Avatar } from "@/components/vertex/avatar";

export interface SiteHeaderProps {
  className?: string;
}

export function SiteHeader({ className = "" }: SiteHeaderProps) {
  return (
    <header
      className={`flex h-[88px] w-full items-center justify-between border-b border-[#F0E7E0] px-6 sm:px-10 lg:px-14 ${className}`}
    >
      {/* Brand & Main Nav */}
      <div className="flex items-center gap-8 sm:gap-10">
        <Link
          href="/"
          className="flex items-center gap-3 transition-opacity hover:opacity-90 outline-none focus-visible:ring-2 focus-visible:ring-[#FB923C] rounded-lg"
        >
          <VertexLogo size={32} />
          <span className="text-xl sm:text-[22px] font-bold tracking-tight text-[#0F172A]">
            Vertex
          </span>
        </Link>

        <nav className="flex items-center gap-6 sm:gap-8">
          <Link
            href="/courses"
            className="text-sm font-medium text-[#0F172A] transition-colors hover:text-[#F97316] outline-none focus-visible:ring-2 focus-visible:ring-[#FB923C] rounded"
          >
            Courses
          </Link>
          <Link
            href="/my-learning"
            className="text-sm font-medium text-[#0F172A] transition-colors hover:text-[#F97316] outline-none focus-visible:ring-2 focus-visible:ring-[#FB923C] rounded"
          >
            My Learning
          </Link>
        </nav>
      </div>

      {/* Right Utilities: Notifications & Profile */}
      <div className="flex items-center gap-4 sm:gap-5">
        <button
          type="button"
          aria-label="Notifications"
          className="flex h-10 w-10 items-center justify-center rounded-full text-[#0F172A] transition-colors hover:bg-black/5 hover:text-[#F97316] outline-none focus-visible:ring-2 focus-visible:ring-[#FB923C] cursor-pointer"
        >
          <BellIcon size={20} />
        </button>

        <Link
          href="/profile"
          aria-label="User Profile"
          className="outline-none focus-visible:ring-2 focus-visible:ring-[#FB923C] rounded-full"
        >
          <Avatar
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=120&auto=format&fit=crop"
            initials="SC"
            size={42}
            className="ring-2 ring-white/80"
          />
        </Link>
      </div>
    </header>
  );
}
