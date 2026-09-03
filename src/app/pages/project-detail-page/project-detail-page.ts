import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { PROJECTS, SITE } from '../../data/portfolio.content';
import { SeoService } from '../../core/services/seo.service';
import { UiBadge } from '../../shared/components/ui-badge/ui-badge';
import { UiButton } from '../../shared/components/ui-button/ui-button';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-project-detail-page',
  standalone: true,
  imports: [RouterLink, UiBadge, UiButton, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './project-detail-page.html',
  styleUrl: './project-detail-page.css',
})
export class ProjectDetailPage {
  private readonly route = inject(ActivatedRoute);
  private readonly seo = inject(SeoService);

  private readonly projectId = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('id') ?? '')),
    { initialValue: '' },
  );

  readonly project = computed(() => PROJECTS.find((item) => item.id === this.projectId()) ?? null);
  readonly site = SITE;

  constructor() {
    const project = PROJECTS.find(
      (item) => item.id === this.route.snapshot.paramMap.get('id'),
    );
    if (project) {
      this.seo.update({
        title: `${project.title} — Case Study`,
        description: project.description,
        keywords: `${project.title}, ${project.stack.join(', ')}, Saif Mohsen`,
      });
    } else {
      this.seo.update({
        title: 'Project not found',
        description: 'The requested case study could not be found.',
      });
    }
  }
}
