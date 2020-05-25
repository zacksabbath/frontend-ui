import React from 'react';
import styled, { css } from 'styled-components';

type linePositionType = 'top' | 'bottom';

export interface INavTab extends ITabWrapper {
  onClick: () => void;
  text: string;
  isActive?: boolean;
}

interface ITabWrapper {
  isActive?: boolean;
  linePosition?: linePositionType;
}

interface ITabNavigation {
  tabs: INavTab[];
  linePosition?: linePositionType;
}

const TabWrapper = styled.div<ITabWrapper>(
  ({ theme, isActive, linePosition = 'top' }) => {
    const { spacing, color } = theme;

    return {
      fontSize: 16,
      color: isActive ? color.text.primary : color.text.disabled,
      padding: spacing.sm,
      flexBasis: '100%',
      [`border-${linePosition}`]: `4px solid ${
        isActive ? color.action.selected : color.foreground.primary
      }`,
      ':hover': {
        cursor: 'pointer',
        color: color.text.primary,
      },
    };
  }
);

export function NavTab(props: INavTab) {
  const { text, ...tabProps } = props;

  return <TabWrapper {...tabProps}>{text}</TabWrapper>;
}

const TabNavigationWrapper = styled.div(({ theme }) => {
  const { color } = theme;

  return css`
    background-color: ${color.background.primary};
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
