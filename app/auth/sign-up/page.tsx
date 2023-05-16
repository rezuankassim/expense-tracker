'use client';

import Logo from '@/components/icons/logo';
import Mail from '@/components/icons/mail';
import {Button} from '@/components/ui/button';
import {Checkbox} from '@/components/ui/checkbox';
import {Input} from '@/components/ui/input';
import {useSignUp} from '@clerk/nextjs';
import {useFormik} from 'formik';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import * as Yup from 'yup';

export default function SignUp() {
  const {isLoaded, signUp, setActive} = useSignUp();
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      terms: false,
    },
    validationSchema: Yup.object({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required(),
      terms: Yup.boolean().isTrue(),
    }),
    onSubmit: async (values, {setErrors}) => {
      if (!isLoaded) {
        return;
      }

      await signUp
        .create({
          firstName: values.name.split(' ').at(0),
          lastName: values.name.split(' ').at(-1),
          emailAddress: values.email,
          password: values.password,
        })
        .then(async result => {
          if (result.status === 'complete') {
            await setActive({session: result.createdSessionId});
            router.push('/');
          }
        })
        .catch(err => {
          setErrors({name: 'Name invalid', email: 'Email invalid', password: 'Password invalid'});
        });
    },
  });

  return (
    <div className="relative z-10">
      <div>
        <Logo />

        <div className="mt-16">
          <h2 className="text-h1 font-extrabold dark:text-white">Sign up</h2>
          <p className="mt-1 text-sm text-gray dark:text-white/50">
            Before we start, please enter your information.
          </p>
        </div>

        <form
          className="mt-12 flex max-w-[29.188rem] flex-col gap-y-6"
          onSubmit={formik.handleSubmit}
        >
          <Input
            label="Name"
            id="name"
            name="name"
            placeholder="Enter your full name"
            onChange={formik.handleChange}
            value={formik.values.name}
            error={!!formik.errors.name}
          />

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

          <Checkbox
            id="terms"
            name="terms"
            label="I have read and agree to Terms of Service"
            onCheckedChange={checked => formik.setFieldValue('terms', checked)}
            checked={formik.values.terms}
            error={!!formik.errors.terms}
          />

          <Button type="submit" size="lg">
            Sign In
          </Button>
        </form>

        <div className="mt-20 text-sm">
          <span className="dark:text-white">Already registered?</span>
          <Link
            href="/auth/sign-in"
            className="ml-[0.375rem] font-bold ring-offset-stone hover:text-primary focus:outline-none focus-visible:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-opacity-80 focus-visible:ring-offset-2 dark:text-white dark:ring-offset-black dark:hover:text-primary dark:focus-visible:text-primary"
          >
            Sign in to your account
          </Link>
        </div>
      </div>
    </div>
  );
}
