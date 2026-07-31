import React from 'react';
import { PLATFORMS } from '@/lib/servicesData';

export default function TrustBar() {
  return (
    <section className="py-8 md:py-10 border-y border-border bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-6">
          Advertising platforms we master
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {PLATFORMS.map((p) => (
            <div key={p.name} className="flex items-center justify-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full gradient-brand" />
              <span className="font-heading font-bold text-navy text-lg md:text-xl">{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}