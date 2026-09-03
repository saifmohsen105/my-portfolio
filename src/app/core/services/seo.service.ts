import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

export interface PageMeta {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  type?: string;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);
  private readonly siteName = 'Saif Mohsen — Full-Stack Developer';

  update(page: PageMeta): void {
    const fullTitle = page.title.includes('Saif') ? page.title : `${page.title} · ${this.siteName}`;
    this.title.setTitle(fullTitle);

    this.meta.updateTag({ name: 'description', content: page.description });
    if (page.keywords) {
      this.meta.updateTag({ name: 'keywords', content: page.keywords });
    }

    this.meta.updateTag({ property: 'og:type', content: page.type ?? 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: this.siteName });
    this.meta.updateTag({ property: 'og:title', content: fullTitle });
    this.meta.updateTag({ property: 'og:description', content: page.description });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: fullTitle });
    this.meta.updateTag({ name: 'twitter:description', content: page.description });

    const image = page.image ?? 'images/hero-display.jpg';
    this.meta.updateTag({ property: 'og:image', content: image });
    this.meta.updateTag({ name: 'twitter:image', content: image });

    this.upsertJsonLd({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Saif Mohsen Refai',
      jobTitle: 'Full-Stack Developer',
      url: this.document.location?.origin ?? undefined,
      email: 'mailto:saifmohsen105@gmail.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Cairo',
        addressCountry: 'EG',
      },
      sameAs: [
        'https://github.com/saifmohsen105',
        'https://www.linkedin.com/in/saifmohsen105',
      ],
      knowsAbout: [
        'Angular',
        'TypeScript',
        'Node.js',
        'Express',
        'Supabase',
        'Full-Stack Development',
        'Web Applications',
        'REST APIs',
        'SSR',
      ],
    });
  }

  private upsertJsonLd(data: Record<string, unknown>): void {
    const id = 'portfolio-structured-data';
    let script = this.document.getElementById(id) as HTMLScriptElement | null;
    if (!script) {
      script = this.document.createElement('script');
      script.type = 'application/ld+json';
      script.id = id;
      this.document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(data);
  }
}
