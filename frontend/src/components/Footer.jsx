import React from 'react';
import { Heart, Mail } from 'lucide-react';
import { mockData } from '../data/mock';

const Footer = () => {
  const { contact } = mockData;
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0a0f1e] border-t border-[#00d9ff]/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60'%3E%3Ctext x='10' y='45' font-size='40' font-weight='bold' fill='%2300d9ff'%3EAeterna%3C/text%3E%3C/svg%3E"
                alt="Aeterna stacK Logo"
                className="h-10 w-10 object-contain"
              />
              <span className="text-xl font-bold text-white">Aeterna stacK</span>
            </div>
            <p className="text-gray-400 text-sm">
              Crafting beautiful and functional web experiences with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-[#00d9ff] transition-colors duration-200 text-sm"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('skills')}
                  className="text-gray-400 hover:text-[#00d9ff] transition-colors duration-200 text-sm"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="text-gray-400 hover:text-[#00d9ff] transition-colors duration-200 text-sm"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-[#00d9ff] transition-colors duration-200 text-sm"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get In Touch</h3>
            <div className="flex items-center space-x-2 text-gray-400 text-sm mb-3">
              <Mail className="w-4 h-4 text-[#00d9ff]" />
              <a
                href={`mailto:${contact.email}`}
                className="hover:text-[#00d9ff] transition-colors duration-200 break-all"
              >
                {contact.email}
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Available for freelance projects
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#00d9ff]/10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Aeterna stacK. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center">
              Built with
              <Heart className="w-4 h-4 mx-1 text-[#00d9ff] fill-current" />
              using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;