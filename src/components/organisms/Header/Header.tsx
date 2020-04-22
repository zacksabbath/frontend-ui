import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { Bubble } from 'components';
import { Avatar } from 'components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

// Notes: - Figure out useHistory
//        - use theme for icon color
//        - find correct font for header

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
  //   const history = useHistory();
  const goHome = () => {
    alert('Home!');
    // history.push('/');
  };
  return (
    <HeaderWrapper>
      <Bubble onClick={goHome} style={{ margin: 30 }}>
        <FontAwesomeIcon icon={faHome} size="5x" style={{ color: 'purple' }} />
      </Bubble>
      <HeaderText>Local Issues</HeaderText>
      <Bubble style={{ margin: 30 }}>
        <Avatar
          src="http://stump.zackrose.net/images/avatar_sm.png"
          size="3x"
        />
      </Bubble>
    </HeaderWrapper>
  );
}
