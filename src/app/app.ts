import { afterNextRender, ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './core/components/navbar/navbar';
import { Footer } from './core/components/footer/footer';
import { ScrollProgress } from './shared/components/scroll-progress/scroll-progress';
import { BackToTop } from './shared/components/back-to-top/back-to-top';
import { ToastHost } from './shared/components/toast-host/toast-host';
import { UiStore } from './signals-store/ui.store';

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
        ticking = false;
      };

      const onScroll = () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(updateProgress);
      };

      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
      this.destroyRef.onDestroy(() => {
        window.removeEventListener('scroll', onScroll);
      });
    });
  }
}
