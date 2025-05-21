
import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

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
        
        <div className="flex flex-wrap justify-center gap-6">
          <a 
            href="#" 
            className="w-12 h-12 rounded-full border border-golden flex items-center justify-center hover:bg-golden/20 transition-colors golden-glow"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6 text-golden" />
          </a>
          
          <a 
            href="#" 
            className="w-12 h-12 rounded-full border border-golden flex items-center justify-center hover:bg-golden/20 transition-colors golden-glow"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6 text-golden" />
          </a>
          
          <a 
            href="#" 
            className="w-12 h-12 rounded-full border border-golden flex items-center justify-center hover:bg-golden/20 transition-colors golden-glow"
            aria-label="YouTube"
          >
            <Youtube className="w-6 h-6 text-golden" />
          </a>
          
          <a 
            href="#" 
            className="w-12 h-12 rounded-full border border-golden flex items-center justify-center hover:bg-golden/20 transition-colors golden-glow"
            aria-label="Twitter"
          >
            <Twitter className="w-6 h-6 text-golden" />
          </a>
          
          <a 
            href="#" 
            className="w-12 h-12 rounded-full border border-golden flex items-center justify-center hover:bg-golden/20 transition-colors golden-glow"
            aria-label="Facebook"
          >
            <Facebook className="w-6 h-6 text-golden" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
