'use client';

import * as React from 'react';
import {cn} from '@/lib/utils';
import {VariantProps, cva} from 'class-variance-authority';
import {Label} from './label';
import Error from '../icons/error';
import Check from '../icons/check';
import EyeSlash from '../icons/eye-slash';
import Eye from '../icons/eye';

const inputVariants = cva(
  [
    'flex h-16 w-full rounded-sm border bg-white px-5 pt-[1.375rem] pb-[1.313rem]',
    'text-sm text-black font-bold placeholder:text-gray focus:outline-none focus:border-primary focus:placeholder:text-black',
    'dark:text-white dark:placeholder:text-white/75 dark:focus:placeholder:text-white dark:bg-black',
  ],
  {
    variants: {
      error: {
        true: null,
        false: null,
      },
      success: {
        true: null,
        false: null,
      },
    },
    compoundVariants: [
      {
        error: true,
        className: 'border-secondary-accent-2',
      },
      {
        success: true,
        className: 'border-secondary-accent-3',
      },
      {
        error: false,
        success: false,
        className: 'border-black dark:border-white',
      },
    ],
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>,
    VariantProps<typeof inputVariants> {
  label?: string;
  type?: 'text' | 'password' | 'email';
  error?: boolean;
  success?: boolean;
  icon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({className, label, type = 'text', error = false, success = false, id, icon, ...props}, ref) => {
    const [visible, setVisible] = React.useState(false);

    return (
      <div className="relative flex flex-col gap-y-[0.813rem]">
        {label ? (
          <Label htmlFor={id} className="text-xs font-bold text-black dark:text-white">
            {label}
          </Label>
        ) : null}

        <input
          id={id}
          type={visible ? 'text' : type}
          className={cn(inputVariants({error, success}))}
          ref={ref}
          {...props}
        />

        {error ? (
          <Error className="absolute bottom-0 right-0 mb-[1.375rem] mr-[0.938rem] text-secondary-accent-2" />
        ) : success ? (
          <Check className="absolute bottom-0 right-0 mb-[1.375rem] mr-[0.938rem] text-secondary-accent-3" />
        ) : null}

        {type === 'password' ? (
          <button
            type="button"
            className="absolute bottom-0 right-0 mb-[1.375rem] mr-[1.063rem] text-gray hover:text-black focus:text-black focus:outline-none"
            onClick={() => setVisible(v => !v)}
          >
            {visible ? <Eye /> : <EyeSlash />}
          </button>
        ) : icon ? (
          <div className="absolute bottom-0 right-0 mb-[1.375rem] mr-[1.063rem] text-black">
            {icon}
          </div>
        ) : null}
      </div>
    );
  }
);
Input.displayName = 'Input';

export {Input};
