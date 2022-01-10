import React, {useState, useEffect} from 'react';
import Post from './Post';
import {ApiRequest} from '../../api/api';

const PostsList = (props) => {
    const [posts, setUserPosts] = useState([]);


    useEffect(() => {
        const userFetchInstance = new ApiRequest();
        userFetchInstance.UserPosts(props.idUser).then(setUserPosts);
    }, [props.idUser]);

    return (
        <div>
            <h2>POSTS</h2>
            {posts.map(post => <Post key={post.id} idHandlerComment={props.idHandlerComment} dataPost={post} />)}
        </div>
    );
};

export default PostsList;
