import React, {useState} from 'react';
import './App.css';
import UsersList from './components/Users/UsersList';
import PostsList from './components/Posts/PostsList';
import CommentsList from './components/Comments/CommentsList';

function App() {

    const [idUser, setUserId] = useState(1);
    const [idComment, setIdComment] = useState(1);

    const idHandler = (id) => {
        console.log(id);
        setUserId(id);
    }

    const idHandlerComment = (id) => {
        console.log(id);
        setIdComment(id);
    }

  return (
    <div className="App">


        <div className='header'>
            <div className='left-side'>
                <h2>USERS</h2>
                <UsersList idHandler={idHandler} />
            </div>

            <PostsList idHandlerComment={idHandlerComment} idUser={idUser}/>
            <CommentsList idComment={idComment} />
        </div>


    </div>
  );
}

export default App;


