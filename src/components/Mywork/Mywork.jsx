import React from 'react'
import './Mywork.css'
import mywork_data from '../../assets/mywork'
import { FaArrowRight } from 'react-icons/fa';

export default function Mywork() {
  return (
    <div id="work"className='mywork'>
         <div className="mywork-title">
            <h1>My Latest Work</h1>
         </div>
         <div className="mywork-container">
            {mywork_data.map((mywork_data,index)=>{
              return <img key={index} src={mywork_data.w_img} />   
             })}
         </div>
         <div className="mywork-showmore">
          <p>Show More</p>
           <h2><FaArrowRight/></h2>
         </div>
      
    </div>
  )
}
