import styled from 'styled-components';
import React from 'react';

const ImageButtonWrapper = styled.div`
img{
    height: 100%;
    width: 100%;
    object-fit: contain;
    text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    :hover {
        background-color: orange;
    }
    
`;

type ImageButtonProps  = {
    image: string,
    text: string,
};



export default function ImageButton(props:ImageButtonProps) {
    const { image, text } = props
    return (
    <ImageButtonWrapper>
        <img src={image}/>
            <p className="text">
                 {text}
            </p>
    </ImageButtonWrapper>
    )
   
};

