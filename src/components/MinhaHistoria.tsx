
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

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
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    title: "Empreendendo com minha mãe — Trenzinho Joy",
    content: "Antes mesmo de entender o que era "empreendedorismo", eu já vivia ele na prática. Junto com minha mãe, fundamos a Escola Trenzinho Joy, um espaço criado com carinho para acolher, educar e transformar a infância de outras crianças — assim como a minha havia sido. Essa experiência me deu algo raro: visão de negócio, senso de responsabilidade e a certeza de que empreender é, antes de tudo, um ato de coragem.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    title: "Decisão, mudança e crescimento — Rumo a Goiânia",
    content: "Sentia que precisava ir além. Tomei uma das decisões mais importantes da minha vida: sair da minha cidade e ir para Goiânia. O objetivo? Aprender, crescer e me cercar de oportunidades que me desafiassem de verdade. Foi nessa nova fase que aprofundei meus estudos em tecnologia, entrei em contato com o mundo dos apps, das automações e da inteligência artificial — e descobri onde realmente queria deixar minha marca.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    title: "Primeiro código, primeira paixão",
    content: "Quando criei meu primeiro aplicativo, tudo fez sentido. Aquela mistura de lógica e criatividade me conquistou por completo. Descobri que podia resolver problemas reais com algumas linhas de código — e isso me fascinou. A tecnologia, ali, deixou de ser uma ferramenta e passou a ser uma extensão da minha visão de mundo.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80"
  },
  {
    id: 5,
    title: "Hackathons e superação",
    content: "Me joguei nos hackathons. Foram experiências intensas, onde aprendi a resolver problemas em equipe, sob pressão e com prazos apertados. Nesses eventos, ganhei prêmios, amizades e, principalmente, confiança. Percebi que podia liderar, criar com velocidade e me destacar mesmo entre os melhores.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80"
  },
  {
    id: 6,
    title: "A virada empreendedora",
    content: "Depois de tantas experiências técnicas, entendi que só código não bastava. Eu queria empreender, criar soluções com propósito e impacto real. Passei a estudar negócios, inovação e design estratégico. Queria unir o melhor dos dois mundos: visão de produto + mão na massa em tecnologia.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80"
  },
  {
    id: 7,
    title: "A criação da Start30",
    content: "E então nasceu a Start30 — uma empresa construída para transformar ideias em MVPs reais, usando IA, mobile e automações para acelerar projetos e negócios. Hoje, lidero uma equipe apaixonada por inovação, e juntos criamos soluções que resolvem problemas de verdade. Mas essa história... ainda está só começando.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80"
  }
];

const MinhaHistoria = () => {
  return (
    <section id="minha-historia" className="py-20 bg-matte">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-12 text-golden relative inline-block">
          Minha História
          <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-golden"></span>
        </h2>
        
        <div className="mt-8">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {chapters.map((chapter) => (
                <CarouselItem key={chapter.id} className="pl-2 md:pl-4 sm:basis-4/5 md:basis-3/4 lg:basis-1/2">
                  <Card className="border border-golden/30 bg-black rounded-2xl overflow-hidden shadow-md hover:shadow-golden/30 transition-all duration-300">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={chapter.image} 
                        alt={`Capítulo ${chapter.id}: ${chapter.title}`} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <CardHeader className="pt-6 pb-2">
                      <div className="flex items-center mb-2">
                        <div className="bg-golden text-black font-bold rounded-full h-8 w-8 flex items-center justify-center mr-3">
                          {chapter.id}
                        </div>
                        <CardTitle className="text-golden text-xl">{chapter.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="px-6">
                      <ScrollArea className="h-32">
                        <p className="text-f5f5f5 leading-relaxed text-sm md:text-base">
                          {chapter.content}
                        </p>
                      </ScrollArea>
                    </CardContent>
                    <CardFooter className="flex justify-between pt-4 pb-6 px-6">
                      <span className="text-golden/70 text-sm">Capítulo {chapter.id} de {chapters.length}</span>
                      <Button variant="ghost" size="sm" className="text-golden hover:text-golden/80 p-0">
                        Próximo <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="border-golden text-golden hover:bg-golden/10 hover:text-white" />
              <CarouselNext className="border-golden text-golden hover:bg-golden/10 hover:text-white" />
            </div>
          </Carousel>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-grayText mb-6">Gostou da minha jornada?</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-golden hover:bg-golden/90 text-black font-medium">
              Fale comigo
            </Button>
            <Button variant="outline" className="border-golden text-golden hover:bg-golden/10">
              Ver projetos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinhaHistoria;
