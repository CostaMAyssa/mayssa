
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MinhaHistoria from '@/components/MinhaHistoria';
import Start30 from '@/components/Start30';
import Projects from '@/components/Projects';
import YouTube from '@/components/YouTube';
import Events from '@/components/Events';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-matte text-whitePure">
      <Hero />
      <MinhaHistoria />
      <Start30 />
      <Projects />
      <YouTube />
      <Events />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
