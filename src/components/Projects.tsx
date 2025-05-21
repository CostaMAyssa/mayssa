import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import granoZapImage from '@/assets/sistemas/Captura de Tela 2025-05-21 às 17.22.43.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "GranoZap",
      description: "Domine suas finanças de forma simples, rápida e inteligente",
      tags: ["Node.js", "React", "WhatsApp"],
      image: granoZapImage,
      url: "https://grananozap.com.br/"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container">
        <h2 className="section-title">Projetos em Destaque</h2>
        
        <div className="grid grid-cols-1 max-w-3xl mx-auto">
          {projects.map((project) => (
            <a 
              key={project.id} 
              href={project.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block cursor-pointer"
            >
              <Card className="bg-secondary border border-golden/30 overflow-hidden hover:shadow-[0_0_15px_rgba(199,161,73,0.3)] transition-all duration-300">
                <div className="h-auto overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-grayText mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="px-2 py-1 bg-matte text-xs rounded text-golden"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://grananozap.com.br/" 
            className="inline-block px-6 py-3 border border-golden rounded-full hover:bg-golden hover:text-black transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver todos os projetos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
