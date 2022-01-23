import React from 'react';
import { Link } from 'react-router-dom';
import style from './episode.module.css';

const Episode = ({episode}) => {
    return (
        <div className={style.episodeWrapper}>
            <div>{episode.name}</div>
            <div>{episode.air_date}</div>
            <div>{episode.episode}</div>
            <Link to={`details/${episode.id}`}>CHECK DETAILS OF EPISODE</Link>
            <div></div>
        </div>
    );
};

export default Episode;