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
                <div className='image'>
                    <img src='https://static.wixstatic.com/media/cef3ab_7d12dfe7682e4444a3956187ccc81c02~mv2.png/v1/fill/w_150,h_160,al_c,q_85,usm_0.66_1.00_0.01/cef3ab_7d12dfe7682e4444a3956187ccc81c02~mv2.webp' alt=''></img>
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
        <div className='below-container'>
            <div className='nav-items'>
                <NavLink to='/about-us'>
                    <li className='list'>About-Us</li>
                </NavLink>

                <NavLink to='/ministries'>
                <li className='list'>Ministries</li>
                </NavLink>

                <NavLink to='/biography'>
                <li className='list'>Biography</li>
                </NavLink>

                <NavLink to='/hebrew-in-you'>
                <li className='list'>Hebrew in you</li>
                </NavLink>

                <NavLink to='/store'>
                <li className='list'>Store</li>
                </NavLink>
            </div>
        </div>
        </>
    )
}

export default Nav
