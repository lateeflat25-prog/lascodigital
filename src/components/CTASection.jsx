import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { WHATSAPP_URL, WHATSAPP_MESSAGE } from '@/lib/servicesData';

export default function CTASection() {
  const waLink = `${WHATSAPP_URL}?text=${WHATSAPP_MESSAGE}`;

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="relative gradient-brand rounded-3xl px-6 md:px-16 py-14 md:py-20 overflow-hidden">
          <div className="absolute inset-0 bg-grid-soft opacity-10" />
          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-heading font-extrabold text-white text-3xl md:text-4xl lg:text-5xl leading-tight text-balance">
                Ready to turn your ad spend into predictable growth?
              </h2>
              <p className="mt-4 text-white/85 text-lg max-w-lg">
                Book a free strategy call. We’ll audit your current marketing and map a clear plan to
                generate qualified leads and increase sales — no pressure, no fluff.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-4 lg:items-end">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-navy px-7 py-4 rounded-full text-base font-bold hover:bg-cloud transition-colors"
              >
                <MessageCircle size={20} /> Book a Free Strategy Call
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 text-white font-semibold px-4 py-4 hover:gap-3 transition-all"
              >
                Explore Services <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}