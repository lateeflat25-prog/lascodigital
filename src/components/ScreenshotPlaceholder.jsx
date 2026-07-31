import React from 'react';
import { ImagePlus } from 'lucide-react';

export default function ScreenshotPlaceholder({ label, hint, Icon = ImagePlus, aspect = 'aspect-[16/10]', className = '' }) {
  return (
    <div
      className={`relative ${aspect} w-full rounded-2xl border-2 border-dashed border-navy/20 bg-cloud/60 flex flex-col items-center justify-center text-center px-6 py-10 ${className}`}
    >
      <div className="w-12 h-12 rounded-full bg-navy/5 flex items-center justify-center mb-4">
        <Icon className="text-navy/40" size={22} />
      </div>
      <p className="font-heading font-semibold text-navy text-sm md:text-base">{label}</p>
      {hint && <p className="mt-1.5 text-xs md:text-sm text-muted-foreground max-w-xs">{hint}</p>}
      <span className="absolute top-3 right-3 text-[10px] font-mono uppercase tracking-widest text-navy/30">
        Screenshot
      </span>
    </div>
  );
}