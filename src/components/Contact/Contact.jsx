import React from 'react'
import './Contact.css'
import { MdMail } from 'react-icons/md';
import { MdCall } from 'react-icons/md';
import { MdLocationOn } from 'react-icons/md';

const Contact = () => {

   
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
      
        // Append the API access key to the form data
        formData.append("access_key", "564e1a26-a26c-4b59-8e12-79a92ce2fb91");
      
        // Convert FormData to an object
        const object = Object.fromEntries(formData.entries()); // Use .entries() to properly handle form data
        const json = JSON.stringify(object);
      
        try {
          // Send the data via POST request
          const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: json,
          });
      
          // Parse the response
          const data = await res.json();
      
          // Check if the request was successful
          if (data.success) {
            alert(data.message);
          } else {
            console.error("Error: ", data.message);
            alert("Something went wrong, please try again.");
          }
        } catch (error) {
          console.error("Network error: ", error);
          alert("Failed to submit form. Please check your network connection.");
        }
      };
      
  return (
    <div id='contact'className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm currently available to take on new projects,so feel free to send message about anything that you want me to work on.you can contact any time</p>
                <div className="contact-details">
                    <div className="contact-detail">
                    <MdMail size={30} color="white" /><p>sesankreddygontu@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                    <MdCall size={30} color="green" /><p>+91 7671857066</p>   
                    </div>
                    <div className="contact-detail">
                    <MdLocationOn size={30} color="red" /><p>AP,INDIA.</p>   
                    </div>
                        

                </div>
            </div>
            <form onSubmit={onSubmit} className='contact-right'>
                <label htmlFor=''>Your Name</label>
                <input type='text' placeholder='Enter Your Name' name='name'/>
                <label htmlFor=''>Your Email</label>
                <input type='email' placeholder='Enter Your Mail' name='email'/>
                <label htmlFor=''>Write Your Message Here</label>
                <textarea name='message' rows={8} placeholder='Enter Your Message Here'></textarea>
                <button type='submit'className='contact-submit'>Submit Now</button>
            </form>
        </div>
      
    </div>
  )
}

export default Contact
