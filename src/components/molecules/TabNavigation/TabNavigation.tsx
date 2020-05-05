import React from 'react';
import styled, { css } from 'styled-components';

type linePositionType = 'top' | 'bottom';

interface ITabWrapperProps {
  isActive?: boolean;
  linePosition?: linePositionType;
}

export interface ITabProps extends ITabWrapperProps {
  onClick(): void;
  text: string;
}

// export type TabProps = TabWrapperProps & {
//   onClick: () => void;
//   text: string;
// };

const TabWrapper = styled.div<ITabWrapperProps>(
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

export function Tab(props: ITabProps) {
  const { text, ...tabProps } = props;

  return <TabWrapper {...tabProps}>{text}</TabWrapper>;
}

type TabNavigationProps = {
  tabs: ITabProps[];
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
      {tabs.map((tabProps, i) => (
        <Tab
          {...tabProps}
          key={`tabNav-${linePosition}-${i}`}
          linePosition={linePosition}
        />
      ))}
    </TabNavigationWrapper>
  );
}
