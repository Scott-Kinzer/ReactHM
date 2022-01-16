import React from 'react';

import Car from '../Car/Car';
import FormComponentWrapper from '..//FormComponent/FormComponent';
import ButtonComponent from '../ButtonComponent/ButtonComponent';

import { useState, useEffect } from 'react';

// ApiRequest
import apiIntance from '../../api/api';

// Helpers
import {errorHandler} from '../../helpers/error.handler';
import { buttonModes } from '../../helpers/button.modes';
import { UpdateList } from '../../helpers/update.list';


const CarsList = () => {

    const [cars, setCars] = useState([]);
    const [activeMode, setActiveMode] = useState('create');
    const [statusError, setStatusError] = useState(false);

    useEffect(() => {
       apiIntance.getApiCars().then(setCars);
    }, []);
  
    const createCar = ({year, price, model}) => {
        apiIntance.createApiCar({year, price, model}).then(() => {
            UpdateList(setCars);
        }).catch(e => {
            errorHandler(e, setStatusError);
        });
    }
  
    const updateCar = ({id ,year, price, model}) => {
        apiIntance.updateApiCar({id ,year, price, model}).then(() => {
            UpdateList(setCars)
        }).catch(e => {
            errorHandler(e, setStatusError);
        });
    }
  
    const deleteCar = (id) => {
        apiIntance.deleteApiCar(id).then(() => {
            UpdateList(setCars)
        }).catch(e => {
            errorHandler(e, setStatusError);
        });
    }

    
    return (
        <div>

            {statusError && <div>ERROR</div>}

            {buttonModes.map((button, id) => <ButtonComponent key={id}
                activeMode={activeMode}
                setActiveMode={setActiveMode}
                    buttonMode={button} />)}
            {
                activeMode === 'create' ? <FormComponentWrapper formName={'Create Car'}  changerHandler={createCar}  /> :
                activeMode === 'update' ? <FormComponentWrapper formName={'Update Car'}  changerHandler={updateCar} /> :
                                            <FormComponentWrapper inputForm={'Delete Car'} changerHandler={deleteCar} />
            }

            {cars.map((car) => <Car key={car.id} 
                                        car={car} />).reverse()}
        </div>
    );
};

export default CarsList;