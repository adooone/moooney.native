import React from "react";
import { SvgProps } from "react-native-svg";

interface IProps {
  src: React.FC<SvgProps>;
}

const Icon: React.FC<IProps> = ({ src: SvgComponent, ...props }) => (
  <SvgComponent {...props} />
);

export default Icon;
