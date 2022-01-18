import React, { useContext } from 'react';
import { useState, useEffect } from 'react';
import PostsList from '../PostsList/PostsList';
import UserDetails from '../UserDetails/UserDetails';
import UsersList from '../UsersList/UsersList';

import apiIntance from '../../../api/api';

import style from './user.page.module.css';
import { NavContext } from '../../../api/context/nav.context';

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

export default UserPage;