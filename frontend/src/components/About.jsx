import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { mockData } from '../data/mock';

const About = () => {
  const { about } = mockData;

  return (
    <section id="about" className="py-24 bg-[#0f1419] relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00d9ff] opacity-5 rounded-full filter blur-[150px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image/Visual */}
          <div className="relative">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#00d9ff] to-[#00ffc8] opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-[#1a1f2e] p-8 rounded-2xl border border-[#00d9ff]/20 shadow-xl">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[#00d9ff] rounded-full animate-pulse"></div>
                    <code className="text-sm text-gray-400 font-mono">const developer = {'{'}</code>
                  </div>
                  <div className="ml-6 space-y-2">
                    <p className="text-gray-300 font-mono text-sm">
                      <span className="text-[#00ffc8]">name:</span> <span className="text-[#00d9ff]">'Aeterna stacK'</span>,
                    </p>
                    <p className="text-gray-300 font-mono text-sm">
                      <span className="text-[#00ffc8]">role:</span> <span className="text-[#00d9ff]">'Frontend Developer'</span>,
                    </p>
                    <p className="text-gray-300 font-mono text-sm">
                      <span className="text-[#00ffc8]">skills:</span> [<span className="text-[#00d9ff]">'React', 'TypeScript'</span>],
                    </p>
                    <p className="text-gray-300 font-mono text-sm">
                      <span className="text-[#00ffc8]">passion:</span> <span className="text-[#00d9ff]">'Building Amazing UIs'</span>
                    </p>
                  </div>
                  <code className="text-sm text-gray-400 font-mono">{'};'}</code>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              {about.title}
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              {about.description}
            </p>

            {/* Highlights */}
            <div className="space-y-4">
              {about.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 group"
                >
                  <CheckCircle2 className="w-6 h-6 text-[#00d9ff] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200" />
                  <p className="text-gray-300">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;