import React, { Component } from 'react';
import API from '../../api/api';
import User from '../User/User';
class UsersList extends Component {
    state = {
        listsUser: []
    }

    componentDidMount() {
         new API().usersFetch().then((users) => this.setState({listsUser: users}));
    }


    render() {
        const {putDetails} =this.props;

        return (
            <div className='users-list'>
                {this.state.listsUser.map((user) => {
                  return (
                  <User key={user.id} putDetails={putDetails} idUserDetails={user.id} name={user.name} />
                  )
                })}
            </div>
        );
    }
}

export default UsersList;