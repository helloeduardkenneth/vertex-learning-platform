import React from "react";
import Link from "next/link";
import { VertexLogo, BellIcon } from "@/components/vertex/icons";
import { SignInButton, SignUpButton, Show, UserButton } from "@clerk/nextjs";

export interface SiteHeaderProps {
  className?: string;
}

export function SiteHeader({ className = "" }: SiteHeaderProps) {
  return (
    <header
      className={`flex min-h-[88px] w-full items-center justify-between border-b border-[#F0E7E0] px-6 sm:px-10 lg:px-14 ${className}`}
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

        <nav className="hidden sm:flex items-center gap-6 sm:gap-8">
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

        <Show when="signed-out">
          <div className="flex items-center gap-3">
            <SignInButton mode="modal">
              <button className="text-sm font-medium text-[#0F172A] transition-colors hover:text-[#F97316] outline-none focus-visible:ring-2 focus-visible:ring-[#FB923C] rounded">
                Sign In
              </button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className="text-sm font-medium bg-[#0F172A] text-white px-4 py-2 transition-colors hover:bg-[#F97316] outline-none focus-visible:ring-2 focus-visible:ring-[#FB923C] rounded-full">
                Sign Up
              </button>
            </SignUpButton>
          </div>
        </Show>
        <Show when="signed-in">
          <UserButton 
            appearance={{
              elements: {
                userButtonAvatarBox: "h-[42px] w-[42px] ring-2 ring-white/80"
              }
            }}
          />
        </Show>
      </div>
    </header>
  );
}
