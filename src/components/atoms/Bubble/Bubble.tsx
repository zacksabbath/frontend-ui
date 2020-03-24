import React from 'react';
import './Bubble.scss';

type BubbleProps = {
    children: React.ReactNode,
    onClick?: ()=>void,
    // className?: string,
}

export default function Bubble(props:BubbleProps) {
    const {children} = props;
    return <div className="bubble">{children}</div>
}