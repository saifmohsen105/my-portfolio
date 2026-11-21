import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EXPERIENCE } from '../../data/portfolio.content';
import { SectionHeader } from '../../shared/components/section-header/section-header';
import { UiBadge } from '../../shared/components/ui-badge/ui-badge';
import { RevealDirective } from '../../shared/directives/reveal.directive';

interface Highlight {
  /** Project name when the highlight is written as "Name — detail". */
  lead: string;
  text: string;
}

@Component({
  selector: 'app-experience-section',
  standalone: true,
  imports: [SectionHeader, UiBadge, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './experience-section.html',
  styleUrl: './experience-section.css',
})
export class ExperienceSection {
  readonly roles = EXPERIENCE.map((role) => ({
    ...role,
    current: role.period.includes('Present'),
    items: role.highlights.map(splitHighlight),
  }));
}

function splitHighlight(value: string): Highlight {
  const at = value.indexOf(' — ');
  return at > 0 && at < 40
    ? { lead: value.slice(0, at), text: value.slice(at + 3) }
    : { lead: '', text: value };
}
