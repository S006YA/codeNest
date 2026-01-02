import React from 'react';
import { ArrowRight, Code2, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { mockData } from '../data/mock';

const Hero = () => {
  const { hero } = mockData;

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-[#0a0f1e] overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#00d9ff] rounded-full filter blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00ffc8] rounded-full filter blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,217,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,217,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-[#00d9ff]/10 border border-[#00d9ff]/30 rounded-full px-4 py-2 mb-8 animate-fadeIn">
          <Sparkles className="w-4 h-4 text-[#00d9ff]" />
          <span className="text-sm text-[#00d9ff] font-medium">Available for Freelance Projects</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fadeIn" style={{ animationDelay: '0.1s' }}>
          {hero.title}
        </h1>

        {/* Subtitle */}
        <div className="flex items-center justify-center space-x-3 mb-8 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
          <Code2 className="w-6 h-6 text-[#00d9ff]" />
          <p className="text-2xl sm:text-3xl text-[#00d9ff] font-semibold">
            {hero.subtitle}
          </p>
        </div>

        {/* Description */}
        <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed animate-fadeIn" style={{ animationDelay: '0.3s' }}>
          {hero.description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
          <Button
            onClick={() => scrollToSection('projects')}
            className="bg-[#00d9ff] hover:bg-[#00bfe6] text-[#0a0f1e] font-semibold px-8 py-6 text-lg transition-all duration-200 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,217,255,0.5)]"
          >
            {hero.cta}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            onClick={() => scrollToSection('contact')}
            variant="outline"
            className="border-2 border-[#00d9ff] text-[#00d9ff] hover:bg-[#00d9ff]/10 font-semibold px-8 py-6 text-lg transition-all duration-200 hover:scale-105"
          >
            Get In Touch
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#00d9ff]/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-[#00d9ff] rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Hero;