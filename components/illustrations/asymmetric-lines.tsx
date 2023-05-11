import {IconProps} from '@/types';
import {FC} from 'react';

export type AsymmetricLinesProps = IconProps;

const AsymmetricLines: FC<AsymmetricLinesProps> = ({className}) => {
  return (
    <svg
      className={className}
      width="137"
      height="13"
      viewBox="0 0 137 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.70476 4.99997H131.295C138.895 4.99997 138.908 -3.05176e-05 131.295 -3.05176e-05H5.70476C-1.89529 -3.05176e-05 -1.90788 4.99997 5.70476 4.99997Z"
        fill="currentColor"
      />
      <path
        d="M22.7262 13H117.274C124.902 13 124.915 7.99997 117.274 7.99997H22.7262C15.0976 7.99997 15.0849 13 22.7262 13Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default AsymmetricLines;
