import React from 'react'
import './Hero.css'
import profile from '../../assets/profile.png'
import resume from '../../assets/NikhilKumar Resume.pdf'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile} alt="profile-img" />
        <h1><span>I'm Nikhil Kumar,</span> frontend developer based in India</h1>
        <p>I am a fresher and looking for an opportunity where I can show my skills </p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <div className="hero-resume"><a href={resume}>My Resume</a></div>
        </div>

    </div>
  )
}

export default Hero