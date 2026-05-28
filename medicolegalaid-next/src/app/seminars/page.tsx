import React from "react";
import Link from "next/link";
import {
  CheckCircle, Clock, Users, Building2, Medal, Award,
  ArrowRight, Mail, Phone, MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SeminarEnquiryForm from "@/components/forms/SeminarEnquiryForm";
import SeminarFAQSection from "@/components/SeminarFAQSection";
import { MotionDiv } from "@/components/Motion";
import Image from "next/image";

export const metadata = {
  title: "CME Medico-Legal Workshops for Doctors & Associations | MedicoLegalAid",
  description: "Request a live, highly interactive on-site CME Medico-Legal workshop conducted by Dr. Vinaykumar S for your medical association or hospital.",
};

const topics = [
  "Legal Framework, Consumer Protection Act & Landmark Judgments",
  "Valid Consent Documentation — What Holds Up in Court",
  "MLC Handling in OPD & IPD Settings",
  "Medical Negligence — Civil vs Criminal Liability, Bolam Test",
  "MLC Documentation — Drafting, Preservation & Model Formats",
  "Drafting Certificates: Medical, Death, Fitness & Wound",
  "Vicarious Liability and How It Impacts Doctors and Nursing Home Owners",
  "Clinical Specialty Scenarios (Customisable)",
  "Top Medicolegal Mistakes Doctors Make — and How to Avoid Them",
  "Confidence Building for Real-World Medicolegal Challenges",
];



const logos = [
  "/images/logos/-indian-medical-association.png",
  "/images/logos/02asi.png",
  "/images/logos/04ida.png",
  "/images/logos/05ima.jpg",
  "/images/logos/08ssimsdavangere.png",
  "/images/logos/10koimsmadikeri.svg",
  "/images/logos/11smsimsr.png",
  "/images/logos/federation-of-obstetric-and-gynaecological-societies-of-india-fogsi.png",
  "/images/logos/indian-academy-of-pediatrics.png",
  "/images/logos/jjm-medical-college-and-hospital.png",
  "/images/logos/kodagu-institute-of-medical-sciences-koims-madikeri.png",
  "/images/logos/koppal-institute-of-medical-sciences-kims.png",
  "/images/logos/s.s.-institute-of-medical-sciences-and-research-centre.png",
];

const seminarPhotos = [
  "/images/seminars/10.9.2024-at-jjmc-medical-college-dvg-topic-documentaion-mistakes--.webp",
  "/images/seminars/24-.8-24-at-davanegre-in-medicolelgal-topic-vacarious-liability-workshop-conducted-at-ssims--rc.webp",
  "/images/seminars/at-cochin-ima-hall-topic-criminal-liability-for-doctros.webp",
  "/images/seminars/at-davanegre-topic-legal-issues-concered-with-nursing-practice.webp",
  "/images/seminars/at-ima-bangalore-for-medicoelgal-workshop-topic-real-case-scinario-discussions-.webp",
  "/images/seminars/at-ima-state-conference-topic-consent-and-its-pitfalls.jpg",
  "/images/seminars/at-mangalore-dakshina-kannada-conferenc-topic-pannel-discussion-on-legal-issues.webp",
  "/images/seminars/at-pedicon-2025-topic-pannel-discussion.webp",
  "/images/seminars/img-20250304-wa0096.webp",
  "/images/seminars/t-kolkatta-for-pannel-discussion-on-legal-issues.webp",
  "/images/seminars/talk-to-indian-dental-associaion-topic-consent-in-cental-practice.webp",
  "/images/seminars/talka-tp-surgical-assiciation-topic-certificate-writing.webp",
];

export default function SeminarsPage() {
  const seminarJsonLd = {
    "@context": "https://schema.org",
    "@type": "EventSeries",
    "name": "MedicoLegalAid CME Workshops",
    "description": "Live, interactive on-site medicolegal training seminars and CME credit courses for doctors, nursing homes, and clinical establishments in India.",
    "organizer": {
      "@type": "Organization",
      "name": "MedicoLegalAid",
      "url": "https://medicolegalaid.com"
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-sans bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seminarJsonLd) }}
      />

      {/* Hero */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-primary text-white">
        <div
          className="absolute inset-0 opacity-10"
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
              <Medal className="h-4 w-4 text-accent" />
              <span className="text-xs font-bold tracking-wider uppercase text-accent">For Hospitals &amp; Medical Associations</span>
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-white leading-tight mb-6">
              CME Medicolegal <br />
              <span className="text-accent">Workshop</span>
            </h1>
            <p className="text-xl text-white/75 mb-4 leading-relaxed font-light">
              Live, on-site medicolegal training for doctors — conducted by Dr. Vinaykumar S
            </p>
            <p className="text-lg text-white/60 mb-10 leading-relaxed font-light">
              A full-day, interactive CME workshop designed for hospitals and medical associations. Built for practising doctors, residents, and clinical staff who need practical, court-ready medicolegal knowledge — not just theory.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-7 h-12 rounded-sm font-semibold border-none">
                <Link href="#enquiry">Request a Workshop</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base px-7 h-12 rounded-sm font-semibold border-white/30 text-white hover:bg-white/10 bg-transparent">
                <Link href="#topics">See Topics</Link>
              </Button>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* Workshop Snapshot — 4 stat cards */}
      <section className="py-16 bg-secondary border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { icon: Clock, stat: "Full-Day Session", sub: "6–7 Hours" },
              { icon: Users, stat: "50–200 Participants", sub: "Doctors & Clinical Staff" },
              { icon: Building2, stat: "On-Site", sub: "At Your Hospital or Venue" },
              { icon: Medal, stat: "CME Credit Points", sub: "Applicable" },
            ].map(({ icon: Icon, stat, sub }, i) => (
              <MotionDiv
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white border border-border rounded-sm p-6 text-center shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <p className="font-bold text-primary text-base leading-tight">{stat}</p>
                <p className="text-sm text-muted-foreground mt-1">{sub}</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By Logos */}
      <section className="py-12 bg-white border-b border-border overflow-hidden">
        <div className="container mx-auto px-4 text-center mb-8">
          <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Trusted by top medical institutions</p>
        </div>
        <div className="relative w-full overflow-hidden flex">
          {/* Gradient masks for smooth fading at edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
          
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            {/* First set of logos */}
            <div className="flex items-center gap-16 px-8">
              {logos.map((logo, i) => (
                <div key={i} className="relative w-40 h-20 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                  <Image
                    src={logo}
                    alt={`Trusted Institution Logo ${i + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
            {/* Second identical set for seamless looping */}
            <div className="flex items-center gap-16 px-8">
              {logos.map((logo, i) => (
                <div key={`dup-${i}`} className="relative w-40 h-20 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                  <Image
                    src={logo}
                    alt={`Trusted Institution Logo ${i + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Attend */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-3">Who Should Attend</h2>
            <p className="text-muted-foreground text-lg">This workshop is designed for institutions, not individuals.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <MotionDiv
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-secondary/50 border border-border rounded-sm p-8"
            >
              <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center mb-5">
                <Building2 className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Hospitals &amp; Nursing Homes</h3>
              <p className="text-muted-foreground leading-relaxed">In-house CME, induction training, or medicolegal compliance sessions for medical and nursing staff. Ideal for hospitals looking to proactively reduce risk and upskill their clinical teams.</p>
            </MotionDiv>
            <MotionDiv
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-secondary/50 border border-border rounded-sm p-8"
            >
              <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center mb-5">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Medical Associations</h3>
              <p className="text-muted-foreground leading-relaxed">IMA Chapters, Specialty Societies — member education events, annual conferences, or dedicated medicolegal workshops. A structured, high-value addition to any medical association calendar.</p>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Topics Covered */}
      <section id="topics" className="py-24 bg-secondary">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-3">Topics Covered</h2>
            <p className="text-muted-foreground text-lg">Topics can be customised to your hospital's specialty and risk areas.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {topics.map((topic, i) => (
              <MotionDiv
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-start gap-4 bg-white border border-border rounded-sm p-5"
              >
                <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-foreground leading-relaxed">{topic}</span>
              </MotionDiv>
            ))}
          </div>
          <div className="mt-6 flex items-start gap-4 bg-primary text-primary-foreground rounded-sm p-5 max-w-xl">
            <Award className="h-5 w-5 text-accent shrink-0 mt-0.5" />
            <span className="font-medium">Certificate of Participation issued to all attendees</span>
          </div>
        </div>
      </section>

      {/* What Your Institution Gains */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <MotionDiv
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-serif font-bold mb-8">What Your Institution Gains</h2>
              <ul className="space-y-5">
                {[
                  "Reduced medicolegal risk exposure for all clinical staff",
                  "Practical upgrades to consent and MLC documentation practices",
                  "Doctors confident in handling police, courts, and patient disputes",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-primary-foreground/85 leading-relaxed text-lg">{item}</span>
                  </li>
                ))}
                <li className="flex items-start gap-4 pt-4 border-t border-primary-foreground/20">
                  <ArrowRight className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-primary-foreground/85 leading-relaxed">
                    Complements the{" "}
                    <Link href="/hospitals" className="text-accent underline underline-offset-2 hover:text-accent/80 transition-colors">
                      Hospital Medicolegal Audit
                    </Link>
                    {" "}— for complete institutional coverage.
                  </span>
                </li>
              </ul>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-sm p-8"
            >
              <h3 className="text-xl font-bold mb-6">Why Dr. Vinaykumar</h3>
              <p className="text-primary-foreground/70 mb-6 leading-relaxed">Widely regarded as one of India's most trusted medicolegal advisors for the medical community.</p>
              <ul className="space-y-4">
                {[
                  "MBBS, DCH, DNB, MNAMS | LLB | PGDMLE — NLSIU Bengaluru",
                  "Professor of Paediatrics — rare dual expertise: practising clinician + medicolegal expert",
                  "Regularly invited by hospitals and medical associations across India",
                  "Case-based, practical delivery — not a law lecture",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-primary-foreground/80 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Talks and Recognition Marquee */}
      <section className="py-24 bg-white overflow-hidden border-y border-border">
        <div className="container mx-auto px-4 mb-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-serif font-bold text-primary mb-3">Talks &amp; Recognition</h2>
            <p className="text-muted-foreground text-lg">A visual journey of our impactful medicolegal sessions, workshops, and prestigious speaking engagements.</p>
          </div>
        </div>
        
        <div className="relative w-full flex flex-col gap-6">
          {/* Gradient masks for smooth fading at edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
          
          {/* First Row - Scrolling Left */}
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            <div className="flex items-center gap-6 px-3">
              {seminarPhotos.slice(0, 6).map((photo, i) => (
                <div key={i} className="relative w-[75vw] sm:w-[45vw] md:w-[35vw] lg:w-[25vw] aspect-[4/3] rounded-xl overflow-hidden shadow-md group border border-border">
                  <Image
                    src={photo}
                    alt={`Medicolegal Talk ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 75vw, 35vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
            {/* Duplicate for infinite effect */}
            <div className="flex items-center gap-6 px-3">
              {seminarPhotos.slice(0, 6).map((photo, i) => (
                <div key={`dup-${i}`} className="relative w-[75vw] sm:w-[45vw] md:w-[35vw] lg:w-[25vw] aspect-[4/3] rounded-xl overflow-hidden shadow-md group border border-border">
                  <Image
                    src={photo}
                    alt={`Medicolegal Talk ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 75vw, 35vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Second Row - Scrolling Right */}
          <div className="flex w-max animate-marquee-reverse hover:[animation-play-state:paused]">
            <div className="flex items-center gap-6 px-3">
              {seminarPhotos.slice(6, 12).map((photo, i) => (
                <div key={i} className="relative w-[75vw] sm:w-[45vw] md:w-[35vw] lg:w-[25vw] aspect-[4/3] rounded-xl overflow-hidden shadow-md group border border-border">
                  <Image
                    src={photo}
                    alt={`Medicolegal Recognition ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 75vw, 35vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
            {/* Duplicate for infinite effect */}
            <div className="flex items-center gap-6 px-3">
              {seminarPhotos.slice(6, 12).map((photo, i) => (
                <div key={`dup2-${i}`} className="relative w-[75vw] sm:w-[45vw] md:w-[35vw] lg:w-[25vw] aspect-[4/3] rounded-xl overflow-hidden shadow-md group border border-border">
                  <Image
                    src={photo}
                    alt={`Medicolegal Recognition ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 75vw, 35vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* FAQs */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-3">Frequently Asked Questions</h2>
          </div>
          <SeminarFAQSection />
        </div>
      </section>

      {/* Enquiry Form */}
      <section id="enquiry" className="py-24 bg-secondary border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl font-serif font-bold text-primary mb-4">Request a CME Workshop</h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Fill in your details and we'll respond within 24 hours with a proposal tailored to your institution.
              </p>
              <div className="space-y-5 mb-10">
                <div className="flex items-center gap-4 text-foreground">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-border shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-muted-foreground uppercase tracking-wider">WhatsApp / Call</p>
                    <a href="https://wa.me/919108764680" className="font-medium text-primary hover:underline" target="_blank" rel="noopener noreferrer">+91 91087 64680</a>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-foreground">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-border shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-muted-foreground uppercase tracking-wider">Email</p>
                    <a href="mailto:contact@medicolegalaid.com" className="font-medium text-primary hover:underline">contact@medicolegalaid.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-foreground">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-border shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-muted-foreground uppercase tracking-wider">Based In</p>
                    <p className="font-medium">Bengaluru, Karnataka, India</p>
                  </div>
                </div>
              </div>
              <div className="bg-primary/5 border border-primary/10 rounded-sm p-5">
                <p className="font-bold text-primary text-sm mb-1">Conducted By</p>
                <p className="font-semibold text-foreground">Dr. Vinaykumar S</p>
                <p className="text-sm text-muted-foreground">MBBS, DCH, DNB, MNAMS | Professor of Paediatrics</p>
                <p className="text-sm text-muted-foreground">LLB | PGDMLE — National Law School of India University (NLSIU), Bengaluru</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-xl border border-border">
              <h3 className="text-2xl font-bold text-primary mb-6">Send Workshop Enquiry</h3>
              <SeminarEnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
