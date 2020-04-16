import styled from 'styled-components';
import React from 'react';

const HeaderBubbleWrapper = styled.button`
  border-radius: 50px;
`;

type HeaderBubbleProps = {
  onClick: any;
  text: string;
};

const ImageText = styled.div`
  color: white;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function HeaderBubble(props: HeaderBubbleProps) {
  const { onClick, text } = props;
  return (
    <HeaderBubbleWrapper onClick={onClick}>
      <ImageText>{text}</ImageText>
    </HeaderBubbleWrapper>
  );
}
