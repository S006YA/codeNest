import React, { useState } from 'react';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { mockData } from '../data/mock';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';

const Projects = () => {
  const { projects } = mockData;
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 bg-[#0f1419] relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00ffc8] opacity-5 rounded-full filter blur-[150px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work and contributions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-[#1a1f2e] rounded-2xl overflow-hidden border border-[#00d9ff]/20 hover:border-[#00d9ff]/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,217,255,0.15)] hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-[#0a0f1e]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1f2e] to-transparent opacity-60"></div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00d9ff] transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs px-3 py-1 bg-[#00d9ff]/10 text-[#00d9ff] rounded-full border border-[#00d9ff]/30"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs px-3 py-1 bg-[#00d9ff]/10 text-[#00d9ff] rounded-full border border-[#00d9ff]/30">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* View Details Link */}
                <div className="flex items-center text-[#00d9ff] text-sm font-medium group-hover:translate-x-2 transition-transform duration-200">
                  View Details
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="bg-[#1a1f2e] border-[#00d9ff]/30 text-white max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-white mb-2">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription className="text-gray-400">
                  {selectedProject.description}
                </DialogDescription>
              </DialogHeader>

              {/* Project Image */}
              <div className="relative h-64 rounded-lg overflow-hidden my-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop';
                  }}
                />
              </div>

              {/* Technologies */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-400 mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-sm px-3 py-1 bg-[#00d9ff]/10 text-[#00d9ff] rounded-full border border-[#00d9ff]/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-400 mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2 text-gray-300">
                      <ChevronRight className="w-4 h-4 text-[#00d9ff] mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <Button
                  onClick={() => window.open(selectedProject.githubUrl, '_blank')}
                  className="flex-1 bg-[#0a0f1e] hover:bg-[#00d9ff]/10 text-white border border-[#00d9ff]/30 transition-colors duration-200"
                >
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </Button>
                <Button
                  onClick={() => window.open(selectedProject.liveUrl, '_blank')}
                  className="flex-1 bg-[#00d9ff] hover:bg-[#00bfe6] text-[#0a0f1e] transition-colors duration-200"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;