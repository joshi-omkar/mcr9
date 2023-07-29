import * as React from "react";
const ExploreSVG = (props, { width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 48 48"
    {...props}
  >
    <title>{"explore"}</title>
    <g data-name="Layer 2">
      <path fill="none" d="M0 0h48v48H0z" data-name="invisible box" />
      <g data-name="icons Q2">
        <path d="M24 6A18 18 0 1 1 6 24 18.1 18.1 0 0 1 24 6m0-4a22 22 0 1 0 22 22A21.9 21.9 0 0 0 24 2Z" />
        <path d="M33.3 13.3 20 20l-6.7 13.3a1.1 1.1 0 0 0 1.4 1.4L28 28l6.7-13.3a1.1 1.1 0 0 0-1.4-1.4ZM24 26a2 2 0 1 1 2-2 2 2 0 0 1-2 2Z" />
      </g>
    </g>
  </svg>
);
export default ExploreSVG;
