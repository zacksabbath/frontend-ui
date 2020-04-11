import styled from 'styled-components';
import React from 'react';

type ImageButtonWrapperProps = {
  backgroundImage: string;
};

const ImageButtonWrapper = styled.button<ImageButtonWrapperProps>`
  border-radius: 90px;
  width: 100%;
  padding-bottom: 50%;
  position: relative;
  background-color: #2980b9;
  background-image: URL(${props => props.backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.5;
  margin: 20px;
  border-width: 0;
  :hover {
    opacity: 1;
    cursor: pointer;
  }
  :focus {
    outline: none;
  }

  .text {
    color: white;
    text-align: center;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    font-weight: bold;
    font-size: 50px;
  }
`;

type ImageButtonProps = {
  imageSrc: string;
  text: string;
  onClick: any;
};

export default function ImageButton(props: ImageButtonProps) {
  const { imageSrc, text, onClick } = props;
  return (
    <ImageButtonWrapper backgroundImage={imageSrc}>
      <p className="text" onClick={onClick}>
        {' '}
        {text}{' '}
      </p>
    </ImageButtonWrapper>
  );
}
