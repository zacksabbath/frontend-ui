// import React from 'react';
import styled from 'styled-components';
// import './Bubble.scss';

const Bubble = styled.button`
    background: #6340B2;
    border-radius: 50px;
    font-weight: normal;
    font-size: 13px;
    color: #FFFFFF;
    padding: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
    :focus {
        outline: none;
    }
    outline-width: 0px;
`;

export default Bubble;

// type BubbleProps = {
//     children: React.ReactNode,
//     onClick?: ()=>void,
//     // className?: string,
// }

// export default function Button(props:BubbleProps) {
//     const {children} = props;
//     return <Bubble>{children}</Bubble>;
//     // return <div className="bubble">{children}</div>
// }