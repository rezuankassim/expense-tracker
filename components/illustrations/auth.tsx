import {FC} from 'react';
import AsymmetricLines from '@/components/illustrations/asymmetric-lines';
import AsymmetricLines2 from '@/components/illustrations/asymmetric-lines-2';
import Circle from '@/components/illustrations/circle';
import Circle2 from '@/components/illustrations/circle-2';
import CircleDot from '@/components/illustrations/circle-dot';
import Streamer from '@/components/illustrations/streamer';
import Streamer2 from '@/components/illustrations/streamer-2';
import CalendarEvent from '@/components/mockups/calendar-event';
import Image from 'next/image';

const Auth: FC = () => {
  return (
    <div className="absolute right-0 top-0 h-full w-full">
      <Circle className="absolute right-0 top-0 mt-7 text-black dark:text-white" />

      <CircleDot className="absolute right-0 top-0 mr-80 mt-[106px] text-black dark:text-white" />

      <Circle2 className="absolute right-0 top-0 mt-40 text-black dark:text-white" />

      <CircleDot className="absolute right-0 top-0 mr-20 mt-[151px] text-black dark:text-white" />

      <CircleDot className="absolute bottom-0 right-0 mb-[118px] mr-44 text-black dark:text-white" />

      <Streamer className="absolute right-0 top-0 mr-36 mt-20 text-black dark:text-white" />

      <Streamer2 className="absolute bottom-0 right-0 mb-72 mr-72 text-black dark:text-white" />

      <AsymmetricLines className="absolute right-0 top-0 mr-[130px] mt-[320px] text-black dark:text-white" />

      <AsymmetricLines2 className="absolute bottom-0 right-0 mb-20 mr-[440px] text-black dark:text-white" />

      <Image
        className="absolute right-0 top-0 mr-[400px] mt-20 block shadow-primary-sm dark:hidden dark:shadow-primary-dark-sm"
        src="/counter-numeric-w-bars.webp"
        alt="illustration"
        width={200}
        height={74}
      />

      <Image
        className="absolute right-0 top-0 mr-[400px] mt-20 hidden shadow-primary-sm dark:block dark:shadow-primary-dark-sm"
        src="/counter-numeric-w-bars-dark.webp"
        alt="illustration"
        width={200}
        height={74}
      />

      <Image
        className="absolute right-0 top-0 mr-[320px] mt-48 block shadow-primary-sm dark:hidden dark:shadow-primary-dark-sm"
        src="/crm-customer-view.webp"
        alt="illustration"
        width={203}
        height={259}
      />

      <Image
        className="absolute right-0 top-0 mr-[320px] mt-48 hidden shadow-primary-sm dark:block dark:shadow-primary-dark-sm"
        src="/crm-customer-view-dark.webp"
        alt="illustration"
        width={203}
        height={259}
      />

      <Image
        className="absolute bottom-0 right-0 -mr-10 mb-64 block shadow-primary-sm dark:hidden dark:shadow-primary-dark-sm"
        src="/project-item-view.webp"
        alt="illustration"
        width={254}
        height={259}
      />

      <Image
        className="absolute bottom-0 right-0 -mr-10 mb-64 hidden shadow-primary-sm dark:block dark:shadow-primary-dark-sm"
        src="/project-item-view-dark.webp"
        alt="illustration"
        width={254}
        height={259}
      />

      <Image
        className="absolute bottom-0 right-0 mb-72 mr-[405px] block shadow-primary-sm dark:hidden dark:shadow-primary-dark-sm"
        src="/counter-numeric-w-bars-2.webp"
        alt="illustration"
        width={226}
        height={115}
      />

      <Image
        className="absolute bottom-0 right-0 mb-72 mr-[405px] hidden shadow-primary-sm dark:block dark:shadow-primary-dark-sm"
        src="/counter-numeric-w-bars-dark-2.webp"
        alt="illustration"
        width={226}
        height={115}
      />

      <CalendarEvent label="Update design system" className="absolute right-0 top-0 mr-24 mt-64" />

      <CalendarEvent label="Assign tasks" className="absolute bottom-0 right-0 mb-44 mr-[440px]" />

      <CalendarEvent label="Mockup for web app" className="absolute bottom-0 right-0 mb-32 mr-80" />
    </div>
  );
};

export default Auth;
