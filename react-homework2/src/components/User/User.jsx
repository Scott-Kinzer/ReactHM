import React, { Component } from 'react';

class User extends Component {


    render() {

        const {name} = this.props;
        return (
            <div className='wrapper-user' >
                <div>{name}</div>
                <button onClick={() => this.props.putDetails(this.props.idUserDetails)}>GET DETAILS</button>
            </div>
        );
    }
}

export default User;