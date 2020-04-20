import React from 'react';
import styled from 'styled-components';
import { Bubble } from 'components';
import { Avatar } from 'components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const HeaderWrapper = styled.div`
  position: absolute;
  width: 100%;
  background: ${({ theme }) => theme.main.colors.purpleDark};
`;

const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderText = styled.p`
  display: flex;
  color: white;
  font-size: 30px;
  align-items: center;
  justify-content: center;
`;

const HeaderIcon = styled.button`
  flex: display;
  backgroung: ${({ theme }) => theme.main.colors.purpleDark};
`;

// <Bubble onClick={onLike}>
//         <FontAwesomeIcon icon={faThumbsUp} />
//         <IconText className="icon-text">{likes}</IconText>
//       </Bubble>

export default function Header() {
  return (
    <HeaderWrapper>
      <Bubble>
        <FontAwesomeIcon icon={faHome} size="2x" />
      </Bubble>
      <HeaderText>Text</HeaderText>
      <AvatarContainer>
        <Avatar src="http://stump.zackrose.net/images/avatar_sm.png" />
      </AvatarContainer>
    </HeaderWrapper>
  );
}
