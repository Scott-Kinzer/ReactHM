import React from 'react';
import { NavLink } from 'react-router-dom';

const User = ({user}) => {
    return (
        <div>
            <NavLink to={`/users/details/${user.id}`}>{user.name}</NavLink>
        </div>
    );
};

export default User;