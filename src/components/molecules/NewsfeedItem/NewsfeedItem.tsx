import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { ThumbIcons, Bubble, Card } from '../../../components';
import { describeISODate } from '../../../utils/dateUtils';
import { Entity } from '../../../global/types';
import { cardTypes } from '../../../global/theme';

export interface INewsfeedItem {
  topic: Entity;
  bill?: Entity;
  image?: string;
  children?: React.ReactNode;
  type: cardTypes;
  content?: Object;
  date: string;
  key?: string;
}

const NewsFeedContent = styled.div(({ theme }) => ({
  padding: theme.spacing.sm,
}));

const TopWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const CardImage = styled.img`
  border-radius: 8px 8px 0 0;
  width: 100%;
  height: auto;
`;

const BottomWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardBottomGroup = styled.div`
  display: flex;
  justify-content: space-around;
`;

const DateDescription = styled.div`
  margin: auto;
  color: ${({ theme }) => theme.foreground.primary};
`;

const BubbleWrap = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  &.absolute {
    position: absolute;
  }
`;

const EllipsesDropDownMenu = styled.div(({ theme }) => {
  const { foreground, spacing } = theme;
  return css`
    width: 95px;
    height: 52px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: ${spacing.sm};
    color: ${foreground.primary};
  `;
});

export default function NewsfeedItem(props: INewsfeedItem) {
  const [likes, setLikes] = useState(Math.floor(Math.random() * 20 + 1));
  const [dislikes, setDislikes] = useState(Math.floor(Math.random() * 20 + 1));
  const { image, topic, bill, children, date } = props;

  // TODO: customize date descriptions e.g 'Yesterday' instead of 'a day ago'
  const dateDescription = describeISODate(date);

  return (
    <Card>
      <TopWrapper>
        <BubbleWrap className={image ? 'absolute' : ''}>
          <Bubble>{topic.name}</Bubble>
          {bill?.name && <Bubble>{bill.name}</Bubble>}
        </BubbleWrap>
        {image && <CardImage src={image} alt="Background" />}
      </TopWrapper>

      <NewsFeedContent>
        {children}

        <BottomWrapper>
          <CardBottomGroup>
            <ThumbIcons
              likes={likes}
              dislikes={dislikes}
              onLike={() => setLikes(likes + 1)}
              onDislike={() => setDislikes(dislikes + 1)}
            />
          </CardBottomGroup>
          <CardBottomGroup>
            <DateDescription>{dateDescription}</DateDescription>
            <EllipsesDropDownMenu>
              <FontAwesomeIcon icon={faEllipsisH} size="2x" />
            </EllipsesDropDownMenu>
          </CardBottomGroup>
        </BottomWrapper>
      </NewsFeedContent>
    </Card>
  );
}
