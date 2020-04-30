import React from 'react';
import styled, { css } from 'styled-components';
import { NewsfeedItem } from '../../../components';

const NewsSource = styled.div(({ theme }) => {
  const { fontWeights, text } = theme;
  return css`
    font-weight: ${fontWeights.semiBold};
    font-size: 14px;
    color: ${text.secondary}; /* #A082E3;*/
    padding-bottom: 10px;
  `;
});

const Headline = styled.div(({ theme }) => {
  const { text } = theme;
  return css`
    font-weight: medium;
    text-align: left;
    font-size: 20px;
    color: ${text.primary};
    line-height: 26px;
  `;
});

export type NewsCardProps = {
  content: {
    source: string;
    heading: string;
  };
};

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
