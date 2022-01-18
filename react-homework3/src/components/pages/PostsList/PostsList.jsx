import React, { useEffect, useState } from 'react';

import apiIntance from '../../../api/api';
import Post from '../Post/Post';

const PostsList = ({chosenUserPost, setPostId}) => {

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        apiIntance.fetchUserPosts(chosenUserPost).then((posts) => {
            setPosts(posts)
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [chosenUserPost]);

    if (setPostId) {
        return (
            <div>
                {posts.map((post) => <Post setPostId={setPostId} key={post.id} post={post} />)}
            </div>
        );
    }

    return (
        <div>
            {posts.map((post) => <Post key={post.id} post={post} />)}
        </div>
    );


};

export default PostsList;