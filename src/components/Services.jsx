import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Megaphone, Music2, Search, Ghost, Share2, ClipboardCheck, Compass } from 'lucide-react';
import { SERVICES, WHATSAPP_URL, WHATSAPP_MESSAGE } from '@/lib/servicesData';

const ICONS = { Megaphone, Music2, Search, Ghost, Share2, ClipboardCheck, Compass };

export default function Services() {
  const waLink = `${WHATSAPP_URL}?text=${WHATSAPP_MESSAGE}`;

  return (
    <section id="services" className="py-20 md:py-28 bg-white border-y border-border">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-2xl">
          <span className="text-navy-light text-sm font-semibold uppercase tracking-wider">What We Do</span>
          <h2 className="mt-3 font-heading font-extrabold text-navy text-3xl md:text-4xl lg:text-5xl leading-tight text-balance">
            Full-funnel marketing services that drive growth.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            From paid ads to strategy, each service is built to generate qualified leads and increase sales.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => {
            const Icon = ICONS[s.icon] || Megaphone;
            return (
              <Link
                to={`/services/${s.slug}`}
                key={s.slug}
                className="group bg-cloud rounded-2xl border border-border p-7 hover:shadow-brand hover:border-navy/30 transition-all duration-300 flex flex-col"
              >
                <div className="w-14 h-14 rounded-2xl gradient-brand flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <Icon className="text-white" size={26} />
                </div>
                <h3 className="font-heading font-bold text-navy text-xl">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{s.tagline}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-navy font-semibold text-sm group-hover:gap-3 transition-all">
                  Learn more <ArrowRight size={16} />
                </span>
              </Link>
            );
          })}

          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group gradient-brand rounded-2xl p-7 flex flex-col justify-between text-white hover:opacity-95 transition-opacity"
          >
            <p className="font-heading font-bold text-xl leading-snug">Not sure which service you need?</p>
            <p className="mt-3 text-white/80 text-sm">Book a free strategy call and we’ll map the right plan for your goals.</p>
            <span className="mt-6 inline-flex items-center gap-2 font-semibold text-sm group-hover:gap-3 transition-all">
              Book a Free Call <ArrowRight size={16} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}