import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { Bubble } from 'components';
import { Avatar } from 'components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const HeaderWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-size: cover;
  background: ${({ theme }) => theme.main.colors.purpleDark};
  margin-top: -50px;
  //   ^ This needs to be adjusted
`;

const HeaderText = styled.p`
  display: flex;
  color: white;
  font-size: 50px;
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
        <FontAwesomeIcon icon={faHome} size="4x" />
      </Bubble>
      <HeaderText>Local Issues</HeaderText>
      <Bubble>
        <Avatar src="http://stump.zackrose.net/images/avatar_sm.png" />
      </Bubble>
    </HeaderWrapper>
  );
}
