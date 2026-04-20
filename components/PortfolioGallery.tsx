"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { X, PlayCircle } from "lucide-react";

const row1 = [
  { type: "image", src: "/Previous%20work/Previous%20Work.jpg" },
  { type: "image", src: "/Previous%20work/Previous%20work%2010.jpg" },
  { type: "image", src: "/Previous%20work/Previous%20work%2011.jpg" },
  { type: "image", src: "/Previous%20work/Previous%20work%2012.jpg" },
  { type: "image", src: "/Previous%20work/Previous%20work%2013.jpg" },
  { type: "image", src: "/Previous%20work/Previous%20work%2014.jpg" },
  { type: "image", src: "/Previous%20work/Previous%20work%2015.jpg" },
  { type: "image", src: "/Previous%20work/Previous%20work%2016.jpg" },
  { type: "image", src: "/Previous%20work/Previous%20work%2017.jpg" },
  { type: "image", src: "/Previous%20work/Previous%20work%2018.jpg" },
  { type: "image", src: "/Previous%20work/Previous%20work%2019.jpg" },
  { type: "image", src: "/Previous%20work/Previous%20work%202.jpg" },
];

const row2 = [
  { type: "image", src: "/Previous%20work/Previous%20work%2020.jpg" },
  { type: "image", src: "/Previous%20work/Previous%20work%2021.jpg" },
  { type: "image", src: "/Previous%20work/Previous%20work%2022.jpg" },
  { type: "image", src: "/Previous%20work/Previous%20work%2023.jpg" },
  { type: "image", src: "/Previous%20work/Previous%20work%204.jpg" },
  { type: "image", src: "/Previous%20work/Previous%20work%205.jpg" },
  { type: "image", src: "/Previous%20work/Previous%20work%206.jpg" },
  { type: "video", src: "/Previous%20work/Previous%20work%207.mp4" },
  { type: "image", src: "/Previous%20work/Previous%20work%208.jpg" },
  { type: "image", src: "/Previous%20work/Previous%20work%209.jpg" },
  { type: "image", src: "/Previous%20work/previous%20work%201.jpg" },
  { type: "image", src: "/Previous%20work/previous%20work%203.jpg" },
];

interface FileItem {
  type: string;
  src: string;
}

const MediaItem = ({ item, onClick }: { item: FileItem, onClick: () => void }) => {
  return (
    <motion.div
      className="relative w-64 md:w-80 h-44 md:h-56 rounded-2xl overflow-hidden flex-shrink-0 cursor-pointer group border border-border bg-surface/50"
      whileHover={{ y: -5, borderColor: "rgba(203,162,69,0.5)" }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
    >
      {item.type === "image" ? (
        <Image
          src={item.src}
          alt="Previous Work"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 256px, 320px"
          unoptimized
          loading="lazy"
          quality={60}
        />
      ) : (
        <video
          src={item.src}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loop
          muted
          playsInline
          autoPlay
        />
      )}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
      {item.type === "video" && (
        <div className="absolute top-3 right-3 badge-muted text-[10px] bg-black/60 shadow-lg backdrop-blur-md flex items-center gap-1">
          <PlayCircle size={10} /> VIDEO
        </div>
      )}
    </motion.div>
  );
};

export default function PortfolioGallery() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lightboxType, setLightboxType] = useState<string>("image");

  const openLightbox = (item: FileItem) => {
    setLightboxSrc(item.src);
    setLightboxType(item.type);
  };

  return (
    <section className="relative py-24 px-6 overflow-hidden border-t border-border/40">
      {/* Background gradients for smooth fading on edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-void/5 to-surface/30 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto mb-16 relative z-10">
        <AnimatedSection direction="up" delay={0.05}>
          <div className="text-center">
            <span className="text-xs font-mono text-gold tracking-widest uppercase">Portfolio</span>
            <h2 className="font-display text-4xl font-bold text-text-primary mt-2">
              Previous <span className="text-gold italic">Work</span>
            </h2>
            <p className="text-sm text-text-muted max-w-xl mx-auto mt-4">
              A curated collection of past photography, videography, and event management highlights.
            </p>
          </div>
        </AnimatedSection>
      </div>

      <div className="relative z-10 flex flex-col gap-6 -mx-6">
        {/* Left and right fade mask */}
        <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-r from-void via-transparent to-void w-full" />
        
        {/* Row 1 - scrolling left */}
        <div className="flex w-fit animate-scroll-left gap-6 hover:[animation-play-state:paused] px-6 will-change-transform">
          {[...row1, ...row1].map((item, i) => (
            <MediaItem key={`r1-${i}`} item={item} onClick={() => openLightbox(item)} />
          ))}
        </div>

        {/* Row 2 - scrolling right */}
        <div className="flex w-fit animate-scroll-right gap-6 hover:[animation-play-state:paused] px-6 -translate-x-1/2 will-change-transform">
          {[...row2, ...row2].map((item, i) => (
            <MediaItem key={`r2-${i}`} item={item} onClick={() => openLightbox(item)} />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxSrc && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxSrc(null)}
          >
            <motion.div
              className="relative max-w-6xl w-full max-h-[90vh] flex items-center justify-center overflow-hidden rounded-2xl ring-1 ring-border shadow-2xl"
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              {lightboxType === "image" ? (
                <Image
                  src={lightboxSrc}
                  alt="Zoomed View"
                  width={1600}
                  height={1000}
                  className="w-auto h-auto max-w-full max-h-[90vh] object-contain"
                  unoptimized
                />
              ) : (
                <video
                  src={lightboxSrc}
                  className="w-full max-h-[90vh] object-contain rounded-xl bg-black"
                  controls
                  autoPlay
                />
              )}
              <button
                onClick={() => setLightboxSrc(null)}
                className="absolute top-4 right-4 w-12 h-12 rounded-full bg-black/60 border border-white/10 text-white flex items-center justify-center hover:bg-gold hover:text-black transition-colors"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
