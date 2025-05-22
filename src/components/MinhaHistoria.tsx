import React, { useState, useRef } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";

// Importando a imagem de fundo para usar em todos os capítulos
import fundoImage from '../assets/fundo/fundo.png';

interface TimelineChapter {
  id: number;
  title: string;
  content: string;
  image: string;
}

const chapters: TimelineChapter[] = [
  {
    id: 1,
    title: "Onde tudo começou",
    content: "Nasci no interior de Goiás, em um ambiente simples, mas cheio de afeto e incentivo. Desde criança, já demonstrava curiosidade por aprender, desmontar coisas e imaginar como o mundo funcionava. A tecnologia ainda era distante, mas a vontade de transformar e criar já estava viva em mim. A infância me ensinou a olhar com atenção para as pessoas e para os problemas ao redor — uma habilidade que mais tarde viraria uma das maiores forças da minha jornada.",
    image: fundoImage
  },
  {
    id: 2,
    title: "Empreendendo com minha mãe — Trenzinho Joy",
    content: "Antes mesmo de entender o que era \"empreendedorismo\", eu já vivia ele na prática. Junto com minha mãe, fundamos a Escola Trenzinho Joy, um espaço criado com carinho para acolher, educar e transformar a infância de outras crianças — assim como a minha havia sido. Essa experiência me deu algo raro: visão de negócio, senso de responsabilidade e a certeza de que empreender é, antes de tudo, um ato de coragem.",
    image: fundoImage
  },
  {
    id: 3,
    title: "Decisão, mudança e crescimento — Rumo a Goiânia",
    content: "Sentia que precisava ir além. Tomei uma das decisões mais importantes da minha vida: sair da minha cidade e ir para Goiânia. O objetivo? Aprender, crescer e me cercar de oportunidades que me desafiassem de verdade. Foi nessa nova fase que aprofundei meus estudos em tecnologia, entrei em contato com o mundo dos apps, das automações e da inteligência artificial — e descobri onde realmente queria deixar minha marca.",
    image: fundoImage
  },
  {
    id: 4,
    title: "Primeiro código, primeira paixão",
    content: "Quando criei meu primeiro aplicativo, tudo fez sentido. Aquela mistura de lógica e criatividade me conquistou por completo. Descobri que podia resolver problemas reais com algumas linhas de código — e isso me fascinou. A tecnologia, ali, deixou de ser uma ferramenta e passou a ser uma extensão da minha visão de mundo.",
    image: fundoImage
  },
  {
    id: 5,
    title: "Hackathons e superação",
    content: "Me joguei nos hackathons. Foram experiências intensas, onde aprendi a resolver problemas em equipe, sob pressão e com prazos apertados. Nesses eventos, ganhei prêmios, amizades e, principalmente, confiança. Percebi que podia liderar, criar com velocidade e me destacar mesmo entre os melhores.",
    image: fundoImage
  },
  {
    id: 6,
    title: "A virada empreendedora",
    content: "Depois de tantas experiências técnicas, entendi que só código não bastava. Eu queria empreender, criar soluções com propósito e impacto real. Passei a estudar negócios, inovação e design estratégico. Queria unir o melhor dos dois mundos: visão de produto + mão na massa em tecnologia.",
    image: fundoImage
  },
  {
    id: 7,
    title: "A criação da Start30",
    content: "E então nasceu a Start30 — uma empresa construída para transformar ideias em MVPs reais, usando IA, mobile e automações para acelerar projetos e negócios. Hoje, lidero uma equipe apaixonada por inovação, e juntos criamos soluções que resolvem problemas de verdade. Mas essa história... ainda está só começando.",
    image: fundoImage
  }
];

const MinhaHistoria = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();
  
  const handleNext = () => {
    api?.scrollNext();
  };
  
  const handlePrev = () => {
    api?.scrollPrev();
  };

  React.useEffect(() => {
    if (!api) return;
    
    api.on("select", () => {
      setActiveIndex(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section id="minha-historia" className="py-20 bg-matte overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-16 text-golden relative inline-block">
          Minha História
          <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-golden"></span>
        </h2>
        
        <div className="mt-8">
          <Carousel 
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
            setApi={setApi}
          >
            <CarouselContent>
              {chapters.map((chapter) => (
                <CarouselItem key={chapter.id} className="w-full">
                  <div className="bg-black/70 rounded-2xl overflow-hidden shadow-xl relative min-h-[500px] border border-golden/20 hover:border-golden/50 transition-all duration-300">
                    <div className="absolute inset-0 z-0">
                      <img 
                        src={chapter.image} 
                        alt={`Capítulo ${chapter.id}: ${chapter.title}`} 
                        className="w-full h-full object-cover opacity-40 transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                    
                    <div className="relative z-10 p-6 sm:p-8 flex flex-col justify-between h-full min-h-[500px]">
                      <div>
                        <div className="flex items-center mb-6">
                          <div className="bg-yellow-400 text-black font-bold rounded-full h-10 w-10 flex items-center justify-center mr-4 shadow-md shadow-yellow-400/20">
                            {chapter.id}
                          </div>
                          <h3 className="text-2xl font-bold text-yellow-400">{chapter.title}</h3>
                        </div>
                        
                        <div className="mt-6">
                          <p className="text-gray-100 leading-relaxed max-w-full font-caveat text-2xl tracking-wide">
                            {chapter.content}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center mt-8 pt-6 border-t border-golden/20">
                        <span className="text-golden/70 text-sm">
                          Capítulo {chapter.id} de {chapters.length}
                        </span>
                        <div className="flex gap-4">
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="text-golden hover:text-golden/80 hover:bg-golden/10"
                            onClick={handlePrev}
                          >
                            <ArrowLeft className="h-4 w-4 mr-2" /> Anterior
                          </Button>
                          <Button 
                            variant="ghost"
                            size="sm" 
                            className="text-golden hover:text-golden/80 hover:bg-golden/10"
                            onClick={handleNext}
                          >
                            Próximo <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious 
                onClick={handlePrev}
                className="border-golden text-golden hover:bg-golden/10 hover:text-white -left-16"
              />
              <CarouselNext 
                onClick={handleNext}
                className="border-golden text-golden hover:bg-golden/10 hover:text-white -right-16"
              />
            </div>
          </Carousel>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-grayText mb-8">Gostou da minha jornada?</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://wa.me/5564811406760" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="bg-golden hover:bg-golden/90 text-black font-medium">
                Fale comigo
              </Button>
            </a>
            <a 
              href="https://wa.me/5564811406760" 
              target="_blank" 
              rel="noopener noreferrer"
            >
            <Button variant="outline" className="border-golden text-golden hover:bg-golden/10">
              Ver projetos
            </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinhaHistoria;
