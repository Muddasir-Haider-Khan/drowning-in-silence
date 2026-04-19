"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, ArrowRight, Tag, Images } from "lucide-react";
import type { Post } from "@/data/posts";
import { posts } from "@/data/posts";
import { ReactNode, useState } from "react";

interface Props {
  post: Post;
  prev: Post | null;
  next: Post | null;
  badgeClass: string;
  contentHtml: ReactNode;
}

export default function PostAnimations({ post, prev, next, badgeClass, contentHtml }: Props) {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  return (
    <>
      {/* Lightbox */}
      {lightboxSrc && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setLightboxSrc(null)}
        >
          <motion.div
            className="relative max-w-5xl w-full max-h-[90vh] overflow-hidden rounded-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightboxSrc}
              alt="Full size preview"
              width={1200}
              height={800}
              className="w-full h-auto max-h-[90vh] object-contain"
            />
            <button
              onClick={() => setLightboxSrc(null)}
              className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center hover:bg-black/80 transition-colors text-lg font-bold"
            >
              ×
            </button>
          </motion.div>
        </motion.div>
      )}

      {/* Back button */}
      <div className="max-w-3xl mx-auto px-6 pt-8 pb-4">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-gold transition-colors duration-200 group"
          >
            <motion.span
              className="inline-flex"
              whileHover={{ x: -3 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <ArrowLeft size={14} />
            </motion.span>
            Back to Blog
          </Link>
        </motion.div>
      </div>

      <div className="max-w-3xl mx-auto px-6">
        {/* Hero image — real asset */}
        <motion.div
          className="relative h-64 md:h-96 rounded-2xl overflow-hidden border border-border mb-8"
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-dream/5" />

          <div className="absolute top-4 left-4">
            <motion.span
              className={badgeClass}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              {post.category}
            </motion.span>
          </div>
          <div className="absolute bottom-4 right-4 font-mono text-xs text-white/60">
            Post {post.id} of {posts.length}
          </div>
        </motion.div>

        {/* Meta info */}
        <motion.div
          className="flex items-center gap-4 flex-wrap mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
        >
          <span className={badgeClass}>{post.category}</span>
          <span className="flex items-center gap-1.5 text-xs text-text-muted font-mono">
            <Calendar size={11} /> {post.date}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-text-muted font-mono">
            <Clock size={11} /> {post.readTime}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="font-display text-4xl md:text-5xl font-black text-text-primary leading-tight mb-6 text-balance"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {post.title}
        </motion.h1>

        {/* Gold divider */}
        <motion.div
          className="gold-line mb-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          style={{ originX: 0 }}
        />

        {/* Post Content */}
        <motion.article
          className="prose-custom space-y-5"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {contentHtml}
        </motion.article>

        {/* Gallery — only shown when post has multiple images */}
        {post.gallery && post.gallery.length > 1 && (
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Images size={14} className="text-gold" />
              <span className="text-xs font-mono text-text-muted tracking-widest uppercase">
                Gallery · {post.gallery.length} photos
              </span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {post.gallery.map((src, i) => (
                <motion.button
                  key={src}
                  className="relative aspect-video rounded-xl overflow-hidden border border-border group cursor-zoom-in"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35, delay: 0.5 + i * 0.06 }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  onClick={() => setLightboxSrc(src)}
                >
                  <Image
                    src={src}
                    alt={`${post.title} photo ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Tags */}
        <motion.div
          className="flex items-center gap-2 flex-wrap mt-10 pt-8 border-t border-border/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Tag size={13} className="text-text-muted" />
          {post.tags.map((tag, i) => (
            <motion.span
              key={tag}
              className="badge-muted text-xs"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.55 + i * 0.05 }}
              whileHover={{ scale: 1.05 }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        {/* Author card */}
        <motion.div
          className="glass-card p-6 mt-8 flex items-start gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ borderColor: "rgba(212,168,67,0.3)" }}
        >
          <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-border flex-shrink-0">
            <Image
              src="/images/habibullah.jpg"
              alt="Habibullah Wahaaj"
              fill
              className="object-cover object-top"
              sizes="48px"
            />
          </div>
          <div>
            <div className="text-xs font-mono text-text-muted mb-1 tracking-widest uppercase">Written by</div>
            <div className="font-display text-base font-semibold text-text-primary">Habibullah Wahaaj</div>
            <div className="text-xs text-text-muted mt-1">A2 Media Studies student · Event manager · Photographer</div>
          </div>
        </motion.div>

        {/* Prev / Next navigation */}
        <motion.div
          className="grid md:grid-cols-2 gap-4 mt-10"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          {prev ? (
            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <Link href={`/blog/${prev.slug}`} className="group glass-card overflow-hidden flex flex-col block">
                {/* Prev thumbnail strip */}
                <div className="relative h-20 overflow-hidden">
                  <Image src={prev.image} alt={prev.title} fill className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300" sizes="400px" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                </div>
                <div className="p-4">
                  <span className="text-xs font-mono text-text-muted flex items-center gap-1">
                    <ArrowLeft size={11} /> Previous
                  </span>
                  <span className="font-display text-sm font-semibold text-text-secondary group-hover:text-gold transition-colors duration-200 block mt-1">
                    {prev.title}
                  </span>
                </div>
              </Link>
            </motion.div>
          ) : <div />}
          {next ? (
            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <Link href={`/blog/${next.slug}`} className="group glass-card overflow-hidden flex flex-col text-right block">
                <div className="relative h-20 overflow-hidden">
                  <Image src={next.image} alt={next.title} fill className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300" sizes="400px" />
                  <div className="absolute inset-0 bg-gradient-to-l from-black/60 to-transparent" />
                </div>
                <div className="p-4">
                  <span className="text-xs font-mono text-text-muted flex items-center gap-1 justify-end">
                    Next <ArrowRight size={11} />
                  </span>
                  <span className="font-display text-sm font-semibold text-text-secondary group-hover:text-gold transition-colors duration-200 block mt-1">
                    {next.title}
                  </span>
                </div>
              </Link>
            </motion.div>
          ) : <div />}
        </motion.div>

        {/* Back to all */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
            <Link href="/blog" className="btn-outline">
              ← All Blog Posts
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
