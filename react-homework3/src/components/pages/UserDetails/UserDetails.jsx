import React, { useEffect, useState } from 'react';

import apiIntance from '../../../api/api';

const UserDetails = ({chosenUser, setChosenUserPost}) => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        apiIntance.fetchUser(chosenUser).then(user => setUser(user));
    }, [chosenUser]);


    return (
        <div>
            <h2>USER DETAILS</h2>
            {user && <div>
                        <div>ID: {user.id}</div>
                        <div>NAME: {user.name}</div>
                        <div>USERNAME: {user.username}</div>
                        <div>PHONE: {user.phone}</div>

                        <button onClick={() => setChosenUserPost(user.id)}>LOAD POSTS</button>
                    </div>
            }
        </div>
    );
};

export {UserDetails};