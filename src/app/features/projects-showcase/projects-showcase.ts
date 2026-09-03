import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { PROJECTS } from '../../data/portfolio.content';
import type { ProjectCategory } from '../../models/portfolio.models';
import { ProjectCard } from '../../shared/components/project-card/project-card';
import { SectionHeader } from '../../shared/components/section-header/section-header';
import { RevealDirective } from '../../shared/directives/reveal.directive';

type ProjectFilter = 'All' | ProjectCategory;

@Component({
  selector: 'app-projects-showcase',
  standalone: true,
  imports: [ProjectCard, SectionHeader, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './projects-showcase.html',
  styleUrl: './projects-showcase.css',
})
export class ProjectsShowcase {
  readonly filters: ProjectFilter[] = ['All', 'Product', 'Platform', 'Commerce', 'Marketing'];
  readonly selected = signal<ProjectFilter>('All');

  readonly projects = computed(() => {
    const filter = this.selected();
    if (filter === 'All') return PROJECTS;
    return PROJECTS.filter((project) => project.category === filter);
  });

  select(filter: ProjectFilter): void {
    this.selected.set(filter);
  }
}
