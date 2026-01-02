import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0a0f1e]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <img
              src="https://customer-assets.emergentagent.com/job_codenest-hub/artifacts/1sy2kcgi_Gemini_Generated_Image_n6s2p6n6s2p6n6s2.png"
              alt="codeNest Logo"
              className="h-12 w-12 object-contain"
            />
            <span className="text-2xl font-bold text-white tracking-tight">codeNest</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-[#00d9ff] transition-colors duration-200 font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-gray-300 hover:text-[#00d9ff] transition-colors duration-200 font-medium"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-300 hover:text-[#00d9ff] transition-colors duration-200 font-medium"
            >
              Projects
            </button>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-[#00d9ff] hover:bg-[#00bfe6] text-[#0a0f1e] font-semibold transition-colors duration-200"
            >
              Contact
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0a0f1e] border-t border-gray-800">
          <div className="px-4 py-6 space-y-4">
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-gray-300 hover:text-[#00d9ff] transition-colors duration-200 font-medium py-2"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="block w-full text-left text-gray-300 hover:text-[#00d9ff] transition-colors duration-200 font-medium py-2"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="block w-full text-left text-gray-300 hover:text-[#00d9ff] transition-colors duration-200 font-medium py-2"
            >
              Projects
            </button>
            <Button
              onClick={() => scrollToSection('contact')}
              className="w-full bg-[#00d9ff] hover:bg-[#00bfe6] text-[#0a0f1e] font-semibold transition-colors duration-200"
            >
              Contact
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;