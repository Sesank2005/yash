import React from 'react'
import './Aboutme.css'
import logo3 from '../../assets/logo3.jpg'

export default function Aboutme() {
  return (
    <div id='about' className='about'>
        <div className="about-title">
        <h1>About Me</h1>
        <img src=''/>
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={logo3}/>
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am an experienced frontend developer with over a many simple mini projects over the college days..</p>
                    <p>My Passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication i bring to each project. </p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>REACT JS</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>JAVA SCRIPT</p><hr style={{width:"40%"}}/></div>
                    <div className="about-skill"><p>NODE JS</p><hr style={{width:"30%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>1st</h1>
                <p>Achieved 1st prize in frontened conducted by the college</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>2-3</h1>
                <p>learned experience of making 2-3 mini projects</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>2+</h1>
                <p>successfully completed 2 internships conducted in the college</p>
            </div>
        </div>
        
      
    </div>
  )
}
