import React from 'react';

const AnimalsList = ({list, deleteAnimal}) => {

    const deleteItem = (i) => {
        deleteAnimal(i);
    }

    return (
        <div>
            {list.map((item, i) => {
                return (<li  key={i}>

                    <div>{item}</div>
                    <button onClick={() => deleteItem(i)}>DELETE</button>

                </li>)
            })}

        </div>
    );
};

export default AnimalsList;
