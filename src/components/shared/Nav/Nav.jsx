import React from 'react'
import { NavLink} from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return (
        <>
        <nav className='nav-bar'>

            <div className='logo-container'>
                <div className='navbar-text'>
                    <h2>Beth El International Ministries</h2>
                </div>
            </div>
            

            <div className='icons-container'>
                
            <NavLink to='/'>
                <div className='user-icon'>
                <h4>SIGN-IN</h4>
                <i className="fa fa-user-circle fa-2x"></i>
                </div>
            </NavLink>


            <NavLink to='/'>
                <div className='shopping-icon '>
                <i className="fa fa-shopping-cart fa-lg" ></i>
                </div>
            </NavLink>

            </div>

            
        </nav>
        </>
    )
}

export default Nav
