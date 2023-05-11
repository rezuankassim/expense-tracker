import {IconProps} from '@/types';
import {FC} from 'react';

type CircleProps = IconProps;

const Circle: FC<CircleProps> = ({className}) => {
  return (
    <svg
      className={className}
      width="492"
      height="826"
      viewBox="0 0 492 826"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="413"
        cy="413"
        r="410"
        transform="rotate(-3 413 413)"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Circle;
