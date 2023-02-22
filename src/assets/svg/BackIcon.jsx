import * as React from "react";

const SvgComponent = (props) => (
  <svg
  width={25}
  height={25}
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  {...props}
>
  <path
    d="M23.667 23.667 1 1m22.667 0L1 23.667"
    stroke="#000"
    strokeWidth={2}
    strokeLinecap="round"
  />
</svg>
  );

  export default SvgComponent;