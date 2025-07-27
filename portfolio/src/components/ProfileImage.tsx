"use client"

import Image from 'next/image'

interface ProfileImageProps {
  src: string
  alt: string
  className?: string
}

export function ProfileImage({ src, alt, className }: ProfileImageProps) {
  return (
    <div className={className}>
      <div className="w-full h-full rounded-lg overflow-hidden relative">
        <Image 
          src={src}
          alt={alt}
          fill
          className="object-cover"
          style={{ 
            objectPosition: 'center',
            transform: 'scale(2)',
            transformOrigin: '43% 55%' // This controls where the scaling focuses
          }}
          onError={(e) => {
            // Fallback if image doesn't exist
            e.currentTarget.style.display = 'none';
            const fallback = e.currentTarget.parentElement?.nextElementSibling as HTMLElement;
            if (fallback) {
              fallback.style.display = 'flex';
            }
          }}
        />
      </div>
      <div className="w-full h-full rounded-lg bg-muted flex items-center justify-center text-8xl md:text-9xl font-bold text-muted-foreground" style={{display: 'none'}}>
        CK
      </div>
    </div>
  )
}
