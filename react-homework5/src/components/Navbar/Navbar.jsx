import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
                <Link to="cars">CARS</Link>
                <Link to="users">USERS</Link>
        </header>
    );
};

export default Navbar;