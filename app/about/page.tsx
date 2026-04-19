"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection, { StaggerContainer, StaggerChild, FadeIn } from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Phone, ExternalLink, Camera, MapPin, Clapperboard } from "lucide-react";
import Link from "next/link";

const interests = [
  { icon: "📷", label: "Photography" },
  { icon: "🎬", label: "Media Production" },
  { icon: "🗓️", label: "Event Management" },
  { icon: "✈️", label: "Travelling" },
  { icon: "🏏", label: "Cricket" },
  { icon: "🎥", label: "Short Films" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-24">

        {/* Hero */}
        <section className="relative py-20 px-6 overflow-hidden">
          <motion.div
            className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-48 rounded-full bg-dream/6 blur-3xl"
            animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.9, 0.5] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="relative max-w-2xl mx-auto text-center space-y-4">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs font-mono text-gold tracking-widest uppercase badge-gold inline-block"
            >
              The Author
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl font-black text-text-primary leading-tight"
            >
              About <span className="text-gold italic">Me</span>
            </motion.h1>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-6">
          <FadeIn><div className="gold-line mb-16" /></FadeIn>

          {/* Profile Section */}
          <div className="grid md:grid-cols-3 gap-12 mb-20">

            {/* Avatar */}
            <AnimatedSection direction="left" delay={0.1} className="md:col-span-1 flex flex-col items-center gap-6">
              <div className="relative w-48 h-48">
                <motion.div
                  className="absolute inset-0 rounded-full border border-gold/20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-3 rounded-full border border-border overflow-hidden"
                  style={{ boxShadow: "0 0 40px rgba(212,168,67,0.15)" }}
                >
                  <Image
                    src="/habibullah.jpg"
                    alt="Habibullah Wahaaj"
                    fill
                    className="object-cover object-top"
                    sizes="180px"
                  />
                </motion.div>
              </div>

              <div className="text-center space-y-1">
                <div className="font-display text-xl font-bold text-text-primary">Habibullah Wahaaj</div>
                <div className="text-xs font-mono text-text-muted">A2 Media Studies Student</div>
              </div>

              {/* Contact card */}
              <motion.div
                className="w-full glass-card p-5 space-y-3"
                whileHover={{ borderColor: "rgba(212,168,67,0.3)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-xs font-mono text-text-muted tracking-widest uppercase mb-3">Contact Info</div>
                {[
                  { href: "mailto:HabibullahWahaaj@gmail.com", icon: Mail, label: "HabibullahWahaaj@gmail.com" },
                  { href: "tel:03348726303", icon: Phone, label: "03348726303" },
                ].map(({ href, icon: Icon, label }) => (
                  <motion.a
                    key={href}
                    href={href}
                    className="flex items-center gap-2.5 text-xs text-text-muted hover:text-gold transition-colors duration-200 group"
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Icon size={12} className="text-gold/50 group-hover:text-gold transition-colors" />
                    {label}
                  </motion.a>
                ))}
                <motion.a
                  href="https://ziyaddbaig.wixsite.com/ziyada2blog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-xs text-text-muted hover:text-gold transition-colors duration-200 group"
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <ExternalLink size={12} className="text-gold/50 group-hover:text-gold transition-colors" />
                  Partner Blog (Ziyad Baig)
                </motion.a>
              </motion.div>
            </AnimatedSection>

            {/* Bio */}
            <AnimatedSection direction="right" delay={0.2} className="md:col-span-2 space-y-8">
              <div className="space-y-5">
                <h2 className="font-display text-2xl font-bold text-text-primary">
                  Hi, I&apos;m <span className="text-gold italic">Habibullah.</span>
                </h2>
                <div className="space-y-4 text-sm text-text-secondary leading-relaxed">
                  <p>I&apos;ve always enjoyed being part of creative projects, especially when it comes to organizing and managing events. While I do photography and love capturing moments, I&apos;m more drawn to the planning side of things — bringing ideas together, handling the details, and making sure everything runs smoothly on the day.</p>
                  <p>Videography hasn&apos;t really been my favorite area, but every project is still a learning experience. I&apos;m constantly figuring out what I enjoy most and where I can do my best work — and for me, that&apos;s event management.</p>
                  <p>Other than work I really enjoy travelling, especially when it&apos;s connected to projects or events. I also spend a lot of time following cricket — I love the strategy and energy of the game.</p>
                </div>
              </div>

              {/* Interests Grid */}
              <div>
                <div className="text-xs font-mono text-text-muted tracking-widest uppercase mb-4">Interests &amp; Skills</div>
                <StaggerContainer className="grid grid-cols-3 gap-3">
                  {interests.map((item) => (
                    <StaggerChild key={item.label}>
                      <motion.div
                        className="glass-card p-3 text-center group cursor-default"
                        whileHover={{ y: -3, transition: { duration: 0.2 } }}
                      >
                        <motion.div
                          className="text-2xl mb-1"
                          whileHover={{ scale: 1.2, rotate: [0, -5, 5, 0] }}
                          transition={{ duration: 0.4 }}
                        >
                          {item.icon}
                        </motion.div>
                        <div className="text-[10px] font-mono text-text-muted group-hover:text-text-secondary transition-colors">{item.label}</div>
                      </motion.div>
                    </StaggerChild>
                  ))}
                </StaggerContainer>
              </div>

              {/* Project info */}
              <motion.div
                className="glass-card p-6 space-y-4 border-l-2 border-gold/40"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="text-xs font-mono text-gold tracking-widest uppercase">About This Project</div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  This blog serves as a breakdown of our A2 Media Studies project — a short film titled <em className="text-gold">&quot;Drowning in Silence.&quot;</em> This project was executed by me and my partner <strong className="text-text-primary">Ziyad Baig</strong>. The film follows a psychological dream-within-a-dream narrative, shot over two days in February.
                </p>
                <div className="flex gap-3 flex-wrap">
                  {[
                    { icon: Clapperboard, label: "A2 Media Studies" },
                    { icon: Camera, label: "Sony a6400" },
                    { icon: MapPin, label: "Karachi" },
                  ].map(({ icon: Icon, label }) => (
                    <motion.span
                      key={label}
                      className="badge-muted text-xs"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Icon size={9} className="inline mr-1" />{label}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>
          </div>

          {/* Partner & Actor Section */}
          <FadeIn><div className="gold-line mb-12" /></FadeIn>
          <StaggerContainer className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                initial: "Z",
                color: "text-dream-light/60",
                role: "Partner",
                name: "Ziyad Baig",
                bio: "My project partner and co-director. Ziyad handled most of the technical editing in Adobe Premiere Pro and provided the key RGB lights for the shoot. He also owns a Sony a6400 which was used as our main camera.",
                cta: { href: "https://ziyaddbaig.wixsite.com/ziyada2blog", label: "Visit Ziyad's Blog ↗", external: true },
              },
              {
                initial: "S",
                color: "text-gold/60",
                role: "Lead Actor",
                name: "Shahan Akbar",
                bio: 'The lead actor of "Drowning in Silence." A close friend of Ziyad\'s with modeling experience. He also lent us his ring light to use as the fill light for our shoot. Sadly, he was unable to attend the film premiere event.',
                badge: { label: "Starring Role · Drowning in Silence", className: "badge-gold" },
              },
            ].map((person) => (
              <StaggerChild key={person.name}>
                <motion.div
                  className="glass-card p-7 space-y-4 h-full"
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-elevated border border-border flex items-center justify-center">
                      <span className={`font-display text-xl font-bold ${person.color}`}>{person.initial}</span>
                    </div>
                    <div>
                      <div className="text-xs font-mono text-text-muted mb-0.5 tracking-widest uppercase">{person.role}</div>
                      <div className="font-display text-base font-semibold text-text-primary">{person.name}</div>
                    </div>
                  </div>
                  <p className="text-sm text-text-muted leading-relaxed">{person.bio}</p>
                  {person.cta && (
                    <motion.a
                      href={person.cta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline text-xs py-2 px-4 inline-flex"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      {person.cta.label}
                    </motion.a>
                  )}
                  {person.badge && (
                    <span className={`${person.badge.className} text-xs`}>{person.badge.label}</span>
                  )}
                </motion.div>
              </StaggerChild>
            ))}
          </StaggerContainer>

          {/* CTA */}
          <AnimatedSection direction="up" delay={0.1}>
            <div className="text-center">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
                <Link href="/blog" className="btn-gold">
                  Read the Production Blog
                </Link>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </main>
      <Footer />
    </>
  );
}
