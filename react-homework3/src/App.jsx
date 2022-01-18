import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom";


import {UserPage, PostsPage, Layout} from './components/pages';

import { NavContext } from './context/nav.context';

import './App.css';

const App = () => {

  const [valueUser, setValueUser] = useState(1);

  return (
    <div className='container' >  
    <NavContext.Provider value={{setValueUser , valueUser}}>
    <Router>
        <Routes>
              <Route path="/"  element={ <Layout/>}>
                <Route path="/" element={<UserPage />} />
                <Route path="/posts" element={<PostsPage valueUser={valueUser} />} />
                
              </Route>
        </Routes>
    </Router>
  
    </NavContext.Provider>
    </div>
  );
};

export default App;