import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SITE } from '../../../data/portfolio.content';

@Component({
  selector: 'app-footer',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  readonly site = SITE;
  readonly year = new Date().getFullYear();
}
