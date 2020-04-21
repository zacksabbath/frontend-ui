import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { Bubble } from 'components';
import { Avatar } from 'components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const HeaderWrapper = styled.div`
  width: 100vw;
  background-size: cover;
  background: ${({ theme }) => theme.main.colors.purpleDark};
`;

const AvatarContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space between;
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

export default function Header() {
  // const history = useHistory();
  const history = useHistory();
  const goHome = () => {
    history.push('/');
  };
  return (
    <HeaderWrapper>
      <Bubble onClick={goHome}>
        <FontAwesomeIcon icon={faHome} size="2x" />
      </Bubble>
      <HeaderText>Local Issues</HeaderText>
      <AvatarContainer>
        <Avatar src="http://stump.zackrose.net/images/avatar_sm.png" />
      </AvatarContainer>
    </HeaderWrapper>
  );
}
