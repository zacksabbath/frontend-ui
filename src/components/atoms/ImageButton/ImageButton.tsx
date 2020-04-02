import React from 'react';
import styled from 'styled-components';

const ImgBtnWrapper = styled.div`
    img {
        vertical-align: middle;
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
`;

// type ImgBtnProps = {
//     image: string,
//     text: string,

// };

export default function ImageButton (props:any){
    const {image, onClick} = props;
    return (
        <ImgBtnWrapper onClick={onClick}>
            <img src={image} />
        </ImgBtnWrapper>
    );
}