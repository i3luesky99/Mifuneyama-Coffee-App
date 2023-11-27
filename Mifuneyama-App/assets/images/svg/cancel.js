import * as React from "react";
import Svg, { Path } from "react-native-svg";
const CancelIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={0}
    height={0}
    viewBox="0 0 24 24"
    style={{
      fillRule: "evenodd",
    }}
    {...props}
  >
    <Path
      d="M936 120a12 12 0 1 1 12-12 12 12 0 0 1-12 12Zm0-22a10 10 0 1 0 10 10 10 10 0 0 0-10-10Zm4.706 14.706a.951.951 0 0 1-1.345 0l-3.376-3.376-3.376 3.376a.949.949 0 1 1-1.341-1.342l3.376-3.376-3.376-3.376a.949.949 0 1 1 1.341-1.342l3.376 3.376 3.376-3.376a.949.949 0 1 1 1.342 1.342l-3.376 3.376 3.376 3.376a.95.95 0 0 1 .003 1.342Z"
      transform="translate(-924 -96)"
    />
  </Svg>
);
export default CancelIcon;
