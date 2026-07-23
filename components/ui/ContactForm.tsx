'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  projectType: z.enum(['new-construction', 'renovation', 'addition', 'expansion', 'other'], {
    error: 'Please select a project type',
  }),
  message: z.string().min(20, 'Please describe your project (at least 20 characters)'),
  // Honeypot — must be empty
  website: z.string().max(0, 'Bot detected').optional(),
});

type FormData = z.infer<typeof schema>;

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setStatus('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Server error');
      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  };

  const fieldClass = (hasError: boolean) =>
    [
      'w-full px-4 py-3 border text-sm outline-none transition-colors duration-200',
      hasError
        ? 'border-red-500 focus:border-red-500'
        : 'border-neutral-200 focus:border-navy-900',
    ].join(' ');

  const labelClass = 'block text-xs font-semibold uppercase tracking-wider mb-1.5';

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      aria-label="Contact form"
    >
      {/* ARIA live region for form errors/success */}
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {status === 'success' && 'Your message has been sent successfully.'}
        {status === 'error' && 'There was an error sending your message. Please try again.'}
      </div>

      {/* Honeypot field — hidden from real users */}
      <div
        aria-hidden="true"
        style={{ position: 'absolute', left: '-9999px', top: '-9999px' }}
      >
        <label htmlFor="website">Leave blank</label>
        <input
          id="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register('website')}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div>
          <label
            htmlFor="name"
            className={labelClass}
            style={{ color: 'var(--color-charcoal-600)' }}
          >
            Name <span aria-label="required">*</span>
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={fieldClass(!!errors.name)}
            style={{ borderColor: errors.name ? '#e83340' : 'var(--color-neutral-200)' }}
            {...register('name')}
          />
          {errors.name && (
            <p id="name-error" role="alert" className="mt-1.5 text-xs text-red-600">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className={labelClass}
            style={{ color: 'var(--color-charcoal-600)' }}
          >
            Email <span aria-label="required">*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={fieldClass(!!errors.email)}
            style={{ borderColor: errors.email ? '#e83340' : 'var(--color-neutral-200)' }}
            {...register('email')}
          />
          {errors.email && (
            <p id="email-error" role="alert" className="mt-1.5 text-xs text-red-600">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div>
          <label
            htmlFor="phone"
            className={labelClass}
            style={{ color: 'var(--color-charcoal-600)' }}
          >
            Phone (optional)
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            className={fieldClass(false)}
            style={{ borderColor: 'var(--color-neutral-200)' }}
            {...register('phone')}
          />
        </div>

        <div>
          <label
            htmlFor="projectType"
            className={labelClass}
            style={{ color: 'var(--color-charcoal-600)' }}
          >
            Project Type <span aria-label="required">*</span>
          </label>
          <select
            id="projectType"
            aria-required="true"
            aria-invalid={!!errors.projectType}
            aria-describedby={errors.projectType ? 'type-error' : undefined}
            className={fieldClass(!!errors.projectType)}
            style={{
              borderColor: errors.projectType ? '#e83340' : 'var(--color-neutral-200)',
              appearance: 'none',
              backgroundColor: 'white',
            }}
            {...register('projectType')}
          >
            <option value="">Select project type</option>
            <option value="new-construction">New Construction</option>
            <option value="renovation">Renovation</option>
            <option value="addition">Addition</option>
            <option value="expansion">Expansion</option>
            <option value="other">Other / Not Sure</option>
          </select>
          {errors.projectType && (
            <p id="type-error" role="alert" className="mt-1.5 text-xs text-red-600">
              {errors.projectType.message}
            </p>
          )}
        </div>
      </div>

      <div className="mb-8">
        <label
          htmlFor="message"
          className={labelClass}
          style={{ color: 'var(--color-charcoal-600)' }}
        >
          Message <span aria-label="required">*</span>
        </label>
        <textarea
          id="message"
          rows={6}
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          placeholder="Tell us about your project — type of facility, scope, location, and timeline if known."
          className={fieldClass(!!errors.message)}
          style={{
            borderColor: errors.message ? '#e83340' : 'var(--color-neutral-200)',
            resize: 'vertical',
          }}
          {...register('message')}
        />
        {errors.message && (
          <p id="message-error" role="alert" className="mt-1.5 text-xs text-red-600">
            {errors.message.message}
          </p>
        )}
      </div>

      {status === 'success' && (
        <div
          className="p-4 mb-6 border-l-4 text-sm"
          role="alert"
          style={{
            backgroundColor: '#f0fdf4',
            borderColor: '#22c55e',
            color: '#15803d',
          }}
        >
          Thank you — your message has been sent. We&apos;ll be in touch within one business day.
        </div>
      )}

      {status === 'error' && (
        <div
          className="p-4 mb-6 border-l-4 text-sm"
          role="alert"
          style={{
            backgroundColor: '#fff5f5',
            borderColor: '#e83340',
            color: '#9b1c2a',
          }}
        >
          Something went wrong. Please try again, or contact us directly at{' '}
          <a href="mailto:info@pre-eng.com" className="underline">
            info@pre-eng.com
          </a>
          .
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-primary"
        aria-busy={status === 'submitting'}
      >
        {status === 'submitting' ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  );
}
