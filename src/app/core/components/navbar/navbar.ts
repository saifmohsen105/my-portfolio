import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  PLATFORM_ID,
  effect,
  inject,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter, fromEvent } from 'rxjs';
import { NAV_ITEMS, SITE } from '../../../data/portfolio.content';
import { UiStore } from '../../../signals-store/ui.store';
import { UiButton } from '../../../shared/components/ui-button/ui-button';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, UiButton],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  readonly ui = inject(UiStore);
  readonly site = SITE;
  readonly links = NAV_ITEMS;
  readonly open = signal(false);

  constructor() {
    effect(() => {
      if (!isPlatformBrowser(this.platformId)) return;
      this.document.body.style.overflow = this.open() ? 'hidden' : '';
    });

    if (isPlatformBrowser(this.platformId)) {
      fromEvent(window, 'resize', { passive: true })
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe(() => {
          if (window.matchMedia('(min-width: 1024px)').matches && this.open()) {
            this.close();
          }
        });

      fromEvent<KeyboardEvent>(window, 'keydown')
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe((event) => {
          if (event.key === 'Escape' && this.open()) this.close();
        });

      this.router.events
        .pipe(
          filter((event): event is NavigationEnd => event instanceof NavigationEnd),
          takeUntilDestroyed(this.destroyRef),
        )
        .subscribe(() => this.close());

      this.destroyRef.onDestroy(() => {
        this.document.body.style.overflow = '';
      });
    }
  }

  toggle(): void {
    this.open.update((value) => !value);
  }

  close(): void {
    this.open.set(false);
  }

  toggleTheme(): void {
    this.ui.toggleTheme();
  }
}
