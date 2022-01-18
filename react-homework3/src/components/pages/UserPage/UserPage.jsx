import React, { useContext, useState, useEffect } from 'react';

import apiIntance from '../../../api/api';

import style from './user.page.module.css';

import { PostsList, UserDetails, UsersList } from '../';

import { NavContext } from '../../../context/nav.context';

const UserPage = () => {

    const [users, setUsers] = useState([]);
    const {valueUser} = useContext(NavContext);

    const [chosenUser, setChosenUser] = useState(valueUser);
    const [chosenUserPost, setChosenUserPost] = useState(valueUser);

    useEffect(() => {
        apiIntance.fetchUsers().then(data => setUsers(data));
    }, []);


    return (
        <div >
            <div className={style.userWrapper}>
            <UsersList setChosenUser={setChosenUser} users={users} />
            <UserDetails setChosenUserPost={setChosenUserPost} chosenUser={chosenUser}  />
            </div>
            <PostsList chosenUserPost={chosenUserPost} />

        </div>
    );
};

export {UserPage};