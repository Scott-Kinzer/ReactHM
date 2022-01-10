import React from 'react';

const Post = ({dataPost, ...rest}) => {

    const showCommentOfPost = () => {
        rest.idHandlerComment(dataPost.id);
    }
    return (
        <div className='post-wrapper' onClick={showCommentOfPost}>
            <li>USER ID: {dataPost.userId}</li>
            <li>TITLE: {dataPost.title}</li>
            <li>INFO: {dataPost.body}</li>
        </div>
    );
};

export default Post;
