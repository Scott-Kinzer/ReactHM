import React from 'react';

const Comment = ({comment}) => {
    return (
        <div>
                        <div>{comment.postId}</div>

            <div>{comment.email}</div>
            <div>{comment.body}</div>
        </div>
    );
};

export default Comment;