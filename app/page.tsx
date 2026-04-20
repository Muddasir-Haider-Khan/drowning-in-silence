"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { posts } from "@/data/posts";
import { Camera, Clapperboard, User, ExternalLink, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import AnimatedSection, { FadeIn } from "@/components/AnimatedSection";
import PortfolioGallery from "@/components/PortfolioGallery";

const stats = [
  { label: "Blog Posts", value: "15", icon: Clapperboard },
  { label: "Shoot Days", value: "02", icon: Camera },
  { label: "Days Total", value: "03", icon: User },
];

export default function HomePage() {
  const recentPosts = posts.slice(-4).reverse();

  return (
    <>
      <Navbar />
      <main>

        {/* ── Hero Section ─────────────────────────── */}
        <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
          {/* Dark sea hero background */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-bg.jpg"
              alt=""
              fill
              className="object-cover opacity-20"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-void/60 via-void/40 to-void" />
          </div>
          {/* Background orbs - GPU accelerated */}
          <div className="pointer-events-none absolute inset-0">
            <motion.div
              className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-gold/4 blur-[80px]"
              style={{ willChange: "transform" }}
              animate={{ y: [0, -30, 0], x: [0, 10, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-dream/6 blur-[80px]"
              style={{ willChange: "transform" }}
              animate={{ y: [0, 25, 0], x: [0, -10, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />
          </div>

          {/* Grid lines */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(203,162,69,1) 1px, transparent 1px), linear-gradient(90deg, rgba(203,162,69,1) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />

          <div className="relative max-w-4xl mx-auto text-center space-y-8 pt-24 pb-16">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/8 border border-gold/20 text-xs font-mono text-gold tracking-widest uppercase"
            >
              <motion.span
                className="w-1.5 h-1.5 rounded-full bg-gold"
                animate={{ opacity: [1, 0.2, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              />
              A2 Media Studies · Film Project
            </motion.div>

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-mono text-sm text-text-muted tracking-widest uppercase"
            >
              Habibullah Wahaaj &amp; Ziyad Baig
            </motion.div>

            {/* Main title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-6xl md:text-8xl font-black text-text-primary leading-none tracking-tight text-balance"
            >
              Drowning
              <motion.span
                className="block text-transparent bg-clip-text bg-gradient-to-br from-gold via-gold-light to-gold-dark"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              >
                In Silence
              </motion.span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
              className="font-sans text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed text-balance"
            >
              Hi! My name is Habibullah. This blog serves as a breakdown of our A2 Media Studies project — executed by me and my partner Ziyad Baig.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85, ease: "easeOut" }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <motion.div whileHover={{ scale: 1.04, y: -1 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 400, damping: 20 }}>
                <Link href="/blog" className="btn-gold">
                  Read the Blog <ArrowRight size={16} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04, y: -1 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 400, damping: 20 }}>
                <a
                  href="https://ziyadbaiga2.weebly.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  Partner Blog <ExternalLink size={14} />
                </a>
              </motion.div>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
              className="grid grid-cols-3 gap-4 max-w-sm mx-auto pt-4"
            >
              {stats.map(({ label, value, icon: Icon }, i) => (
                <motion.div
                  key={label}
                  className="glass-card p-4 text-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.05 + i * 0.08, ease: "easeOut" }}
                  whileHover={{ y: -4, transition: { type: "spring", stiffness: 400, damping: 20 } }}
                >
                  <Icon size={16} className="text-gold mx-auto mb-2 opacity-80" />
                  <div className="font-display text-2xl font-bold text-gold">{value}</div>
                  <div className="text-[10px] font-mono text-text-muted tracking-wider uppercase mt-0.5">{label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Scroll indicator - clean & minimal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
              className="flex flex-col items-center gap-3 pt-6"
            >
              <motion.div
                className="w-5 h-8 rounded-full border border-gold/30 flex items-start justify-center pt-1.5"
              >
                <motion.div
                  className="w-1 h-1.5 rounded-full bg-gold/70"
                  animate={{ y: [0, 10, 0], opacity: [1, 0, 1] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── About Section ────────────────────────── */}
        <section className="relative py-28 px-6">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <div className="gold-line mb-16" />
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-16 items-center">

              {/* Avatar */}
              <AnimatedSection direction="left" delay={0.1}>
                <div className="relative flex justify-center">
                  <div className="relative w-72 h-72">
                    <motion.div
                      className="absolute inset-0 rounded-full border border-gold/20"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.div
                      className="absolute inset-4 rounded-full border border-dream/20"
                      animate={{ rotate: -360 }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    />
                    <div className="absolute inset-8 rounded-full border border-border overflow-hidden shadow-gold">
                      <Image
                        src="/images/about-me-main.jpg"
                        alt="Habibullah Wahaaj"
                        fill
                        className="object-cover object-top"
                        sizes="200px"
                      />
                    </div>
                    {/* Floating badges */}
                    <motion.div
                      className="absolute -right-4 top-8 badge-gold text-[9px] shadow-gold-sm"
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                      📷 Photographer
                    </motion.div>
                    <motion.div
                      className="absolute -left-4 bottom-12 badge-dream text-[9px]"
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    >
                      🎬 Media Student
                    </motion.div>
                    <motion.div
                      className="absolute right-0 bottom-4 badge-muted text-[9px]"
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    >
                      🏏 Cricket Fan
                    </motion.div>
                  </div>
                </div>
              </AnimatedSection>

              {/* About Content */}
              <AnimatedSection direction="right" delay={0.2}>
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-mono text-gold tracking-widest uppercase">About Me</span>
                    <h2 className="font-display text-4xl font-bold text-text-primary mt-2 leading-tight">
                      Hi, I&apos;m <span className="text-gold italic">Habibullah.</span>
                    </h2>
                  </div>
                  <div className="space-y-4 text-sm text-text-secondary leading-relaxed">
                    <p>
                      I&apos;ve always enjoyed being part of creative projects, especially when it comes to organizing and managing events. While I do photography and love capturing moments, I&apos;m more drawn to the planning side of things — bringing ideas together, handling the details, and making sure everything runs smoothly on the day.
                    </p>
                    <p>
                      Videography hasn&apos;t really been my favorite area, but every project is still a learning experience. I&apos;m constantly figuring out what I enjoy most and where I can do my best work — and for me, that&apos;s event management.
                    </p>
                    <p>
                      Other than work I really enjoy travelling, especially when it&apos;s connected to projects or events. I also spend a lot of time following cricket — I love the strategy and energy of the game.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {["Event Management", "Photography", "Travelling", "Cricket", "Media Production"].map((tag, i) => (
                      <motion.span
                        key={tag}
                        className="badge-muted text-xs"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.07, duration: 0.3 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-2">
                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                      <Link href="/about" className="btn-outline text-xs py-2 px-4">
                        Read More About Me
                      </Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                      <a href="mailto:HabibullahWahaaj@gmail.com" className="btn-gold text-xs py-2 px-4">
                        Get in Touch
                      </a>
                    </motion.div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <PortfolioGallery />

        {/* ── Recent Posts ─────────────────────────── */}
        <section className="relative py-28 px-6 border-t border-border/20">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection delay={0.05}>
              <div className="flex items-end justify-between mb-12">
                <div>
                  <span className="text-xs font-mono text-gold tracking-widest uppercase">Production Diary</span>
                  <h2 className="font-display text-4xl font-bold text-text-primary mt-2">
                    Latest <span className="text-gold italic">Entries</span>
                  </h2>
                </div>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="hidden md:block">
                  <Link href="/blog" className="btn-outline text-xs py-2 px-4 flex items-center gap-2">
                    View All Posts <ArrowRight size={13} />
                  </Link>
                </motion.div>
              </div>
            </AnimatedSection>

            <div className="columns-1 md:columns-2 gap-6 space-y-6">
              {recentPosts.map((post) => (
                <div key={post.id} className="break-inside-avoid-column mb-6">
                  <BlogCard post={post} featured />
                </div>
              ))}
            </div>

            <motion.div
              className="flex justify-center mt-8 md:hidden"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <Link href="/blog" className="btn-outline">
                View All Blog Posts <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── Partner Blog CTA ─────────────────────── */}
        <section className="py-28 px-6 border-t border-border/20">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection delay={0.05} direction="up">
              <motion.div
                className="relative overflow-hidden rounded-3xl border border-dream/20 bg-surface/40 p-12 text-center"
                style={{ backdropFilter: "blur(24px)" }}
                whileHover={{ borderColor: "rgba(124,111,240,0.4)", boxShadow: "0 0 60px rgba(124,111,240,0.08)" }}
                transition={{ duration: 0.4 }}
              >
                {/* Ambient glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-dream/8 via-transparent to-gold/6 pointer-events-none rounded-3xl" />
                <motion.div
                  className="absolute -top-20 left-1/2 -translate-x-1/2 w-60 h-60 rounded-full bg-dream/10 blur-3xl"
                  animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="relative space-y-5">
                  <span className="text-xs font-mono text-dream-light tracking-widest uppercase badge-dream">
                    Also Read
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary">
                    Check out{" "}
                    <span className="text-dream-light italic">Ziyad Baig&apos;s</span> blog
                  </h2>
                  <p className="text-sm text-text-muted max-w-md mx-auto leading-relaxed">
                    My partner also documented his perspective on the full production journey — from planning to premiere.
                  </p>
                  <motion.a
                    href="https://ziyadbaiga2.weebly.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline inline-flex mt-2"
                    whileHover={{ scale: 1.04, y: -1 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    Visit Ziyad&apos;s Blog <ExternalLink size={14} />
                  </motion.a>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
