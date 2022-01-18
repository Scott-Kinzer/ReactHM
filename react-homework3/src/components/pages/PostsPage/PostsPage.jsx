import React, { useEffect, useState } from 'react';
import CommentsList from '../CommentsList/CommentsList';
import PostDetails from '../PostDetails/PostDetails';
import PostsList from '../PostsList/PostsList';


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

export default PostsPage;