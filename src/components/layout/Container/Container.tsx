import { cn } from '@/lib/utils';
import siteConfig from '@/site-config';
import type { HTMLProps } from '@/types/common.types';
import type { ReactNode } from 'react';

export type MaxWidthOption = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';

export type ContainerProps = HTMLProps<'div'> & {
  maxWidth?: MaxWidthOption;
  children?: ReactNode;
  className?: string;
};

const maxWidthClasses: Record<MaxWidthOption, string> = {
  sm: 'sm:max-w-(--breakpoint-sm)',
  md: 'md:max-w-(--breakpoint-md) sm:max-w-(--breakpoint-sm)',
  lg: 'lg:max-w-(--breakpoint-lg) md:max-w-(--breakpoint-md) sm:max-w-(--breakpoint-sm)',
  xl: 'xl:max-w-(--breakpoint-xl)',
  '2xl': '2xl:max-w-(--breakpoint-xl) xl:max-w-(--breakpoint-xl)',
  '3xl': '3xl:max-w-(--breakpoint-2xl) 2xl:max-w-(--breakpoint-xl) xl:max-w-(--breakpoint-xl)',
  '4xl':
    '4xl:max-w-(--breakpoint-3xl) 3xl:max-w-(--breakpoint-2xl) 2xl:max-w-(--breakpoint-xl) xl:max-w-(--breakpoint-xl)',
  '5xl':
    '5xl:max-w-(--breakpoint-4xl) 4xl:max-w-(--breakpoint-3xl) 3xl:max-w-(--breakpoint-2xl) 2xl:max-w-(--breakpoint-xl) xl:max-w-(--breakpoint-xl)',
};

const Container = ({
  children,
  className,
  maxWidth = siteConfig.layout.container || 'xl',
  ...props
}: ContainerProps) => {
  return (
    <div className={cn('container mx-auto px-6 md:px-8', maxWidthClasses[maxWidth], className)} {...props}>
      {children}
    </div>
  );
};

Container.displayName = 'Container';
export { Container };
