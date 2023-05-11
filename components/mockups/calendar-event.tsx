import {cn} from '@/lib/utils';
import {FC} from 'react';

export type CalendarEventProps = {
  label: string;
  className?: string;
};

const CalendarEvent: FC<CalendarEventProps> = ({label, className}) => {
  return (
    <div
      className={cn(
        'flex w-fit items-center gap-x-[0.625rem] border border-black bg-white py-2 pl-[0.625rem] pr-7 text-xs font-bold text-black',
        'dark:border-white dark:bg-black dark:text-white',
        className
      )}
    >
      <div className="h-2 w-2 bg-primary"></div>

      <span>{label}</span>
    </div>
  );
};

export default CalendarEvent;
