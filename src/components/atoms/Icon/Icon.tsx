import React from "react";
import { SvgProps } from "react-native-svg";

interface IProps {
  src: React.FC<SvgProps>;
  height?: number;
  width?: number;
  fill?: string;
}

const Icon: React.FC<IProps> = ({ src: SvgComponent, height, width, fill }) => (
  <SvgComponent height={height} width={width} fill={fill} />
);

export default Icon;
