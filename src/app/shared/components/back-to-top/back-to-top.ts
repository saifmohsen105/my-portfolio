import { ChangeDetectionStrategy, Component, inject, signal, afterNextRender } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-back-to-top',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './back-to-top.html',
  styleUrl: './back-to-top.css',
})
export class BackToTop {
  private readonly doc = inject(DOCUMENT);
  readonly visible = signal(false);

  constructor() {
    afterNextRender(() => {
      const onScroll = () => this.visible.set(window.scrollY > 520);
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
    });
  }

  scrollTop(): void {
    this.doc.defaultView?.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
