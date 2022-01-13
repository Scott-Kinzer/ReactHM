import React, { Component } from 'react';
import API from '../../api/api';
import Post from '../Post/Post';

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

        if (prevProps.newPost !== this.props.newPost) {
            const {body, title, userId} = this.props.newPost.user;
            const id = new Date();
            // console.log(this.props.newPost);
            // debugger;
            console.log('was updated here');
            // debugger;
                     this.setState({userPosts: [{body, title, userId, id}, ...prevState.userPosts]})

        }
    }

    render() {
        console.log(this.state.userPosts);
        return (
            <div className='posts-wrapper'>
                {this.state.userPosts.map(post => {
                    const {userId, title, body} = post;
                    return (
                        <Post key={post.id} userId={userId} title={title} body={body}>
                        </Post>
                    )
                })}
            </div>
        );
    }
}

export default PostsList;