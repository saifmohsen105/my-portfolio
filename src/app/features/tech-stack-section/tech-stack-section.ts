import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TECH_STACK } from '../../data/portfolio.content';
import type { TechItem } from '../../models/portfolio.models';
import { SectionHeader } from '../../shared/components/section-header/section-header';
import { RevealDirective } from '../../shared/directives/reveal.directive';

type TechFilter = 'All' | TechItem['category'];

@Component({
  selector: 'app-tech-stack-section',
  standalone: true,
  imports: [SectionHeader, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './tech-stack-section.html',
  styleUrl: './tech-stack-section.css',
})
export class TechStackSection {
  readonly filters: TechFilter[] = ['All', 'Frontend', 'Backend', 'Data', 'Tools'];
  readonly selected = signal<TechFilter>('All');
  readonly items = TECH_STACK;

  readonly filtered = computed(() => {
    const filter = this.selected();
    if (filter === 'All') {
      return this.items.filter((item) => item.featured);
    }
    return this.items.filter((item) => item.category === filter);
  });

  select(filter: TechFilter): void {
    this.selected.set(filter);
  }
}
