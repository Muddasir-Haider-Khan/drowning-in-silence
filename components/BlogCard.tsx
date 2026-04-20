"use client";
import Link from "next/link";
import Image from "next/image";
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
  const isPlaceholder = post.image.includes("placeholder.jpg") || !post.image;

  const TypographyPlaceholder = ({ title, category, className }: { title: string, category: string, className?: string }) => (
    <div className={`relative w-full aspect-[4/3] min-h-[240px] bg-void flex items-center justify-center p-8 overflow-hidden ${className}`}>
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `radial-gradient(circle at 20% 30%, var(--color-gold) 0%, transparent 50%), 
                         radial-gradient(circle at 80% 70%, var(--color-dream) 0%, transparent 50%)`
      }} />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }} />
      
      {/* Text content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="font-display text-xl font-bold text-text-primary leading-tight max-w-[80%] line-clamp-3 italic opacity-80">
          {title}
        </div>
      </div>
    </div>
  );

  if (featured) {
    return (
      <Link href={`/blog/${post.slug}`} className="group block h-full">
        <motion.article
          className="glass-card overflow-hidden h-full flex flex-col"
          whileHover={{ y: -4, transition: { duration: 0.25, ease: "easeOut" } }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Real post image or Typographic Placeholder */}
          <div className="relative w-full overflow-hidden flex-shrink-0 bg-void">
            {!isPlaceholder ? (
              <Image
                src={post.image}
                alt={post.title}
                width={800}
                height={600}
                className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ display: 'block' }}
              />
            ) : (
              <TypographyPlaceholder title={post.title} category={post.category} />
            )}
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            {/* Shimmer on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/10 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            />

            <div className="absolute top-4 left-4">
              <motion.span
                className={badgeClass}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {post.category}
              </motion.span>
            </div>
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
        className="glass-card p-0 flex gap-0 items-start overflow-hidden"
        whileHover={{
          y: -2,
          borderColor: "rgba(203,162,69,0.3)",
          transition: { duration: 0.2, ease: "easeOut" },
        }}
        whileTap={{ scale: 0.99 }}
      >
        {/* Thumbnail or Mini Typographic Placeholder */}
        <div className="relative w-20 h-20 flex-shrink-0 overflow-hidden bg-void border-r border-border/50">
          {!isPlaceholder ? (
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="80px"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-void to-elevated">
              <span className="text-[10px] font-display font-bold text-gold/40 italic">
                {post.title.substring(0, 2).toUpperCase()}
              </span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
        </div>

        <div className="flex-1 min-w-0 p-4 space-y-1.5">
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
          className="flex-shrink-0 text-text-muted group-hover:text-gold p-4 self-center"
          whileHover={{ x: 4 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          <ArrowRight size={16} />
        </motion.div>
      </motion.article>
    </Link>
  );
}
