import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UiStore } from '../../../signals-store/ui.store';

@Component({
  selector: 'app-scroll-progress',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './scroll-progress.html',
  styleUrl: './scroll-progress.css',
})
export class ScrollProgress {
  readonly store = inject(UiStore);
}
