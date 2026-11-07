import React, { useState } from 'react';
import { Wrench } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  fallbackLabel?: string;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  className = 'w-full h-full object-cover',
  containerClassName = 'relative overflow-hidden bg-[#121317]',
  fallbackLabel,
}) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={containerClassName}>
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          onError={() => setHasError(true)}
          className={className}
        />
      ) : (
        <div
          className="w-full h-full min-h-[240px] flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-[#16181E] via-[#101216] to-[#0A0A0C] border border-white/10"
          role="img"
          aria-label={alt}
        >
          <Wrench className="w-8 h-8 text-[#D9232E] mb-3 opacity-80" />
          <p className="font-display text-lg text-[#F4F4F6] tracking-wide">
            {fallbackLabel || alt}
          </p>
        </div>
      )}
    </div>
  );
};
