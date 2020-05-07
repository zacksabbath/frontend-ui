export { default as TabNavigation } from './TabNavigation/TabNavigation';
export { default as ThumbIcons } from './ThumbIcons/ThumbIcons';
export { default as NewsfeedItem } from './NewsfeedItem/NewsfeedItem';

export * from './NewsfeedCards';

export type linePositionType = 'top' | 'bottom';
export interface ITabWrapper {
  isActive?: boolean;
  linePosition?: linePositionType;
}
export interface INavTab extends ITabWrapper {
  onClick: () => void;
  text: string;
}

export interface ITabNavigation {
  tabs: INavTab[];
  linePosition?: linePositionType;
}
