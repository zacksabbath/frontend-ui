import React from 'react';
import styled, { css } from 'styled-components';
import { useHistory } from 'react-router-dom';
import { Bubble, Avatar } from '../../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const HeaderWrapper = styled.div(({ theme }) => {
  const { background } = theme;

  return css`
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-size: cover;
    background-color: ${background.primary};
  `;
});

// const HeaderWrapper = styled.div`
//   width: 100vw;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   background-size: cover;
//   background: ${({ theme }) => main.background.primary};
//   margin-top: -50px;
//   .icon {
//     color: ${({ theme }) => theme.main.colors.purple};
//   }
// `;

const HeaderText = styled.p`
  display: flex;
  color: white;
  font-size: 50px;
`;

export default function Header() {
  const history = useHistory();

  const goHome = () => {
    alert('Home!');
    history.push('/newsfeed');
  };
  return (
    <HeaderWrapper>
      <Bubble onClick={goHome} style={{ margin: 30 }}>
        <FontAwesomeIcon icon={faHome} size="5x" className="icon" />
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
