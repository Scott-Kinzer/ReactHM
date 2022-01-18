import React from 'react';

const Post = ({post, setPostId}) => {

    if (setPostId) {
        return (
            <div onClick={() => setPostId(post.id)}>
                <div>{post.userId}</div>
                <div>{post.title}</div>
                <div>{post.body}</div>
            </div>
        );
    }

    return (
        <div>
            <div>{post.userId}</div>
            <div>{post.title}</div>
            <div>{post.body}</div>
        </div>
    );
};

export default Post;