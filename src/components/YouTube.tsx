
import React from 'react';

const YouTube = () => {
  return (
    <section id="youtube" className="py-20 bg-secondary">
      <div className="container">
        <h2 className="section-title">Tutoriais e bastidores de hackathons</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-matte aspect-video rounded-lg overflow-hidden golden-border">
            {/* Placeholder for YouTube embed */}
            <div className="w-full h-full flex items-center justify-center bg-matte">
              <div className="text-center p-4">
                <div className="w-20 h-20 rounded-full bg-golden/20 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-golden" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
                  </svg>
                </div>
                <p className="text-golden">Clique para assistir ao canal</p>
              </div>
            </div>
          </div>
          
          <div>
            <p className="mb-6 text-lg">
              Compartilho experiências reais com Flutter, IA e empreendedorismo. 
              Acompanhe meu canal para tutorials práticos e bastidores de hackathons.
            </p>
            
            <div className="space-y-6">
              <div className="border-l-4 border-golden pl-4">
                <h3 className="font-medium mb-1">Criando seu primeiro aplicativo com Flutter</h3>
                <p className="text-sm text-grayText">Do zero ao MVP em 30 minutos</p>
              </div>
              
              <div className="border-l-4 border-golden pl-4">
                <h3 className="font-medium mb-1">Integrando GPT aos seus projetos</h3>
                <p className="text-sm text-grayText">Como utilizar IA para impulsionar seus projetos</p>
              </div>
              
              <div className="border-l-4 border-golden pl-4">
                <h3 className="font-medium mb-1">Bastidores do Hackathon Start30</h3>
                <p className="text-sm text-grayText">Desafios e aprendizados de uma competição de 48h</p>
              </div>
            </div>
            
            <div className="mt-8">
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 text-golden hover:underline"
              >
                <span>Inscreva-se no canal</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 5l7 7-7 7M5 12h15" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTube;
