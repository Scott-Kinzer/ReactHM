import React, { useState } from 'react';
import apiIntance from '../../../api/api';
import PhotoComponent from '../PhotoComponent/PhotoComponent';

const AlbumItem = ({album}) => {


    const [photos, setPhotos] = useState([]);


    const handlerPhotos = () => {
        apiIntance.fetchPhotosOfAlbums(album.id).then(photos => setPhotos(photos));
    }

    return (
        <div>
            <div>{album.id}</div>
            <div>{album.title}</div>
            <button onClick={handlerPhotos}>SHOW PHOTOS</button>
            {photos.map(photo => <PhotoComponent key={photo.id} photo={photo} />)}
        </div>
    );
};

export default AlbumItem;