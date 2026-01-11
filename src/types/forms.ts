export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  honeypot?: string;
}

export interface RegistrationFormData {
  name: string;
  email: string;
  phone: string;
  programId: string;
  preferredDates?: string;
  message?: string;
  honeypot?: string;
}

export type FormStatus = 'idle' | 'loading' | 'success' | 'error';
