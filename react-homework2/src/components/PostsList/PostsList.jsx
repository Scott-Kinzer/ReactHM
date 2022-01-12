import React, { Component } from 'react';
import API from '../../api/api';

class PostsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userPosts: []
        }

    }

    componentDidMount() {
        new API().UserPosts(this.props.userIdForPost).then((arrayOfPosts) => this.setState({userPosts: arrayOfPosts}));       
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.userIdForPost !== this.props.userIdForPost) {
            console.log('was updated here');
                     new API().UserPosts(this.props.userIdForPost).then((arrayOfPosts) => this.setState({userPosts: arrayOfPosts}));

        }
    }

    render() {
        return (
            <div>
                {this.state.userPosts.map(post => {
                    const {userId, title, body} = post;
                    return (
                        <div key={post.id}>
                            <div>{userId}</div>
                            <div>{title}</div>
                            <div>{body}</div>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default PostsList;