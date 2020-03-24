import React, {useState} from 'react';
import './Card.scss';
import Bubble from '../../atoms/Bubble';

import ThumbIcons from '../ThumbIcons';

type CardProps = {
    newsFeedImage?: string,
}

export default function Card(props: CardProps) {
    const [likes, setLikes] = useState(15);
    const [dislikes, setDislikes] = useState(8);
    const {newsFeedImage} = props;

    return <div className="newsfeed-card">
        <div className="newsfeed-image">
            <img src={newsFeedImage} />
            <div className="topic">
                <Bubble>Death Penalty</Bubble>
            </div>
        </div>
        
        <div className="newsfeed-text">

            <div className="news-source">
                The Denver Channel
            </div>

            <div className="card-heading">
                Colorado State Senate Advances Death Penalty Repeal Bill
            </div>

            <ThumbIcons likes={15} dislikes={8} onLike={()=>setLikes(likes+1)} onDislike={()=>setDislikes(dislikes+1)} />

        </div>
    </div>
}
