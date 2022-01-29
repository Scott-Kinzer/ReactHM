import React, {useEffect} from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPosts } from '../../features/post/postSlice';
import Post from '../Post/Post';

const PostsList = () => {

    const {idUser} = useParams();
    const dispatch = useDispatch();
   
    
    const posts = useSelector(state => {
        return state.postReducer.posts;
    });
    

    useEffect(() => {
        
        dispatch(fetchPosts(+idUser));
    }, [idUser]);

    return (
        <div className='posts'>
            {posts.map(post => <Post key={post.id} post={post} />)}
        </div>
    );
};

export default PostsList;