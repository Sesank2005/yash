import React from 'react'
import './Hero.css'
import profile from '../../assets/profile.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function Hero() {
  return (
    <div id='home'className='hero'>
        <img src={profile} alt=''/>
        <h1><span>I'm Sesank ,</span>the frontend developer..</h1>
        <p>I am a frontend developer through which we learned skills from the html,css,javascript and react.</p>
        <div className='hero-action'>
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
            <div className="hero-resume">My Resume</div>
        </div>

      
    </div>
  )
}
