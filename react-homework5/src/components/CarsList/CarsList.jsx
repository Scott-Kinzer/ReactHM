import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../../features/car/carSlice';
import Car from '../Car/Car';

const CarsList = () => {

    const cars = useSelector((state) => state.carReducer.cars);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCars())
    }, []);

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} />).reverse()}
        </div>
    );
};

export default CarsList;