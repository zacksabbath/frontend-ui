import styled from 'styled-components';
import React from 'react';

type ImageButtonWrapperProps = {
  backgroundImage: string;
};

const ImageButtonWrapper = styled.div<ImageButtonWrapperProps>`
  border-radius: 35px;
  flex: 1 1 200px;

  display: flex;
  justify-content: center;

  position: relative;
  background-color: #2980b9;

  height: 250px;

  /* Gonna want to factor this out into its own div for performance */
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

  @media (max-width: 500px) {
    height: 200px;
    flex: 1 1 100px;
  }
`;

const ImageText = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  float: none;
  font-family: 'Galano';
`;

type ImageButtonProps = {
  imageSrc: string;
  text: string;
  onClick: any;
};

export default function ImageButton(props: ImageButtonProps) {
  const { imageSrc, text, onClick } = props;
  return (
    <ImageButtonWrapper backgroundImage={imageSrc} onClick={onClick}>
      <ImageText>{text}</ImageText>
    </ImageButtonWrapper>
  );
}
