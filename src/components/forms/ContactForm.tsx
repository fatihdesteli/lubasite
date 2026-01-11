'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { contactSchema, ContactFormData } from '@/lib/validations';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export function ContactForm() {
  const t = useTranslations('contact.form');
  const [status, setStatus] = useState<FormStatus>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Honeypot field for spam prevention */}
      <input
        type="text"
        {...register('honeypot')}
        style={{ position: 'absolute', left: '-9999px' }}
        tabIndex={-1}
        autoComplete="off"
      />

      <div>
        <Input
          {...register('name')}
          placeholder={t('name')}
          error={errors.name?.message}
          disabled={status === 'loading'}
        />
      </div>

      <div>
        <Input
          {...register('email')}
          type="email"
          placeholder={t('email')}
          error={errors.email?.message}
          disabled={status === 'loading'}
        />
      </div>

      <div>
        <Input
          {...register('phone')}
          type="tel"
          placeholder={t('phone')}
          error={errors.phone?.message}
          disabled={status === 'loading'}
        />
      </div>

      <div>
        <Textarea
          {...register('message')}
          placeholder={t('message')}
          error={errors.message?.message}
          disabled={status === 'loading'}
          rows={5}
        />
      </div>

      <Button
        type="submit"
        className="w-full"
        isLoading={status === 'loading'}
        disabled={status === 'loading'}
      >
        {status === 'loading' ? t('sending') : t('submit')}
      </Button>

      {status === 'success' && (
        <div className="p-4 rounded-lg bg-green-50 text-green-800 text-sm">
          {t('success')}
        </div>
      )}

      {status === 'error' && (
        <div className="p-4 rounded-lg bg-red-50 text-red-800 text-sm">{t('error')}</div>
      )}
    </form>
  );
}
