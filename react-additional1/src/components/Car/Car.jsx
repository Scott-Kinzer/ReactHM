import React from 'react';

const Car = ({car: {model, price, year}}) => {
    return (
        <div>
            <div>{model}</div>
            <div>{price}</div>
            <div>{year}</div>
        </div>
    );
};

export default Car;