import React from 'react';
import styled, { css } from 'styled-components';

type linePositionType = 'top' | 'bottom';

type TabWrapperProps = {
  isActive?: boolean;
  linePosition?: linePositionType;
};

type TabProps = TabWrapperProps & {
  onClick: () => void;
  text: string;
};

const TabWrapper = styled.div<TabWrapperProps>(
  ({ theme, linePosition = 'top', isActive }) => {
    const { spacing, action, text } = theme;

    return {
      fontSize: 16,
      color: text.primary,
      padding: spacing.sm,
      flexBasis: '100%',
      [`border-${linePosition}`]: isActive
        ? `4px solid ${action.selected}`
        : 'none',
      [':hover']: {
        cursor: 'pointer',
        color: text.secondary,
      },
    };
  }
);

export function Tab(props: TabProps) {
  const { text, ...tabProps } = props;

  return <TabWrapper {...tabProps}>{text}</TabWrapper>;
}

type TabNavigationProps = {
  tabs: TabProps[];
  linePosition?: linePositionType;
};

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

export default function TabNavigation(props: TabNavigationProps) {
  const { tabs, linePosition = 'top' } = props;
  return (
    <TabNavigationWrapper>
      {tabs.map(tabProps => (
        <Tab {...tabProps} linePosition={linePosition} />
      ))}
    </TabNavigationWrapper>
  );
}
