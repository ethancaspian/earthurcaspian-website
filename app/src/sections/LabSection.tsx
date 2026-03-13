import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Cpu, Waves, Mic } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const researchTopics = [
  {
    icon: Cpu,
    title: 'Quantum error correction',
    description: 'How stable memories emerge from noisy parts.',
  },
  {
    icon: Waves,
    title: 'Open quantum systems',
    description: 'When the environment becomes a character.',
  },
  {
    icon: Mic,
    title: 'Science communication',
    description: 'Making the invisible feel inevitable.',
  },
];

export default function LabSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Image animation
      gsap.fromTo(
        imageRef.current,
        { x: '-8vw', opacity: 0, scale: 1.04 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 35%',
            scrub: true,
          },
        }
      );

      // Content animation
      gsap.fromTo(
        contentRef.current,
        { x: '6vw', opacity: 0 },
        {
          x: 0,
          opacity: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 35%',
            scrub: true,
          },
        }
      );

      // Parallax on image
      gsap.fromTo(
        imageRef.current,
        { y: -24 },
        {
          y: 24,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flowing-section bg-navy z-40 min-h-screen"
    >
      <div className="flex flex-col lg:flex-row">
        {/* Left Image */}
        <div
          ref={imageRef}
          className="w-full lg:w-[58vw] h-[60vh] lg:h-screen relative"
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'url(/images/lab_documentary.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </div>

        {/* Right Content */}
        <div
          ref={contentRef}
          className="w-full lg:w-[42vw] px-[6vw] py-16 lg:py-0 flex flex-col justify-center"
        >
          {/* Micro Label */}
          <span className="micro-label text-gold mb-6">
            SELECTED WORK
          </span>

          {/* Headline */}
          <h2 className="font-heading font-medium text-h2 text-warm-white mb-6">
            The Lab
          </h2>

          {/* Body */}
          <p className="font-body text-base text-warm-white/70 mb-10 leading-relaxed">
            A small team, a tight stack, and a lot of whiteboards. We model, prototype, and translate.
          </p>

          {/* Research Topics */}
          <div className="space-y-6 mb-10">
            {researchTopics.map((topic, index) => (
              <div key={index} className="flex items-start gap-4">
                <topic.icon className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-body font-medium text-warm-white mb-1">
                    {topic.title}
                  </h3>
                  <p className="font-body text-sm text-cool-gray">
                    {topic.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <button className="btn-secondary flex items-center gap-2 w-fit mb-4">
            Request a talk or advisory session
            <ArrowRight className="w-4 h-4" />
          </button>

          <p className="font-mono text-micro text-cool-gray">
            Available for select engagements.
          </p>
        </div>
      </div>
    </section>
  );
}
