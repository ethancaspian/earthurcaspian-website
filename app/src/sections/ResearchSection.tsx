import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ResearchSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const textBlockRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        },
      });

      // ENTRANCE (0%-30%)
      scrollTl.fromTo(
        bgRef.current,
        { scale: 1.08, opacity: 0.8 },
        { scale: 1.00, opacity: 1, ease: 'none' },
        0
      );

      scrollTl.fromTo(
        textBlockRef.current,
        { x: '18vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0.05
      );

      scrollTl.fromTo(
        quoteRef.current,
        { x: '-18vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0.05
      );

      // SETTLE (30%-70%): Hold

      // EXIT (70%-100%)
      scrollTl.fromTo(
        textBlockRef.current,
        { x: 0, opacity: 1 },
        { x: '10vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        quoteRef.current,
        { x: 0, opacity: 1 },
        { x: '-10vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        bgRef.current,
        { scale: 1, opacity: 1 },
        { scale: 1.05, opacity: 0.7, ease: 'power2.in' },
        0.7
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="research"
      ref={sectionRef}
      className="pinned-section bg-navy z-30"
    >
      {/* Background Image */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: 'url(/images/lab_quantum.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Scrim overlay */}
        <div className="absolute inset-0 scrim-right" />
      </div>

      {/* Right Text Block */}
      <div
        ref={textBlockRef}
        className="absolute right-[6vw] top-0 h-full flex flex-col justify-center items-end text-right max-w-[40vw]"
      >
        {/* Micro Label */}
        <span className="micro-label text-gold mb-6">
          RESEARCH
        </span>

        {/* Headline */}
        <h2 className="font-heading font-medium text-h2 text-warm-white mb-8">
          Quantum systems.<br />Classical clarity.
        </h2>

        {/* Body */}
        <p className="font-body text-base text-warm-white/70 mb-8 leading-relaxed max-w-[34vw]">
          As Ethan A. Caspian, I translate complexity into narrative—so policy, product, and culture can use it.
        </p>

        {/* CTA */}
        <button className="link-underline text-warm-white/80 hover:text-warm-white flex items-center gap-2 text-sm">
          Explore selected work
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Quote Card */}
      <div
        ref={quoteRef}
        className="absolute bottom-[10vh] left-[6vw] w-[30vw] text-left"
      >
        <div className="gold-line mb-4" />
        <blockquote className="font-heading text-xl text-warm-white/90 italic mb-3">
          "If you can't explain it in a story, you don't understand it yet."
        </blockquote>
        <cite className="font-mono text-micro text-cool-gray not-italic">
          — ETHAN A. CASPIAN
        </cite>
      </div>
    </section>
  );
}
