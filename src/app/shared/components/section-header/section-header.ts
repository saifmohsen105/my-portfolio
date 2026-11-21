import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './section-header.html',
  styleUrl: './section-header.css',
})
export class SectionHeader {
  readonly eyebrow = input.required<string>();
  readonly title = input.required<string>();
  readonly subtitle = input<string>();
  /** Two-digit section number shown before the eyebrow, e.g. "02". */
  readonly index = input<string>();
  /** Optional id for the heading so the section can use aria-labelledby. */
  readonly headingId = input<string>();
  readonly align = input<'start' | 'center'>('start');
}
