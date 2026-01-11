import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'validation.minLength'),
  email: z.string().email('validation.email'),
  phone: z.string().optional(),
  message: z.string().min(10, 'validation.minLength'),
  honeypot: z.string().max(0).optional(),
});

export const registrationSchema = z.object({
  name: z.string().min(2, 'validation.minLength'),
  email: z.string().email('validation.email'),
  phone: z.string().min(10, 'validation.phone'),
  programId: z.string().min(1, 'validation.required'),
  preferredDates: z.string().optional(),
  message: z.string().optional(),
  honeypot: z.string().max(0).optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
export type RegistrationFormData = z.infer<typeof registrationSchema>;
