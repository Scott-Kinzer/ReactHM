import React, { useEffect, useState } from 'react';
import apiIntance from '../../../api/api';

const PostsPage = ({valueUser}) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        apiIntance.fetchUserPosts(valueUser).then((posts) => {
            setPosts(posts)
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <div>
            {posts.map(post => <div>FETCH POSTS</div>)}
        </div>
    );
};

export default PostsPage;