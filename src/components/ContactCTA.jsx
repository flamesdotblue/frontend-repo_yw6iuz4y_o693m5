import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';

export default function ContactCTA() {
  return (
    <section id="contact" className="relative bg-black text-white py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_10%_90%,rgba(168,85,247,0.18),transparent_35%),radial-gradient(circle_at_90%_20%,rgba(34,211,238,0.14),transparent_35%)]" />
      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <div className="rounded-3xl border border-white/10 overflow-hidden bg-gradient-to-br from-white/5 to-white/10">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs text-white/80">Currently taking on new projects</span>
              </div>
              <h3 className="mt-5 text-3xl md:text-4xl font-semibold">Let’s build something that feels like science fiction</h3>
              <p className="mt-3 text-white/70">
                Share your goals, timeline, and any references. We’ll design a path to a launch that shimmers.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:contact@neonatlas.studio?subject=Project%20Inquiry"
                  className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl bg-white text-black font-medium hover:opacity-90 transition"
                >
                  <Mail className="h-5 w-5" /> Email us
                </a>
                <a href="#services" className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
                  Explore services <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="relative p-8 md:p-12 border-t md:border-t-0 md:border-l border-white/10">
              <div className="grid grid-cols-2 gap-4">
                {[
                  ['3–6 weeks', 'Avg. sprint'],
                  ['GMT–PST', 'Global hours'],
                  ['Trusted', '120+ brands'],
                  ['Partner', 'Not vendor'],
                ].map(([k, v]) => (
                  <div key={k} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-lg font-semibold">{k}</div>
                    <div className="text-xs text-white/60 uppercase tracking-wide">{v}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 text-sm text-white/60">
                From startups to global orgs — we ship with clarity, speed, and aesthetic rigor.
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 text-white/60">
          <div>© {new Date().getFullYear()} Neon Atlas Studio</div>
          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#about" className="hover:text-white">About</a>
          </div>
        </footer>
      </div>
    </section>
  );
}
