import {cn} from '@/lib/utils';
import {IconProps} from '@/types';
import {FC} from 'react';

export type QRCodeProps = IconProps;

const QRCode: FC<QRCodeProps> = ({className}) => {
  return (
    <svg
      className={cn('h-5 w-5', className)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.74951 7.899C8.74951 8.368 8.36851 8.75 7.89851 8.75H4.85051C4.38151 8.75 3.99951 8.368 3.99951 7.899V4.851C3.99951 4.381 4.38151 4 4.85051 4H7.89851C8.36851 4 8.74951 4.381 8.74951 4.851V7.899ZM7.89851 2H4.85051C3.27851 2 1.99951 3.279 1.99951 4.851V7.899C1.99951 9.471 3.27851 10.75 4.85051 10.75H7.89851C9.47051 10.75 10.7495 9.471 10.7495 7.899V4.851C10.7495 3.279 9.47051 2 7.89851 2Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.375 5.38098C5.823 5.38098 5.375 5.83498 5.375 6.38698C5.375 6.93898 5.823 7.38698 6.375 7.38698C6.927 7.38698 7.375 6.93898 7.375 6.38698V6.37498C7.375 5.82298 6.927 5.38098 6.375 5.38098Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.375 16.631C5.823 16.631 5.375 17.085 5.375 17.637C5.375 18.189 5.823 18.637 6.375 18.637C6.927 18.637 7.375 18.189 7.375 17.637V17.625C7.375 17.073 6.927 16.631 6.375 16.631Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.74951 19.149C8.74951 19.618 8.36851 20 7.89851 20H4.85051C4.38151 20 3.99951 19.618 3.99951 19.149V16.101C3.99951 15.631 4.38151 15.25 4.85051 15.25H7.89851C8.36851 15.25 8.74951 15.631 8.74951 16.101V19.149ZM7.89851 13.25H4.85051C3.27851 13.25 1.99951 14.529 1.99951 16.101V19.149C1.99951 20.721 3.27851 22 4.85051 22H7.89851C9.47051 22 10.7495 20.721 10.7495 19.149V16.101C10.7495 14.529 9.47051 13.25 7.89851 13.25Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.9995 19.149C19.9995 19.618 19.6185 20 19.1485 20H16.1005C15.6315 20 15.2495 19.618 15.2495 19.149V16.101C15.2495 15.631 15.6315 15.25 16.1005 15.25H19.1485C19.6185 15.25 19.9995 15.631 19.9995 16.101V19.149ZM19.1485 13.25H16.1005C14.5285 13.25 13.2495 14.529 13.2495 16.101V19.149C13.2495 20.721 14.5285 22 16.1005 22H19.1485C20.7205 22 21.9995 20.721 21.9995 19.149V16.101C21.9995 14.529 20.7205 13.25 19.1485 13.25Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.625 16.6139C17.073 16.6139 16.625 17.0619 16.625 17.6139V17.6249C16.625 18.1769 17.073 18.6189 17.625 18.6189C18.177 18.6189 18.625 18.1659 18.625 17.6139C18.625 17.0619 18.177 16.6139 17.625 16.6139Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.25 4.0118C14.802 4.0118 15.25 3.5638 15.25 3.0118V2.9998C15.25 2.4478 14.802 2.0058 14.25 2.0058C13.698 2.0058 13.25 2.4598 13.25 3.0118C13.25 3.5638 13.698 4.0118 14.25 4.0118Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.5303 2.00012H17.6253C17.0723 2.00012 16.6253 2.44812 16.6253 3.00012C16.6253 3.55212 17.0723 4.00012 17.6253 4.00012H19.5303C19.7893 4.00012 20.0003 4.21112 20.0003 4.47112V6.37512C20.0003 6.92712 20.4473 7.37512 21.0003 7.37512C21.5523 7.37512 22.0003 6.92712 22.0003 6.37512V4.47112C22.0003 3.10812 20.8923 2.00012 19.5303 2.00012Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 8.75012H17.625C17.073 8.75012 16.625 9.19812 16.625 9.75012C16.625 10.3021 17.073 10.7501 17.625 10.7501H21C21.552 10.7501 22 10.3021 22 9.75012C22 9.19812 21.552 8.75012 21 8.75012Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.25 10.7501C14.802 10.7501 15.25 10.3021 15.25 9.75012V7.84512C15.25 7.58612 15.461 7.37512 15.721 7.37512H17.625C18.177 7.37512 18.625 6.92712 18.625 6.37512C18.625 5.82312 18.177 5.37512 17.625 5.37512H15.721C14.358 5.37512 13.25 6.48312 13.25 7.84512V9.75012C13.25 10.3021 13.698 10.7501 14.25 10.7501Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default QRCode;
