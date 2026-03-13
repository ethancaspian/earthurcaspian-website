import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function AuthorSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
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
        { scale: 1.10, opacity: 0.8 },
        { scale: 1.00, opacity: 1, ease: 'none' },
        0
      );

      scrollTl.fromTo(
        labelRef.current,
        { y: -10, opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0
      );

      if (headlineRef.current) {
        const words = headlineRef.current.querySelectorAll('.word');
        scrollTl.fromTo(
          words,
          { y: 32, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.02, ease: 'none' },
          0.05
        );
      }

      scrollTl.fromTo(
        [bodyRef.current, ctaRef.current],
        { y: 22, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.02, ease: 'none' },
        0.1
      );

      scrollTl.fromTo(
        quoteRef.current,
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0.1
      );

      // SETTLE (30%-70%): Hold

      // EXIT (70%-100%)
      scrollTl.fromTo(
        [labelRef.current, headlineRef.current, bodyRef.current, ctaRef.current],
        { x: 0, opacity: 1 },
        { x: '-16vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        quoteRef.current,
        { x: 0, opacity: 1 },
        { x: '12vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        bgRef.current,
        { scale: 1, opacity: 1 },
        { scale: 1.06, opacity: 0.6, ease: 'power2.in' },
        0.7
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="author"
      ref={sectionRef}
      className="pinned-section bg-navy z-20"
    >
      {/* Background Image */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: 'url(/images/author_portrait.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Scrim overlay */}
        <div className="absolute inset-0 scrim-left" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-[6vw]">
        {/* Micro Label */}
        <span
          ref={labelRef}
          className="micro-label text-gold mb-6"
          style={{ marginTop: '-10vh' }}
        >
          ABOUT
        </span>

        {/* Headline */}
        <h2
          ref={headlineRef}
          className="font-heading font-medium text-h2 text-warm-white max-w-[46vw] mb-8"
        >
          <span className="word inline-block">E.</span>{' '}
          <span className="word inline-block">Arthur</span>{' '}
          <span className="word inline-block">Caspian</span>{' '}
          <span className="word inline-block">writes</span>{' '}
          <span className="word inline-block">at</span>{' '}
          <span className="word inline-block">the</span>{' '}
          <span className="word inline-block">edge</span>{' '}
          <span className="word inline-block">of</span>{' '}
          <span className="word inline-block">what</span>{' '}
          <span className="word inline-block">we</span>{' '}
          <span className="word inline-block">know.</span>
        </h2>

        {/* Body */}
        <p
          ref={bodyRef}
          className="font-body text-base text-warm-white/70 max-w-[32vw] mb-8 leading-relaxed"
        >
          Physicist turned novelist. Writing as E. Arthur Caspian, I build worlds from equations and sentences—then try to make them feel inevitable.
        </p>

        {/* CTA */}
        <button
          ref={ctaRef}
          className="link-underline text-warm-white/80 hover:text-warm-white flex items-center gap-2 text-sm w-fit"
        >
          See biography
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Quote Card */}
      <div
        ref={quoteRef}
        className="absolute bottom-[10vh] right-[6vw] w-[28vw] text-left"
      >
        <div className="gold-line mb-4" />
        <blockquote className="font-heading text-xl text-warm-white/90 italic mb-3">
          "The best science fiction is just emotional physics."
        </blockquote>
        <cite className="font-mono text-micro text-cool-gray not-italic">
          — E. ARTHUR CASPIAN
        </cite>
      </div>
    </section>
  );
}
