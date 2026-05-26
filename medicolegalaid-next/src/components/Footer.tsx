import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 border-t border-primary-foreground/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="MedicoLegalAid Logo" className="h-14 w-14 object-contain brightness-0 invert" />
              <span className="font-serif text-2xl font-bold text-white tracking-tight">
                MedicoLegalAid
              </span>
            </div>
            <p className="text-primary-foreground/70 max-w-sm">
              Empowering Indian doctors with practical, case-based medicolegal knowledge to protect their practice and reputation.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="/#course" className="hover:text-accent transition-colors">Course</Link></li>
              <li><Link href="/#modules" className="hover:text-accent transition-colors">Modules</Link></li>
              <li><Link href="/hospitals" className="hover:text-accent transition-colors">For Hospitals</Link></li>
              <li><Link href="/seminars" className="hover:text-accent transition-colors">Seminars</Link></li>
              <li><Link href="/tips" className="hover:text-accent transition-colors">Legal Tips</Link></li>
              <li><Link href="/#contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li><Link href="#" className="hover:text-accent transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Refund Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-primary-foreground/10 text-center md:text-left md:flex justify-between items-center text-primary-foreground/60 text-sm">
          <p>© 2026 MedicoLegalAid.com. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed for the medical community of India.</p>
        </div>
      </div>
    </footer>
  );
}
