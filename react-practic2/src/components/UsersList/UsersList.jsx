import React from 'react';

import InputComponent from '../InputComponent/InputComponent';
import User from '../User/User';

import { useMemo, useState, useEffect } from 'react';

import API from '../../api/api';

const UsersList = () => {

    const [users, setUsers] = useState([]);
    const [filterUsers, setFilterUsers] = useState({});
    const [likedItem, setLikedItem] = useState(null);


    useEffect(() => {
        new API().usersFetch().then( data => setUsers(data.map(user => {
            return {
                ...user,
                liked: false
            }
        })));
    }, []);

    const filteredUsers = useMemo(() => {
        
        return users.filter((user) => filterHelper(user, filterUsers)).map((userCheck) => {
            
            if (likedItem === userCheck.id) {
                return {
                    ...userCheck, 
                    liked: !userCheck.liked
                }
            }

            return userCheck;
        });
}, 
    [users, filterUsers, likedItem]);



    return (
        <div>

            <InputComponent setFilterUsers={setFilterUsers} />

            {filteredUsers.map(user => <User 
                setLikedItem={setLikedItem}
                userId={user.id}
                isLiked={user.liked}
                key={user.id}
                    user={user.name}
                    userName={user.username} email={user.email} />)}
        </div>
    );
};

export default UsersList;



function filterHelper(user, filterUsers) {
    const {name, username , email} = user;
    const newObj = {
       name, 
       username, 
       email
   }
   
    let arrOfFalses = [];
    let wordWithLength = {};

    for (let key in filterUsers) {

        if (filterUsers[key].length > 0) {
            wordWithLength[key] = filterUsers[key];
        } else {
            arrOfFalses.push(false);
        }
    }

    if (arrOfFalses.length === Object.keys(filterUsers).length) {
        return true;
    }

    let arrOfTruth = [];

    for (let key in wordWithLength) {
        if (newObj[key].includes(wordWithLength[key])) {
            arrOfTruth.push(true);
        } else {
           
            arrOfTruth.push(false);
        }
    }
   
    if (arrOfTruth.every((item) => item === true)) {
        return true;
    }

    return false;
}