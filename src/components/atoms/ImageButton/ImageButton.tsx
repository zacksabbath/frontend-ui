import styled from 'styled-components';
import React from 'react';

type ImageButtonWrapperProps = {
  backgroundImage: string;
};

const ImageButtonWrapper = styled.button<ImageButtonWrapperProps>`
  border-radius: 80px;
  width: 100%;
  padding-bottom: 50%;
  position: relative;
  background-color: #2980b9;
  background-image: ${props => props.backgroundImage};
  opacity: 0.5;
  margin: 10px;
  border-width: 0;

  :hover {
    opacity: 1;
    cursor: pointer;
  }
  .text {
    text-align: center;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    font-weight: bold;
    font-size: 40px;
  }
`;

type ImageButtonProps = {
  imageSrc: string;
  text: string;
  onClick: any;
};

export default function ImageButton(props: ImageButtonProps) {
  const { imageSrc, text } = props;
  return (
    <ImageButtonWrapper backgroundImage={imageSrc}>
      <p className="text"> {text} </p>
    </ImageButtonWrapper>
  );
}
