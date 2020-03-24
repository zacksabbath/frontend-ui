import React from 'react';
import './ThumbIcons.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Bubble from '../../atoms/Bubble';

type ThumbIconsProps = {
    likes: number,
    dislikes: number,
    onLike: ()=>void,
    onDislike: ()=>void,
}

export default function ThumbIcons(props:ThumbIconsProps) {
    const {likes, dislikes, onLike, onDislike} = props;
    return (
        <div className="thumbs">

            <Bubble onClick={onLike}>
                <FontAwesomeIcon icon="thumbs-up" />
                <div className="icon-text">{likes}</div>
            </Bubble>

            <Bubble onClick={onDislike}>
                <FontAwesomeIcon icon="thumbs-down" />
                <div className="icon-text">{dislikes}</div>
            </Bubble>

        </div>
    );

}