import React, { ReactNode } from "react";
import {
  SWrapper,
  SIconWrapper,
  STextBlock,
  SCaption,
  SDescription,
  SDate,
} from "./styled";

interface IProps {
  caption: string;
  description: string;
  date: string;
  icon: ReactNode;
}

const Card: React.FC<IProps> = ({ caption, description, date, icon }) => {
  return (
    <SWrapper key={date}>
      <SIconWrapper>
        {icon}
      </SIconWrapper>
      <STextBlock>
        <SCaption>{caption}</SCaption>
        <SDescription>{description}</SDescription>
      </STextBlock>
      <SDate>{date}</SDate>
    </SWrapper>
  );
};

export default Card;
