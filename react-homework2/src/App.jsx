import './App.css';
import React, { Component } from 'react';
import UsersList from './components/UsersList/UsersList';
import UsersDetails from './components/UserDetails/UsersDetails';
import PostsList from './components/PostsList/PostsList';
import ModeContext from './components/Context/ModeContext';

class App extends Component {
    constructor(props) {
        super(props);
      this.putDetails = this.putDetails.bind(this);
      this.putPostIdDetails = this.putPostIdDetails.bind(this);
      this.modeToggle = this.modeToggle.bind(this);
      this.addPost = this.addPost.bind(this);

      this.state = {
        userId: 0,
        userIdForPost: 0,
        modeToggle: false,
        newPost: {}
      }
    }

    modeToggle() {
      this.setState({modeToggle: !this.state.modeToggle});
    }
  

  putDetails(idUser) {
    this.setState({userId: idUser});
  }

 
  putPostIdDetails(idUser) {
    console.log(idUser);
    this.setState({userIdForPost: idUser});
  }

  addPost(obj) {
    this.setState({newPost: {...obj}});
  }



  render() {

    const {userId, modeToggle}= this.state;

    return (
      <div className={!modeToggle ? 'app': 'app-black'} >

        <div className="app-wrapper">
          <UsersList putDetails={this.putDetails} />

          <ModeContext.Provider value={this.modeToggle}>

          {!!this.state.userId && <UsersDetails addPost={this.addPost} putPostIdDetails={this.putPostIdDetails} idUser={userId} />}

          </ ModeContext.Provider>

        </div>
          {!!this.state.userIdForPost && <PostsList newPost={this.state.newPost} userIdForPost={this.state.userIdForPost} />}
        
        
      </div>
    );
  }
}

export default App;


