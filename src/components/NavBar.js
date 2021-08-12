import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/index.css';

const NavBar = () => {
    return (
        <div className='mt-4 mb-5'>
            <h1 className='text-center'>#todo</h1>
            <ul className='mt-4'>
                <NavLink
                    exact
                    activeClassName='active'
                    to='/'
                >
                    All
                </NavLink>
                <NavLink
                    exact
                    activeClassName='active'
                    to='/active'
                >
                    Active
                </NavLink>
                <NavLink
                    exact
                    activeClassName='active'
                    to='/completed'
                >
                    Completed
                </NavLink>
            </ul>
        </div>
    )
}

export default NavBar
