import styled from 'styled-components';
import React from 'react';

const ImageButtonWrapper = styled.button`
  border-radius: 80px;
  width: 50%;
  padding-bottom: 50%;
  position: relative;
  background-color: #2980b9;
  background-image: ;
  opacity: 0.5;
  margin: 100px;
  :hover {
    opacity: 1;
  }
  .text {
    text-align: center;
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    font-weight: bold;
    font-size: 30px;
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
