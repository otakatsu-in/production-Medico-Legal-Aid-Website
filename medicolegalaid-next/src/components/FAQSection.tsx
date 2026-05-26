"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "How long does the audit take?", a: "Typically 2–5 business days on-site, with a written report delivered within 7–10 working days." },
  { q: "Is the audit confidential?", a: "Yes. All findings are covered by an NDA signed before the process begins." },
  { q: "Do you audit smaller nursing homes and clinics?", a: "Yes. Packages are scaled to the size and complexity of your facility — from single-specialty clinics upward." },
  { q: "Can this help in ongoing litigation?", a: "It is a proactive compliance tool. Demonstrating a commitment to legal standards can be valuable in establishing your standard of care." },
];

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div>
      <h2 className="text-3xl font-serif font-bold text-primary mb-2">Common Questions</h2>
      <p className="text-muted-foreground mb-8">Answers to questions hospital leadership often asks.</p>
      <div className="space-y-2">
        {faqs.map((faq, i) => (
          <div key={i} className="border border-border rounded-sm overflow-hidden">
            <button
              className="w-full flex items-center justify-between px-5 py-4 text-left font-semibold text-primary hover:bg-muted/40 transition-colors"
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
            >
              <span className="text-sm pr-4">{faq.q}</span>
              <ChevronDown className={`h-4 w-4 shrink-0 text-accent transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`} />
            </button>
            {openFaq === i && (
              <div className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed border-t border-border bg-muted/20">
                <p className="pt-3">{faq.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
