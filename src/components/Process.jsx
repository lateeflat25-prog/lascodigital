import React from 'react';
import { Search, ClipboardCheck, Map, Rocket, SlidersHorizontal, TrendingUp } from 'lucide-react';

const STEPS = [
  { Icon: Search, title: 'Discover', text: 'We learn your business, audience, and goals to set the foundation.' },
  { Icon: ClipboardCheck, title: 'Audit', text: 'We review your accounts, funnel, and creative to find what’s wasting budget.' },
  { Icon: Map, title: 'Strategy', text: 'We build a data-backed roadmap with channels, messaging, and KPIs.' },
  { Icon: Rocket, title: 'Launch', text: 'We deploy campaigns with proven creative and precise targeting.' },
  { Icon: SlidersHorizontal, title: 'Optimize', text: 'We test and refine continuously to lower cost and lift results.' },
  { Icon: TrendingUp, title: 'Scale', text: 'We double down on winners to grow profitably and predictably.' },
];

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-navy-light text-sm font-semibold uppercase tracking-wider">Our Process</span>
          <h2 className="mt-3 font-heading font-extrabold text-navy text-3xl md:text-4xl lg:text-5xl leading-tight text-balance">
            A proven path from spend to scale.
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {STEPS.map((step, i) => (
            <div key={step.title} className="relative bg-white rounded-2xl border border-border p-7 shadow-soft">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl gradient-brand flex items-center justify-center">
                  <step.Icon className="text-white" size={22} />
                </div>
                <span className="font-heading font-extrabold text-navy/10 text-4xl">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="font-heading font-bold text-navy text-lg">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}