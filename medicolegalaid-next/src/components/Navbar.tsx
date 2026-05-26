"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  activePage?: "home" | "hospitals" | "tips" | "seminars";
}

export default function Navbar({ activePage }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Determine if we're on a sub-page (not the home page)
  const isAway = pathname !== "/";

  const links = [
    { label: "About", href: isAway ? "/#about" : "#about", isRouter: isAway },
    { label: "Course", href: isAway ? "/#course" : "#course", isRouter: isAway },
    { label: "Modules", href: isAway ? "/#modules" : "#modules", isRouter: isAway },
    { label: "For Hospitals", href: "/hospitals", isRouter: true },
    { label: "Seminars", href: "/seminars", isRouter: true },
    { label: "Legal Tips", href: "/tips", isRouter: true },
    { label: "Contact", href: isAway ? "/#contact" : "#contact", isRouter: isAway },
  ];

  const isActive = (label: string) => {
    if (label === "For Hospitals") return pathname === "/hospitals";
    if (label === "Legal Tips") return pathname === "/tips";
    if (label === "Seminars") return pathname === "/seminars";
    return false;
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <img src="/logo.png" alt="MedicoLegalAid Logo" className="h-14 w-14 object-contain" />
          <span className="font-serif text-xl font-bold text-primary tracking-tight hidden sm:block">
            MedicoLegalAid
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) =>
            link.isRouter ? (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.label)
                    ? "text-primary border-b-2 border-accent pb-0.5"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            )
          )}
        </div>

        {/* Right side: CTA + hamburger */}
        <div className="flex items-center gap-3">
          <Button asChild size="lg" className="hidden md:inline-flex bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-sm">
            <Link href="https://course.medicolegalaid.com" target="_blank" rel="noopener noreferrer">Join Course Now</Link>
          </Button>
          <button
            className="md:hidden p-2 rounded-sm text-primary hover:bg-muted transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-border/40 bg-background/98 backdrop-blur px-4 py-4 flex flex-col gap-1 shadow-lg">
          {links.map((link) =>
            link.isRouter ? (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`py-3 px-2 text-base font-medium border-b border-border/30 transition-colors ${
                  isActive(link.label)
                    ? "text-primary font-semibold"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 px-2 text-base font-medium text-muted-foreground hover:text-primary border-b border-border/30 transition-colors"
              >
                {link.label}
              </a>
            )
          )}
          <Button asChild size="lg" className="mt-4 w-full bg-primary text-primary-foreground font-semibold rounded-sm">
            <Link href="https://course.medicolegalaid.com" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
              Join Course Now
            </Link>
          </Button>
        </div>
      )}
    </nav>
  );
}
