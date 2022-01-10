import React from 'react';

const Comment = ({dataComment}) => {
    return (
        <div className='post-wrapper-comment'>
            <div>{dataComment.postId}</div>
            <div>{dataComment.name}</div>
            <div>{dataComment.email}</div>
        </div>
    );
};

export default Comment;
