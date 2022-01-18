import React from 'react';
import { useContext } from 'react';
import { NavContext } from '../../../context/nav.context';

import style from './user.module.css';

const User = ({user, setChosenUser}) => {

    const {setValueUser} = useContext(NavContext);
    
    const handlerFunc = () => {
        setChosenUser(user.id);
        setValueUser(user.id)
    }

    return (
        <div className={style.userWrapper} onClick={() => handlerFunc()}>
            <div>{user.id}</div>
            <div>{user.name}</div>
        </div>
    );
};

export {User};