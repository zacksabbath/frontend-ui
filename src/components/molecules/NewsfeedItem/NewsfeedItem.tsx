import React, {useState} from 'react';
import styled, { ThemedStyledFunction, StyledFunction } from 'styled-components';
import {ThumbIcons} from '..';
import {Bubble} from 'components';

import {Entity} from 'types';
import {cardTypes} from 'theme';

export type NewsfeedItemProps = {
    topic: Entity,
    bill?: Entity,
    image?: string,
    children?: React.ReactNode,
    type: cardTypes,
    content?: Object,
    date: string,
    key?: string,
}

const CardWrapper = styled.div`
    width: 100%;
    font-family: GalanoGrotesque, Futura, "Trebuchet MS", Arial, sans-serif;
    background-color: ${({theme})=> theme.primary};
    box-shadow: 0 0 5px 0 rgba(0,0,0,0.30);
    border-radius: 8px;
    text-align: left;
    position: relative;

    margin-bottom: 10px;

    .newsfeed-content {
        padding: 10px;
    }
`;

const TopWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;

    img {
        border-radius: 8px 8px 0 0;
        width: 100%;
        height: auto;
    }
`;

const BubbleWrap = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    &.absolute {
        position: absolute;
    }

`;

export default function NewsfeedItem(props: NewsfeedItemProps) {
    const [likes, setLikes] = useState(Math.floor((Math.random() * 20) + 1));
    const [dislikes, setDislikes] = useState(Math.floor((Math.random() * 20) + 1));
    const {image, topic, bill, type, children} = props;

    return <CardWrapper>
        
        <TopWrapper>
            <BubbleWrap className={image?'absolute':''}>
                <Bubble>{topic.name}</Bubble>
                {bill?.name && <Bubble>{bill.name}</Bubble>}
            </BubbleWrap>
            { image && <img src={image} /> }
        </TopWrapper>
        
        <div className="newsfeed-content">
            {children}

            <ThumbIcons likes={likes} dislikes={dislikes} onLike={()=>setLikes(likes+1)} onDislike={()=>setDislikes(dislikes+1)} />
        </div>

        
    </CardWrapper>
}
