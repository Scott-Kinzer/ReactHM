import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import ButtonWrapper from '../ButtonWrapper/ButtonWrapper';
import NavBar from '../NavBar/NavBar';

const Layout = ({pages}) => {

    const {id} = useParams();
   
    if (id) {
        return (
            <div>
               <NavBar/>
    
                <Outlet/>

            </div>
        );
    }


    return (
        <div>
           <NavBar/>

            <Outlet/>

            <ButtonWrapper pages={pages}  />
        </div>
    );
};

export default Layout;