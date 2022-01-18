import React from 'react';

import style from './post.module.css';

const Post = ({post, setPostId}) => {

    if (setPostId) {
        return (
            <div onClick={() => setPostId(post.id)}>
                <div>USER ID: {post.userId}</div>
                <div>TITLE: {post.title}</div>
            </div>
        );
    }

    return (
        <div className={style.postWrapper}>
            <div>USER ID: {post.userId}</div>
            <div>TITLE: {post.title}</div>
            <div>BODY: {post.body}</div>
        </div>
    );
};

export {Post};