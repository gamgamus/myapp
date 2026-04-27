"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navLinks } from "@/data/siteContent";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur">
      <nav className="section-container flex h-16 items-center justify-between" aria-label="Main navigation">
        <Link href="#home" className="font-semibold text-navy">
          MicroFinTech Inc <span className="text-tealTech">(MFTI)</span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-slate-700 transition hover:text-blueTech">
              {link.label}
            </a>
          ))}
          <button
            className="rounded-full border border-slate-300 px-3 py-1 text-xs font-medium text-slate-700"
            aria-label="Language toggle placeholder"
            type="button"
          >
            EN / ES
          </button>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          className="rounded p-2 text-slate-700 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="section-container space-y-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-sm text-slate-700"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
