import React, { useState } from 'react';

import { PostDetails, PostsList, CommentsList } from '../';

import style from './posts.page.module.css';

const PostsPage = ({valueUser}) => {

    const [postId, setPostId] = useState(valueUser);
    const [postIdComments, setPostIdComments] = useState(null);



    return (
        <div>
            <div className={style.wrapperPosts}>
                <PostsList setPostId={setPostId} chosenUserPost= {valueUser} />
                <PostDetails setPostIdComments={setPostIdComments} postId={postId} />
               {postIdComments && <CommentsList  postIdComments={postIdComments}  /> }
            </div>

        </div>
    );
};

export {PostsPage};