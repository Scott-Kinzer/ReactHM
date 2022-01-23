import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import apiIntance from '../../api/api';
import Episode from '../Episode/Episode';
import style from './episodes.module.css';

const Episodes = ({setPage}) => {


    const { pageEpisodes } = useParams();
    const [episodes, setEpisodes] = useState([]);


    useEffect(() => {
        if (pageEpisodes) {


        } else {
            apiIntance.getEpisodes().then(episodes => {   
                setEpisodes(episodes.results);
                setPage({prev: episodes.info.prev, next: episodes.info.next})
                
            });
        }
    }, []);

    useEffect(() => {
        if (pageEpisodes) {

            apiIntance.getEpisodesPage(pageEpisodes).then(episodes => {
              
                setEpisodes(episodes.results);
                setPage({prev: episodes.info.prev, next: episodes.info.next})
                
            });

         } else {
            apiIntance.getEpisodes().then(episodes => {   
                setEpisodes(episodes.results);
                setPage({prev: episodes.info.prev, next: episodes.info.next})
                
            });
         }
    }, [pageEpisodes]);




    if (pageEpisodes) {
        return (
            <div className={style.wrapperEpisodes}>
                {!!episodes.length && episodes.map(episode => <Episode key={episode.id}   episode={episode} />)}
            </div>
        );

    }


    return (
        <div className={style.wrapperEpisodes}>
            {!!episodes.length && episodes.map(episode => <Episode key={episode.id}  episode={episode} />)}
        </div>
    );
};

export default Episodes;