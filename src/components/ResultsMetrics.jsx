import React from 'react';
import { BarChart3 } from 'lucide-react';
import ProofImage from './ProofImage';

const STATS = [
  { value: '95K+', label: 'Website leads (Meta)' },
  { value: '₦71', label: 'Lowest cost per lead' },
  { value: '84.7K', label: 'Snapchat impressions' },
  { value: '2,043', label: 'Follows in 7 days' },
];

const META = 'https://media.base44.com/images/public/6a69ef8ee16a943803f515ba/1829985ec_IMG_8253.png';
const SNAP = 'https://media.base44.com/images/public/6a69ef8ee16a943803f515ba/a3b784b98_IMG_8256.jpeg';
const FOLLOWS = 'https://media.base44.com/images/public/6a69ef8ee16a943803f515ba/4a4e51cbd_IMG_8262.jpg';

export default function ResultsMetrics() {
  return (
    <section id="results" className="py-20 md:py-28 bg-white border-y border-border">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-2xl">
          <span className="text-navy-light text-sm font-semibold uppercase tracking-wider">Real Results</span>
          <h2 className="mt-3 font-heading font-extrabold text-navy text-3xl md:text-4xl lg:text-5xl leading-tight text-balance">
            Performance you can measure.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Live campaign metrics from real accounts we manage — not estimates, not guesswork.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-5">
          {STATS.map((s) => (
            <div key={s.label} className="rounded-2xl gradient-brand p-6 text-white">
              <p className="font-heading font-extrabold text-3xl md:text-4xl">{s.value}</p>
              <p className="mt-1 text-white/80 text-sm">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <div className="flex items-center gap-2 mb-6">
            <BarChart3 size={20} className="text-navy" />
            <h3 className="font-heading font-bold text-navy text-xl">Campaign metrics dashboards</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <ProofImage src={META} alt="Meta Ads Manager showing 95,175 website leads across four ad sets at as low as ₦71 per lead" aspect="aspect-[4/3]" label="Meta Ads" />
              <p className="mt-3 text-sm text-muted-foreground">95,175 website leads generated across four ad sets — as low as ₦71.06 per lead.</p>
            </div>
            <div>
              <ProofImage src={SNAP} alt="Snapchat Ads Manager showing 84,726 paid impressions and 1,171 clicks" aspect="aspect-[4/3]" label="Snapchat Ads" />
              <p className="mt-3 text-sm text-muted-foreground">84,726 paid impressions and 1,171 clicks from a $20.48 test budget.</p>
            </div>
          </div>

          <div className="mt-10 grid md:grid-cols-[300px_1fr] gap-8 items-center">
            <ProofImage src={FOLLOWS} alt="Campaign metrics table showing 2,043 follows at ₦7.92 per follow and 16.73% result rate" aspect="aspect-[9/16]" label="Campaign metrics" className="mx-auto max-w-[280px]" />
            <div>
              <h3 className="font-heading font-bold text-navy text-2xl">Follower growth, tracked to the naira.</h3>
              <p className="mt-3 text-muted-foreground text-lg">
                2,043 follows at ₦7.92 per follow (16.73% result rate) and 1,992 follows at ₦10.92 —
                measurable, reportable growth every single week.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="rounded-xl bg-cloud border border-border p-4">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Result rate</p>
                  <p className="font-heading font-bold text-navy text-xl mt-1">16.73%</p>
                </div>
                <div className="rounded-xl bg-cloud border border-border p-4">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Cost / follow</p>
                  <p className="font-heading font-bold text-navy text-xl mt-1">₦7.92</p>
                </div>
                <div className="rounded-xl bg-cloud border border-border p-4">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Follows</p>
                  <p className="font-heading font-bold text-navy text-xl mt-1">2,043</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}