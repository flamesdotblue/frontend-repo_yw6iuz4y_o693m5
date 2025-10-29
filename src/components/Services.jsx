import React from 'react';
import { Cpu, Globe, Sparkles, Rocket } from 'lucide-react';

const services = [
  {
    title: 'Interactive 3D & WebGL',
    desc: 'Immersive experiences powered by Spline + WebGL for futuristic, tactile storytelling.',
    icon: Cpu,
    gradient: 'from-fuchsia-500/20 to-cyan-400/20',
  },
  {
    title: 'Brand Systems',
    desc: 'Adaptive identities that scale across every touchpoint and feel alive in motion.',
    icon: Sparkles,
    gradient: 'from-cyan-400/20 to-indigo-500/20',
  },
  {
    title: 'Web & Product',
    desc: 'Ultra-smooth websites and apps engineered for speed, accessibility, and delight.',
    icon: Globe,
    gradient: 'from-indigo-500/20 to-fuchsia-500/20',
  },
  {
    title: 'Launch & Growth',
    desc: 'Cinematic campaigns, content systems, and performance loops that compound.',
    icon: Rocket,
    gradient: 'from-fuchsia-500/20 to-emerald-400/20',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-black text-white py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.15),transparent_35%),radial-gradient(circle_at_80%_70%,rgba(34,211,238,0.12),transparent_35%)]" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight">What we make</h2>
          <p className="mt-3 text-white/70">
            Precision-crafted, high-velocity marketing systems that look unreal and perform for real.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ title, desc, icon: Icon, gradient }) => (
            <div
              key={title}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 overflow-hidden hover:border-white/20 transition-all"
            >
              <div className={`absolute -inset-1 opacity-0 group-hover:opacity-100 blur-2xl bg-gradient-to-br ${gradient} transition-opacity`} />
              <div className="relative">
                <div className="h-12 w-12 rounded-xl bg-white/10 grid place-items-center border border-white/10">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-white/70">{desc}</p>
                <div className="mt-6 text-sm text-cyan-300/90">Explore →</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
