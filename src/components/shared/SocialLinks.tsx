'use client';

import { Instagram, Send } from 'lucide-react';
import { siteConfig } from '@/data/site-config';
import { cn } from '@/lib/utils';

type Variant = 'icon' | 'pill';

const links = [
  {
    name: 'Instagram',
    href: siteConfig.social.instagram,
    handle: siteConfig.social.instagramHandle,
    Icon: Instagram,
  },
  {
    name: 'Telegram',
    href: siteConfig.social.telegram,
    handle: siteConfig.social.telegramHandle,
    Icon: Send,
  },
];

export function SocialLinks({
  variant = 'icon',
  className,
  size = 'md',
}: {
  variant?: Variant;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}) {
  if (variant === 'pill') {
    return (
      <div className={cn('flex flex-col sm:flex-row gap-3', className)}>
        {links.map(({ name, href, handle, Icon }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group glass glass-hover gradient-border flex items-center gap-3 rounded-2xl px-5 py-4 flex-1"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
              <Icon className="h-5 w-5 text-white" />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-medium">{name}</span>
              <span className="text-sm text-muted group-hover:text-accent-soft transition-colors">
                {handle}
              </span>
            </span>
          </a>
        ))}
      </div>
    );
  }

  const dims = size === 'lg' ? 'h-12 w-12' : size === 'sm' ? 'h-9 w-9' : 'h-11 w-11';
  const icon = size === 'lg' ? 'h-5 w-5' : 'h-[18px] w-[18px]';

  return (
    <div className={cn('flex gap-3', className)}>
      {links.map(({ name, href, Icon }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          className={cn(
            'group glass glass-hover flex items-center justify-center rounded-full transition-colors',
            dims
          )}
        >
          <Icon className={cn('text-foreground/80 group-hover:text-accent-soft transition-colors', icon)} />
        </a>
      ))}
    </div>
  );
}
