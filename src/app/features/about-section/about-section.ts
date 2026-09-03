import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ABOUT_POINTS, SITE } from '../../data/portfolio.content';
import { SectionHeader } from '../../shared/components/section-header/section-header';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [SectionHeader, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './about-section.html',
  styleUrl: './about-section.css',
})
export class AboutSection {
  readonly site = SITE;
  readonly points = ABOUT_POINTS;
}
