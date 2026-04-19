"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, ArrowRight, Calendar } from "lucide-react";
import type { Post } from "@/data/posts";

const categoryColors: Record<string, string> = {
  "Pre-Production": "badge-dream",
  Production: "badge-gold",
  "Post-Production": "badge-muted",
  Distribution: "badge-muted",
  Premiere: "badge-gold",
};

interface BlogCardProps {
  post: Post;
  featured?: boolean;
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  const badgeClass = categoryColors[post.category] || "badge-muted";

  if (featured) {
    return (
      <Link href={`/blog/${post.slug}`} className="group block h-full">
        <motion.article
          className="glass-card overflow-hidden h-full flex flex-col"
          whileHover={{ y: -4, transition: { duration: 0.25, ease: "easeOut" } }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Placeholder image */}
          <div className="relative h-52 bg-gradient-to-br from-surface to-elevated overflow-hidden flex-shrink-0">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="font-display text-5xl text-gold/15 font-black italic select-none">
                  {String(post.id).padStart(2, "0")}
                </div>
                <div className="text-xs font-mono text-text-muted/60 tracking-widest uppercase mt-1">
                  {post.category}
                </div>
              </div>
            </div>

            {/* Animated shimmer overlay on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute top-4 left-4">
              <motion.span
                className={badgeClass}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {post.category}
              </motion.span>
            </div>

            {/* Hover glow */}
            <motion.div
              className="absolute inset-0 bg-gold/5 pointer-events-none"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </div>

          <div className="p-5 space-y-3 flex-1 flex flex-col">
            <div className="flex items-center gap-3 text-xs text-text-muted font-mono">
              <span className="flex items-center gap-1.5">
                <Calendar size={11} /> {post.date}
              </span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span className="flex items-center gap-1.5">
                <Clock size={11} /> {post.readTime}
              </span>
            </div>
            <h3 className="font-display text-lg font-semibold text-text-primary group-hover:text-gold transition-colors duration-300 leading-snug flex-1">
              {post.title}
            </h3>
            <p className="text-sm text-text-muted line-clamp-2 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Animated read more */}
            <motion.div
              className="flex items-center gap-2 text-gold text-sm font-medium pt-1"
              initial={{ opacity: 0, x: -8 }}
              whileHover={{ opacity: 1, x: 0 }}
              animate={{ opacity: 0 }}
            >
              <span className="text-xs">Read more</span>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight size={13} />
              </motion.span>
            </motion.div>
          </div>
        </motion.article>
      </Link>
    );
  }

  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <motion.article
        className="glass-card p-5 flex gap-4 items-start"
        whileHover={{
          y: -2,
          borderColor: "rgba(212,168,67,0.3)",
          transition: { duration: 0.2, ease: "easeOut" },
        }}
        whileTap={{ scale: 0.99 }}
      >
        {/* Number */}
        <motion.div
          className="flex-shrink-0 w-12 h-12 rounded-xl bg-elevated border border-border flex items-center justify-center"
          whileHover={{ borderColor: "rgba(212,168,67,0.4)" }}
        >
          <span className="font-display text-base font-bold text-gold/50 group-hover:text-gold transition-colors duration-300">
            {String(post.id).padStart(2, "0")}
          </span>
        </motion.div>

        <div className="flex-1 min-w-0 space-y-1.5">
          <div className="flex items-center gap-2 flex-wrap">
            <span className={`${badgeClass} text-[10px]`}>{post.category}</span>
            <span className="text-[10px] text-text-muted font-mono flex items-center gap-1">
              <Calendar size={9} /> {post.date}
            </span>
          </div>
          <h3 className="font-display text-base font-semibold text-text-primary group-hover:text-gold transition-colors duration-300 leading-snug">
            {post.title}
          </h3>
          <p className="text-xs text-text-muted line-clamp-1 leading-relaxed">
            {post.excerpt}
          </p>
        </div>

        <motion.div
          className="flex-shrink-0 text-text-muted group-hover:text-gold mt-1"
          whileHover={{ x: 4 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          <ArrowRight size={16} />
        </motion.div>
      </motion.article>
    </Link>
  );
}
