
import React, { useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const Events = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  
  const events = [
    {
      id: 1,
      title: "Campus Party 2024",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=500&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Conecta CEIA 2023",
      image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=500&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Hackathon Blockchain",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=500&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Palestra Flutter Summit",
      image: "https://images.unsplash.com/photo-1475721027785-f74ec9c409d6?q=80&w=500&auto=format&fit=crop"
    },
    {
      id: 5,
      title: "Workshop AI Innovation",
      image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=500&auto=format&fit=crop"
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
            href="#contact" 
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
