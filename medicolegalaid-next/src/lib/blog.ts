import fs from "fs";
import path from "path";

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  keywords: string;
}

export function getAllPosts(): PostMeta[] {
  try {
    const blogDirectory = path.join(process.cwd(), "src/content/blog");
    if (!fs.existsSync(blogDirectory)) {
      return [];
    }
    
    const files = fs.readdirSync(blogDirectory);
    const posts = files
      .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))
      .map((file) => {
        const slug = file.replace(/\.mdx?$/, "");
        const fullPath = path.join(blogDirectory, file);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        // Extract metadata using robust regex matching
        const titleMatch = fileContents.match(/title:\s*["']([^"']+)["']/);
        const dateMatch = fileContents.match(/date:\s*["']([^"']+)["']/);
        const excerptMatch = fileContents.match(/excerpt:\s*["']([^"']+)["']/);
        const authorMatch = fileContents.match(/author:\s*["']([^"']+)["']/);
        const keywordsMatch = fileContents.match(/keywords:\s*["']([^"']+)["']/);

        return {
          slug,
          title: titleMatch ? titleMatch[1] : slug,
          date: dateMatch ? dateMatch[1] : "",
          excerpt: excerptMatch ? excerptMatch[1] : "",
          author: authorMatch ? authorMatch[1] : "Dr. Vinaykumar S",
          keywords: keywordsMatch ? keywordsMatch[1] : "",
        };
      });

    // Sort posts by date descending
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error("Error loading blog posts:", error);
    return [];
  }
}

export function getPostBySlug(slug: string): PostMeta | null {
  const posts = getAllPosts();
  return posts.find((post) => post.slug === slug) || null;
}
