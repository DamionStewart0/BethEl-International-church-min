import React from 'react'
import Layout from '../../shared/Layout/Layout'
import './Home.css';

export default function Home() {
    return (
    <Layout>
        <div className='home-container'>
                

            <div className='welcome-message'>
                <section>
                    Beth El International Ministries
                </section>
                <p>
                "Equipping the believer for discipleship"
                </p>
            </div>

            <div className='services'>
                <ul>
                    <li className='service'>Saturday: Shabbat Service: 12PM</li>
                    <li className='service'>Monday: Noon Prayer 12PM</li>
                    <li className='service'>Tuesday: Quality of life for Israel 6PM</li>
                    <li className='service'>Wednesday: Torah Discipleship Ministry 7pm</li>
                    <li className='service'>Friday: Men Of BethEL Prayer 6PM</li>
                </ul>
                
            </div>


            <div className='home-photo'>
                <img src='https://static.wixstatic.com/media/cef3ab_51173d593a844b4389eaf48a25b26b70~mv2_d_1865_2054_s_2.jpg/v1/crop/x_310,y_0,w_1555,h_2054/fill/w_243,h_312,al_c,q_80,usm_0.66_1.00_0.01/20190303_110659%20(3).webp' alt='pastor harris'></img>
        
            </div>
            </div>
    </Layout>
    )
}
