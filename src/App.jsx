import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Showreel from './components/Showreel';
import About from './components/About';
import ContactCTA from './components/ContactCTA';

export default function App() {
  return (
    <div className="bg-black text-white scroll-smooth">
      <Hero />
      <Services />
      <Showreel />
      <About />
      <ContactCTA />
    </div>
  );
}
