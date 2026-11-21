import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE } from '../../../data/portfolio.content';
import { BrandMark } from '../../../shared/components/brand-mark/brand-mark';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, BrandMark],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  readonly site = SITE;
  readonly year = new Date().getFullYear();
}
