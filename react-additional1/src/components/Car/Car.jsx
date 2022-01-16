import React from 'react';
import car from  './car.module.css';

const Car = ({car: {model, price, year, id}}) => {
    return (
        <div className={car.carWrapperItem}>
            <div>{id}</div>
            <div>{model}</div>
            <div>{price}</div>
            <div>{year}</div>
        </div>
    );
};

export default Car;