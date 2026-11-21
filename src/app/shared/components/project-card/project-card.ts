import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import type { ProjectCaseStudy } from '../../../models/portfolio.models';
import { UiBadge } from '../ui-badge/ui-badge';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [RouterLink, UiBadge],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
  readonly project = input.required<ProjectCaseStudy>();
  /** 1-based position in the list, rendered as a two-digit index. */
  readonly index = input(1);
  /** `feature` = large lead tile, `row` = compact editorial row. */
  readonly variant = input<'feature' | 'row'>('row');

  readonly number = computed(() => String(this.index()).padStart(2, '0'));
  readonly domain = computed(() => {
    const url = this.project().liveUrl;
    if (!url) return null;
    try {
      return new URL(url).hostname.replace(/^www\./, '');
    } catch {
      return null;
    }
  });
}
