import React, {useState, useEffect} from 'react';
import {User} from './User';
import {ApiRequest} from '../../api/api';

const UserLists = (props) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const userFetchInstance = new ApiRequest();
        userFetchInstance.usersFetch().then(setUsers);

    }, []);



    return (
        <div>

            {users.map(user => <User idHandler={props.idHandler}
                                     key={user.id}
                                     idUser={user.id}
                                     userName={user.name}
            /> ) }
        </div>
    );
};

export default UserLists;
