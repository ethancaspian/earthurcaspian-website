import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-navy/90 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between px-[6vw] py-6">
        {/* Logo */}
        <button
          onClick={() => scrollToSection('hero')}
          className="font-heading text-lg text-warm-white hover:text-gold transition-colors"
        >
          E.A.C.
        </button>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: 'Book', id: 'hero' },
            { label: 'About', id: 'author' },
            { label: 'Research', id: 'research' },
            { label: 'Contact', id: 'contact' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="font-body text-xs uppercase tracking-[0.14em] text-warm-white/80 hover:text-gold transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
