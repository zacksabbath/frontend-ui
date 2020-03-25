import React, {useState} from 'react';
import styled/*, { useTheme }*/ from 'styled-components';
import {ThumbIcons} from '../../molecules';
import {Bubble} from '../../atoms';

type CardProps = {
    newsFeedImage?: string,
    children?: React.ReactNode,
}

const CardWrapper = styled.div`
    width: 100%;
    font-family: GalanoGrotesque, Futura, "Trebuchet MS", Arial, sans-serif;
    background-color: #3C266E;
    box-shadow: 0 0 5px 0 rgba(0,0,0,0.30);
    border-radius: 8px;
    text-align: left;
    position: relative;

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

    &.absolute {
        position: absolute;
    }
`;

export default function NewsfeedItem(props: CardProps) {
    const [likes, setLikes] = useState(Math.floor((Math.random() * 20) + 1));
    const [dislikes, setDislikes] = useState(Math.floor((Math.random() * 20) + 1));
    const {newsFeedImage, children} = props;

    return <CardWrapper>
        
        <TopWrapper>
            <BubbleWrap className={newsFeedImage?'absolute':''}>
                <Bubble>Death Penalty</Bubble>
            </BubbleWrap>
            { newsFeedImage && <img src={newsFeedImage} /> }
        </TopWrapper>
        
        <div className="newsfeed-content">
            {children}

            <ThumbIcons likes={likes} dislikes={dislikes} onLike={()=>setLikes(likes+1)} onDislike={()=>setDislikes(dislikes+1)} />
        </div>

        
    </CardWrapper>
}
