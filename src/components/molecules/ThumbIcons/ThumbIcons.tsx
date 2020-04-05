import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Bubble } from 'components';
import styled from 'styled-components';

type ThumbIconsProps = {
  likes: number;
  dislikes: number;
  onLike: () => void;
  onDislike: () => void;
};

const Thumbs = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0;
  width: 95px;

  .icon-text {
    border-radius: 13px;
    color: white;
    margin-left: 2px;
  }
`;

export default function ThumbIcons(props: ThumbIconsProps) {
  const { likes, dislikes, onLike, onDislike } = props;
  return (
    <Thumbs>
      <Bubble onClick={onLike}>
        <FontAwesomeIcon icon="thumbs-up" />
        <div className="icon-text">{likes}</div>
      </Bubble>

      <Bubble onClick={onDislike} style={{ marginLeft: 10 }}>
        <FontAwesomeIcon icon="thumbs-down" />
        <div className="icon-text">{dislikes}</div>
      </Bubble>
    </Thumbs>
  );
}
