import React, { useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

// Importando as imagens locais
import momentos1 from '@/assets/momentos_e_eventos/momentos1.jpeg';
import momentos2 from '@/assets/momentos_e_eventos/momentos2.jpeg';
import momentos3 from '@/assets/momentos_e_eventos/momentos3.jpeg';
import momentos4 from '@/assets/momentos_e_eventos/momentos4.jpeg';
import momentos5 from '@/assets/momentos_e_eventos/momentos5.jpeg';
import momentos6 from '@/assets/momentos_e_eventos/momentos6.jpeg';

const Events = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  
  const events = [
    {
      id: 1,
      title: "Palestra Campus Party",
      image: momentos1
    },
    {
      id: 2,
      title: "Primeiro Lugar na Ideathon Coled",
      image: momentos2
    },
    {
      id: 3,
      title: "Segundo Lugar no Nasa Apps Space Gyn",
      image: momentos3
    },
    {
      id: 4,
      title: "Terceiro lugar no Hackaton hub Goiás",
      image: momentos4
    },
    {
      id: 5,
      title: "Congresso Nacional de Sistemas",
      image: momentos5
    },
    {
      id: 6,
      title: "Parceria com a Cosmos Terra preta",
      image: momentos6
    }
  ];

  return (
    <section className="py-20">
      <div className="container">
        <h2 className="section-title">Momentos & Eventos</h2>
        <p className="text-grayText mb-10 max-w-2xl">
          Alguns registros dos eventos, palestras e hackathons dos quais participei com muito orgulho.
        </p>
        
        <Carousel className="w-full">
          <CarouselContent>
            {events.map((event) => (
              <CarouselItem key={event.id} className="md:basis-1/2 lg:basis-1/3">
                <div 
                  className="relative overflow-hidden rounded-lg golden-border h-64 cursor-pointer"
                  onClick={() => setActiveImage(event.image)}
                >
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <p className="p-4 text-white font-medium">{event.title}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-4">
            <CarouselPrevious className="static bg-transparent border border-golden text-golden hover:bg-golden hover:text-black" />
            <CarouselNext className="static bg-transparent border border-golden text-golden hover:bg-golden hover:text-black" />
          </div>
        </Carousel>
        
        {activeImage && (
          <div 
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setActiveImage(null)}
          >
            <div className="relative max-w-3xl max-h-[90vh]">
              <img 
                src={activeImage} 
                alt="Evento" 
                className="w-full h-full object-contain"
              />
              <button 
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-golden rounded-full"
                onClick={() => setActiveImage(null)}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                </svg>
              </button>
            </div>
          </div>
        )}
        
        <div className="mt-12 text-center">
          <a 
            href="https://wa.me/5564811406760" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block px-6 py-3 border border-golden rounded-full hover:bg-golden hover:text-black transition-colors"
          >
            Quero convidar a Mayssa
          </a>
        </div>
      </div>
    </section>
  );
};

export default Events;
