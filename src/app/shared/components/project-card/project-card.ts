import { ChangeDetectionStrategy, Component, input } from '@angular/core';
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
}
