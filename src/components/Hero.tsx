
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center py-12">
      <div className="container flex flex-col items-center">
        <div className="hero-circle w-64 h-64 mb-8">
          <img 
            src="/lovable-uploads/aa565f09-0d47-4d4e-81fd-c6955adb5655.png" 
            alt="Mayssa Ferreira Costa" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
          Mayssa Ferreira Costa
        </h1>
        
        <p className="text-lg md:text-xl text-grayText mb-8 max-w-2xl text-center">
          Empreendedora apaixonada por tecnologia, CEO na Start30 e desenvolvedora mobile focada em soluções com IA.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a href="#youtube" className="nav-button">
            Ver Canal
          </a>
          <a href="#projects" className="nav-button">
            Projetos
          </a>
          <a href="#contact" className="nav-button">
            Contato
          </a>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Button className="bg-golden hover:bg-golden/90 text-black px-6 py-6 h-auto rounded-full">
            Sou empreendedora
          </Button>
          <Button variant="outline" className="border-whitePure text-whitePure hover:bg-white/10 px-6 py-6 h-auto rounded-full">
            Sou desenvolvedora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
