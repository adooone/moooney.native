import React from 'react';
import { SText, SOptionWrapper } from './styled';

interface IProps {
  text: string;
}

const Option: React.FC<IProps> = ({ text }) => {
  return (
    <SOptionWrapper>
      <SText>{text}</SText>
    </SOptionWrapper>
  );
};

export default Option;
