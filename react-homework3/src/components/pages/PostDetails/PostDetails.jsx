import React, { useEffect, useState } from 'react';

import apiIntance from '../../../api/api';

const PostDetails = ({postId, setPostIdComments}) => {

    const [postDetails, setPostDetails] = useState(null);

    useEffect(() => {
        apiIntance.fetchUniquePost(postId).then(postDetail => setPostDetails(postDetail));
    }, [postId]);

    




    return (
        <div>
            {postDetails && <div>
                    <div>{postDetails.id}</div>
                    <div>{postDetails.title}</div>
                    <div>{postDetails.body}</div>
                    <button onClick={ () => setPostIdComments(postId)}>SHOW COMMENTS</button>
                </div>}
        </div>
    );
};

export default PostDetails;