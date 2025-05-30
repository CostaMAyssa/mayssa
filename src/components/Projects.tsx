import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import granoZapImage from '@/assets/sistemas/Captura de Tela 2025-05-21 às 17.22.43.png';
import zapFlowImage from '@/assets/sistemas/zapflow.png';
import packN8NImage from '@/assets/sistemas/packn8n.png';
import auraImage from '@/assets/sistemas/aura.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "GranoZap",
      description: "Domine suas finanças com uma simples mensagens pelo WhatsApp",
      tags: ["Node.js", "Dashboard", "WhatsApp"],
      image: granoZapImage,
      url: "https://grananozap.com.br/"
    },
    {
      id: 2,
      title: "ZapFlow",
      description: "Automatize todo seu WhatsApp e escalone seu negócio",
      tags: ["WhatsApp", "Automação", "Marketing"],
      image: zapFlowImage,
      url: "https://costamayssa.github.io/zapflow-landing-page/"
    },
    {
      id: 3,
      title: "PackN8N",
      description: "Modelos de fluxo prontos para automação com N8N",
      tags: ["Automação", "N8N", "Fluxos"],
      image: packN8NImage,
      url: "https://packn8n.com.br/"
    },
    {
      id: 4,
      title: "AURA",
      description: "Sistema inteligente de agendamento para clínicas modernas",
      tags: ["IA", "Agendamento", "Clínicas"],
      image: auraImage,
      url: "https://costamayssa.github.io/aura-clinic-bliss/#/"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container">
        <h2 className="section-title">Projetos em Destaque</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
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
              href="https://wa.me/5564811406760" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 border border-golden rounded-full hover:bg-golden hover:text-black transition-colors"
            >
            Ver todos os projetos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
