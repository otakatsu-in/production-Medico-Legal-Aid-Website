import React from "react";
import Link from "next/link";
import {
  Shield, CheckCircle, AlertTriangle, FileText,
  ClipboardList, Scale, Users, BarChart3,
  Lock, Mail, Phone, ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import HospitalAuditForm from "@/components/forms/HospitalAuditForm";
import { MotionDiv } from "@/components/Motion";

export const metadata = {
  title: "Hospital Medico-Legal Audit & Compliance Services | MedicoLegalAid",
  description: "Is your hospital legally protected? Get a professional, structured medicolegal audit of consent procedures, MLC documentation, and clinical protocols by Dr. Vinaykumar S.",
};

const services = [
  { icon: <FileText className="h-6 w-6" />, title: "Consent Documentation", desc: "Review of all patient consent forms for legal validity, disclosure adequacy, and procedural specificity." },
  { icon: <ClipboardList className="h-6 w-6" />, title: "MLC Case Handling", desc: "Evaluation of MLC documentation and protocols across OPD, IPD, and emergency — ensuring statutory compliance." },
  { icon: <Shield className="h-6 w-6" />, title: "Medical Records Compliance", desc: "Assessment of record accuracy and legal sufficiency — case sheets, discharge summaries, and operation notes." },
  { icon: <Scale className="h-6 w-6" />, title: "Statutory Compliance", desc: "Verification of compliance with Clinical Establishment Act, PCPNDT, NMC/INC regulations, and Consumer Protection Act." },
  { icon: <AlertTriangle className="h-6 w-6" />, title: "Emergency Protocols", desc: "Review of emergency department protocols against Supreme Court mandates on treatment refusal and triage." },
  { icon: <Users className="h-6 w-6" />, title: "Staff Training Gaps", desc: "Identification of medicolegal knowledge gaps in clinical and administrative staff that create institutional risk." },
  { icon: <BarChart3 className="h-6 w-6" />, title: "Consumer Forum Risk", desc: "Analysis of your hospital's exposure to NCDRC / State forum complaints, with documentation gap mapping." },
  { icon: <Lock className="h-6 w-6" />, title: "Actionable Risk Report", desc: "A written report with High / Medium / Low risk ratings and a prioritised corrective action roadmap." },
];

const steps = [
  { num: "01", title: "Confidential Consultation", desc: "We begin with a signed NDA and a call to understand your facility's size, specialty mix, and specific concerns." },
  { num: "02", title: "Document Review", desc: "Consent forms, MLC registers, sample records, and internal protocols are shared for pre-audit analysis." },
  { num: "03", title: "On-Site Audit", desc: "Structured interviews with key personnel and review of physical and electronic records across departments." },
  { num: "04", title: "Report & Debrief", desc: "A written report (delivered in 7–10 days) with risk ratings, recommendations, and a leadership debrief session." },
];

// Interactive client FAQ handler
import FAQSection from "@/components/FAQSection";

export default function HospitalsPage() {
  const hospitalJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "MedicoLegalAid Hospital Services",
    "description": "Expert medicolegal audits for healthcare groups, nursing homes, and clinical establishments in India to reduce legal liability.",
    "url": "https://medicolegalaid.com/hospitals",
    "areaServed": "IN"
  };

  return (
    <div className="flex flex-col min-h-screen font-sans bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hospitalJsonLd) }}
      />

      {/* Hero */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 70% 50%, hsl(43 74% 49%) 0%, transparent 60%)" }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/30 mb-6">
              <Shield className="h-4 w-4 text-accent" />
              <span className="text-xs font-bold tracking-wider uppercase text-accent">Hospital Medicolegal Services</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-5">
              Is Your Hospital<br />
              <span className="text-accent">Legally Protected?</span>
            </h1>
            <p className="text-lg text-white/75 mb-8 max-w-2xl font-light leading-relaxed">
              A structured medicolegal audit by Dr. Vinaykumar S (LLB, PGDMLE — NLSIU) identifies every legal gap in your hospital's documentation, consent practices, MLC handling, and regulatory compliance — before they become court cases.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8 h-12 rounded-sm font-semibold border-none">
                <Link href="#contact">Request an Audit</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-base px-8 h-12 rounded-sm font-semibold bg-transparent">
                <Link href="#services">What We Audit</Link>
              </Button>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-accent/10 border-y border-accent/20 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center max-w-4xl mx-auto">
            {[
              { stat: "₹11 Crore", label: "Largest compensation in Indian medical negligence" },
              { stat: "Rising", label: "Consumer forum cases against hospitals every year" },
              { stat: "1 Report", label: "All findings, risks, and fixes — delivered in writing" },
            ].map((item, i) => (
              <MotionDiv 
                key={i} 
                initial={{ opacity: 0, y: 10 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.1 }}
              >
                <p className="text-3xl font-serif font-bold text-primary mb-1">{item.stat}</p>
                <p className="text-sm text-muted-foreground">{item.label}</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-3">What the Audit Covers</h2>
            <p className="text-muted-foreground">Eight areas of institutional legal risk — each reviewed, documented, and rated for severity.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {services.map((s, i) => (
              <MotionDiv
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.08 }}
                className="bg-background border border-border rounded-sm p-5 hover:border-primary/40 hover:shadow-sm transition-all group"
              >
                <div className="w-10 h-10 rounded-sm bg-primary/5 flex items-center justify-center mb-4 text-primary group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                  {s.icon}
                </div>
                <h3 className="font-bold text-primary mb-2 text-sm">{s.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-3">How the Audit Works</h2>
            <p className="text-muted-foreground">A transparent four-step process — from consultation to written report.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {steps.map((step, i) => (
              <MotionDiv
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative"
              >
                <p className="text-4xl font-serif font-bold text-accent/30 mb-3">{step.num}</p>
                <h3 className="font-bold text-primary mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ + Contact */}
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* FAQ */}
            <FAQSection />

            {/* Enquiry Form */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-primary mb-2">Request an Audit</h2>
              <p className="text-muted-foreground mb-6">Fill in the form and our team will respond within 24 hours to discuss your hospital's needs.</p>

              <div className="flex flex-col gap-3 mb-8">
                <a href="https://wa.me/919108764680" className="flex items-center gap-3 text-sm text-primary font-medium hover:underline" target="_blank" rel="noopener noreferrer">
                  <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center border border-border shrink-0">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                  +91 91087 64680
                </a>
                <a href="mailto:contact@medicolegalaid.com" className="flex items-center gap-3 text-sm text-primary font-medium hover:underline">
                  <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center border border-border shrink-0">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  contact@medicolegalaid.com
                </a>
              </div>

              <HospitalAuditForm />
              <p className="text-xs text-muted-foreground text-center mt-4">All enquiries are treated in strict confidence.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
