import React from 'react';
import { ArrowRight, Instagram, Music2 } from 'lucide-react';
import ProofImage from './ProofImage';

const IG_PAIRS = [
  {
    handle: '@officialdamianwan',
    before: { src: 'https://media.base44.com/images/public/6a69ef8ee16a943803f515ba/c4da2a333_15fe26e3-7b08-4f02-bced-e57213df4d89.jpg', stat: '35.9K followers' },
    after: { src: 'https://media.base44.com/images/public/6a69ef8ee16a943803f515ba/01c30547c_3844C630-1074-4365-B58A-2C195B31A38F.jpg', stat: '93.2K followers' },
    growth: '+160%',
  },
  {
    handle: '@9jabuka',
    before: { src: 'https://media.base44.com/images/public/6a69ef8ee16a943803f515ba/4802c3978_579e020c-23c6-44c0-8629-88916dad94ae.jpg', stat: '1,748 followers' },
    after: { src: './src/assets/9jabukastats.jpeg', stat: '4,073 followers' },
    growth: '+118%',
  },
];

const TIKTOK = 'https://media.base44.com/images/public/6a69ef8ee16a943803f515ba/3ee55aca0_1bcee0b0-e611-41b3-b7e5-c565f5185756.jpg';

function BeforeAfter({ pair }) {
  return (
    <div>
      <p className="text-center font-heading font-bold text-navy mb-3">{pair.handle}</p>
      <div className="grid grid-cols-[1fr_auto_1fr] gap-2 md:gap-4 items-center">
        <div>
          <ProofImage src={pair.before.src} alt={`${pair.handle} before`} aspect="aspect-[9/16]" label="Before" />
          <p className="mt-2 text-center text-sm font-semibold text-navy">{pair.before.stat}</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="w-9 h-9 rounded-full gradient-brand flex items-center justify-center shrink-0">
            <ArrowRight size={16} className="text-white" />
          </span>
          <span className="mt-2 bg-whatsapp text-white text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap">
            {pair.growth}
          </span>
        </div>
        <div>
          <ProofImage src={pair.after.src} alt={`${pair.handle} after`} aspect="aspect-[9/16]" label="After" />
          <p className="mt-2 text-center text-sm font-semibold text-navy">{pair.after.stat}</p>
        </div>
      </div>
    </div>
  );
}

export default function SocialPortfolio() {
  return (
    <section id="social" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-2xl">
          <span className="text-navy-light text-sm font-semibold uppercase tracking-wider">Social Media Portfolio</span>
          <h2 className="mt-3 font-heading font-extrabold text-navy text-3xl md:text-4xl lg:text-5xl leading-tight text-balance">
            Real growth, real engagement.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Before-and-after follower growth across Instagram and TikTok from accounts we manage and grow.
          </p>
        </div>

        <div className="mt-12">
          <h3 className="font-heading font-bold text-navy text-xl mb-6 flex items-center gap-2">
            <Instagram size={20} className="text-navy-light" /> Instagram follower growth
          </h3>
          <div className="grid md:grid-cols-2 gap-10">
            {IG_PAIRS.map((p) => <BeforeAfter key={p.handle} pair={p} />)}
          </div>
        </div>

        <div className="mt-14 pt-10 border-t border-border">
          <h3 className="font-heading font-bold text-navy text-xl mb-6 flex items-center gap-2">
            <Music2 size={20} className="text-navy-light" /> TikTok follower growth
          </h3>
          <div className="grid md:grid-cols-[300px_1fr] gap-8 items-center">
            <ProofImage src={TIKTOK} alt="TikTok profile @kingdamianwan with 81.5K followers and 136K likes" aspect="aspect-[9/16]" label="TikTok" className="mx-auto max-w-[280px]" />
            <div>
              <p className="font-heading font-bold text-navy text-2xl">@kingdamianwan on TikTok</p>
              <p className="mt-3 text-muted-foreground text-lg">
                Consistent content and targeted promotion grew this creator account to a real, engaged
                audience — the same system we use to grow brand accounts.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="rounded-xl bg-cloud border border-border p-4">
                  <p className="font-heading font-bold text-navy text-2xl">81.5K</p>
                  <p className="text-sm text-muted-foreground">Followers</p>
                </div>
                <div className="rounded-xl bg-cloud border border-border p-4">
                  <p className="font-heading font-bold text-navy text-2xl">136K</p>
                  <p className="text-sm text-muted-foreground">Likes</p>
                </div>
                <div className="rounded-xl bg-cloud border border-border p-4">
                  <p className="font-heading font-bold text-navy text-2xl">396K</p>
                  <p className="text-sm text-muted-foreground">Top video views</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}