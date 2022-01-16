import React, { useState } from 'react';

const DeleteForm = ({changerHandler}) => {

    const [id, setId] = useState(0);

    const handlerDelete = (e) => {
        e.preventDefault();
        changerHandler(id);
    }

    return (
        <form onSubmit={handlerDelete}>
            <input onChange={(e) => setId(e.currentTarget.value)} value={id}   placeholder='id' type="text" />

            <input type="submit" value="DELETE CAR" />
        </form>
    );
};

export default DeleteForm;