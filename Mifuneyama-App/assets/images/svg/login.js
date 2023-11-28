import * as React from "react";
import Svg, { Path } from "react-native-svg";
const LoginIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="currentColor"
    className="bi bi-play-circle-fill"
    viewBox="0 0 16 16"
    {...props}
  >
    <Path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
  </Svg>
);
export default LoginIcon;
