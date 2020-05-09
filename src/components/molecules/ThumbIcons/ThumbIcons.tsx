import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Bubble } from '../../../components';
import styled from 'styled-components';

import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

interface IThumbIconsProps {
  likes: number;
  dislikes: number;
  onLike: () => void;
  onDislike: () => void;
}

const Thumbs = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0;
  width: 95px;
`;

const IconText = styled.div`
  border-radius: 13px;
  color: white;
  margin-left: 2px;
`;

export default function ThumbIcons(props: IThumbIconsProps) {
  const { likes, dislikes, onLike, onDislike } = props;
  return (
    <Thumbs>
      <Bubble onClick={onLike}>
        <FontAwesomeIcon icon={faThumbsUp} />
        <IconText className="icon-text">{likes}</IconText>
      </Bubble>

      <Bubble onClick={onDislike} style={{ marginLeft: 10 }}>
        <FontAwesomeIcon icon={faThumbsDown} />
        <IconText className="icon-text">{dislikes}</IconText>
      </Bubble>
    </Thumbs>
  );
}
