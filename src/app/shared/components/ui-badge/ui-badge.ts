import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-ui-badge',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './ui-badge.html',
  styleUrl: './ui-badge.css',
})
export class UiBadge {
  readonly accent = input(false);
}
