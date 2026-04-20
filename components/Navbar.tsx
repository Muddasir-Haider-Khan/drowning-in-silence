"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Film } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About Me" },
  { href: "/critical-reflection", label: "Critical Reflection" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/80 backdrop-blur-2xl border-b border-border/60 shadow-[0_4px_32px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 rounded-xl bg-surface border border-border group-hover:border-gold/40 transition-all duration-300 flex items-center justify-center overflow-hidden">
            <Film size={16} className="text-gold group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute inset-0 bg-radial-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div>
            <span className="font-display text-lg font-semibold text-text-primary tracking-tight">
              Drowning<span className="text-gold">.</span>
            </span>
            <p className="text-[10px] font-mono text-text-muted tracking-widest uppercase -mt-0.5">
              In Silence
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover-underline ${
                  active
                    ? "text-gold"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {active && (
                  <span className="absolute inset-0 rounded-lg bg-gold/8" />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            );
          })}
          <div className="w-px h-4 bg-border mx-2" />
          <a
            href="https://ziyadbaiga2.weebly.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-xs py-2 px-4"
          >
            Partner Blog ↗
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-9 h-9 rounded-lg border border-border flex items-center justify-center text-text-secondary hover:text-gold hover:border-gold/40 transition-all duration-200"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 border-t border-border/40 bg-black/95 backdrop-blur-2xl space-y-1 pt-4">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  active
                    ? "text-gold bg-gold/8 border border-gold/20"
                    : "text-text-secondary hover:text-text-primary hover:bg-surface"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href="https://ziyadbaiga2.weebly.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-3 rounded-xl text-sm font-medium text-gold/80 hover:text-gold hover:bg-gold/5 transition-all duration-200"
          >
            Partner Blog (Ziyad Baig) ↗
          </a>
        </div>
      </div>
    </header>
  );
}
