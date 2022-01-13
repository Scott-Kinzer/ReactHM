import React, { Component } from 'react';

class Post extends Component {
    render() {

        const {userId,
            title,
            body} = this.props;

        return (
            <div className='post-wrapper'>
                <div>{userId}</div>
                <div>{title}</div>
                <div>{body}</div>
            </div>
        );
    }
}

export default Post;