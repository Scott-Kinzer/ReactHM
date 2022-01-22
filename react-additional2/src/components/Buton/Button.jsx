import React from 'react';

const Button = ({button, setPicture}) => {

    const btnHandler = () => setPicture(button);

    return (
        <div>
            <button onClick={btnHandler}>{button}</button>
        </div>
    );
};

export default Button;