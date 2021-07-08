import React from "react";
import Layout from "../../shared/Layout/Layout";
import "./About.css";

const About = () => {
  return (
    <Layout>
      <div className="container">
        <div className='content'>


        <div className="congregation">
        <img
          src="https://static.wixstatic.com/media/cef3ab_7a89607fc5c042da9dcf930148f85237~mv2_d_4032_1960_s_2.jpg/v1/fill/w_397,h_193,q_90/cef3ab_7a89607fc5c042da9dcf930148f85237~mv2_d_4032_1960_s_2.jpg"
          alt="chruch"
        ></img>
        <h1>About-Us</h1>
      </div>



            <div className="about-image">
            <img
                src="https://static.wixstatic.com/media/cef3ab_7d12dfe7682e4444a3956187ccc81c02~mv2.png/v1/fill/w_150,h_160,al_c,q_85,usm_0.66_1.00_0.01/cef3ab_7d12dfe7682e4444a3956187ccc81c02~mv2.webp"
                alt="torah-and-menorah"
                ></img>
            </div>

           <div className="about-text">
                <section>
            Beth El International Church Ministry Inc. is committed to its
            motto: “Equipping the Believer for Discipleship Service” by
            enlarging its borders to take the Gospel of Yahshua the Mashiach to
            the world.
                </section>
                <section>
                Our Ministry focuses on extending fellowship to other
                assemblies/synagogues/churches by extending the skills and knowledge
                of the ministry of Beth El through Torah/biblical teachings and
                providing assistance through our various ministries. We ascribe to
                kindling a fire of the knowledge of “YHWH/Yah” the Elohim of our
                forefathers Abraham, Isaac, and Jacob.
                
                </section>
        </div> 
        </div>
      </div>
    </Layout>
  );
};

export default About;
