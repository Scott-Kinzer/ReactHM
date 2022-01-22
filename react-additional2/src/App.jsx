import React from 'react';
import { useState } from 'react';

import ButtonsComponent from './components/ButtonsComponent/ButtonsComponent';
import UpdateComponent from './components/UpdateComponent/UpdateComponent';
import './App.css';

const App = () => {
  const arr = ['cat', 'car', 'dog' ,'girl', 'notebook'];

  const [picture, setPicture] = useState('dog');

  return (
    <div>
      <ButtonsComponent setPicture={setPicture} buttons={arr} />
      <UpdateComponent image={picture} />
    </div>
  );
};

export default App;