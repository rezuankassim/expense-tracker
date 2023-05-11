import {cn} from '@/lib/utils';
import {IconProps} from '@/types';
import {FC} from 'react';

export type EyeSlashProps = IconProps;

const EyeSlash: FC<EyeSlashProps> = ({className}) => {
  return (
    <svg
      className={cn('h-5 w-5', className)}
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <title>Iconly/Bold/Hide</title>
      <g id="Iconly/Bold/Hide" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g
          id="Hide"
          transform="translate(2.000000, 3.500000)"
          fill="currentColor"
          fillRule="nonzero"
        >
          <path d="M17.170359,0.214130592 C17.4630805,-0.0713768641 17.9216775,-0.0713768641 18.2046416,0.214130592 C18.4973631,0.499638048 18.4973631,0.972202114 18.2046416,1.25770957 L18.2046416,1.25770957 L16.4287979,3.04951498 C17.8436184,4.34906616 19.0437765,6.10149124 19.9414557,8.20833937 C20.0195148,8.39539598 20.0195148,8.61198784 19.9414557,8.78919936 C17.8533758,13.6920515 14.135813,16.6258868 9.99868275,16.6258868 L9.99868275,16.6258868 L9.98892537,16.6258868 C8.10575051,16.6258868 6.30063472,16.0056464 4.71018134,14.8734617 L4.71018134,14.8734617 L2.8172491,16.7834081 C2.67088836,16.9310844 2.48549809,17 2.30010782,17 C2.11471755,17 1.91956989,16.9310844 1.78296654,16.7834081 C1.53903197,16.537281 1.50000244,16.1434776 1.69515009,15.8579702 L1.69515009,15.8579702 L1.72442224,15.8185898 L16.1555912,1.25770957 C16.175106,1.2380194 16.1946208,1.21832923 16.2043781,1.19863906 C16.2238929,1.17894889 16.2434077,1.15925872 16.2531651,1.13956855 L16.2531651,1.13956855 Z M10.0013172,0.385336615 C11.396623,0.385336615 12.7528992,0.720069495 14.0018441,1.35015492 L14.0018441,1.35015492 L10.7428783,4.6384132 C10.5087011,4.59903287 10.2550092,4.56949761 10.0013172,4.56949761 C7.84493567,4.56949761 6.09836417,6.33176777 6.09836417,8.50753149 C6.09836417,8.76350369 6.12763632,9.01947589 6.16666585,9.25575793 L6.16666585,9.25575793 L2.55643426,12.8984393 C1.58069599,11.7564094 0.731803701,10.3780976 0.0585442961,8.79303895 C-0.0195147654,8.61582742 -0.0195147654,8.39923556 0.0585442961,8.21217895 C2.14662419,3.30932677 5.86418699,0.385336615 9.99155986,0.385336615 L9.99155986,0.385336615 Z M13.218619,6.28854785 L12.1550643,7.36166208 C12.3306972,7.69639496 12.428271,8.09019835 12.428271,8.50369191 C12.428271,9.85246851 11.3354442,10.955118 9.99868275,10.955118 C9.58887268,10.955118 9.19857737,10.8566671 8.86682636,10.6794556 L8.86682636,10.6794556 L7.80327165,11.7525699 C8.42774414,12.1759085 9.18881999,12.4318807 9.99868275,12.4318807 C12.1453069,12.4318807 13.8918784,10.6696105 13.8918784,8.50369191 C13.8918784,7.68654988 13.6381865,6.91863327 13.218619,6.28854785 L13.218619,6.28854785 Z"></path>
        </g>
      </g>
    </svg>
  );
};

export default EyeSlash;
