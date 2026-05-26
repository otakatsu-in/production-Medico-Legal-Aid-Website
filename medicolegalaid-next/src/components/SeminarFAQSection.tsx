"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "Can the workshop be customised for our hospital's specialty?", a: "Yes. Topics are tailored to your hospital's specialty mix and risk areas — whether you're a surgical centre, maternity hospital, or multispecialty institution." },
  { q: "How many attendees can the workshop accommodate?", a: "Workshops are designed for 50 to 200 doctors and clinical staff. For larger groups, we can discuss split sessions." },
  { q: "Is CME credit applicable?", a: "CME Credit Points are applicable to this workshop. Details can be confirmed on enquiry based on your state medical council." },
  { q: "How far in advance do we need to book?", a: "We recommend enquiring at least 4–6 weeks in advance to allow adequate planning, coordination, and material preparation." },
  { q: "Will all attendees receive a certificate?", a: "Yes. A Certificate of Participation is issued to every doctor and clinical staff member who attends the workshop." },
];

export default function SeminarFAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div key={i} className="border border-border rounded-sm overflow-hidden bg-white">
          <button
            className="w-full flex items-center justify-between p-5 text-left bg-secondary/30 hover:bg-secondary/60 transition-colors"
            onClick={() => setOpenFaq(openFaq === i ? null : i)}
          >
            <span className="font-semibold text-primary pr-4">{faq.q}</span>
            <ChevronDown className={`h-5 w-5 text-muted-foreground shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
          </button>
          {openFaq === i && (
            <div className="p-5 bg-white border-t border-border">
              <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
