import { default as TabNavigation } from './TabNavigation/TabNavigation';

// ---

export type linePositionType = 'top' | 'bottom';
export interface ITabWrapper {
  isActive?: boolean;
  linePosition?: linePositionType;
}
export interface ITab extends ITabWrapper {
  onClick: () => void;
  text: string;
}

export interface ITabNavigation {
  tabs: ITab[];
  linePosition?: linePositionType;
}

// ---

export { default as ThumbIcons } from './ThumbIcons/ThumbIcons';
export { default as NewsfeedItem } from './NewsfeedItem/NewsfeedItem';

export { TabNavigation };

export * from './NewsfeedCards';
