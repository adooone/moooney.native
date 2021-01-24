import React from "react";

interface IProps {
  src: any;
}

const Icon: React.FC<IProps> = ({ src }) => (
  <img src={src as string} alt="icon" />
);

export default Icon;
