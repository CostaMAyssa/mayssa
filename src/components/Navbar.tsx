
import React from 'react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <nav className="py-4">
      <div className="container flex justify-end items-center">
        <div className="flex gap-4">
          <a 
            href="#about" 
            className="text-grayText hover:text-golden transition-colors"
          >
            Sobre
          </a>
          <a 
            href="#projects" 
            className="text-grayText hover:text-golden transition-colors"
          >
            Projetos
          </a>
          <a 
            href="#youtube" 
            className="text-grayText hover:text-golden transition-colors"
          >
            Canal
          </a>
          <a 
            href="#contact" 
            className="text-grayText hover:text-golden transition-colors"
          >
            Contato
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
