import { Directive, ElementRef, OnDestroy, afterNextRender, inject, input } from '@angular/core';

/**
 * Scroll reveal: IntersectionObserver + CSS transition (opacity/transform only).
 *
 * - SSR output is always fully visible; classes are only added in the browser.
 * - Elements already on screen at hydration are left alone, so the first
 *   paint never flashes out and back in.
 * - Skipped entirely for `prefers-reduced-motion: reduce`.
 */
@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealDirective implements OnDestroy {
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
  private observer?: IntersectionObserver;

  /** Stagger offset in milliseconds. */
  readonly revealDelay = input(0);

  constructor() {
    afterNextRender(() => {
      const node = this.el.nativeElement;

      if (
        typeof IntersectionObserver === 'undefined' ||
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ) {
        return;
      }

      const rect = node.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) return;

      node.style.setProperty('--reveal-delay', `${this.revealDelay()}ms`);
      node.classList.add('reveal-init');

      this.observer = new IntersectionObserver(
        (entries) => {
          if (!entries.some((entry) => entry.isIntersecting)) return;
          node.classList.add('reveal-in');
          this.disconnect();
        },
        { rootMargin: '0px 0px -10% 0px', threshold: 0.01 },
      );
      this.observer.observe(node);
    });
  }

  ngOnDestroy(): void {
    this.disconnect();
  }

  private disconnect(): void {
    this.observer?.disconnect();
    this.observer = undefined;
  }
}
