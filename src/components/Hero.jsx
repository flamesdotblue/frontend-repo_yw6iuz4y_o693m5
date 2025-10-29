import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';

const Nav = () => {
  return (
    <div className="w-full flex items-center justify-between px-6 md:px-10 py-4 backdrop-blur-md/40 bg-black/20 rounded-2xl border border-white/10">
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-fuchsia-500 to-cyan-400 grid place-items-center">
          <Rocket className="h-4 w-4 text-white" />
        </div>
        <span className="font-semibold tracking-wide text-white">NEON ATLAS</span>
      </div>
      <div className="hidden md:flex items-center gap-6 text-sm text-white/80">
        <a href="#services" className="hover:text-white transition-colors">Services</a>
        <a href="#work" className="hover:text-white transition-colors">Work</a>
        <a href="#about" className="hover:text-white transition-colors">About</a>
        <a href="#contact" className="px-4 py-2 rounded-lg bg-white text-black font-medium hover:opacity-90 transition">Start a project</a>
      </div>
    </div>
  );
};

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* 3D Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft gradient vignettes - do not block interactions */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/70" />
        <div className="pointer-events-none absolute -inset-[20%] bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.20),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(34,211,238,0.18),transparent_35%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-6">
        <Nav />

        <div className="mt-20 md:mt-28 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur">
            <Sparkles className="h-4 w-4 text-fuchsia-400" />
            <span className="text-xs tracking-wide text-white/80">Futuristic brand growth studio</span>
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl leading-tight font-semibold">
            We craft cybernetic brand experiences that feel like the future.
          </h1>
          <p className="mt-4 text-white/70 max-w-2xl">
            From interactive 3D worlds to cinematic web narratives, we design marketing that moves — perfectly smooth, impossibly fast, and unforgettable.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <a href="#contact" className="px-6 py-3 rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-black font-semibold shadow-lg shadow-fuchsia-500/20 hover:opacity-90 transition-all">
              Launch your project
            </a>
            <a href="#work" className="px-6 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all">
              See our work
            </a>
          </div>
        </div>

        {/* Floating stats */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { k: '120+', v: 'brands accelerated' },
            { k: '3.2x', v: 'avg. engagement lift' },
            { k: '24/7', v: 'global collaboration' },
            { k: '∞', v: 'imagination' },
          ].map((item) => (
            <div key={item.k} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur py-4">
              <div className="text-2xl font-semibold">{item.k}</div>
              <div className="text-xs text-white/60 uppercase tracking-wide">{item.v}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-xs tracking-wider">
        <div className="w-5 h-8 mx-auto rounded-full border border-white/30 relative overflow-hidden">
          <div className="w-1 h-2 bg-white rounded-full absolute left-1/2 -translate-x-1/2 animate-bounce top-1" />
        </div>
        <div className="mt-2 text-center">Scroll</div>
      </div>
    </section>
  );
}
