import { useState } from 'react';

interface CryptoCurrencyLogoProps {
  src: string;
  alt: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function CryptoCurrencyLogo({ 
  src, 
  alt, 
  className = '', 
  size = 'md' 
}: CryptoCurrencyLogoProps) {
  const [imgSrc, setImgSrc] = useState(src);
  
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10'
  };

  return (
    <img 
      src={imgSrc} 
      alt={alt}
      className={`rounded-full ${sizeClasses[size]} ${className}`}
      onError={() => setImgSrc('/fallback-crypto.png')}
    />
  );
}