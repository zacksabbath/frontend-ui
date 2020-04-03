import styled from 'styled-components';
import React from 'react';

const ImageButtonWrapper = styled.div`
    image {
        border-radius: 20px;
        margin:20px;
        :hover {
            background-color: blue;
        }
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

