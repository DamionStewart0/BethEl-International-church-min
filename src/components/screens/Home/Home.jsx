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
                <img src='https://static.wixstatic.com/media/cef3ab_7d12dfe7682e4444a3956187ccc81c02~mv2.png/v1/fill/w_150,h_160,al_c,q_85,usm_0.66_1.00_0.01/cef3ab_7d12dfe7682e4444a3956187ccc81c02~mv2.webp' alt='logo'></img>
        
            </div>
            </div>
    </Layout>
    )
}
