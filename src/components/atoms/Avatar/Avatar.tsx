import React from 'react';
import styled from 'styled-components';

const AvatarWrapper = styled.div`
  img {
    vertical-align: middle;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;

type AvatarProps = {
  image: string;
};

export default function Avatar(props: AvatarProps) {
  const { image } = props;
  return (
    <AvatarWrapper>
      <img src={image} />
    </AvatarWrapper>
  );
}
