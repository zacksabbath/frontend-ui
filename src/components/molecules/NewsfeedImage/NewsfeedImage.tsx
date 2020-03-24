import React from 'react';
import styled from 'styled-components'
import Bubble from '../../atoms/Bubble';

type NewsfeedImageProps = {
    image?: string,
}

const NewsfeedImageWrapper = styled.div`
    width: 100%;
    position: relative;

    img {
        border-radius: 8px 8px 0 0;
        width: 100%;
        height: auto;
    }

    .topic {
        position: absolute;
        top: 10px;
        left: 10px;
    }
`;

export default function NewsfeedImage(props: NewsfeedImageProps) {
    return (
    <NewsfeedImageWrapper>
        <img src={props.image} />
        <div className="topic">
            <Bubble>Death Penalty</Bubble>
        </div>
    </NewsfeedImageWrapper>
    );
}