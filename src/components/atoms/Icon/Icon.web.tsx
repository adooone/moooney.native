import React from "react";

interface IProps {
  src: any;
  height?: number;
  width?: number;
  fill?: string;
}

const Icon: React.FC<IProps> = ({ src, height, width, fill }) => (
  <img
    style={{ color: fill }}
    height={height}
    width={width}
    src={src as string}
    alt="icon"
  />
);

export default Icon;
