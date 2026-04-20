import Link from "next/link";
import { Film, Mail, Phone, ExternalLink } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-border/40 bg-void/80 backdrop-blur-xl mt-24">
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-surface border border-border flex items-center justify-center">
                <Film size={16} className="text-gold" />
              </div>
              <div>
                <span className="font-display text-lg font-semibold text-text-primary">
                  Drowning<span className="text-gold">.</span>
                </span>
                <p className="text-[10px] font-mono text-text-muted tracking-widest uppercase -mt-0.5">In Silence</p>
              </div>
            </div>
            <p className="text-sm text-text-muted leading-relaxed max-w-xs">
              A production diary documenting the making of an A2 Media Studies short film by Habibullah Wahaaj & Ziyad Baig.
            </p>
            <p className="inline-flex items-center gap-2 text-xs font-mono text-text-muted border border-border/60 rounded-lg px-3 py-2 bg-surface/40">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              A2 Media Studies — Film Project
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono text-text-muted tracking-widest uppercase">Navigate</h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/blog", label: "Blog" },
                { href: "/about", label: "About Me" },
                { href: "/critical-reflection", label: "Critical Reflection" },
                { href: "https://ziyadbaiga2.weebly.com/", label: "Partner Blog ↗", external: true },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-text-muted hover:text-gold transition-colors duration-200 hover-underline inline-flex items-center gap-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono text-text-muted tracking-widest uppercase">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:HabibullahWahaaj@gmail.com"
                  className="flex items-center gap-3 text-sm text-text-muted hover:text-gold transition-colors duration-200 group"
                >
                  <div className="w-7 h-7 rounded-lg bg-surface border border-border group-hover:border-gold/30 flex items-center justify-center transition-all duration-200">
                    <Mail size={12} className="text-text-muted group-hover:text-gold transition-colors" />
                  </div>
                  HabibullahWahaaj@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:03348726303"
                  className="flex items-center gap-3 text-sm text-text-muted hover:text-gold transition-colors duration-200 group"
                >
                  <div className="w-7 h-7 rounded-lg bg-surface border border-border group-hover:border-gold/30 flex items-center justify-center transition-all duration-200">
                    <Phone size={12} className="text-text-muted group-hover:text-gold transition-colors" />
                  </div>
                  03348726303
                </a>
              </li>
              <li>
                <a
                  href="https://ziyadbaiga2.weebly.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-text-muted hover:text-gold transition-colors duration-200 group"
                >
                  <div className="w-7 h-7 rounded-lg bg-surface border border-border group-hover:border-gold/30 flex items-center justify-center transition-all duration-200">
                    <ExternalLink size={12} className="text-text-muted group-hover:text-gold transition-colors" />
                  </div>
                  Ziyad Baig&apos;s Blog
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="gold-line mt-12 mb-6" />
        <div className="flex items-center justify-center">
          <p className="text-xs text-text-muted font-mono text-center">
            © {year} Habibullah Wahaaj. A2 Media Studies Project.
          </p>
        </div>
      </div>
    </footer>
  );
}
