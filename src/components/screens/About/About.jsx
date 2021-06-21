import React from "react";
import Layout from "../../shared/Layout/Layout";
import "./About.css";

const About = () => {
  return (
    <Layout>
      <div className="container">
        <div className='content'>

            <div className="about-image">
            <img
                src="https://images.unsplash.com/photo-1612375411938-6be39138a883?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aGVicmV3fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
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
