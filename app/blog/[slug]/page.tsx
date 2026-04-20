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
  "Pre-Production": "badge-dream",
  Production: "badge-gold",
  "Post-Production": "badge-muted",
  Distribution: "badge-muted",
  Premiere: "badge-gold",
  "Final Product": "badge-gold",
};

function renderContent(content: string) {
  const parts = content.split("\n\n");
  return parts.map((part, i) => {
    if (part.startsWith("- ") || part.includes("\n- ")) {
      const items = part.split("\n").filter((l) => l.startsWith("- "));
      return (
        <ul key={i} className="list-none space-y-2 my-4">
          {items.map((item, j) => (
            <li key={j} className="flex items-start gap-3 text-text-secondary text-base">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
              {item.replace("- ", "")}
            </li>
          ))}
        </ul>
      );
    }
    return (
      <p key={i} className="text-text-secondary text-base leading-relaxed">
        {part}
      </p>
    );
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
