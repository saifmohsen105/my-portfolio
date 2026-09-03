import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SITE } from '../../data/portfolio.content';
import { ContactForm } from '../contact-form/contact-form';
import { SectionHeader } from '../../shared/components/section-header/section-header';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [ContactForm, SectionHeader, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.css',
})
export class ContactSection {
  readonly site = SITE;
}
