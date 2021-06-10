import React from 'react'
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <nav className='footer-container'>
            <div className='routes-container'>
                <div className='route-list'>

                    <NavLink to='/donation'>
                    <li>Donations/Purchases</li>
                    </NavLink>

                    <NavLink to= '/events'>
                    <li>Events</li>
                    </NavLink>

                    <NavLink to='/contact'>
                    <li>Contact-Us</li>
                    </NavLink>

                    <NavLink to='/blog'>
                    <li>Blog</li>
                    </NavLink>

                </div>
            </div>

            <div className='social-container'>
                {/* <div className='social-list'>
                <i className="fa fa-facebook " ></i>
                <i className="fa fa-instagram " ></i>
                <i className="fa fa-snapchat-ghost " ></i>
                <i className="fa fa-twitter " ></i>
                </div> */}
            </div>

            <div className='logo-text-container'>
                <div className='logo-list'>
                    <h4>Beth El International Ministries Inc.&copy; {new Date().getFullYear()} | All rights reserved</h4>
                </div>
            </div>
        </nav>
    )
}

export default Footer
