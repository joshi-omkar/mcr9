import * as React from "react"
const PlaylistSVG = (props, {width, height}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width}
  height={height} viewBox="0 0 30 30" {...props}>
    <path
      d="M4 5c-.554 0-1 .446-1 1s.446 1 1 1h15c.554 0 1-.446 1-1s-.446-1-1-1H4zm0 7c-.554 0-1 .446-1 1s.446 1 1 1h18c.554 0 1-.446 1-1s-.446-1-1-1H4zm17.95 5.004c-.344 0-.678.033-1 .1v3.851H17.1c-.066.323-.1.657-.1 1 0 .343.034.677.1 1h3.85v3.85c.322.066.656.1 1 .1.342 0 .676-.034 1-.1v-3.85h3.85c.067-.323.1-.657.1-1a4.98 4.98 0 0 0-.1-1h-3.85v-3.851a4.983 4.983 0 0 0-1-.1zM4 19c-.554 0-1 .446-1 1s.446 1 1 1h10c.554 0 1-.446 1-1s-.446-1-1-1H4z"
      style={{
        opacity: 1,
        fill: "#000",
        fillOpacity: 1,
        stroke: "none",
        strokeWidth: 2,
        strokeMiterlimit: 4,
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
    />
  </svg>
)
export default PlaylistSVG