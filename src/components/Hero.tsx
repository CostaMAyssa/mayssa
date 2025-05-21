
import React from 'react';
import { Instagram, Linkedin, Youtube, TiktokIcon, Phone } from 'lucide-react';

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
            aria-label="TikTok"
          >
            <svg className="w-6 h-6 text-golden" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
            </svg>
          </a>
          
          <a 
            href="#" 
            className="w-12 h-12 rounded-full border border-golden flex items-center justify-center hover:bg-golden/20 transition-colors golden-glow"
            aria-label="WhatsApp"
          >
            <Phone className="w-6 h-6 text-golden" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
