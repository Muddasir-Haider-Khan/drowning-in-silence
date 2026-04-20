"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { posts, categories } from "@/data/posts";
import BlogCard from "@/components/BlogCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection, { FadeIn } from "@/components/AnimatedSection";
import { Search, Filter, BookOpen } from "lucide-react";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = posts.filter((p) => {
    const matchCategory = activeCategory === "All" || p.category === activeCategory;
    const matchSearch =
      searchQuery === "" ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-24">

        {/* Header */}
        <section className="relative py-20 px-6 text-center overflow-hidden">
          <motion.div
            className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 rounded-full bg-gold/5 blur-3xl"
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="relative max-w-2xl mx-auto space-y-4">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs font-mono text-gold tracking-widest uppercase badge-gold inline-flex items-center gap-1.5"
            >
              <BookOpen size={11} /> Production Diary
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl font-black text-text-primary leading-tight"
            >
              The <span className="text-gold italic">Blog</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-text-muted text-sm max-w-md mx-auto"
            >
              {posts.length} posts documenting every step of the &quot;Drowning in Silence&quot; film project — from first idea to the premiere.
            </motion.p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="gold-line mb-10" />
          </FadeIn>

          {/* Search + Filter Controls */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col md:flex-row gap-4 mb-10"
          >
            {/* Search */}
            <div className="relative flex-1">
              <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
              <input
                type="text"
                placeholder="Search posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-surface border border-border rounded-xl text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-all duration-200 font-sans"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2 flex-wrap">
              <Filter size={14} className="text-text-muted flex-shrink-0" />
              {categories.map((cat) => (
                <motion.button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className={`px-3 py-2 rounded-lg text-xs font-mono font-medium tracking-wide uppercase transition-all duration-200 border ${
                    activeCategory === cat
                      ? "bg-gold/15 border-gold/40 text-gold shadow-gold-sm"
                      : "bg-surface border-border text-text-muted hover:border-gold/20 hover:text-text-secondary"
                  }`}
                >
                  {cat}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Results count */}
          <motion.p
            className="text-xs font-mono text-text-muted mb-6"
            key={`${activeCategory}-${searchQuery}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            Showing <span className="text-gold">{filtered.length}</span> of {posts.length} posts
            {activeCategory !== "All" && (
              <> · <span className="text-dream-light">{activeCategory}</span></>
            )}
          </motion.p>

          {/* Masonry Layout with CSS Columns */}
          {filtered.length > 0 ? (
            <motion.div
              className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5"
              layout
            >
              <AnimatePresence mode="popLayout">
                {filtered.map((post, i) => (
                  <motion.div
                    key={post.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{
                      duration: 0.4,
                      delay: i * 0.02,
                    }}
                    className="break-inside-avoid-column mb-5"
                  >
                    <BlogCard post={post} featured />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              className="glass-card p-16 text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="font-display text-4xl text-gold/20 mb-4">∅</div>
              <p className="text-text-muted text-sm">No posts found for &quot;{searchQuery}&quot;</p>
              <motion.button
                onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
                className="btn-outline text-xs py-2 px-4 mt-4 inline-flex"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Clear filters
              </motion.button>
            </motion.div>
          )}

          {/* Timeline */}
          <div className="mt-24">
            <FadeIn>
              <div className="gold-line mb-12" />
            </FadeIn>
            <AnimatedSection delay={0.05}>
              <h2 className="font-display text-2xl font-bold text-text-primary mb-8">
                Project <span className="text-gold italic">Timeline</span>
              </h2>
            </AnimatedSection>
            <div className="relative pl-6 border-l border-border/60 space-y-6">
              {posts.map((post, i) => (
                <motion.div
                  key={post.id}
                  className="relative group"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                >
                  <motion.div
                    className="timeline-dot absolute -left-[25px]"
                    whileInView={{ scale: [0, 1.3, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.04 + 0.1 }}
                  />
                  <div className="ml-4">
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <span className="text-xs font-mono text-text-muted">{post.date}</span>
                      <span className="text-[10px] font-mono text-gold tracking-widest uppercase">{post.category}</span>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="font-display text-base font-semibold text-text-secondary hover:text-gold transition-colors duration-200"
                    >
                      {String(i + 1).padStart(2, "0")}. {post.title}
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
