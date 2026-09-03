import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type ButtonVariant = 'primary' | 'secondary' | 'accent';

/**
 * Attribute-style button so label content stays on the host element.
 * Conditional templates with <ng-content> drop projected text — that caused the empty squares.
 */
@Component({
  selector: 'a[appUiButton], button[appUiButton]',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<ng-content />`,
  styleUrl: './ui-button.css',
  host: {
    class: 'btn',
    '[class.btn-primary]': "variant() === 'primary'",
    '[class.btn-secondary]': "variant() === 'secondary'",
    '[class.btn-accent]': "variant() === 'accent'",
  },
})
export class UiButton {
  readonly variant = input<ButtonVariant>('primary');
}
