import styled from 'styled-components';
import React from 'react';

const ImageButtonWrapper = styled.div`
image {
    border-radius: 50px;
    margin:20px;
    height: 400px;
    width: 100%;
    float: left;
}
.text {
    text-align: center;
    font-weight: heavy;
    font-size: 20px;
    color: #FFFFFF;
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

