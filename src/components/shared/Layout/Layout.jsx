import React from 'react'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer';

// Create a layout to use in screens components

const Layout = (props) => {
    return (
        <div className='layout'>
            <div className='layout-children'>
                <Nav />
                {/* screens go below */}
                {props.children}
            </div>
                <Footer />
            
        </div>
    )
}

export default Layout
