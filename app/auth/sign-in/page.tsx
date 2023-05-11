import Mail from '@/components/icons/mail';
import QRCode from '@/components/icons/qr-code';
import {Button} from '@/components/ui/button';
import {Checkbox} from '@/components/ui/checkbox';
import {Input} from '@/components/ui/input';
import {Separator} from '@/components/ui/separator';
import Link from 'next/link';

export default function SignIn() {
  return (
    <div className="relative z-10">
      <div>
        <span className="text-base font-black leading-none">Bruddle</span>

        <div className="mt-16">
          <h2 className="text-h1 font-extrabold">Sign in</h2>
          <p className="mt-1 text-sm text-gray">Enter your account details or use QR code</p>
        </div>

        <form className="mt-12 flex max-w-[29.188rem] flex-col gap-y-6">
          <Input
            label="Email"
            id="email"
            type="email"
            placeholder="Enter your email"
            icon={<Mail />}
          />

          <Input label="Password" id="password" type="password" placeholder="Enter your password" />

          <div className="flex items-center justify-between">
            <Checkbox id="remember" label="Remember me" />

            <Link
              href="#"
              className="ml-[0.375rem] text-xs font-bold hover:text-primary focus:text-primary focus:outline-none"
            >
              Recover password
            </Link>
          </div>

          <Button size="lg">Sign In</Button>

          <div className="flex items-center justify-center gap-x-[0.938rem]">
            <Separator className="w-[8.25rem]" />
            <span>or</span>
            <Separator className="w-[8.25rem]" />
          </div>

          <Button intent="secondary" size="lg">
            <div className="flex items-center gap-x-[0.375rem]">
              <QRCode className="h-[1.125rem] w-[1.125rem]" />
              <span>Log in with QR Code</span>
            </div>
          </Button>
        </form>

        <div className="mt-20 text-sm">
          <span>You don&apos;t have an account?</span>
          <Link
            href="#"
            className="ml-[0.375rem] font-bold hover:text-primary focus:text-primary focus:outline-none"
          >
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
}
