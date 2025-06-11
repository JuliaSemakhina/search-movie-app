import React from 'react';
import { FaTimes } from 'react-icons/fa';
import video from '../images/video.png';
import { useGlobalContext } from '../context';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    // eslint-disable-next-line no-unused-vars
    const { isSidebarOpen, closeSidebar, setIsSidebarOpen } = useGlobalContext();

    return (
        <aside className={`${isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'}`}>

            <div className='sidebar fl-jc-ai'>
                <button className='close-btn' onClick={closeSidebar}>
                    <FaTimes />
                </button>
                <a className='logo-container fl-jc-ai' href='/'><img className='logo' src={video} alt='logo' /></a>
                <div className='sidebar-links'>
                    <NavLink to="/about" onClick={closeSidebar}>About</NavLink>
                    <NavLink to="/" onClick={closeSidebar}>Home</NavLink>
                    <NavLink to={`/favlist`} onClick={closeSidebar}>List of Favorites</NavLink>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
