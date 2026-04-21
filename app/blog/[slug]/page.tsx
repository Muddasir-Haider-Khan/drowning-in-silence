import { notFound } from "next/navigation";

import { getPostBySlug, getAdjacentPosts, posts } from "@/data/posts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PostAnimations from "@/components/PostAnimations";

import type { Metadata } from "next";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Post Not Found" };
  return { title: post.title, description: post.excerpt };
}

const categoryColors: Record<string, string> = {
  "Research and Analysis": "badge-gold",
  "Pre-Production": "badge-dream",
  Production: "badge-gold",
  "Post-Production": "badge-muted",
  Distribution: "badge-muted",
  "Final Product": "badge-gold",
};

function renderContent(content: string) {
  // Helper to handle bold text
  const parseInline = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={i} className="text-gold font-bold">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  const lines = content.split("\n");
  const blocks: any[] = [];
  let currentList: string[] = [];

  const flushList = () => {
    if (currentList.length > 0) {
      blocks.push({ type: "list", items: [...currentList] });
      currentList = [];
    }
  };

  lines.forEach((line) => {
    const trimmed = line.trim();
    if (trimmed.startsWith("### ")) {
      flushList();
      blocks.push({ type: "h3", text: trimmed.replace("### ", "") });
    } else if (trimmed.startsWith("- ")) {
      currentList.push(trimmed.replace("- ", ""));
    } else if (trimmed === "") {
      flushList();
      // Add a null marker to ensure next paragraph starts fresh
      blocks.push({ type: "break" });
    } else {
      const lastBlock = blocks[blocks.length - 1];
      if (lastBlock && lastBlock.type === "p") {
        lastBlock.text += " " + trimmed;
      } else {
        flushList();
        blocks.push({ type: "p", text: trimmed });
      }
    }
  });
  flushList();

  return blocks.map((block, i) => {
    if (block.type === "break") return null;

    switch (block.type) {
      case "h3":
        return (
          <h3
            key={i}
            className="font-display text-2xl font-black text-gold mt-10 mb-4 first:mt-0"
          >
            {parseInline(block.text)}
          </h3>
        );
      case "list":
        return (
          <ul key={i} className="list-none space-y-3 my-6">
            {block.items.map((item, j) => (
              <li
                key={j}
                className="flex items-start gap-3 text-text-secondary text-base"
              >
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold/60 flex-shrink-0" />
                <span>{parseInline(item)}</span>
              </li>
            ))}
          </ul>
        );
      case "p":
        return (
          <p
            key={i}
            className="text-text-secondary text-base leading-relaxed mb-4 last:mb-0"
          >
            {parseInline(block.text)}
          </p>
        );
      default:
        return null;
    }
  });
}

export default function PostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const { prev, next } = getAdjacentPosts(params.slug);
  const badgeClass = categoryColors[post.category] || "badge-muted";

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-24">
        <PostAnimations
          post={post}
          prev={prev}
          next={next}
          badgeClass={badgeClass}
          contentHtml={renderContent(post.content)}
        />
      </main>
      <Footer />
    </>
  );
}
