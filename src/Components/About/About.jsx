import React from 'react'
import './About.css'
import profile_img from '../../assets/profile2.png'

const About = () => {
  return (
    <div>
        <div id='about' className="about">
            <div className="about-title">
                <h1>About me</h1>
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am a Frontend Developer and having good programming skill. </p>
                        <p>I am a student who is passionate about web Development with an immersive and practical experience based upon doing many projects.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>Java</p><hr style={{width:"90%"}}/></div>
                        <div className="about-skill"><p>DSA </p><hr style={{width:"90%"}}/></div>
                        <div className="about-skill"><p>MYSQL</p><hr style={{width:"60%"}}/></div>
                        <div className="about-skill"><p>HTML</p><hr style={{width:"85%"}}/></div>
                        <div className="about-skill"><p>CSS</p><hr style={{width:"85%"}}/></div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{width:"70%"}}/></div>
                        <div className="about-skill"><p>React</p><hr style={{width:"50%"}}/></div>
                    </div>
                </div>
            </div>
            <div className='about-achievements'>
                <h1>Runner Up</h1>
                <p>In Hackathon Organised by EDC in Collaboration with AICTE in College</p>
            </div>
        </div>
    </div>
  )
}

export default About