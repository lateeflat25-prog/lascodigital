import React from 'react';
import { Quote, MessageSquare } from 'lucide-react';
import ProofImage from './ProofImage';

const REVIEWS = [
  {
    src: 'https://media.base44.com/images/public/6a69ef8ee16a943803f515ba/12909c1c8_IMG_8259.jpg',
    quote: "Great. I've been seeing it in my email that a lot of people have been buying. Thank you so much. I'll refer you to my friends.",
    metric: 'As low as $1.30 per purchase',
  },
  {
    src: 'https://media.base44.com/images/public/6a69ef8ee16a943803f515ba/4b9d1e507_IMG_8261.jpg',
    quote: "The ads is performing 💃 I'm now seeing results from the ads. Three people have already paid for my book.",
    metric: '3 paid customers in days',
  },
  {
    src: 'https://media.base44.com/images/public/6a69ef8ee16a943803f515ba/37a6aadc6_IMG_8260.jpg',
    quote: "Thank you so much, I can see the results. Thank you for trusting me to help you set up your TikTok Ads Manager.",
    metric: 'TikTok Ads setup',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-white border-y border-border">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-2xl">
          <span className="text-navy-light text-sm font-semibold uppercase tracking-wider">Testimonials</span>
          <h2 className="mt-3 font-heading font-extrabold text-navy text-3xl md:text-4xl lg:text-5xl leading-tight text-balance">
            Clients who grew with us.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Real WhatsApp conversations with real clients — the results speak for themselves.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {REVIEWS.map((r, i) => (
            <div key={i} className="flex flex-col">
              <ProofImage src={r.src} alt={`WhatsApp review from a Lasco Digital Solutions client`} aspect="aspect-[9/16]" label="WhatsApp" />
              <div className="mt-5 rounded-2xl bg-cloud border border-border p-6 shadow-soft flex-1 flex flex-col">
                <Quote className="text-navy/20" size={28} />
                <p className="mt-3 text-muted-foreground italic leading-relaxed flex-1">{r.quote}</p>
                <div className="mt-5 pt-4 border-t border-border flex items-center gap-2">
                  <MessageSquare size={16} className="text-whatsapp" />
                  <span className="text-sm font-semibold text-navy">{r.metric}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}