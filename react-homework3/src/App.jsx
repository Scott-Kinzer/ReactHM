import React, { useState } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom";
import UserPage from './components/pages/UserPage/UserPage';
import PostsPage from './components/pages/PostsPage/PostsPage';

import { NavContext } from './api/context/nav.context';
import Layout from './components/Layout/Layout';

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