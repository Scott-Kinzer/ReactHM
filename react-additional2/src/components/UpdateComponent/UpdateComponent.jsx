import React, { useReducer } from 'react';

const UpdateComponent = ({image}) => {

    const [, forceUpdate] = useReducer((x) => x + 1, 0)

    const update = () => forceUpdate()

    return (
        <div>
            <img src={`https://loremflickr.com/320/240/${image}?` + new Date().getTime()} alt={image} />
            <button onClick={() => update()}>UPDATE</button>
        </div>
    );
};

export default UpdateComponent;