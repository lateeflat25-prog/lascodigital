import React from 'react';
import { Target, BarChart3, Repeat } from 'lucide-react';
import { Image } from '@/components/ui/image';

const FOUNDER = 'https://media.base44.com/images/public/6a69ef8ee16a943803f515ba/02f7864fd_f2db93f1-ffca-4203-b51d-1ea6a9535c1c.jpg';
const F2= "./public/lascomain.jpeg"

const PILLARS = [
  { Icon: Target, title: 'Strategy First', text: 'Every campaign starts with clear goals, audience insight, and a roadmap — no guesswork.' },
  { Icon: BarChart3, title: 'Measurable Results', text: 'We track every naira to leads, sales, and ROAS so you always know what’s working.' },
  { Icon: Repeat, title: 'Continuous Optimization', text: 'We test, learn, and refine relentlessly to compound your returns over time.' },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div>
          <span className="text-navy-light text-sm font-semibold uppercase tracking-wider">About Lasco</span>
          <h2 className="mt-3 font-heading font-extrabold text-navy text-3xl md:text-4xl lg:text-5xl leading-tight text-balance">
            We Help Businesses Turn Marketing Into Measurable Growth.
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>
              Lasco Digital Solutions is a Performance Marketing & Growth Agency that helps businesses
              generate qualified leads, increase sales, and maximize their return on advertising.
            </p>
            <p>
              We combine Meta Ads, TikTok Ads, Google Ads, Snapchat Ads, Social Media Management, and
              Conversion Rate Optimization (CRO) to build marketing systems that deliver measurable
              business results.
            </p>
            <p>
              Rather than relying on guesswork, we use data, strategy, and continuous optimization to
              help businesses attract the right customers and grow profitably.
            </p>
            <p className="font-semibold text-navy">Your growth is our priority.</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {PILLARS.map((p) => (
            <div key={p.title} className="bg-white rounded-2xl border border-border p-6 shadow-soft">
              <div className="w-12 h-12 rounded-xl gradient-brand flex items-center justify-center mb-4">
                <p.Icon className="text-white" size={22} />
              </div>
              <h3 className="font-heading font-bold text-navy text-lg">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.text}</p>
            </div>
          ))}
          <div className="sm:col-span-2 gradient-brand rounded-2xl p-6 text-white">
            <p className="font-heading font-bold text-xl">From first campaign to scaling success</p>
            <p className="mt-1 text-white/80 text-sm">
              Whether you’re launching your first campaign or scaling an existing business, we help you
              make smarter marketing decisions and achieve sustainable growth.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 mt-12 lg:mt-16">
        <div className="grid md:grid-cols-[240px_1fr] gap-8 items-center bg-white rounded-3xl border border-border p-6 md:p-8 shadow-soft">
          <Image
            src={FOUNDER}
            alt="Balogun Abdullateef, Founder of Lasco Digital Solutions"
            fittingType="fill"
            focalPointX={0.5}
            focalPointY={0.35}
            className="block w-full h-full rounded-2xl overflow-hidden mx-auto md:mx-0 shadow-soft"
          />
          <div>
            <span className="text-navy-light text-sm font-semibold uppercase tracking-wider">Meet the Founder</span>
            <h3 className="mt-2 font-heading font-extrabold text-navy text-2xl md:text-3xl">Balogun Abdullateef</h3>
            <p className="font-semibold text-navy-light">Founder, Lasco Digital Solutions</p>
            <blockquote className="mt-4 text-muted-foreground text-lg leading-relaxed border-l-2 border-navy/20 pl-4">
              “We don't just run ads — we build growth systems. My mission is to turn every naira you spend
              into measurable business results, so growth becomes predictable instead of hopeful.”
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}