import * as React from "react";
const AddNotesSVG = (props, { width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 192 192"
    {...props}
  >
    <g
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={12}
      clipPath="url(#a)"
    >
      <path d="M55 139.591 61.173 171l26.432-17.816L136 35.594 103.394 22 55 139.591ZM22 42h72m40 0h36M22 78h57m41 0h50M22 114h41m41 0h66M22 150h34m34 0h32" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h192v192H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default AddNotesSVG;
