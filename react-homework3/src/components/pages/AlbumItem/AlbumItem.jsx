import React, { useState } from 'react';
import apiIntance from '../../../api/api';
import PhotoComponent from '../PhotoComponent/PhotoComponent';


import style from './albums.item.module.css';

const AlbumItem = ({album}) => {


    const [photos, setPhotos] = useState([]);
    const [show, setShow] = useState(false);

    const handlerPhotos = () => {
        apiIntance.fetchPhotosOfAlbums(album.id).then(photos => setPhotos(photos));
    }

    return (
        <div>
            <div>ALBUM IT: {album.id}</div>
            <div>ALBUM TITLE: {album.title}</div>
            <button onClick={() => {
                handlerPhotos();
                setShow(!show);
            }}>{show ? "HIDE" : "SHOW"} PHOTOS</button>

           {show && !!photos.length && <div className={style.albumsWrapper}>
                {photos.map(photo => <PhotoComponent key={photo.id} photo={photo} />)}
            </div>}
            
        </div>
    );
};

export default AlbumItem;