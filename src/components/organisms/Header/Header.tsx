import React from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { INavTab, TabNavigation, Avatar } from '../../../components';

const HeaderWrapper = styled.div(({ theme }) => {
  const { background, spacing, font } = theme;

  return css`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${background.secondary};
    padding: ${spacing.md} 0;
    font-family: ${font.family};
  `;
});

const OnClickWrapper = styled.div(({ theme }) => {
  const { spacing, foreground, action } = theme;

  return css`
    margin: 0 ${spacing.md};
    cursor: pointer;
    color: ${foreground.icon};
    :hover {
      color: ${action.selected};
    }
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
  leftIconAction?: () => void;
  title?: string;
}

export default function Header(props: IHeader) {
  const { navTabs, leftIconAction, title } = props;

  return (
    <>
      <HeaderWrapper>
        <OnClickWrapper>
          {leftIconAction ? (
            <FontAwesomeIcon size="2x" icon={faHome} onClick={leftIconAction} />
          ) : (
            <div>&nbsp;</div>
          )}
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
