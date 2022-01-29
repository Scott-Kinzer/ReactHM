import React from 'react';
import { NavLink } from 'react-router-dom';

const Post = ({post}) => {
    return (
        <div className='post'>
            <div>{post.id}</div>
            <div>{post.title}</div>
            <div>{post.body}</div>
            <NavLink to={`/details/comments/${post.id}`}>GO TO COMMENTS</NavLink>

        </div>
    );
};

export default Post;