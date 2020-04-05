export type Entity = {
  name: string;
  id: number;
  image?: string;
};

export type TypeOptions =
  | 'contribution'
  | 'event'
  | 'history'
  | 'news'
  | 'question'
  | 'vote';

export type NewsfeedItem = {
  type: TypeOptions;
  topic: Entity;
  image: string;
  content: Object;
  date: string;
};

export type ColorScheme = {
  primary: string;
  secondary: string;
  text: string;
  secondaryText: string;
};
