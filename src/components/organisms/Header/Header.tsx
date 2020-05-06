import React from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { INavTab, TabNavigation, Avatar } from '../../../components';

const HeaderWrapper = styled.div(({ theme }) => {
  const { background } = theme;

  return css`
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-size: cover;
    background-color: ${background.primary};
    margin-top: -50px;
  `;
});

const OnClickWrapper = styled.div`
  margin: 40px;
`;

const HeaderText = styled.p`
  display: flex;
  color: white;
  font-size: 50px;
`;

const TabNavWrapper = styled.div`
  width: 100vw;
`;

interface IHeader {
  navTabs: INavTab[];
  onHomeClick: () => void;
}

export default function Header(props: IHeader) {
  const { navTabs, onHomeClick } = props;

  return (
    <>
      <HeaderWrapper>
        <OnClickWrapper>
          <FontAwesomeIcon
            icon={faHome}
            size="4x"
            className="icon"
            onClick={onHomeClick}
          />
        </OnClickWrapper>
        <HeaderText>Local Issues</HeaderText>
        <OnClickWrapper>
          <Avatar
            src="http://stump.zackrose.net/images/avatar_sm.png"
            size="3x"
          />
        </OnClickWrapper>
      </HeaderWrapper>
      {navTabs && (
        <TabNavWrapper>
          <TabNavigation tabs={navTabs} linePosition="bottom" />
        </TabNavWrapper>
      )}
    </>
  );
}
