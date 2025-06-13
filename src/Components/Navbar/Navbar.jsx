import { useState, useEffect } from 'react';
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';
import { NavLinks } from './NavLinks';
import { MobileMenu } from './MobileMenu';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-sm bg-white/95 shadow-xl py-0 border-b border-gray-100' : 'backdrop-blur-sm bg-white/95 shadow-xl py-1'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img 
              src="/logo.svg" 
              alt="Logo" 
              className={`transition-all ${scrolled ? 'h-8' : 'h-9'}`} 
              loading="eager"
            />
            <span className="ml-2 text-xl font-bold text-gray-800 hidden sm:inline">
              GTA CIVILS & HIGHWAYS LTD
            </span>
          </a>

          {/* Desktop Navigation */}
          <NavLinks />

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileOpen(true)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
            aria-label="Toggle navigation"
          >
            <HiOutlineMenuAlt3 className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
};
