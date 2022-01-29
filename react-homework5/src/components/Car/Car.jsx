import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteCarThunk, setFormCar } from '../../features/car/carSlice';

const Car = ({car}) => {
    const id = car.id;
    const dispatch = useDispatch();
    return (
        <div>
            <div>{car.model}</div>
            <div>{car.price}</div>
            <div>{car.year}</div>
            <button onClick={ () => dispatch(deleteCarThunk({id})) }>DELETE CAR</button>
            <button onClick={ () => dispatch(setFormCar({car})) }>UPDATE CAR</button>

        </div>
    );
};

export default Car;