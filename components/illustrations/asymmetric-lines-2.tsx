import {IconProps} from '@/types';
import {FC} from 'react';

export type AsymmetricLines2Props = IconProps;

const AsymmetricLines2: FC<AsymmetricLines2Props> = ({className}) => {
  return (
    <svg
      className={className}
      width="120"
      height="14"
      viewBox="0 0 120 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29.8892 5C41.6297 5 53.3703 5 65.1108 5C68.1887 5 71.1374 3.85011 70.995 2.5C70.8522 1.1455 68.4096 0 65.1108 0C53.3703 0 41.6297 0 29.8892 0C26.8113 0 23.8626 1.14989 24.005 2.5C24.1478 3.8545 26.5904 5 29.8892 5Z"
        fill="currentColor"
      />
      <path
        d="M5.71353 14H114.286C121.898 14 121.911 9 114.286 9H5.71353C-1.8982 9 -1.91081 14 5.71353 14Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default AsymmetricLines2;
