import * as React from 'react';
import {Slot} from '@radix-ui/react-slot';
import {VariantProps, cva} from 'class-variance-authority';

import {cn} from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center font-bold rounded-sm text-black focus-visible:outline-none',
  {
    variants: {
      intent: {
        primary: 'bg-primary border border-black',
        secondary: 'bg-transparent border border-black dark:border-white dark:text-white',
        tertiary: 'bg-transparent hover:text-primary dark:text-white dark:hover:text-primary',
      },
      size: {
        md: 'px-5 py-2 text-xs',
        lg: 'px-10 py-4 text-base',
        icon: 'p-2',
        'icon-lg': 'p-[0.875rem]',
      },
    },
    compoundVariants: [
      {
        intent: ['primary', 'secondary'],
        size: ['md', 'lg', 'icon', 'icon-lg'],
        className:
          'hover:shadow-primary-sm dark:hover:shadow-primary-dark-sm focus:shadow-primary-sm dark:focus:shadow-primary-dark-sm',
      },
    ],
    defaultVariants: {
      intent: 'primary',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({className, intent, size, asChild = false, ...props}, ref) => {
    const Comp = asChild ? Slot : 'button';

    return <Comp className={cn(buttonVariants({intent, size, className}))} ref={ref} {...props} />;
  }
);
Button.displayName = 'Button';

export {Button, buttonVariants};
