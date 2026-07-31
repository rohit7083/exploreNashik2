// SEO Image Component with automatic alt text
import React from 'react';

interface SEOImageProps {
  src: string;
  alt: string;
  title?: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'sync';
}

export const SEOImage: React.FC<SEOImageProps> = ({
  src,
  alt,
  title,
  width,
  height,
  className,
  loading = 'lazy',
  decoding = 'async'
}) => {
  if (!alt || alt.length < 10) {
    console.warn(
      `⚠️ SEO Warning: Image alt text too short or missing. Current: "${alt}". 
       Make it descriptive (15-120 chars) including location, type, and context.`
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      title={title || alt}
      width={width}
      height={height}
      className={className}
      loading={loading}
      decoding={decoding}
    />
  );
};

export default SEOImage;
