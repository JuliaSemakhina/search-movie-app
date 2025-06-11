import React from 'react';
import { NavLink } from 'react-router-dom';
import video from '../images/video.png';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from '../context';

const Navbar = () => {
    const { openSidebar } = useGlobalContext();
    return (
        <nav className='navbar fl-jc-ai'>

            <div className='nav-center container'>
                <div className='nav-header'>
                    <NavLink to="/" className='logo-link'>
                        <img className='logo' src={video} alt='logo' />
                    </NavLink>
                    <button className='btn toggle-btn' onClick={openSidebar}>
                        <FaBars />
                    </button>
                </div>

                <ul className='nav-links'>
                    <NavLink to="/"> Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to={`/favlist`} >Favorites</NavLink>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
