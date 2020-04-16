import styled from 'styled-components';
import React from 'react';

const HeaderBubbleWrapper = styled.button`
  border-radius: 50px;
  flex: 1 1 200px;

  display: flex;
  justify-content: center;

  position: relative;
  background-color: #2980b9;
`;

type HeaderBubbleProps = {
  onClick: any;
  text: string;
};

const BubbleText = styled.div`
  color: white;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const BubbleIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export default function HeaderBubble(props: HeaderBubbleProps) {
  const { onClick, text } = props;
  return (
    <HeaderBubbleWrapper onClick={onClick}>
      <BubbleIcon></BubbleIcon>
      <BubbleText>{text}</BubbleText>
    </HeaderBubbleWrapper>
  );
}
