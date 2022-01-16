import React from 'react';
import Car from '../Car/Car';
import FormComponentWrapper from '..//FormComponent/FormComponent';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import { useState, useEffect } from 'react';
import { ApiCar } from '../../api/api';

const UpdateList = (setCars) => {
    new ApiCar().getApiCars().then(setCars);
}

const errorHandler = (e, setStatusError) => {
    setStatusError(e.response.status);
            setTimeout(() => {
                setStatusError(false);
            }, 2000);
}

const CarsList = () => {

    const [cars, setCars] = useState([]);
    const buttonModes = ['create', 'update', 'delete']; // CRUD
    const [activeMode, setActiveMode] = useState('create');
    const [statusError, setStatusError] = useState(false);

    useEffect(() => {
       new ApiCar().getApiCars().then(setCars);
    }, []);
  
    const createCar = ({year, price, model}) => {
        new ApiCar().createApiCar({year, price, model}).then(() => {
            UpdateList(setCars);
        }).catch(e => {
            errorHandler(e, setStatusError);
        });
    }
  
    const updateCar = ({id ,year, price, model}) => {
        new ApiCar().updateApiCar({id ,year, price, model}).then(() => {
            UpdateList(setCars)
        }).catch(e => {
            errorHandler(e, setStatusError);
        });
    }
  
    const deleteCar = (id) => {
        // console.log(id);
        new ApiCar().deleteApiCar(id).then(() => {
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
                                    <FormComponentWrapper inputForm={'InputForm'} changerHandler={deleteCar} />
      }

    {cars.map((car) => <Car key={car.id} car={car} />)}

        
        </div>
    );
};

export default CarsList;