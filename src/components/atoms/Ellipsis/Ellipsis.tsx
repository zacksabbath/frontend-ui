import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const EllipsisWrapper = styled.div`    
    width: 95px;
    height: 52px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 8px;
    .ellipsis-dots {
        color: ${ ({ theme }) => theme.cardTheme?.secondary};
    }
`;


export default function Ellipsis() {
    return (
        <EllipsisWrapper>
            <FontAwesomeIcon icon="ellipsis-h" size="2x" className="ellipsis-dots" />
        </EllipsisWrapper>
    )
}