import React from 'react';

const PhotoComponent = ({photo}) => {

    return (
        <div>
            <div>{photo.id}</div>
            <div>{photo.title}</div>
            <img src={photo.thumbnailUrl}  alt="color" />
        </div>
    );
};

export default PhotoComponent;