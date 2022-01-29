import React from "react";

import "./App.css";

import Layout from "./components/Layout/Layout";
import Cars from "./components/Cars/Cars";
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import Comments from "./components/Comments/Comments";

import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";

import { Provider } from 'react-redux'
import { store } from './store/store';



const App = () => {
    return (
        
        <div className="container">
            <Provider store={store}>
            <BrowserRouter>
                <Routes>
                <Route path="/" element={<Layout />}>
                
                    <Route path="cars" element={<Cars />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="posts" element={<Posts />} />
                    <Route path="comments" element={<Comments />} />
                  
                </Route>
                </Routes>
            </BrowserRouter>
            </Provider>
        </div>
    );
};

export default App;