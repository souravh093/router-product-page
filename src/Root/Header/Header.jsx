import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-secondary text-white">
            <div className='container mx-auto'>
            <div className="flex-1">
            <a className="normal-case text-2xl">GoBuy</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 gap-5">
                    <li><Link to='/'>Home</Link></li>
                    <li><NavLink to='/products'>Products</NavLink></li>
                    <li><NavLink to='/about'>About</NavLink></li>
                </ul>
            </div>
            </div>
        </div>
    );
};

export default Header;