import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * Vector redraw of the SM monogram (four interlocking chamfered plates).
 * Inline SVG so it stays crisp at any size, follows the active theme,
 * and can draw itself in via CSS (see `.brand-mark--animated` in styles.css).
 */
@Component({
  selector: 'app-brand-mark',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'brand-mark',
    '[class.brand-mark--animated]': 'animated()',
  },
  template: `
    <svg
      viewBox="-6 -6 582 530"
      xmlns="http://www.w3.org/2000/svg"
      [attr.role]="label() ? 'img' : null"
      [attr.aria-label]="label() || null"
      [attr.aria-hidden]="label() ? null : 'true'"
      focusable="false"
    >
      @for (piece of pieces; track $index) {
        <polygon class="brand-mark__piece" [attr.points]="piece" pathLength="1" />
      }
    </svg>
  `,
})
export class BrandMark {
  /** Accessible name. Leave empty when the mark is decorative. */
  readonly label = input('');
  /** Plays the one-time stroke-draw entrance. */
  readonly animated = input(false);

  readonly pieces: readonly string[] = [
    '10,111 79,58 129,96 129,201 90,174 90,506 10,506',
    '147,109 284,9 397,91 329,143 284,111 219,159 355,266 284,321 147,216',
    '302,203 490,58 559,111 559,506 480,506 480,174 372,254',
    '144,318 217,318 217,364 284,414 357,358 310,326 375,281 394,293 432,268 432,388 284,508 144,388',
  ];
}
