import React from 'react';
import { ThemeProvider } from 'styled-components';
import { getTheme } from '../../../context';

import {
  EventCard,
  FinanceCard,
  HistoryCard,
  NewsCard,
  QuestionAnswerCard,
  VoteCard,
  INewsfeedItem,
} from '../../../components';

interface INewsfeed {
  newsfeedItems?: INewsfeedItem[];
}

function getComponent(newsfeedItemProps: any) {
  const { type } = newsfeedItemProps;

  switch (type) {
    case 'event':
      return <EventCard {...newsfeedItemProps} />;
    case 'contribution':
      return <FinanceCard {...newsfeedItemProps} />;
    case 'history':
      return <HistoryCard {...newsfeedItemProps} />;
    case 'news':
      return <NewsCard {...newsfeedItemProps} />;
    case 'question':
      return <QuestionAnswerCard {...newsfeedItemProps} />;
    case 'vote':
      return <VoteCard {...newsfeedItemProps} />;
    default:
      return <div>Card Error... Type: {type}</div>;
  }
}

export default function NewsFeed(props: INewsfeed) {
  const { newsfeedItems } = props;

  return (
    <>
      {newsfeedItems?.map(item => {
        const { key, type } = item;

        return (
          <ThemeProvider theme={getTheme(type)} key={key}>
            {getComponent(item)}
          </ThemeProvider>
        );
      })}
    </>
  );
}
