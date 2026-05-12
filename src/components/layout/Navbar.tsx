"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navLinks, siteConfig } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[200] transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between h-[80px] max-w-7xl mx-auto px-5 md:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group"
          aria-label="Pro Lead Maker - Go to homepage"
        >
          <Image
            src="/images/Logo.png"
            alt="Pro Lead Maker"
            width={180}
            height={48}
            className="h-[42px] w-auto opacity-100 transition-opacity"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm font-bold px-4 py-2 rounded-xl transition-all duration-300 ${
                  pathname === link.href
                    ? "text-brand-purple bg-brand-purple/5"
                    : "text-slate-600 hover:text-brand-purple hover:bg-brand-purple/5"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/contact"
            className="text-sm font-bold px-6 py-2.5 rounded-xl border-2 border-slate-200 text-slate-700 hover:text-brand-purple hover:border-brand-purple/30 hover:bg-brand-purple/5 transition-all duration-300"
          >
            Book a Call
          </Link>
          <Link
            href="/#free-sample"
            className="text-sm font-black px-6 py-2.5 rounded-xl bg-gradient-brand text-white shadow-lg shadow-brand-purple/20 hover:shadow-brand-purple/40 hover:-translate-y-0.5 transition-all duration-300 tracking-tight"
          >
            Get FREE Sample
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-slate-900 transition-transform duration-300 ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-slate-900 transition-opacity duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-slate-900 transition-transform duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-[80px] left-0 right-0 bg-white border-b border-slate-200 transition-all duration-300 shadow-2xl overflow-hidden ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-6 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-base font-bold px-4 py-3 rounded-xl transition-all ${
                pathname === link.href
                  ? "text-brand-purple bg-brand-purple/5"
                  : "text-slate-600 hover:text-brand-purple hover:bg-brand-purple/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-slate-100">
            <Link
              href="/contact"
              className="text-center text-sm font-bold px-5 py-3 rounded-xl border-2 border-slate-200 text-slate-700"
            >
              Book a Call
            </Link>
            <Link
              href="/#free-sample"
              className="text-center text-sm font-black px-5 py-3 rounded-xl bg-gradient-brand text-white shadow-lg tracking-tight"
            >
              Get FREE Sample
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
