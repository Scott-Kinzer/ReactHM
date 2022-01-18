import React from 'react';

const Post = ({post}) => {
    return (
        <div>
            <div>{post.userId}</div>
            <div>{post.title}</div>
            <div>{post.body}</div>
        </div>
    );
};

export default Post;