import styled from 'styled-components';
import React from 'react';

const ImageButtonWrapper = styled.div`
.container{
    .polImg {
        border-radius: 20px;
        margin:20px;
        width: 100%;

        :hover {
            background-color: blue;
        }
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
    <ImageButtonWrapper className="container">

    <p className="text">
    <img src={image} className="polImg"/>
        {text}
    </p>
    </ImageButtonWrapper>
    )
   
};

