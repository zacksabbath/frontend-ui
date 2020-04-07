import styled from 'styled-components';
import React from 'react';

const ImageButtonWrapper = styled.button`
  border-radius: 80px;
  height: 100%;
  width: 100%;
  font-weight: bold;
  font-size: 30px;
`;

type ImageButtonProps = {
  image: string;
  text: string;
  // onClick: any;
};

export default function ImageButton(props: ImageButtonProps) {
  const { image, text } = props;
  return (
    <ImageButtonWrapper>
      <img src={image} />
      <p className="text"> {text} </p>
    </ImageButtonWrapper>
  );
}
