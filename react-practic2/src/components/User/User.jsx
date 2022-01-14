import React from 'react';

import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const User = ({user, userName, email, isLiked, setLikedItem, userId}) => {
    return (
        <div onClick={() => {
            
            setLikedItem(userId)
        }} className='user-wrapper'>
            {/* <div>{isLiked}</div> */}
            {isLiked ? <FontAwesomeIcon icon={faHeart} /> : <FontAwesomeIcon icon={faHeartBroken} /> }
            <div>{user}</div>
            <div>{userName}</div>
            <div>{email}</div>
        </div>
    );
};

export default User;