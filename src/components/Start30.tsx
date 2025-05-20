
import React from 'react';
import { Button } from '@/components/ui/button';

const Start30 = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container">
        <h2 className="section-title">Start30</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="mb-6 text-lg">
              Na Start30, lidero projetos de MVPs e automações com IA, 
              trabalhando com clientes para transformar ideias em produtos 
              digitais viáveis e escaláveis.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-golden">Tecnologias utilizadas</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 rounded-full border border-golden text-sm">Flutter</span>
                <span className="px-3 py-1 rounded-full border border-golden text-sm">n8n</span>
                <span className="px-3 py-1 rounded-full border border-golden text-sm">GPT</span>
                <span className="px-3 py-1 rounded-full border border-golden text-sm">Firebase</span>
                <span className="px-3 py-1 rounded-full border border-golden text-sm">Node.js</span>
              </div>
            </div>
            
            <Button className="bg-golden hover:bg-golden/90 text-black rounded-full">
              Ver soluções construídas
            </Button>
          </div>
          
          <div className="bg-matte p-6 rounded-lg border border-golden/30">
            <h3 className="text-xl font-semibold mb-6 text-golden">Nossos Serviços</h3>
            
            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="text-golden text-2xl">01</span>
                <div>
                  <h4 className="font-medium">Desenvolvimento de MVP</h4>
                  <p className="text-sm text-grayText">Transformamos sua ideia em um produto mínimo viável para validação de mercado</p>
                </div>
              </li>
              
              <li className="flex gap-4">
                <span className="text-golden text-2xl">02</span>
                <div>
                  <h4 className="font-medium">Automações com IA</h4>
                  <p className="text-sm text-grayText">Soluções personalizadas para automatizar processos utilizando inteligência artificial</p>
                </div>
              </li>
              
              <li className="flex gap-4">
                <span className="text-golden text-2xl">03</span>
                <div>
                  <h4 className="font-medium">Aplicativos Mobile</h4>
                  <p className="text-sm text-grayText">Desenvolvimento de aplicativos nativos e multiplataforma com Flutter</p>
                </div>
              </li>
              
              <li className="flex gap-4">
                <span className="text-golden text-2xl">04</span>
                <div>
                  <h4 className="font-medium">Consultoria Tecnológica</h4>
                  <p className="text-sm text-grayText">Assessoria estratégica para implementação e gestão de projetos de tecnologia</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Start30;
