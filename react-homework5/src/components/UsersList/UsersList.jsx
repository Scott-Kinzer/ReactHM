import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../features/user/userSlice';

const UsersList = () => {

    const dispatch = useDispatch();
    const users = useSelector(state => {
        // console.log(state.userReducer.users);
        return state.userReducer.users;
    });
    
    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    return (
        <div>
            {users.map(user => <div>{user.name}</div>)}
        </div>
    );
};

export default UsersList;