import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../pages/NavBar/NavBar';

const Layout = () => {
    return (
        <>
            <NavBar/>

            <Outlet/>
        </>
    );
};

export default Layout;