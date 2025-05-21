import React from 'react';

const YouTube = () => {
  return (
    <section id="youtube" className="py-20 bg-secondary">
      <div className="container">
        <h2 className="section-title">Tutoriais e bastidores de hackathons</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-matte aspect-video rounded-lg overflow-hidden golden-border">
            {/* YouTube video embed */}
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/NVE7RNSHgXA"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
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
