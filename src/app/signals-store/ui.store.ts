import { Injectable, computed, signal } from '@angular/core';
import {
  type ThemeMode,
  readStoredTheme,
  writeStoredTheme,
} from '../core/utils/theme-storage';

export type { ThemeMode };

export interface ToastItem {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
}

@Injectable({ providedIn: 'root' })
export class UiStore {
  readonly theme = signal<ThemeMode>('dark');
  readonly scrollProgress = signal(0);
  readonly menuOpen = signal(false);
  readonly toasts = signal<ToastItem[]>([]);
  readonly initialLoadDone = signal(false);
  readonly prefersReducedMotion = signal(false);

  readonly isDark = computed(() => this.theme() === 'dark');
  readonly themeLabel = computed(() => (this.theme() === 'dark' ? 'Light' : 'Dark'));
  readonly themeActionLabel = computed(() =>
    this.theme() === 'dark' ? 'Switch to light theme' : 'Switch to dark theme',
  );

  setTheme(mode: ThemeMode): void {
    this.theme.set(mode);
    this.applyThemeToDom(mode);
    writeStoredTheme(mode);
  }

  hydrateThemeFromStorage(): void {
    const stored = readStoredTheme();
    if (stored) {
      this.setTheme(stored);
      return;
    }

    const prefersDark =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.setTheme(prefersDark ? 'dark' : 'light');
  }

  toggleTheme(): void {
    this.setTheme(this.theme() === 'dark' ? 'light' : 'dark');
  }

  setScrollProgress(value: number): void {
    this.scrollProgress.set(Math.min(100, Math.max(0, value)));
  }

  setMenuOpen(open: boolean): void {
    this.menuOpen.set(open);
  }

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }

  addToast(message: string, type: ToastItem['type'] = 'info'): void {
    const id = crypto.randomUUID?.() ?? `${Date.now()}-${Math.random()}`;
    this.toasts.update((list) => [...list, { id, message, type }]);
    window.setTimeout(() => this.removeToast(id), 4200);
  }

  removeToast(id: string): void {
    this.toasts.update((list) => list.filter((t) => t.id !== id));
  }

  completeInitialLoad(): void {
    this.initialLoadDone.set(true);
  }

  private applyThemeToDom(mode: ThemeMode): void {
    if (typeof document === 'undefined') return;
    document.documentElement.dataset['theme'] = mode;
    const meta = document.querySelector('meta[name="theme-color"]');
    meta?.setAttribute('content', mode === 'dark' ? '#0a1014' : '#f3f6f7');
  }
}
