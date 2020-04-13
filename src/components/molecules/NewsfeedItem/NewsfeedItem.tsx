import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import styled from 'styled-components';
import { ThumbIcons, Bubble } from 'components';

import { describeISODate } from 'util/dates';
import { Entity } from 'global/types';
import { cardTypes } from 'global/theme';

export type NewsfeedItemProps = {
  topic: Entity;
  bill?: Entity;
  image?: string;
  children?: React.ReactNode;
  type: cardTypes;
  content?: Object;
  date: string;
  key?: string;
};

const CardWrapper = styled.div`
  width: 100%;
  font-family: 'Galano Grotesque Regular', Futura, 'Trebuchet MS', Arial,
    sans-serif;
  background-color: ${({ theme }) => theme.cardTheme?.primary};
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  text-align: left;
  position: relative;

  margin-bottom: 10px;

  .newsfeed-content {
    padding: 10px;
  }
`;

const TopWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  img {
    border-radius: 8px 8px 0 0;
    width: 100%;
    height: auto;
  }
`;

const BottomWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .card-bottom-group {
    display: flex;
    justify-content: space-around;

    .date-description {
      margin: auto;
      color: ${({ theme }) => theme.cardTheme?.secondaryText};
    }
  }
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

const EllipsesDropDownMenu = styled.div`
  width: 95px;
  height: 52px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 8px;
  .ellipsis-dots {
    color: ${({ theme }) => theme.cardTheme?.secondary};
  }
`;

export default function NewsfeedItem(props: NewsfeedItemProps) {
  const [likes, setLikes] = useState(Math.floor(Math.random() * 20 + 1));
  const [dislikes, setDislikes] = useState(Math.floor(Math.random() * 20 + 1));
  const { image, topic, bill, children, date } = props;

  // TODO: customize date descriptions e.g 'Yesterday' instead of 'a day ago'
  let dateDescription = describeISODate(date);

  return (
    <CardWrapper>
      <TopWrapper>
        <BubbleWrap className={image ? 'absolute' : ''}>
          <Bubble>{topic.name}</Bubble>
          {bill?.name && <Bubble>{bill.name}</Bubble>}
        </BubbleWrap>
        {image && <img src={image} alt="Background" />}
      </TopWrapper>

      <div className="newsfeed-content">
        {children}

        <BottomWrapper>
          <div className={'card-bottom-group'}>
            <ThumbIcons
              likes={likes}
              dislikes={dislikes}
              onLike={() => setLikes(likes + 1)}
              onDislike={() => setDislikes(dislikes + 1)}
            />
          </div>
          <div className={'card-bottom-group'}>
            <div className="date-description">{dateDescription}</div>
            <EllipsesDropDownMenu>
              <FontAwesomeIcon
                icon="ellipsis-h"
                size="2x"
                className="ellipsis-dots"
              />
            </EllipsesDropDownMenu>
          </div>
        </BottomWrapper>
      </div>
    </CardWrapper>
  );
}
