import {IconProps} from '@/types';
import {FC} from 'react';

export type CircleDotProps = IconProps;

const CircleDot: FC<CircleDotProps> = ({className}) => {
  return (
    <svg
      className={className}
      width="27"
      height="27"
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="13.5" cy="13.5" r="13.5" fill="currentColor" />
    </svg>
  );
};

export default CircleDot;
