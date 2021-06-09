import React from 'react'
import { NavLink} from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return (
        <>
        <nav className='nav-bar'>
            <div>

            <NavLink to='/' className='navbar-logo'>
                <img className='logo' src='' alt='star-of-david'/>
            </NavLink>
            </div>
            <div className='navbar-text'>
                <h2>Beth El International Ministries</h2>
            </div>
            

            <div className='icons'>

                <div className='user-icon'>
                <i class="fa fa-user-circle "></i>
                </div>

                <div className='shopping-icon '>
                <i class="fa fa-shopping-cart " ></i>
                </div>

            </div>

            
        </nav>
        </>
    )
}

export default Nav
