import React from 'react';

import { IconProps } from '../../types';

export const PlayIcon: React.FC<IconProps> = ({
  width = 24,
  height = width || 24,
  className = '',
  fillClassName = '',
  fillColor = '#000',
}) => (
    <svg
        width={width}
        height={height}
        aria-hidden="true"
        viewBox={`0 0 ${width} ${height}`}
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
    >
        <path
            className={fillClassName}
            stroke={fillColor}
            d="m4.90125,4.99c0,-0.972 0,-1.457 0.202,-1.725c0.177,-0.233 0.447,-0.377 0.738,-0.395c0.335,-0.02 0.739,0.25 1.548,0.788l10.515,7.011c0.668,0.445 1.002,0.667 1.118,0.948c0.102,0.245 0.102,0.521 0,0.766c-0.116,0.28 -0.45,0.503 -1.118,0.948l-10.515,7.011c-0.809,0.538 -1.213,0.808 -1.548,0.788c-0.291,-0.018 -0.561,-0.162 -0.738,-0.395c-0.202,-0.268 -0.202,-0.754 -0.202,-1.725l0,-14.02z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
