import React from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { INavTab, TabNavigation, Avatar } from '../../../components';

const HeaderWrapper = styled.div(({ theme }) => {
  const { background, spacing } = theme;

  return css`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    background-color: ${background.primary};
    padding-top: ${spacing.md};
  `;
});

const OnClickWrapper = styled.div(({ theme }) => {
  const { spacing, foreground } = theme;

  return css`
    font-size: 16px;
    margin: 0 ${spacing.md};
    cursor: pointer;
    color: ${foreground.icon};
  `;
});

const HeaderText = styled.span`
  color: white;
  font-size: 20px;
  font-weight: ${({ theme }) => theme.font.weights.semiBold};
`;

const TabNavWrapper = styled.div`
  width: 100%;
`;

interface IHeader {
  navTabs?: INavTab[];
  onHomeClick: () => void;
  title: string;
}

export default function Header(props: IHeader) {
  const { navTabs, onHomeClick, title } = props;

  return (
    <>
      <HeaderWrapper>
        <OnClickWrapper>
          <FontAwesomeIcon icon={faHome} onClick={onHomeClick} />
        </OnClickWrapper>
        <HeaderText>{title}</HeaderText>
        <OnClickWrapper>
          <Avatar
            src="http://stump.zackrose.net/images/avatar_sm.png"
            size="xs"
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
