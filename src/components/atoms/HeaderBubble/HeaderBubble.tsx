import styled from 'styled-components';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGripLinesVertical,
  faHome,
  faCaretDown,
  faSlidersH,
} from '@fortawesome/free-solid-svg-icons';
edited;

function getIcon(iconType: string) {
  switch (iconType) {
    case 'home':
      return faHome;
    case 'more':
      return faCaretDown;
    case 'verticleLines':
      return faGripLinesVertical;
    case 'slider':
      return faSlidersH;
  }
}

const HeaderBubbleWrapper = styled.div`
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
  iconType: string;
};

const BubbleText = styled.div`
  color: white;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

// const BubbleIcon = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: flex-start;
// `;

export default function HeaderBubble(props: HeaderBubbleProps) {
  const { onClick, text, iconType } = props;

  return (
    <HeaderBubbleWrapper onClick={onClick}>
      <FontAwesomeIcon icon={iconType} />
      <BubbleText>{text}</BubbleText>
    </HeaderBubbleWrapper>
  );
}
