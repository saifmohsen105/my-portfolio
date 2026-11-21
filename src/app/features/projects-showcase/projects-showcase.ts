import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { PROJECTS } from '../../data/portfolio.content';
import type { ProjectCategory } from '../../models/portfolio.models';
import { ProjectCard } from '../../shared/components/project-card/project-card';
import { SectionHeader } from '../../shared/components/section-header/section-header';
import { RevealDirective } from '../../shared/directives/reveal.directive';

type ProjectFilter = 'All' | ProjectCategory;

/** Lead case studies shown as large tiles in the unfiltered view. */
const FEATURED_COUNT = 2;

@Component({
  selector: 'app-projects-showcase',
  standalone: true,
  imports: [ProjectCard, SectionHeader, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './projects-showcase.html',
  styleUrl: './projects-showcase.css',
})
export class ProjectsShowcase {
  readonly filters = (['All', 'Product', 'Platform', 'Commerce', 'Marketing'] as const).map(
    (label: ProjectFilter) => ({
      label,
      count: label === 'All' ? PROJECTS.length : PROJECTS.filter((p) => p.category === label).length,
    }),
  );
  readonly selected = signal<ProjectFilter>('All');

  readonly projects = computed(() => {
    const filter = this.selected();
    return filter === 'All' ? PROJECTS : PROJECTS.filter((project) => project.category === filter);
  });

  readonly featured = computed(() =>
    this.selected() === 'All' ? this.projects().slice(0, FEATURED_COUNT) : [],
  );
  readonly rest = computed(() => this.projects().slice(this.featured().length));

  select(filter: ProjectFilter): void {
    this.selected.set(filter);
  }
}
