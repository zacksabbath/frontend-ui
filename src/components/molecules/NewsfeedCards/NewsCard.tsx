import React from 'react';
import styled, { css } from 'styled-components';
import { NewsfeedItem } from '../../../components';

const NewsSource = styled.div(({ theme }) => {
  const { font, color } = theme;
  return css`
    font-weight: ${font.weights.semiBold};
    font-size: 14px;
    color: ${color.text.secondary}; /* #A082E3;*/
    padding-bottom: 10px;
  `;
});

const Headline = styled.div(({ theme }) => {
  const { color } = theme;
  return css`
    font-weight: medium;
    text-align: left;
    font-size: 20px;
    color: ${color.text.primary};
    line-height: 26px;
  `;
});

export interface INewsCard {
  content: {
    source: string;
    heading: string;
  };
}

// TODO: Work with Henry to flesh out UI for this card (and thus replay 'any' with better type checking)
export default function NewsCard(props: any) {
  const { content, ...rest } = props;
  const { heading, source } = content;

  return (
    <NewsfeedItem {...rest}>
      <NewsSource>{source}</NewsSource>
      <Headline>{heading}</Headline>
    </NewsfeedItem>
  );
}
