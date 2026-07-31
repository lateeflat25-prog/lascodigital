import React from 'react';
import { MessageCircle, ArrowRight, TrendingUp } from 'lucide-react';
import { WHATSAPP_URL, WHATSAPP_MESSAGE } from '@/lib/servicesData';

export default function Hero() {
  const waLink = `${WHATSAPP_URL}?text=${WHATSAPP_MESSAGE}`;

  return (
    <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-grid-soft opacity-60" />
      <div className="absolute -top-32 -right-24 w-[480px] h-[480px] rounded-full bg-navy/5 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <span className="inline-flex items-center gap-2 bg-navy/5 text-navy text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full">
            <span className="w-2 h-2 rounded-full bg-whatsapp" /> Performance Marketing & Growth Agency
          </span>

          <h1 className="mt-6 font-heading font-extrabold text-navy text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.08] text-balance">
            Stop Wasting Money on Ads. Turn Your Marketing Budget Into{' '}
            <span className="text-gradient">Predictable Business Growth.</span>
          </h1>

          <p className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-xl">
            Lasco Digital Solutions helps businesses generate qualified leads, increase sales, and
            build predictable customer acquisition systems through Meta Ads, TikTok Ads, Google Ads,
            Snapchat Ads, Social Media Management and CRO.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 gradient-brand text-white px-7 py-4 rounded-full text-base font-semibold shadow-brand hover:opacity-90 transition-opacity"
            >
              <MessageCircle size={20} /> Book a Free Strategy Call
            </a>
            <a
              href="#results"
              className="inline-flex items-center gap-2 text-navy font-semibold px-2 py-2 hover:gap-3 transition-all"
            >
              View Our Results <ArrowRight size={18} />
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><TrendingUp size={16} className="text-navy" /> Data-driven</div>
            <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-navy/40" /> Measurable results</div>
            <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-navy/40" /> Sustainable growth</div>
          </div>
        </div>

        {/* Growth visual */}
        <div className="relative">
          <div className="relative bg-white rounded-3xl shadow-brand p-6 md:p-8 border border-border">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Revenue Growth</p>
                <p className="font-heading font-bold text-navy text-2xl mt-1">+312% ROAS</p>
              </div>
              <span className="inline-flex items-center gap-1 text-whatsapp text-sm font-semibold bg-whatsapp/10 px-3 py-1.5 rounded-full">
                <TrendingUp size={14} /> Up
              </span>
            </div>

            <svg viewBox="0 0 400 180" className="w-full h-40" preserveAspectRatio="none">
              <defs>
                <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2B57B2" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#2B57B2" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0,160 L40,150 L80,140 L120,120 L160,110 L200,85 L240,70 L280,48 L320,38 L360,20 L400,8 L400,180 L0,180 Z" fill="url(#areaFill)" />
              <path d="M0,160 L40,150 L80,140 L120,120 L160,110 L200,85 L240,70 L280,48 L320,38 L360,20 L400,8" fill="none" stroke="#0B2C84" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="400" cy="8" r="5" fill="#0B2C84" />
            </svg>

            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="rounded-xl bg-cloud p-3">
                <p className="text-xs text-muted-foreground">Leads</p>
                <p className="font-heading font-bold text-navy text-lg">1,284</p>
              </div>
              <div className="rounded-xl bg-cloud p-3">
                <p className="text-xs text-muted-foreground">CAC</p>
                <p className="font-heading font-bold text-navy text-lg">-46%</p>
              </div>
              <div className="rounded-xl bg-cloud p-3">
                <p className="text-xs text-muted-foreground">Spend</p>
                <p className="font-heading font-bold text-navy text-lg">$18k</p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-soft px-5 py-3 border border-border animate-float hidden sm:block">
            <p className="text-xs text-muted-foreground">This Month</p>
            <p className="font-heading font-bold text-navy">+42% Sales</p>
          </div>
        </div>
      </div>
    </section>
  );
}