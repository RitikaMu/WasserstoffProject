import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu
} from './NavbarElements';

const Navbar = () => {
    return (
        <>
        <Nav><Bars />

        <NavMenu>
            <NavLink to='/statistics' activeStyle>
                Statistics
            </NavLink>
            <NavLink to='/overview' activeStyle>
                Overview
            </NavLink>
            <NavLink to='/dashboard' activeStyle>
                Dashboard
            </NavLink>
            <NavLink to='/analytics' activeStyle>
                Analytics
            </NavLink>
        </NavMenu>
        </Nav>
        </>
    );
};
export default Navbar;