import React from 'react';
import { motion } from 'framer-motion';

const items = [
  {
    title: 'Quantum Commerce',
    img: 'https://images.unsplash.com/photo-1551281044-8c5f207043d6?q=80&w=1600&auto=format&fit=crop',
    tag: 'Ecommerce / 3D UI',
  },
  {
    title: 'Neon Dawn Launch',
    img: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1600&auto=format&fit=crop',
    tag: 'Campaign / Motion',
  },
  {
    title: 'Spectral OS',
    img: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop',
    tag: 'Product / Brand',
  },
];

export default function Showreel() {
  return (
    <section id="work" className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl md:text-5xl font-semibold leading-tight">Selected work</h2>
            <p className="mt-3 text-white/70 max-w-xl">Cinematic builds and narrative systems engineered for smoothness and scale.</p>
          </div>
          <a href="#contact" className="h-11 px-5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all flex items-center">Start a brief</a>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {items.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="text-xs text-white/70">{card.tag}</div>
                <div className="text-xl font-semibold">{card.title}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-br from-fuchsia-500/10 to-cyan-400/10 p-8"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-semibold">Stories that glide</h3>
              <p className="mt-2 text-white/70">
                Our builds focus on buttery-smooth performance: GPU-accelerated motion, lazy-loaded media, and progressive enhancement.
              </p>
            </div>
            <a href="#about" className="h-12 px-6 rounded-xl bg-white text-black font-medium hover:opacity-90 transition">How we work</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
