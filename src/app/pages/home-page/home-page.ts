import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../../core/services/seo.service';
import { HeroSection } from '../../features/hero/hero-section';
import { AboutSection } from '../../features/about-section/about-section';
import { ApproachSection } from '../../features/approach-section/approach-section';
import { TechStackSection } from '../../features/tech-stack-section/tech-stack-section';
import { ProjectsShowcase } from '../../features/projects-showcase/projects-showcase';
import { ExperienceSection } from '../../features/experience-section/experience-section';
import { EducationSection } from '../../features/education-section/education-section';
import { ContactSection } from '../../features/contact-section/contact-section';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HeroSection,
    AboutSection,
    ApproachSection,
    TechStackSection,
    ProjectsShowcase,
    ExperienceSection,
    EducationSection,
    ContactSection,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  constructor() {
    inject(SeoService).update({
      title: 'Saif Mohsen — Full-Stack Developer (Angular + Node.js)',
      description:
        'Portfolio of Saif Mohsen Refai — full-stack developer building Angular + Node.js products: marketplaces, ecommerce, admin systems, and bilingual SSR sites.',
      keywords:
        'Saif Mohsen, Full Stack Developer, Angular, Node.js, TypeScript, SHARY, Home Expand, Mustasharuna, Cairo, portfolio',
    });
  }
}
