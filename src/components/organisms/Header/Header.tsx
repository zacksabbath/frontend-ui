import React from 'react';
import styled from 'styled-components';
import { Avatar } from 'components';

const HeaderWrapper = styled.div`
  position: absolute;
  align-items: center;
  width: 100%;
  background: ${({ theme }) => theme.main.colors.purpleDark};
`;

const AvatarContainer = styled.div`
  margin: 40px;
  margin-right: 0px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const HeaderText = styled.p`
  color: white;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderText>Local Issues</HeaderText>
      <AvatarContainer>
        <Avatar src="http://stump.zackrose.net/images/avatar_sm.png" />
      </AvatarContainer>
    </HeaderWrapper>
  );
}
