import './App.css';
import React, { Component } from 'react';
import UsersList from './components/UsersList/UsersList';
import UsersDetails from './components/UserDetails/UsersDetails';
import PostsList from './components/PostsList/PostsList';

class App extends Component {
    constructor(props) {
        super(props);
      this.putDetails = this.putDetails.bind(this);
      this.putPostIdDetails = this.putPostIdDetails.bind(this);

      this.state = {
        userId: 0,
        userIdForPost: 0
      }
    }

  

  putDetails(idUser) {
    this.setState({userId: idUser});
  }

  putPostIdDetails(idUser) {
    console.log(idUser);
    this.setState({userIdForPost: idUser});
  }


  render() {

    const {userId}= this.state;

    return (
      <div className='App'>

        <div className="app-wrapper">
          <UsersList putDetails={this.putDetails} />
          {!!this.state.userId && <UsersDetails putPostIdDetails={this.putPostIdDetails} idUser={userId} />}
          {!!this.state.userIdForPost && <PostsList userIdForPost={this.state.userIdForPost} />}
        </div>
        
      </div>
    );
  }
}

export default App;


