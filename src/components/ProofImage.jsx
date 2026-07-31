import React from 'react';
import { Image } from '@/components/ui/image';

export default function ProofImage({ src, alt, aspect = 'aspect-[16/10]', label, className = '' }) {
  return (
    <figure className={className}>
      <div className="relative rounded-2xl border border-border bg-white overflow-hidden shadow-soft">
        <Image src={src} alt={alt} fittingType="fit" className={`block w-full ${aspect}`} />
        {label && (
          <span className="absolute top-3 left-3 bg-navy text-white text-[11px] font-semibold px-3 py-1.5 rounded-full shadow-soft uppercase tracking-wider z-10">
            {label}
          </span>
        )}
      </div>
    </figure>
  );
}