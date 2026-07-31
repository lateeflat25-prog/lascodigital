import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, MessageCircle, Check, Megaphone, Music2, Search, Ghost, Share2, ClipboardCheck, Compass } from 'lucide-react';
import { SERVICES, WHATSAPP_URL, WHATSAPP_MESSAGE } from '@/lib/servicesData';
import ScreenshotPlaceholder from '@/components/ScreenshotPlaceholder';

const ICONS = { Megaphone, Music2, Search, Ghost, Share2, ClipboardCheck, Compass };
const LOGO = 'https://media.base44.com/images/public/6a69ef8ee16a943803f515ba/72785de0f_IMG_8234.jpg';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = SERVICES.find((s) => s.slug === slug);
  const waLink = `${WHATSAPP_URL}?text=${encodeURIComponent(
    `Hi Lasco, I'm interested in your ${service ? service.title : 'service'} offering.`
  )}`;

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-cloud px-6 text-center">
        <h1 className="font-heading font-extrabold text-navy text-3xl">Service not found</h1>
        <Link to="/" className="mt-6 inline-flex items-center gap-2 text-navy-light font-semibold">
          <ArrowLeft size={18} /> Back to home
        </Link>
      </div>
    );
  }

  const Icon = ICONS[service.icon] || Megaphone;

  return (
    <div className="min-h-screen bg-cloud">
      <header className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={LOGO} alt="Lasco Digital Solutions" className="h-9 md:h-11 w-auto object-contain mix-blend-multiply" />
          </Link>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 gradient-brand text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-brand"
          >
            <MessageCircle size={16} /> Book a Call
          </a>
        </div>
      </header>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Link to="/#services" className="inline-flex items-center gap-2 text-navy-light font-semibold text-sm mb-8 hover:gap-3 transition-all">
            <ArrowLeft size={16} /> All services
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <div className="w-16 h-16 rounded-2xl gradient-brand flex items-center justify-center mb-6">
                <Icon className="text-white" size={30} />
              </div>
              <h1 className="font-heading font-extrabold text-navy text-4xl md:text-5xl leading-tight">{service.title}</h1>
              <p className="mt-4 text-navy-light text-lg font-semibold">{service.tagline}</p>
              <p className="mt-6 text-muted-foreground text-lg leading-relaxed">{service.description}</p>

              <div className="mt-8">
                <h2 className="font-heading font-bold text-navy text-xl mb-4">What’s included</h2>
                <ul className="space-y-3">
                  {service.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-navy/10 flex items-center justify-center shrink-0">
                        <Check size={14} className="text-navy" />
                      </span>
                      <span className="text-muted-foreground">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-2 gradient-brand text-white px-7 py-4 rounded-full text-base font-semibold shadow-brand hover:opacity-90 transition-opacity"
              >
                <MessageCircle size={20} /> Book a Free Strategy Call
              </a>
            </div>

            {/* <div>
              <h2 className="font-heading font-bold text-navy text-xl mb-5">Recent {service.title} results</h2>
              <ScreenshotPlaceholder
                label={`${service.title} performance`}
                hint={`Add a screenshot showing results from a ${service.title} campaign.`}
                aspect="aspect-[4/5]"
              />
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl border border-border p-5 shadow-soft">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Result</p>
                  <p className="font-heading font-bold text-navy text-2xl mt-1">+ROI</p>
                </div>
                <div className="bg-white rounded-2xl border border-border p-5 shadow-soft">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Timeline</p>
                  <p className="font-heading font-bold text-navy text-2xl mt-1">30 days</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      <section className="py-14 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="font-heading font-extrabold text-navy text-2xl md:text-3xl">Ready to grow with {service.title}?</h2>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 gradient-brand text-white px-7 py-4 rounded-full text-base font-semibold shadow-brand"
          >
            Book a Free Call <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </div>
  );
}