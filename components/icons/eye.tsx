import {cn} from '@/lib/utils';
import {IconProps} from '@/types';
import {FC} from 'react';

export type EyeProps = IconProps;

const Eye: FC<EyeProps> = ({className}) => {
  return (
    <svg
      className={cn('h-5 w-5', className)}
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <title>Iconly/Bold/Show</title>
      <g id="Iconly/Bold/Show" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g
          id="Show"
          transform="translate(2.000000, 4.000000)"
          fill="currentColor"
          fillRule="nonzero"
        >
          <path d="M10,0 C12.0682927,0 14.0292683,0.717575758 15.7365854,2.04606061 C17.4439024,3.36484848 18.897561,5.29454545 19.9414634,7.70909091 C20.0195122,7.89333333 20.0195122,8.10666667 19.9414634,8.28121212 C17.8536585,13.110303 14.1365854,16 10,16 L10,16 L9.9902439,16 C5.86341463,16 2.14634146,13.110303 0.0585365854,8.28121212 C-0.0195121951,8.10666667 -0.0195121951,7.89333333 0.0585365854,7.70909091 C2.14634146,2.88 5.86341463,0 9.9902439,0 L9.9902439,0 Z M10,4.12121212 C7.84390244,4.12121212 6.09756098,5.8569697 6.09756098,8 C6.09756098,10.1333333 7.84390244,11.8690909 10,11.8690909 C12.1463415,11.8690909 13.8926829,10.1333333 13.8926829,8 C13.8926829,5.8569697 12.1463415,4.12121212 10,4.12121212 Z M10.0011707,5.57362424 C11.3377561,5.57362424 12.430439,6.65968485 12.430439,7.99786667 C12.430439,9.32635152 11.3377561,10.4124121 10.0011707,10.4124121 C8.65482927,10.4124121 7.56214634,9.32635152 7.56214634,7.99786667 C7.56214634,7.83301818 7.58165854,7.67786667 7.61092683,7.52271515 L7.65970732,7.52271515 C8.74263415,7.52271515 9.62068293,6.66938182 9.65970732,5.60271515 C9.76702439,5.58332121 9.88409756,5.57362424 10.0011707,5.57362424 Z"></path>
        </g>
      </g>
    </svg>
  );
};

export default Eye;
