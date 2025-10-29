import React from 'react';

export default function About() {
  return (
    <section id="about" className="bg-black text-white py-24">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h2 className="text-3xl md:text-5xl font-semibold leading-tight">Our method</h2>
          </div>
          <div className="md:col-span-2">
            <div className="space-y-8">
              {[
                {
                  title: 'Narrative first',
                  text:
                    'Every pixel serves a story. We define a compelling arc, then choreograph motion and depth to amplify it.',
                },
                {
                  title: 'Performance by design',
                  text:
                    'We build for speed from frame one: GPU-accelerated animation, smart preloading, and progressive enhancement.',
                },
                {
                  title: 'Precision collaboration',
                  text:
                    'We run in focused sprints with transparent comms, measurable milestones, and craft on every detail.',
                },
              ].map((item) => (
                <div key={item.title} className="group">
                  <div className="text-sm text-fuchsia-300/80">{item.title}</div>
                  <p className="mt-1 text-white/80 leading-relaxed">
                    {item.text}
                  </p>
                  <div className="mt-3 h-px bg-gradient-to-r from-fuchsia-500/40 via-cyan-400/40 to-transparent group-hover:opacity-100 opacity-60" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
