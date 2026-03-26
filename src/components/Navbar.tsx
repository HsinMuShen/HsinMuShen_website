 "use client";

import Image from "next/image";
import { useState } from "react";
import { navigationItems, siteConfig } from "@/data/site";

export function Navbar() {
  const showLogo = siteConfig.logo && siteConfig.logo.trim() !== "";
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-canvas/90 backdrop-blur-xl">
      <nav className="mx-auto max-w-6xl px-6 py-4 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between gap-4">
          <a href="/" className="flex items-center gap-3 text-sm font-semibold text-ink">
            {showLogo ? (
              <span className="relative inline-flex h-10 w-10 overflow-hidden rounded-full bg-brand-600 shadow-lg shadow-brand-600/20">
                <Image src={siteConfig.logo!} alt="" fill className="object-cover" sizes="40px" />
              </span>
            ) : (
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-white shadow-lg shadow-brand-600/20">
                HM
              </span>
            )}
            <span className="hidden sm:inline">{siteConfig.name}</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate transition hover:text-brand-700"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate transition hover:border-brand-300 hover:text-brand-700 md:hidden"
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Toggle navigation</span>
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {open ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <>
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile dropdown menu */}
        {open && (
          <div className="mt-3 space-y-1 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-soft md:hidden">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-2 text-sm font-medium text-slate hover:bg-slate-50 hover:text-brand-700"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
