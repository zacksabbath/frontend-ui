import styled from 'styled-components';
import React from 'react';

const ImageButtonWrapper = styled.div`

background-color: red ;
border-radius: 50px;
font-weight: heavy;
font-size: 20px;
color: #FFFFFF;
padding: 8px;
margin:20px;
display: flex;
justify-content: space-between;
flex-direction: row;
float: left;
text-align: center;
height: 400px;
width: 400px;
:hover {
    background: blue;
}
.text {

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

