import {
  Directive,
  ElementRef,
  OnDestroy,
  PLATFORM_ID,
  afterNextRender,
  inject,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * Scroll-reveal using IntersectionObserver + CSS (matches prior GSAP from():
 * opacity 0→1, y 18→0, 0.55s, power2.out, once).
 * Keeps SSR content visible; activates only in the browser after hydration.
 */
@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealDirective implements OnDestroy {
  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly platformId = inject(PLATFORM_ID);
  private observer?: IntersectionObserver;

  constructor() {
    afterNextRender(() => {
      if (!isPlatformBrowser(this.platformId)) return;

      const node = this.el.nativeElement;

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        node.style.opacity = '1';
        return;
      }

      node.classList.add('reveal-init');

      this.observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            node.classList.add('reveal-in');
            this.observer?.unobserve(node);
            this.observer?.disconnect();
            this.observer = undefined;
          }
        },
        { root: null, rootMargin: '0px 0px -12% 0px', threshold: 0.01 },
      );

      this.observer.observe(node);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.observer = undefined;
  }
}
