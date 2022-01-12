import React, { Component } from 'react';
import API from '../../api/api';
class UsersDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userDetails: {}
        }

    }

    componentDidMount() {
        new API().UserDetails(this.props.idUser).then((user) => this.setState({userDetails: user}));
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.idUser !== this.props.idUser) {
                     new API().UserDetails(this.props.idUser).then((user) => this.setState({userDetails: user}));
        }
    }

    render() {
        const {name, userName, email, id} = this.state.userDetails;
        const {putPostIdDetails} = this.props;

        return (
            <div className='user-details-wrapper' >
                <div>{name}</div>
                <div>{userName}</div>
                <div>{email}</div>

                <button onClick={() => {
                    putPostIdDetails(id);
                }}>GET POSTS</button>
            </div>
        );
    }
}

export default UsersDetails;