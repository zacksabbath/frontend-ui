import React from 'react';
import styled from 'styled-components';

const EllipsisWrapper = styled.div`    
    width: 95px;
    height: 52px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    position: relative; 
`;

const EllipsisDot = styled.div`
    background: ${({theme})=>theme.cardTheme?.secondary};
    width: 10px;
    height: 10px;
    border-radius: 100px;
    margin-left: 5px;
`;

// type EllipsisProps = {

// };

export default function Ellipsis(){
    return (
        <EllipsisWrapper>
            <EllipsisDot />
            <EllipsisDot />
            <EllipsisDot />
        </EllipsisWrapper>
    )
}