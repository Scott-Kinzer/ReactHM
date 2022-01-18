import React, { useEffect, useState } from 'react';
import apiIntance from '../../../api/api';
import PostDetails from '../PostDetails/PostDetails';
import PostsList from '../PostsList/PostsList';


import style from './posts.page.module.css';

const PostsPage = ({valueUser}) => {


    const [postId, setPostId] = useState(valueUser);


    return (
        <div>
            <div className={style.wrapperPosts}>
                <PostsList setPostId={setPostId} chosenUserPost= {valueUser} />
                <PostDetails postId={postId} />
            </div>

        </div>
    );
};

export default PostsPage;