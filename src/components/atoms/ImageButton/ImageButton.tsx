import styled from 'styled-components';
import React from 'react';

const ImageButtonWrapper = styled.div`
img{
    height: 100%;
    width: 100%;
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

