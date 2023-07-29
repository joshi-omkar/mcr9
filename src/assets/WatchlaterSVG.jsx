import * as React from "react"
const WatchlaterSVG = (props, {width, height, stroke="#000", fill="none"}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={fill}
    viewBox="0 0 24 24"
    width={width}
    height={height}
    {...props}
  >
    <path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 7v5l2.5 1.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </svg>
)
export default WatchlaterSVG
