import React from 'react';

const Post = ({post}) => {
    return (
        <div className='post'>
            <div>{post.id}</div>
            <div>{post.title}</div>
            <div>{post.body}</div>
        </div>
    );
};

export default Post;