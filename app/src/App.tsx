import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';

// Components
import Navigation from './components/Navigation';

// Sections
import HeroSection from './sections/HeroSection';
import AuthorSection from './sections/AuthorSection';
import ResearchSection from './sections/ResearchSection';
import LabSection from './sections/LabSection';
import PublicationsSection from './sections/PublicationsSection';
import NewsletterSection from './sections/NewsletterSection';
import FooterSection from './sections/FooterSection';

gsap.registerPlugin(ScrollTrigger);

function App() {
  // Global scroll snap for pinned sections
  useEffect(() => {
    // Wait for all ScrollTriggers to be created
    const timer = setTimeout(() => {
      const pinned = ScrollTrigger.getAll()
        .filter((st) => st.vars.pin)
        .sort((a, b) => a.start - b.start);

      const maxScroll = ScrollTrigger.maxScroll(window);

      if (!maxScroll || pinned.length === 0) return;

      // Build pinned ranges with settle ratios
      const pinnedRanges = pinned.map((st, index) => {
        const start = st.start / maxScroll;
        const end = (st.end ?? st.start) / maxScroll;
        // Settle ratios: Section 1: 0.50, Section 2: 0.50, Section 3: 0.52
        const settleRatios = [0.5, 0.5, 0.52];
        const settleRatio = settleRatios[index] || 0.5;
        const center = start + (end - start) * settleRatio;
        return { start, end, center };
      });

      // Create global snap
      ScrollTrigger.create({
        snap: {
          snapTo: (value: number) => {
            // Check if within any pinned range (with buffer)
            const inPinned = pinnedRanges.some(
              (r) => value >= r.start - 0.02 && value <= r.end + 0.02
            );
            if (!inPinned) return value; // Flowing section: free scroll

            // Find nearest pinned center
            const target = pinnedRanges.reduce(
              (closest, r) =>
                Math.abs(r.center - value) < Math.abs(closest - value)
                  ? r.center
                  : closest,
              pinnedRanges[0]?.center ?? 0
            );

            return target;
          },
          duration: { min: 0.15, max: 0.35 },
          delay: 0,
          ease: 'power2.out',
        },
      });
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  // Cleanup all ScrollTriggers on unmount
  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="relative bg-navy min-h-screen">
      {/* Grain Overlay */}
      <div className="grain-overlay" />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative">
        <HeroSection />
        <AuthorSection />
        <ResearchSection />
        <LabSection />
        <PublicationsSection />
        <NewsletterSection />
        <FooterSection />
      </main>
    </div>
  );
}

export default App;
