'use client';

import React, { useEffect, useRef } from 'react';

export default function GiscusComments() {
  const giscusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!giscusRef.current) return;
    // Prevent duplicate script injection
    if (giscusRef.current.querySelector('iframe')) return;
    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.async = true;
    script.crossOrigin = 'anonymous';
    script.setAttribute('data-repo', 'saki007ster/next-portfolio');
    script.setAttribute('data-repo-id', 'R_kgDOOgTMwg');
    script.setAttribute('data-category', 'General');
    script.setAttribute('data-category-id', 'DIC_kwDOOgTMws4CphRw');
    script.setAttribute('data-mapping', 'title');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'top');
    script.setAttribute('data-theme', 'preferred_color_scheme');
    script.setAttribute('data-lang', 'en');
    script.setAttribute('data-loading', 'lazy');
    giscusRef.current.appendChild(script);
  }, []);

  return <section className="mt-16"><div ref={giscusRef} className="giscus" /></section>;
} 