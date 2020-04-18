import React from 'react';
import styled from 'styled-components';
import { Avatar } from 'components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const HeaderWrapper = styled.div`
  position: absolute;
  align-items: center;
  width: 100%;
  background: ${({ theme }) => theme.main.colors.purpleDark};
  body {
    margin: 0px;
  }
`;

const AvatarContainer = styled.div`
  margin-right: 0px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
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
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderIcon>
        <FontAwesomeIcon icon={faHome} />
      </HeaderIcon>
      <HeaderText>Text</HeaderText>
      <AvatarContainer>
        <Avatar src="http://stump.zackrose.net/images/avatar_sm.png" />
      </AvatarContainer>
    </HeaderWrapper>
  );
}
