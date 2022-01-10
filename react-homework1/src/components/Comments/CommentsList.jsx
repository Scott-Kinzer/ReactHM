import React, {useEffect, useState} from 'react';
import Comment from './Comment';
import {ApiRequest} from '../../api/api';


const CommentsList = ({idComment}) => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        const userFetchInstance = new ApiRequest();
        userFetchInstance.UserComements(idComment).then(setComments);

    }, [idComment]);

    return (
        <div>
            <h2>Comments</h2>
            {comments.map(comment => <Comment key={comment.id} dataComment={comment} />)}

        </div>
    );
};

export default CommentsList;
