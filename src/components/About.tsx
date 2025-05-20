
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container">
        <h2 className="section-title">Sobre mim</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="mb-6">
              Sou uma empreendedora apaixonada por tecnologia e inovação, com foco especial em desenvolvimento mobile e soluções de inteligência artificial.
            </p>
            <p className="mb-6">
              Como CEO da Start30, lidero projetos de MVPs e automações com IA, trabalhando com equipes multidisciplinares para criar soluções tecnológicas que impactam positivamente o mercado.
            </p>
            <p>
              Minha paixão está na interseção entre negócios e tecnologia, onde posso aplicar meu conhecimento técnico para resolver problemas reais e criar oportunidades de crescimento.
            </p>
          </div>
          
          <div className="bg-secondary rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-golden">Habilidades & Expertise</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2 text-golden">Tecnologias</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-golden rounded-full mr-2"></span>
                    Flutter
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-golden rounded-full mr-2"></span>
                    Firebase
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-golden rounded-full mr-2"></span>
                    Node.js
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-golden rounded-full mr-2"></span>
                    GPT & IA
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-golden rounded-full mr-2"></span>
                    n8n
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-2 text-golden">Competências</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-golden rounded-full mr-2"></span>
                    Liderança
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-golden rounded-full mr-2"></span>
                    Desenvolvimento Mobile
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-golden rounded-full mr-2"></span>
                    Gestão de Projetos
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-golden rounded-full mr-2"></span>
                    Inovação
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-golden rounded-full mr-2"></span>
                    Empreendedorismo
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
