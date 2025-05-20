
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-golden/30">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-grayText">
              &copy; {currentYear} Mayssa Ferreira Costa. Todos os direitos reservados.
            </p>
          </div>
          
          <div className="flex gap-8">
            <a href="#about" className="text-grayText hover:text-golden transition-colors">Sobre</a>
            <a href="#projects" className="text-grayText hover:text-golden transition-colors">Projetos</a>
            <a href="#youtube" className="text-grayText hover:text-golden transition-colors">Canal</a>
            <a href="#contact" className="text-grayText hover:text-golden transition-colors">Contato</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
