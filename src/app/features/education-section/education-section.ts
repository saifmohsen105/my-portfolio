import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CERTIFICATES, EDUCATION } from '../../data/portfolio.content';
import { SectionHeader } from '../../shared/components/section-header/section-header';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-education-section',
  standalone: true,
  imports: [SectionHeader, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './education-section.html',
  styleUrl: './education-section.css',
})
export class EducationSection {
  readonly education = EDUCATION;
  readonly certificates = CERTIFICATES;
}
