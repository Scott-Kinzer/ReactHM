import React, { useEffect, useState } from 'react';

import apiIntance from '../../../api/api';

const PostDetails = ({postId, setPostIdComments}) => {

    const [postDetails, setPostDetails] = useState(null);

    useEffect(() => {
        apiIntance.fetchUniquePost(postId).then(postDetail => setPostDetails(postDetail));
    }, [postId]);



    return (
        <div>
            <h2>POST DETAILS</h2>
            {postDetails && <div>
                    <div>POST UNIQUE ID: {postDetails.id}</div>
                    <div>TITLE: {postDetails.title}</div>
                    <div>BODY: {postDetails.body}</div>
                    <button onClick={ () => setPostIdComments(postId)}>SHOW COMMENTS</button>
                </div>}
        </div>
    );
};

export {PostDetails};