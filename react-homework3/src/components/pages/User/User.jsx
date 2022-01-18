import React, { useState } from 'react';
import { useContext } from 'react';
import apiIntance from '../../../api/api';
import { NavContext } from '../../../context/nav.context';
import AlbumItem from '../AlbumItem/AlbumItem';

import style from './user.module.css';

const User = ({user, setChosenUser}) => {

    const {setValueUser} = useContext(NavContext);
    const [show, setShow] = useState(false);

    const [albums, setAlbums] = useState([]);

    const handlerAlbums = () => {
        apiIntance.fetchAlbums(user.id).then(albums => setAlbums(albums));
    }

    const handlerFunc = () => {
        setChosenUser(user.id);
        setValueUser(user.id)
    }

    return (
        <div className={style.userWrapper} onClick={() => handlerFunc()}>
            <div>{user.id}</div>
            <div>{user.name}</div>
            <button onClick={() => {
                handlerAlbums();
                setShow(!show);
            }}>{show ? "HIDE" : "SHOW"} ALBUMS</button>
            {
                show && albums.map(album => <AlbumItem key={album.id} album={album} />)
            }
            

        </div>
    );
};

export {User};