import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { Calendar, User, ArrowLeft, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    return {
      title: "Article Not Found | MedicoLegalAid Blog",
    };
  }

  return {
    title: `${post.title} | MedicoLegalAid Blog`,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      url: `https://medicolegalaid.com/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Dynamically import the MDX file as a Server Component
  let PostContent;
  try {
    const mdxModule = await import(`@/content/blog/${slug}.mdx`);
    PostContent = mdxModule.default;
  } catch (error) {
    console.error("Failed to load MDX content dynamically:", error);
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "MedicoLegalAid",
    "@id": "https://medicolegalaid.com/#organization",
    "url": "https://medicolegalaid.com",
    "logo": "https://medicolegalaid.com/logo.png",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://medicolegalaid.com/blog/${slug}`
    },
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": post.date,
    "author": {
      "@type": "Person",
      "name": post.author
    }
  };

  return (
    <article className="min-h-screen bg-background text-foreground font-sans py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <div className="container mx-auto px-4 max-w-3xl">
        {/* Back button */}
        <div className="mb-8">
          <Button asChild variant="ghost" size="sm" className="hover:bg-muted font-semibold text-primary">
            <Link href="/blog" className="inline-flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>

        {/* Post Header */}
        <header className="mb-10 pb-8 border-b border-border">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground items-center">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-accent" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <User className="h-4 w-4 text-accent" />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-accent" />
              5 min read
            </span>
          </div>
        </header>

        {/* Post Content */}
        <div className="prose prose-slate lg:prose-lg max-w-none prose-headings:font-serif prose-headings:text-primary prose-a:text-accent hover:prose-a:text-accent/80 prose-hr:border-border">
          <PostContent />
        </div>
      </div>
    </article>
  );
}
