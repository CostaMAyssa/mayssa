
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "IA Assistent",
      description: "Assistente virtual com inteligência artificial para automação de atendimento",
      tags: ["Flutter", "GPT", "Firebase"],
      image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=500&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "AutoFlow",
      description: "Plataforma de automação de fluxos de trabalho com integração n8n",
      tags: ["Node.js", "n8n", "React"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "MobilePay",
      description: "Solução de pagamentos mobile com tecnologia blockchain",
      tags: ["Flutter", "Firebase", "Blockchain"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=500&auto=format&fit=crop"
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container">
        <h2 className="section-title">Projetos em Destaque</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="bg-secondary border border-golden/30 overflow-hidden hover:shadow-[0_0_15px_rgba(199,161,73,0.3)] transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
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
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#" 
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
