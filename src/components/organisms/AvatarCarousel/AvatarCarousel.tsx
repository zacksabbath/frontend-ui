import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { IAvatar, Avatar, Carousel } from '../..';
import { splitIntoPages } from '../../../utils';

export interface IAvatarCarousel {
  avatars: IAvatar[];
  pageSize: number;
}

const AvatarGroup = styled.div`
  display: flex;
  flex-wrap: wrap;

  > div {
    padding: ${({ theme }) => theme.spacing.sm};
    background: none;
  }
`;

export default function AvatarCarousel(props: IAvatarCarousel) {
  const { avatars, pageSize = 6 } = props;
  const [slides, setSlides] = useState<IAvatar[][]>([]);

  useEffect(() => {
    if (avatars.length) {
      setSlides(splitIntoPages(avatars, pageSize));
    }
  }, [pageSize, avatars]);

  return (
    <Carousel>
      {slides.map((slideAvatars, i) => (
        <AvatarGroup key={`AvatarGroup__${i}`}>
          {slideAvatars.map((a, j) => (
            <Avatar {...a} key={`AvatarSlide__${i}_${j}__${a.alt}`} />
          ))}
        </AvatarGroup>
      ))}
    </Carousel>
  );
}
