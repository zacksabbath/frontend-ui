import React from 'react';
import styled, { css } from 'styled-components';
import { ITabWrapper, INavTab, ITabNavigation } from '../../../components';

const TabWrapper = styled.div<ITabWrapper>(
  ({ theme, isActive, linePosition = 'top' }) => {
    const { spacing, action, text, foreground } = theme;

    return {
      fontSize: 16,
      color: isActive ? text.primary : text.disabled,
      padding: spacing.sm,
      flexBasis: '100%',
      [`border-${linePosition}`]: `4px solid ${
        isActive ? action.selected : foreground.primary
      }`,
      ':hover': {
        cursor: 'pointer',
        color: text.primary,
      },
    };
  }
);

export function NavTab(props: INavTab) {
  const { text, ...tabProps } = props;

  return <TabWrapper {...tabProps}>{text}</TabWrapper>;
}

const TabNavigationWrapper = styled.div(({ theme }) => {
  const { background } = theme;
  return css`
    background-color: ${background.primary};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    text-align: center;
    width: 100%;
  `;
});

export default function TabNavigation(props: ITabNavigation) {
  const { tabs, linePosition = 'top' } = props;
  return (
    <TabNavigationWrapper>
      {tabs.map((tabProps, i) => (
        <NavTab
          {...tabProps}
          key={`tabNav-${linePosition}-${i}`}
          linePosition={linePosition}
        />
      ))}
    </TabNavigationWrapper>
  );
}
