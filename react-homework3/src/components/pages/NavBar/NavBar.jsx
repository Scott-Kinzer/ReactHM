import React from 'react';
import { Link } from 'react-router-dom';
import style from './nav.bar.module.css';

const NavBar = () => {
    return (
        <header>
            <button>USERS</button>
            <Link to="posts"><button>POSTS</button></Link>

        </header>
    );
};

export default NavBar;