import React from 'react';
import { useEffect } from 'react';
import InputComponent from '../InputComponent/InputComponent';

import API from '../../api/api';
import { useState } from 'react';
import User from '../User/User';
import { useMemo } from 'react';

const UsersList = () => {

    const [users, setUsers] = useState([]);
    const [filterUsers, setFilterUsers] = useState(null);

    useEffect(() => {
        new API().usersFetch().then( data => setUsers(data));
    }, []);


    const filteredUsers = useMemo(() => {

        if (filterUsers == null) {
            return users;
        }

        return users.filter((user) => {
        
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

            // console.log('a tut');
            // console.log(arrOfFalses);

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
            
            // console.log(arrOfTruth);
           
            if (arrOfTruth.every((item) => item === true)) {
                console.log('GO TRUE');
                return true;
            }

            return false;
           
        })
    }, [users, filterUsers]);

    return (
        <div>

            <InputComponent setFilterUsers={setFilterUsers} />

            {filteredUsers.map(user => <User key={user.id} user={user.name} userName={user.username} email={user.email} />)}
        </div>
    );
};

export default UsersList;