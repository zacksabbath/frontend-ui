import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { IAvatar, Avatar, Carousel } from '../..';
import { splitIntoPages } from '../../../utils';

interface IAvatarGroup {
  avatars: IAvatar[];
  pageSize: number;
}

const AvatarGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default function AvatarCarousel(props: IAvatarGroup) {
  const { avatars, pageSize = 6 } = props;
  const [slides, setSlides] = useState<IAvatar[][]>([]);

  useEffect(() => {
    if (avatars.length) {
      setSlides(splitIntoPages(avatars, pageSize));
    }
  }, [pageSize]);

  return (
    <Carousel>
      {slides.map((slideAvatars, i) => (
        <AvatarGroup>
          {slideAvatars.map((a, j) => (
            <Avatar {...a} key={`AvatarSlide__${i}_${j}__${a.alt}`} />
          ))}
        </AvatarGroup>
      ))}
    </Carousel>
  );
}
