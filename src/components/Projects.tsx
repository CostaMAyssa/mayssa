import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

// Importando a imagem do GranaNoZap
import granaNoZapImagem from '../assets/sistemas/Captura de Tela 2025-05-21 às 17.22.43.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "GranaNoZap",
      description: "Controle financeiro automatizado via WhatsApp, com dashboard inteligente para organizar sua vida financeira com facilidade",
      tags: ["Automação", "WhatsApp", "Finanças"],
      image: granaNoZapImagem,
      link: "https://grananozap.com.br/"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container">
        <h2 className="section-title">Projetos em Destaque</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {projects.map((project) => (
            <Card key={project.id} className="bg-secondary border border-golden/30 overflow-hidden hover:shadow-[0_0_15px_rgba(199,161,73,0.3)] transition-all duration-300">
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block h-64 overflow-hidden relative"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="text-white flex items-center gap-2 font-medium">
                    <ExternalLink size={18} />
                    <span>Visitar site</span>
                  </div>
                </div>
              </a>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block ml-2 text-golden hover:text-golden/80"
                  >
                    <ExternalLink size={16} />
                  </a>
                </h3>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
