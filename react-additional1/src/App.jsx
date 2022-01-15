import React from 'react';
import { useState } from 'react';
import ButtonComponent from './components/ButtonComponent/ButtonComponent';
import './App.css';
import FormComponentWrapper from './components/FormComponent/FormComponent';

const App = () => {

  const buttonModes = ['create', 'update', 'delete']; // CRUD

  const [activeMode, setActiveMode] = useState('create');

  const createCar = (obj) => {

  }

  const updateCar = (obj) => {
    
  }

  const deleteCar = (id) => {
    
  }


  return (
    <div className='container' >
        {buttonModes.map((button, id) => <ButtonComponent key={id} activeMode={activeMode} setActiveMode={setActiveMode}  buttonMode={button} />)}

      {
        activeMode === 'create' ? <FormComponentWrapper  changerHandler={createCar}  /> :
         activeMode === 'update' ? <FormComponentWrapper  changerHandler={updateCar} /> :
                                    <FormComponentWrapper inputForm={'InputForm'} changerHandler={deleteCar} />
      }
 
    </div>
  );
};

export default App;