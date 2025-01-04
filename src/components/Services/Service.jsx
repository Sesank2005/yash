import React from 'react'
import './Service.css'
import Services_Data from '../../assets/services_data'
import { FaArrowRight } from 'react-icons/fa';

export default function Service() {
  return (
    <div id='service' className='services'>
      <div className='services-title'>
        <h1>My Services</h1>
      </div>
      <div className='service-container'>
       {Services_Data.map((service,index)=>{
         return <div key={index} className='service-format'>
          <h3>{service.s_no}</h3>
          <h2>{service.s_name}</h2>
          <p>{service.s_desc}</p>
          <div className="services-readmore">
          <p>Read More</p>
          <h2><FaArrowRight/></h2>
          </div>
         </div>
       })}
        
      </div>
      
    </div>
  )
}
