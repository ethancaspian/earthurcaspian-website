import { useEffect, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BookOpen, Play } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const coverRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);

  // Auto-play entrance animation on load
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      // Book cover entrance with dramatic effect
      tl.fromTo(
        coverRef.current,
        { opacity: 0, scale: 0.9, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 1.2 }
      );

      // Content block entrance
      tl.fromTo(
        contentRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 1 },
        '-=0.8'
      );

      // Micro label
      tl.fromTo(
        labelRef.current,
        { y: -15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        '-=0.6'
      );

      // Title
      tl.fromTo(
        titleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.4'
      );

      // Subtitle
      tl.fromTo(
        subtitleRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        '-=0.5'
      );

      // Description
      tl.fromTo(
        descRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        '-=0.5'
      );

      // CTAs
      tl.fromTo(
        ctaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        '-=0.5'
      );

      // Meta
      tl.fromTo(
        metaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        '-=0.5'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Scroll-driven exit animation
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
          onLeaveBack: () => {
            // Reset all elements when scrolling back to top
            gsap.set(coverRef.current, { opacity: 1, scale: 1, x: 0 });
            gsap.set(contentRef.current, { opacity: 1, x: 0 });
            gsap.set([labelRef.current, titleRef.current, subtitleRef.current, descRef.current, ctaRef.current, metaRef.current], {
              opacity: 1, x: 0, y: 0
            });
          },
        },
      });

      // ENTRANCE (0%-30%): Hold at fully visible (entrance handled on load)
      // SETTLE (30%-70%): Static

      // EXIT (70%-100%)
      scrollTl.fromTo(
        coverRef.current,
        { x: 0, opacity: 1, scale: 1 },
        { x: '-15vw', opacity: 0.3, scale: 0.95, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        contentRef.current,
        { x: 0, opacity: 1 },
        { x: '15vw', opacity: 0, ease: 'power2.in' },
        0.7
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="pinned-section z-10 flex items-center justify-center"
      style={{ backgroundColor: '#0a0a0f' }}
    >
      {/* Subtle background gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 30% 50%, rgba(139, 0, 0, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 30%, rgba(245, 166, 35, 0.1) 0%, transparent 40%)'
        }}
      />

      {/* Main Content Container */}
      <div className="relative z-10 w-full h-full flex items-center justify-center px-[4vw] lg:px-[8vw]">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 w-full max-w-7xl">
          
          {/* Book Cover - Left Side */}
          <div
            ref={coverRef}
            className="relative flex-shrink-0"
          >
            <div 
              className="relative overflow-hidden"
              style={{
                boxShadow: '0 0 60px rgba(139, 0, 0, 0.4), 0 20px 60px rgba(0,0,0,0.8)',
                borderRadius: '4px'
              }}
            >
              <img 
                src="/images/book_cover.jpg" 
                alt="The Order: Collapsed Universe - Book Cover"
                className="h-auto w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[380px] xl:max-w-[420px] object-contain"
              />
              {/* Subtle glow overlay on cover */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, rgba(245, 166, 35, 0.1) 0%, transparent 50%, rgba(139, 0, 0, 0.1) 100%)'
                }}
              />
            </div>
          </div>

          {/* Content - Right Side */}
          <div
            ref={contentRef}
            className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl"
          >
            {/* Micro Label */}
            <span
              ref={labelRef}
              className="micro-label mb-4"
              style={{ 
                color: '#F5A623',
                textShadow: '0 0 15px rgba(245, 166, 35, 0.4)'
              }}
            >
              UPCOMING RELEASE
            </span>

            {/* Book Title */}
            <h1
              ref={titleRef}
              className="font-heading font-semibold mb-2"
              style={{ 
                fontSize: 'clamp(36px, 5vw, 64px)',
                lineHeight: '1.1',
                color: '#FFF8E7',
                textShadow: '0 0 30px rgba(245, 166, 35, 0.3), 0 4px 20px rgba(0,0,0,0.5)'
              }}
            >
              THE ORDER
            </h1>

            {/* Subtitle */}
            <p
              ref={subtitleRef}
              className="font-heading italic mb-6"
              style={{ 
                fontSize: 'clamp(20px, 2.5vw, 32px)',
                color: '#c9a227',
                textShadow: '0 0 20px rgba(201, 162, 39, 0.3)'
              }}
            >
              Collapsed Universe
            </p>

            {/* Description */}
            <p
              ref={descRef}
              className="font-body text-base lg:text-lg mb-8 leading-relaxed"
              style={{ 
                color: 'rgba(255, 248, 231, 0.8)',
                maxWidth: '450px'
              }}
            >
              When the boundaries between worlds begin to fracture, one fallen guardian must choose between the order he swore to protect and the universe he once called home.
            </p>

            {/* CTA Buttons */}
            <div ref={ctaRef} className="flex flex-col sm:flex-row items-center gap-4 mb-8">
              <button 
                className="flex items-center gap-2 px-8 py-4 font-medium text-sm tracking-wide transition-all duration-300 hover:scale-105"
                style={{ 
                  background: 'linear-gradient(135deg, #F5A623 0%, #D4891A 100%)',
                  color: '#0a0a0f',
                  boxShadow: '0 0 30px rgba(245, 166, 35, 0.4), 0 4px 15px rgba(0,0,0,0.3)'
                }}
              >
                <BookOpen className="w-4 h-4" />
                Read the first chapter
              </button>
              <button 
                className="flex items-center gap-2 text-sm transition-colors px-6 py-4"
                style={{ 
                  color: 'rgba(255, 248, 231, 0.9)',
                  border: '1px solid rgba(245, 166, 35, 0.4)'
                }}
              >
                <Play className="w-4 h-4" />
                Watch the trailer
              </button>
            </div>

            {/* Meta Info */}
            <div
              ref={metaRef}
              className="flex items-center gap-6"
            >
              <div 
                className="h-px w-16"
                style={{ background: 'linear-gradient(90deg, #F5A623, transparent)' }}
              />
              <div className="text-left">
                <p 
                  className="font-heading text-lg"
                  style={{ color: '#FFF8E7' }}
                >
                  Coming Winter 2026
                </p>
                <p style={{ color: 'rgba(169, 179, 194, 0.8)' }} className="font-body text-sm">
                  Publisher inquiries open
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
