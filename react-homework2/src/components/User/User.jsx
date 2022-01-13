import React, { Component } from 'react';
import { Button } from 'antd';

class User extends Component {


    render() {
        const {name} = this.props;
        return (
            <div className='wrapper-user' >
                <div>{name}</div>
                <Button type="dashed" onClick={() => this.props.putDetails(this.props.idUserDetails)}>GET DETAILS</Button>
            </div>
        );
    }
}

export default User;