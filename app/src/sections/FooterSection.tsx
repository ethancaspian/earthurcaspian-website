import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, User, Mic, Handshake } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const contactLinks = [
  { label: 'Literary Agent', icon: User, href: '#' },
  { label: 'Speaking Inquiries', icon: Mic, href: '#' },
  { label: 'Collaboration', icon: Handshake, href: '#' },
];

const socialLinks = [
  { label: 'Bluesky', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Goodreads', href: '#' },
];

export default function FooterSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const connectRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Contact column
      gsap.fromTo(
        contactRef.current,
        { x: '-4vw', opacity: 0 },
        {
          x: 0,
          opacity: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 50%',
            scrub: true,
          },
        }
      );

      // Connect column
      gsap.fromTo(
        connectRef.current,
        { x: '4vw', opacity: 0 },
        {
          x: 0,
          opacity: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 50%',
            scrub: true,
          },
        }
      );

      // Bottom row
      gsap.fromTo(
        bottomRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 60%',
            end: 'top 40%',
            scrub: true,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      id="contact"
      ref={sectionRef}
      className="flowing-section bg-navy z-[70] py-24"
    >
      <div className="px-[6vw]">
        {/* Gold Line */}
        <div className="gold-line mx-auto mb-16" />

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl mx-auto mb-16">
          {/* Contact Column */}
          <div ref={contactRef}>
            <h3 className="font-heading text-2xl text-warm-white mb-6">
              Contact
            </h3>
            
            <a
              href="mailto:hello@earthurcaspian.com"
              className="flex items-center gap-3 text-warm-white/80 hover:text-gold transition-colors mb-8"
            >
              <Mail className="w-5 h-5" />
              <span className="font-body">hello@earthurcaspian.com</span>
            </a>

            <div className="space-y-4">
              {contactLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="flex items-center gap-3 text-cool-gray hover:text-warm-white transition-colors"
                >
                  <link.icon className="w-4 h-4" />
                  <span className="font-body text-sm">{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Connect Column */}
          <div ref={connectRef}>
            <h3 className="font-heading text-2xl text-warm-white mb-6">
              Connect
            </h3>

            <div className="space-y-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-cool-gray hover:text-warm-white transition-colors font-body text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div
          ref={bottomRef}
          className="border-t border-warm-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="font-mono text-micro text-cool-gray">
            © 2026 E. ARTHUR CASPIAN
          </p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="font-mono text-micro text-cool-gray hover:text-warm-white transition-colors">
              Privacy
            </a>
            <a href="#" className="font-mono text-micro text-cool-gray hover:text-warm-white transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
