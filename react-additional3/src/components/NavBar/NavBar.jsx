import React from 'react';
import { Link } from 'react-router-dom';
import style from './navbar.module.css';
const NavBar = () => {
    return (
        <header>
            <Link  to="/episodes">TO EPISODES</Link>
        </header>
    );
};

export default NavBar;