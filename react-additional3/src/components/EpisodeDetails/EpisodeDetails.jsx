import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import apiIntance from '../../api/api';
import Character from '../Character/Character';

const EpisodeDetails = () => {

    const [characters, setCharacters] = useState([]);
    const [episodeDetails, setEpisodeDetails] = useState(null);

    const {id} = useParams();

    useEffect(() => {
        apiIntance.getEpisodeSingle(id)
        .then(async data => {
           await  setEpisodeDetails({air: data.air_date, name: data.name})
           const arr = getIdCharacters(data.characters);
           const characters =  await apiIntance.getCharacters(arr);
            setCharacters(characters);
        })
  
    }, [id]);

    return (
        <div >
            {episodeDetails && 
            <div>
                <h2>{episodeDetails.name}</h2>
                <h2>{episodeDetails.air}</h2>
            </div>}
            <div className='wrapper-character'>
            {id && characters.map(character => <Character key={character.id} data={character}/>)}
            </div>
        </div>
    );
};

export default EpisodeDetails;


function getIdCharacters(arr) {
    let arrOfId = [];

    for (let item of arr) {
        const splitArr = item.split("/");
        arrOfId.push(splitArr[splitArr.length - 1]);
    }

    return arrOfId;
}