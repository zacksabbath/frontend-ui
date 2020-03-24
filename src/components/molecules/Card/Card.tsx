import React, {useState} from 'react';
// import './Card.scss';
import styled, { useTheme } from 'styled-components';
import ThumbIcons from '../ThumbIcons';
import NewsFeedImage from '../NewsfeedImage/NewsfeedImage';

const CardWrapper = styled.div`
    width: 100%;
    font-family: GalanoGrotesque, Futura, "Trebuchet MS", Arial, sans-serif;
    background-color: #3C266E;
    box-shadow: 0 0 5px 0 rgba(0,0,0,0.30);
    border-radius: 8px;
    text-align: left;

    .newsfeed-text {
        padding: 10px;
    }

    .card-heading {
        font-weight: medium;
        text-align: left;
        // font-family: GalanoGrotesque-Medium;
        font-size: 20px;
        color: #FFFFFF;
        line-height: 26px;
    }

    .news-source {
        font-weight: semibold;
        // font-family: GalanoGrotesque-SemiBold;
        font-size: 14px;
        color: #A082E3;
        padding-bottom: 10px;
    }
`;

type CardProps = {
    newsFeedImage?: string,
}

export default function Card(props: CardProps) {
    const [likes, setLikes] = useState(15);
    const [dislikes, setDislikes] = useState(8);
    const {newsFeedImage} = props;

    // useTheme(theme)

    return <CardWrapper>

        <NewsFeedImage image={newsFeedImage} />
        
        <div className="newsfeed-text">

            <div className="news-source">
                The Denver Channel
            </div>

            <div className="card-heading">
                Colorado State Senate Advances Death Penalty Repeal Bill
            </div>

            <ThumbIcons likes={likes} dislikes={dislikes} onLike={()=>setLikes(likes+1)} onDislike={()=>setDislikes(dislikes+1)} />

        </div>
    </CardWrapper>
}
