import React from 'react';

const User = ({user, userName, email}) => {
    return (
        <div className='user-wrapper'>
            <div>{user}</div>
            <div>{userName}</div>
            <div>{email}</div>
        </div>
    );
};

export default User;