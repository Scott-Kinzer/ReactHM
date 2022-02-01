import React from 'react';
import InputComponent from './components/InputComponent/InputComponent';
import ListsComponent from './components/ListsComponent/ListsComponent';

import './App.css';

const App = () => {
    return (

        <div className='container'>
            <InputComponent/>
            <ListsComponent/>
        </div>
    );
};

export default App;