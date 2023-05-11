import {IconProps} from '@/types';
import {FC} from 'react';

export type StreamerProps = IconProps;

const Streamer: FC<StreamerProps> = ({className}) => {
  return (
    <svg
      className={className}
      width="110"
      height="69"
      viewBox="0 0 110 69"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.15386 61.5841C-1.51573 50.9857 5.76723 40.5513 15.8324 37.4891C26.0949 34.3668 37.4742 38.4295 44.3809 46.4563C47.9386 50.5911 49.7429 56.2243 47.6622 61.4693C45.5539 66.7841 39.7772 69.671 34.3126 67.8241C22.904 63.9681 24.7391 49.0922 26.8606 39.9183C29.3867 28.9945 36.5788 19.0905 48.6694 18.5619C59.2069 18.1013 71.5562 21.6996 78.6322 29.8491C82.0955 33.8378 84.498 39.4129 83.7298 44.7689C82.8706 50.7604 77.6492 55.4068 71.499 54.7203C59.9419 53.4302 57.407 38.0916 58.3483 28.81C59.5292 17.1664 66.9831 6.28292 78.0633 1.99064C88.698 -2.129 100.613 0.467775 108.553 8.59996C110.428 10.5199 109.816 13.9959 107.867 15.5943C105.639 17.421 102.751 16.839 100.869 14.9121C91.9002 5.72638 77.1502 10.2831 71.1839 20.4174C67.9437 25.9212 67.4729 32.6404 68.833 38.7694C69.3819 41.2429 70.2338 43.7187 72.5942 44.8426C73.0416 45.0556 73.5479 44.514 72.9283 44.9654C73.3605 44.6505 73.5532 44.415 73.7477 43.9476C74.1939 42.8756 73.8688 41.5302 73.5272 40.4787C71.4276 34.0153 64.2135 30.8292 58.1026 29.4549C51.6417 28.0019 44.6376 27.4083 40.2548 33.292C36.3133 38.5832 35.1972 46.4626 35.1796 52.9099C35.176 54.2351 35.2792 55.8251 35.9698 56.9992C36.2512 57.4778 37.1849 58.6796 37.8957 58.5266C39.1736 58.2516 38.4905 55.6004 38.1371 54.8551C35.3538 48.9861 26.9426 45.5233 20.7863 46.4756C14.0683 47.5147 9.27202 53.2909 10.9864 60.0974C11.6422 62.7007 9.28074 65.3786 6.81109 65.7541C3.94374 66.19 1.81151 64.195 1.15386 61.5841Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Streamer;