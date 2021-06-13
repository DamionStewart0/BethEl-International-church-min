import React from 'react'
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <nav className='footer-container'>
             <div className='address-container'>
                <ul className='address'>
                    <h4>Beth El International Ministries Inc</h4>
                    <li> 818 South Orange Ave. </li>
                    <li>(Rear Building on West End Avenue)</li>
                    <li>Newark, New Jersey 07106</li>
                    <li>beicm.inc@verizon.net</li>
                    <li>973-371-2384</li>
                    
                </ul> 
                <div className='phone-icon'><i class="fa fa-phone-square" aria-hidden="true"></i></div>
            </div>
            
            <div className='routes-container'>
                <div className='route-list'>
                    
                    
                    <li >
                    <NavLink className='list' to='/donation'>Donation/Purchases</NavLink>
                    </li>


                    <li>
                    <NavLink className='list' to= '/events'>Events</NavLink>
                    </li>


                    <li>
                    <NavLink className='list' to='/contact'>Contact</NavLink>
                    </li>

                    <li>
                    <NavLink className='list' to='/blog'>Blog</NavLink>
                    </li>
                </div>
            </div>

           

            <div className='logo-text-container'>
                <div className='logo-list'>
                    <h5>Beth El International Ministries &copy;{new Date().getFullYear()} | All rights reserved</h5>
                </div>
            </div>
        </nav>
    )
}

export default Footer
