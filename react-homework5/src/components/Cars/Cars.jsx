import React from 'react';
import { useEffect } from 'react';
import CarsList from '../CarsList/CarsList';
import FormCar from '../FormCar/FormCar';

const Cars = () => {
    
    return (
        <div>
            
            <FormCar/>
            <CarsList/>
            
        </div>
    );
};

export default Cars;