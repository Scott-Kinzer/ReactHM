import React, { useEffect, useState } from 'react';

import apiIntance from '../../../api/api';

const UserDetails = ({chosenUser, setChosenUserPost}) => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        apiIntance.fetchUser(chosenUser).then(user => setUser(user));
    }, [chosenUser]);


    return (
        <div>
            {user && <div>
                        <div>{user.id}</div>
                        <div>{user.name}</div>
                        <div>{user.username}</div>
                        <button onClick={() => setChosenUserPost(user.id)}>LOAD POSTS</button>
                    </div>
            }
        </div>
    );
};

export default UserDetails;