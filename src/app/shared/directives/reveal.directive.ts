import {
  Directive,
  ElementRef,
  OnDestroy,
  inject,
  PLATFORM_ID,
  afterNextRender,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealDirective implements OnDestroy {
  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly platformId = inject(PLATFORM_ID);
  private ctx?: gsap.Context;

  constructor() {
    afterNextRender(() => {
      if (!isPlatformBrowser(this.platformId)) return;
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        this.el.nativeElement.style.opacity = '1';
        return;
      }
      gsap.registerPlugin(ScrollTrigger);
      const node = this.el.nativeElement;
      this.ctx = gsap.context(() => {
        gsap.from(node, {
          opacity: 0,
          y: 18,
          duration: 0.55,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: node,
            start: 'top 88%',
            once: true,
          },
        });
      });
    });
  }

  ngOnDestroy(): void {
    this.ctx?.revert();
  }
}
