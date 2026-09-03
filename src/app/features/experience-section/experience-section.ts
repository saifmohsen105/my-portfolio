import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EXPERIENCE } from '../../data/portfolio.content';
import { SectionHeader } from '../../shared/components/section-header/section-header';
import { UiBadge } from '../../shared/components/ui-badge/ui-badge';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-experience-section',
  standalone: true,
  imports: [SectionHeader, UiBadge, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './experience-section.html',
  styleUrl: './experience-section.css',
})
export class ExperienceSection {
  readonly roles = EXPERIENCE;
}
