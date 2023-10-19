import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
const ProfileIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Circle cx={12} cy={7} r={5} strokeWidth={2} />
    <Path
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 14h.352a3 3 0 0 1 2.976 2.628l.391 3.124A2 2 0 0 1 18.734 22H5.266a2 2 0 0 1-1.985-2.248l.39-3.124A3 3 0 0 1 6.649 14H7"
    />
  </Svg>
);
export default ProfileIcon;
