import styled from 'styled-components';
import React from 'react';

const ImageButtonWrapper = styled.div``;

type ImageButtonProps = {
  image: string;
  text: string;
  onClick: any;
};

export default function ImageButton(props: ImageButtonProps) {
  const { image, text, onClick } = props;
  return (
    <ImageButtonWrapper>
      <button onClick={onClick}>
        <img src={image} />
        <p className="text"> {text} </p>
      </button>
    </ImageButtonWrapper>
  );
}
