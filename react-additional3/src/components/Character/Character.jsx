import React from 'react';

const Character = ({data}) => {
    return (
        <div>
            <div>{data.name}</div>
            <div>{data.id}</div>
            <img src={data.image} alt="haha" />
        </div>
    );
};

export default Character;