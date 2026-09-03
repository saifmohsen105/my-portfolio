import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SITE } from '../../data/portfolio.content';
import { UiStore } from '../../signals-store/ui.store';
import { UiButton } from '../../shared/components/ui-button/ui-button';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule, UiButton],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css',
})
export class ContactForm {
  private readonly fb = inject(FormBuilder);
  private readonly ui = inject(UiStore);
  readonly site = SITE;
  readonly sending = signal(false);

  readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.ui.addToast('Please fix the highlighted fields.', 'error');
      return;
    }

    this.sending.set(true);
    const { name, email, subject, message } = this.form.getRawValue();
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    const mail = `mailto:${this.site.email}?subject=${encodeURIComponent(subject)}&body=${body}`;

    window.setTimeout(() => {
      window.location.href = mail;
      this.ui.addToast('Your mail client should open with a draft ready.', 'success');
      this.form.reset();
      this.sending.set(false);
    }, 350);
  }
}
