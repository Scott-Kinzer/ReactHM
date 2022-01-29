import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchComments } from '../../features/comment/commentSlice';
import Comment from '../Comment/Comment';

const CommentsList = () => {

    const dispatch = useDispatch();
    
    const {commentId} = useParams();
    const comments = useSelector(state => state.commentReducer.comments);

    useEffect(() => {
        dispatch(fetchComments(commentId))
    }, [commentId]);

    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} comment={comment} />)}
        </div>
    );
};

export default CommentsList;