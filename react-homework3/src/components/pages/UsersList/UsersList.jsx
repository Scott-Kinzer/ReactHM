import React from 'react';
import User from '../User/User';

const UsersList = ({setChosenUser ,users}) => {
    return (
        <div>
            {users.map(user => <User key={user.id} setChosenUser={setChosenUser} user={user} />)}
        </div>
    );
};

export default UsersList;