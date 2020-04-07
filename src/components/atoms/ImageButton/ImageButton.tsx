import styled from 'styled-components';
import React from 'react';

const ImageButtonWrapper = styled.button`
  border-radius: 80px;
  width: 100%;
  padding-bottom: 50%;
  position: relative;
  background-color: #2980b9;
  background-image: ;
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
  image: string;
  text: string;
  onClick: any;
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
