import React from 'react';
import {User} from '../';

const UsersList = ({setChosenUser ,users}) => {
    return (
        <div>
            <h2>USERS LIST</h2>
            {users.map(user => <User key={user.id} setChosenUser={setChosenUser} user={user} />)}
        </div>
    );
};

export {UsersList};