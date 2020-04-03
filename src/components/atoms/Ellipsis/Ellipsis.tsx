import React from 'react';
import styled from 'styled-components';

const EllipsisWrapper = styled.div`    
    width: 95px;
    height: 52px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 8px;
`;

const EllipsisDot = styled.div`
    background: ${({theme})=>theme.cardTheme?.secondary};
    width: 12px;
    height: 12px;
    border-radius: 100px;
    margin-left: 10px;
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