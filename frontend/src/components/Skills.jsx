import React from 'react';
import { mockData } from '../data/mock';

const Skills = () => {
  const { skills } = mockData;

  return (
    <section id="skills" className="py-24 bg-[#0a0f1e] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,217,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,217,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((category, catIndex) => (
            <div
              key={catIndex}
              className="bg-[#1a1f2e] rounded-2xl p-8 border border-[#00d9ff]/20 hover:border-[#00d9ff]/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,217,255,0.15)]"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="w-2 h-2 bg-[#00d9ff] rounded-full mr-3"></span>
                {category.category}
              </h3>
              <div className="space-y-5">
                {category.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-300 font-medium group-hover:text-[#00d9ff] transition-colors duration-200">
                        {skill.name}
                      </span>
                      <span className="text-sm text-[#00d9ff] font-mono">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-[#0a0f1e] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#00d9ff] to-[#00ffc8] rounded-full transition-all duration-1000 ease-out transform origin-left group-hover:scale-x-105"
                        style={{
                          width: `${skill.level}%`,
                          animation: `slideIn 1s ease-out ${skillIndex * 0.1}s forwards`,
                          transform: 'scaleX(0)'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          to {
            transform: scaleX(1);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;