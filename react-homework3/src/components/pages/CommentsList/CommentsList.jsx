import React, { useEffect, useState } from 'react';
import apiIntance from '../../../api/api';
import {Comment} from '../';

const CommentsList = ({postIdComments}) => {
    const [comments, setComments] = useState([]);
    console.log(comments);
    useEffect(() => {
        apiIntance.fetchComments(postIdComments).then(arrayOfComments => setComments(arrayOfComments));
    }, [postIdComments]);
    
    return (
        <div>
            <h2>Comments list</h2>
            {comments.map((comment) =>  <Comment key={comment.id} comment={comment} /> )}
        </div>
    );
};

export {CommentsList};