'use client';

import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';

import {cn} from '@/lib/utils';
import Checkmark from '../icons/checkmark';
import {Label} from './label';

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & {label?: string}
>(({className, label, id, ...props}, ref) => (
  <div className="flex items-center space-x-[0.625rem]">
    <CheckboxPrimitive.Root
      ref={ref}
      id={id}
      className={cn(
        'peer h-5 w-5 shrink-0 rounded-[0.063rem] border border-black ring-offset-stone focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-opacity-80 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-secondary-accent-3 data-[state=checked]:bg-secondary-accent-3 data-[state=checked]:text-white dark:border-white dark:data-[state=checked]:border-secondary-accent-3',
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator className={cn('flex items-center justify-center text-current')}>
        <Checkmark className="h-4 w-4" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>

    {label ? (
      <Label htmlFor={id} className="text-xs font-bold text-black dark:text-white">
        {label}
      </Label>
    ) : null}
  </div>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export {Checkbox};
