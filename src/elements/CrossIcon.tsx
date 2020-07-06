import React from 'react';
import SVG from './SVG'

const defaults = {
  width: '1.25rem',
  height: '1.25rem',
  fill: '#FFFFFF',
  stroke: '#FF5050',
  viewBox: '0 0 20 20',
};

const CrossIcon = ({
  width = defaults.width,
  height = defaults.height,
  fill = defaults.fill,
  stroke = defaults.stroke,
  viewBox = defaults.viewBox,
  ...props
}) => (
  <SVG width={width} height={height} viewBox={viewBox} {...props}>
    <g transform="translate(2.490234 2.48999)">
      <path
        d="M14.934 7.467L14.934 7.467C14.934 11.591 11.591 14.934 7.467 14.934L7.467 14.934C3.343 14.934 0 11.591 0 7.467L0 7.467C0 3.343 3.343 0 7.467 0L7.467 0C11.591 0 14.934 3.343 14.934 7.467Z"
        fill={fill}
        stroke="none"
      />
      <path
        d="M4.696 0L0 4.696"
        transform="translate(5.119 5.119)"
        fill="none"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.696 4.696L0 0"
        transform="translate(5.119 5.119)"
        fill="none"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </SVG>
);

export default CrossIcon;
