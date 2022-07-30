import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {

    return (
        <nav className='nav'>
            <ul className="nav__menu">
                <li className='hover-link'><NavLink to='/users'>Users</NavLink></li>
                <li className='hover-link'><NavLink to='/profile'>Profile</NavLink></li>
            </ul>
        </nav>
    );
};

export default Nav;