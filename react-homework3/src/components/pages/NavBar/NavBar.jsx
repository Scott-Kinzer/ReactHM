import React from 'react';
import { Link } from 'react-router-dom';
import style from './nav.bar.module.css';

const NavBar = () => {
    return (
        <header>
            <Link to="/"><button>UserPage</button></Link>
            <Link to="posts"><button>POSTS</button></Link>

        </header>
    );
};

export default NavBar;