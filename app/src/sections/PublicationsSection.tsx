import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const publications = [
  {
    category: 'NOVEL',
    title: 'The Order: Collapsed Universe',
    meta: 'Winter 2026',
    description: 'When the boundaries between worlds begin to fracture, one fallen guardian must choose between the order he swore to protect and the universe he once called home.',
  },
  {
    category: 'PAPER',
    title: 'Noise-Resilient Encoding',
    meta: 'Nature Physics, 2023',
    description: 'A compact review of stabilizer codes in non-Markovian regimes.',
  },
  {
    category: 'ESSAY',
    title: 'The Observer Effect',
    meta: 'The Paris Review, 2022',
    description: 'On writing fiction after spending years in a laser lab.',
  },
];

export default function PublicationsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current,
        { y: 18, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 55%',
            scrub: true,
          },
        }
      );

      // Cards animation
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.pub-card');
        gsap.fromTo(
          cards,
          { y: 28, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.12,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 70%',
              end: 'top 40%',
              scrub: true,
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flowing-section bg-navy z-50 py-24"
    >
      <div className="px-[6vw]">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <span className="micro-label text-gold mb-4 block">
            PUBLICATIONS
          </span>
          <h2 className="font-heading font-medium text-h2 text-warm-white">
            Words in print.
          </h2>
        </div>

        {/* Cards Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {publications.map((pub, index) => (
            <div
              key={index}
              className="pub-card group cursor-pointer"
            >
              {/* Category */}
              <span className="font-mono text-micro text-gold mb-4 block">
                {pub.category}
              </span>

              {/* Title */}
              <h3 className="font-heading font-medium text-2xl text-warm-white mb-2 group-hover:-translate-y-0.5 transition-transform duration-300">
                {pub.title}
              </h3>

              {/* Meta */}
              <span className="font-mono text-micro text-cool-gray mb-4 block">
                {pub.meta}
              </span>

              {/* Description */}
              <p className="font-body text-sm text-warm-white/70 mb-6 leading-relaxed">
                {pub.description}
              </p>

              {/* Link */}
              <span className="link-underline text-warm-white/80 hover:text-warm-white text-sm flex items-center gap-2">
                Read more
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
