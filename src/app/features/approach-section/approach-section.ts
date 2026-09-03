import { ChangeDetectionStrategy, Component } from '@angular/core';
import { APPROACH } from '../../data/portfolio.content';
import { SectionHeader } from '../../shared/components/section-header/section-header';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-approach-section',
  standalone: true,
  imports: [SectionHeader, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './approach-section.html',
  styleUrl: './approach-section.css',
})
export class ApproachSection {
  readonly items = APPROACH;
}
