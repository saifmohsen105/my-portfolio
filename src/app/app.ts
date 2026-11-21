import { afterNextRender, ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './core/components/navbar/navbar';
import { Footer } from './core/components/footer/footer';
import { ScrollProgress } from './shared/components/scroll-progress/scroll-progress';
import { BackToTop } from './shared/components/back-to-top/back-to-top';
import { ToastHost } from './shared/components/toast-host/toast-host';
import { UiStore } from './signals-store/ui.store';
import { NAV_ITEMS } from './data/portfolio.content';

const SPY_IDS = NAV_ITEMS.map((item) => item.href.split('#')[1]).filter(
  (id): id is string => !!id,
);

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, ScrollProgress, BackToTop, ToastHost],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private readonly ui = inject(UiStore);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      this.ui.hydrateThemeFromStorage();

      let ticking = false;
      const updateProgress = () => {
        const d = document.documentElement;
        const total = d.scrollHeight - d.clientHeight;
        this.ui.setScrollProgress(total > 0 ? (d.scrollTop / total) * 100 : 0);
        this.ui.setScrolled(d.scrollTop > 8);
        this.ui.setActiveSection(this.findActiveSection());
        ticking = false;
      };

      const onScroll = () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(updateProgress);
      };

      onScroll();
      window.addEventListener('resize', onScroll, { passive: true });
      window.addEventListener('scroll', onScroll, { passive: true });
      this.destroyRef.onDestroy(() => {
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', onScroll);
      });
    });
  }

  /** Last nav section whose top has crossed the upper third of the viewport. */
  private findActiveSection(): string {
    const d = document.documentElement;
    const atBottom = d.scrollTop + d.clientHeight >= d.scrollHeight - 4;
    const line = atBottom ? Number.POSITIVE_INFINITY : window.innerHeight * 0.35;
    let active = '';
    for (const id of SPY_IDS) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= line) active = id;
    }
    return active;
  }
}
