import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TECH_STACK } from '../../data/portfolio.content';
import type { TechItem } from '../../models/portfolio.models';
import { SectionHeader } from '../../shared/components/section-header/section-header';
import { RevealDirective } from '../../shared/directives/reveal.directive';

const CATEGORIES: readonly TechItem['category'][] = ['Frontend', 'Backend', 'Data', 'Tools'];

/**
 * All categories are shown side by side as a matrix, so the whole stack is
 * scannable at once (replaces the previous one-category-at-a-time filter).
 * `featured` items are marked as core tools.
 */
@Component({
  selector: 'app-tech-stack-section',
  standalone: true,
  imports: [SectionHeader, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './tech-stack-section.html',
  styleUrl: './tech-stack-section.css',
})
export class TechStackSection {
  readonly groups = CATEGORIES.map((category) => ({
    category,
    items: TECH_STACK.filter((item) => item.category === category).map((item) => ({
      ...item,
      initials: item.name.replace(/[^A-Za-z]/g, '').slice(0, 2),
    })),
  }));
}
