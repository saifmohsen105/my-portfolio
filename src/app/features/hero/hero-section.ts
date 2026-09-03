import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SITE } from '../../data/portfolio.content';
import { UiButton } from '../../shared/components/ui-button/ui-button';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [UiButton, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
})
export class HeroSection {
  readonly site = SITE;
}
