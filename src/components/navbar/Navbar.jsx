import React, { useRef, useState } from 'react'
import './navbar.css'
import logo1 from '../../assets/logo1.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { FaBars, FaTimes } from 'react-icons/fa';

export default function navbar() {
  const[menu,setmenu]=useState("home")
  const menuref=useRef();

  const openmenu=()=>{
    menuref.current.style.right="250px";
  
  }
  const closemenu=()=>{
    menuref.current.style.right="-100px";
  
  }
  return (
    <div className='navbar'>
       <img src={logo1} alt=''/>
       <FaBars size={30} onClick={openmenu} className='nav-mob-open'/>
        <ul ref={menuref}className="nav-menu">
        <FaTimes size={30} onClick={closemenu} className='nav-mob-close'/>
           <li><AnchorLink className='anchor-link'  href='#home'><p onClick={()=>setmenu("home")}>Home</p></AnchorLink>{menu==="home"?<hr/>:<></>}</li>
           <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setmenu("about")}>About Me</p></AnchorLink>{menu==="about"?<hr/>:<></>}</li>
           <li><AnchorLink className='anchor-link' offset={50} href='#service'><p onClick={()=>setmenu("service")}>Services</p></AnchorLink>{menu==="service"?<hr/>:<></>}</li>
           <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setmenu("work")}>Portfolio</p></AnchorLink>{menu==="work"?<hr/>:<></>}</li>
           <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setmenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
      </div>
  )
}
