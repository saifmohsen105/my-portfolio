import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EXPERIENCE, SITE } from '../../data/portfolio.content';
import { UiButton } from '../../shared/components/ui-button/ui-button';
import { BrandMark } from '../../shared/components/brand-mark/brand-mark';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [UiButton, BrandMark],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
})
export class HeroSection {
  readonly site = SITE;
  /** Most recent role from the CV data. */
  readonly current = EXPERIENCE[0];
}
