import React from "react";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { Calendar, User, ArrowRight, Shield } from "lucide-react";
import { MotionDiv } from "@/components/Motion";

export const metadata = {
  title: "Medico-Legal Blog & Guidance for Indian Doctors | MedicoLegalAid",
  description: "Read the latest legal insights, analysis, court case details, and compliance guides to protect your medical practice in India.",
};

export default function BlogListingPage() {
  const posts = getAllPosts();

  const blogListJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "MedicoLegalAid Blog",
    "description": "Practical medico-legal tips, compliance articles, and case-law analysis for medical professionals in India.",
    "publisher": {
      "@type": "Organization",
      "name": "MedicoLegalAid",
      "logo": "https://medicolegalaid.com/logo.png"
    },
    "blogPost": posts.map((post) => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "datePublished": post.date,
      "author": {
        "@type": "Person",
        "name": post.author
      },
      "url": `https://medicolegalaid.com/blog/${post.slug}`
    }))
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListJsonLd) }}
      />

      {/* Hero */}
      <section className="relative py-20 bg-primary text-white text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 50% 50%, hsl(43 74% 49%) 0%, transparent 60%)" }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/30 mb-6">
            <Shield className="h-4 w-4 text-accent" />
            <span className="text-xs font-bold tracking-wider uppercase text-accent">Medico-Legal Knowledge Base</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Medico-Legal Blog &amp; Insights
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Practical advice, statutory updates, and court case analyses to help you make informed medical decisions safely and legally.
          </p>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          {posts.length === 0 ? (
            <div className="text-center py-20 border border-dashed border-border rounded-sm">
              <p className="text-muted-foreground text-lg">No articles published yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.map((post, i) => (
                <MotionDiv
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex flex-col bg-white border border-border rounded-sm hover:border-primary/50 hover:shadow-md transition-all overflow-hidden group"
                >
                  <div className="p-8 flex flex-col flex-1">
                    {/* Meta info */}
                    <div className="flex flex-wrap gap-4 text-xs text-muted-foreground mb-4 items-center">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5 text-accent" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <User className="h-3.5 w-3.5 text-accent" />
                        {post.author}
                      </span>
                    </div>

                    <h2 className="font-serif text-xl font-bold text-primary mb-3 leading-snug group-hover:text-accent transition-colors">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                      {post.excerpt}
                    </p>

                    <Link 
                      href={`/blog/${post.slug}`} 
                      className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:text-accent transition-colors mt-auto w-fit"
                    >
                      Read Article
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </MotionDiv>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
