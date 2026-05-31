import { forwardRef, TextareaHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <div className="w-full">
        <textarea
          ref={ref}
          className={cn(
            'flex min-h-[120px] w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-base text-foreground',
            'transition-all duration-200 backdrop-blur-sm',
            'placeholder:text-muted',
            'focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/30',
            'disabled:cursor-not-allowed disabled:opacity-50',
            'resize-y',
            error && 'border-red-500/60 focus:border-red-500/60 focus:ring-red-500/20',
            className
          )}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
