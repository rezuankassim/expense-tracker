'use client';

import Logo from '@/components/icons/logo';
import Mail from '@/components/icons/mail';
import QRCode from '@/components/icons/qr-code';
import {Button} from '@/components/ui/button';
import {Checkbox} from '@/components/ui/checkbox';
import {Input} from '@/components/ui/input';
import {Separator} from '@/components/ui/separator';
import {useSignIn} from '@clerk/nextjs';
import {useFormik} from 'formik';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import * as Yup from 'yup';

export default function SignIn() {
  const {isLoaded, signIn, setActive} = useSignIn();
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    }),
    onSubmit: async (values, {setErrors}) => {
      if (!isLoaded) {
        return;
      }

      await signIn
        ?.create({
          identifier: values.email,
          password: values.password,
        })
        .then(async result => {
          if (result.status === 'complete') {
            await setActive({session: result.createdSessionId});
            router.push('/');
          }
        })
        .catch(err => {
          setErrors({email: 'Email invalid', password: 'Password invalid'});
        });
    },
  });

  return (
    <div className="relative z-10">
      <div>
        <Logo />

        <div className="mt-16">
          <h2 className="text-h1 font-extrabold dark:text-white">Sign in</h2>
          <p className="mt-1 text-sm text-gray dark:text-white/50">
            Enter your account details or use QR code
          </p>
        </div>

        <form
          className="mt-12 flex max-w-[29.188rem] flex-col gap-y-6"
          onSubmit={formik.handleSubmit}
        >
          <Input
            label="Email"
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            icon={<Mail />}
            onChange={formik.handleChange}
            value={formik.values.email}
            error={!!formik.errors.email}
          />

          <Input
            label="Password"
            id="password"
            type="password"
            placeholder="Enter your password"
            onChange={formik.handleChange}
            value={formik.values.password}
            error={!!formik.errors.password}
          />

          <div className="flex items-center justify-between">
            <Checkbox id="remember" label="Remember me" />

            <Link
              href="#"
              className="ml-[0.375rem] text-xs font-bold ring-offset-stone hover:text-primary focus-visible:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-opacity-80 focus-visible:ring-offset-2 dark:text-white dark:ring-offset-black dark:hover:text-primary dark:focus-visible:text-primary"
            >
              Recover password
            </Link>
          </div>

          <Button type="submit" size="lg">
            Sign In
          </Button>

          <div className="flex items-center justify-center gap-x-[0.938rem]">
            <Separator className="w-[8.25rem]" />
            <span className="text-sm dark:text-white">or</span>
            <Separator className="w-[8.25rem]" />
          </div>

          <Button type="button" intent="secondary" size="lg">
            <div className="flex items-center gap-x-[0.375rem]">
              <QRCode className="h-[1.125rem] w-[1.125rem]" />
              <span>Log in with QR Code</span>
            </div>
          </Button>
        </form>

        <div className="mt-20 text-sm">
          <span className="dark:text-white">You don&apos;t have an account?</span>
          <Link
            href="#"
            className="ml-[0.375rem] font-bold ring-offset-stone hover:text-primary focus:outline-none focus-visible:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-opacity-80 focus-visible:ring-offset-2 dark:text-white dark:ring-offset-black dark:hover:text-primary dark:focus-visible:text-primary"
          >
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
}
