import styled from "styled-components";
import React from "react";

const ImageButtonWrapper = styled.button`
  position: relative;
  text-align: center;
  image {
    height: 100%;
    width: 100%;
    object-fit: contain;
    position: absolute;
    top: 0;
  }
  :hover {
    background-color: orange;
  }
  text {
    position: absolute;
  }
`;

type ImageButtonProps = {
  image: string;
  text: string;
};

export default function ImageButton(props: ImageButtonProps) {
  const { image, text } = props;
  return (
    <ImageButtonWrapper>
      <img src={image} />
      <p className="text">{text}</p>
    </ImageButtonWrapper>
  );
}
