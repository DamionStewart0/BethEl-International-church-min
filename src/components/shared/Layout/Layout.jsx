import React from 'react'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer';
import './Layout.css';

// Create a layout to use in screens components

const Layout = (props) => {
    return (
        <div className='layout-children'>
            <div className='layout-content'>
                <Nav />
                {/* screens go below */}
                {props.children}
            </div>
                <Footer />
            
        </div>
    )
}

export default Layout
