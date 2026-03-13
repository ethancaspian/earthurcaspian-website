import { useState, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Send } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Background parallax
      gsap.fromTo(
        bgRef.current,
        { y: -20 },
        {
          y: 20,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );

      // Content animation
      gsap.fromTo(
        contentRef.current,
        { y: 24, opacity: 0 },
        {
          y: 0,
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
    }, section);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    alert('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <section
      ref={sectionRef}
      className="flowing-section bg-navy z-[60] relative min-h-[70vh] flex items-center justify-center"
    >
      {/* Background Image */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: 'url(/images/typewriter_pen.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Scrim overlay */}
        <div className="absolute inset-0 scrim-center" />
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 text-center px-[6vw] max-w-2xl"
      >
        {/* Micro Label */}
        <span className="micro-label text-gold mb-4 block">
          STAY IN THE LOOP
        </span>

        {/* Headline */}
        <h2 className="font-heading font-medium text-h2 text-warm-white mb-6">
          Get the notebook.
        </h2>

        {/* Body */}
        <p className="font-body text-base text-warm-white/70 mb-10 leading-relaxed">
          A short email when the next chapter drops—or when I publish something worth reading.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            required
            className="px-5 py-3 bg-warm-white/10 border border-warm-white/20 text-warm-white placeholder:text-cool-gray focus:outline-none focus:border-gold transition-colors w-full sm:w-72"
          />
          <button
            type="submit"
            className="btn-primary flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            Subscribe
          </button>
        </form>

        {/* Privacy */}
        <p className="font-mono text-micro text-cool-gray mt-6">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
