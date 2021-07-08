import React from 'react';
import Layout from '../../shared/Layout/Layout';
import './Contact.css';

const Contact = () => {
    return (
        <Layout>

    <div className='form-container'>

        <div className="congregation">
        <img
          src="https://static.wixstatic.com/media/cef3ab_7a89607fc5c042da9dcf930148f85237~mv2_d_4032_1960_s_2.jpg/v1/fill/w_397,h_193,q_90/cef3ab_7a89607fc5c042da9dcf930148f85237~mv2_d_4032_1960_s_2.jpg"
          alt="chruch"
        ></img>
        <h1>Contact-Us</h1>
      </div>


            <div className='form-background'>
                <form>
                    <input type="text" placeholder="Name" name="name"/>
                    <input type="text" placeholder="Email" name="email"/>
                    <input type="textarea" rows="4" cols="50" placeholder="Message" name="message"/>
                    <button className="btn" type="submit" name="button">Submit</button>
                </form>
            </div>
            <div className='contact-text'>
                    <h4>Beth El International Ministries Inc</h4>
                    <li> 818 South Orange Ave. </li>
                    <li>(Rear Building on West End Avenue)</li>
                    <li>Newark, New Jersey 07106</li>
                    <li>beicm.inc@verizon.net</li>
                    <li>973-371-2384</li>
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-youtube"></i>
                    <i class="fab fa-google-plus-g"></i>
                    <i class="fab fa-yelp"></i>
            </div>
            
    </div>
        </Layout>
    )
}

export default Contact
