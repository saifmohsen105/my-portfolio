import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UiStore } from '../../../signals-store/ui.store';

@Component({
  selector: 'app-toast-host',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './toast-host.html',
  styleUrl: './toast-host.css',
})
export class ToastHost {
  readonly store = inject(UiStore);
}
