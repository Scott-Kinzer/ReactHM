import React from 'react';
import { useContext } from 'react';

import { NavContext } from '../../../api/context/nav.context';
const User = ({user, setChosenUser}) => {

    const {setValueUser} = useContext(NavContext);
    
    const handlerFunc = () => {
        setChosenUser(user.id);
        setValueUser(user.id)
    }

    return (
        <div onClick={() => handlerFunc()}>
            <div>{user.id}</div>
            <div>{user.name}</div>
        </div>
    );
};

export default User;