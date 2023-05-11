import {IconProps} from '@/types';
import {FC} from 'react';

export type Circle2Props = IconProps;

const Circle2: FC<Circle2Props> = ({className}) => {
  return (
    <svg
      className={className}
      width="387"
      height="616"
      viewBox="0 0 387 616"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="308"
        cy="308"
        r="305"
        transform="rotate(75 308 308)"
        stroke="currentColor"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Circle2;
