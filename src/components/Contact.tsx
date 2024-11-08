import { useRef } from "react";
import React from "react";



const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h1>Contact</h1>
      <form className="contact-form" method="POST" >
        
        <div className="form-control">
        <label htmlFor="">Name:</label>
        <input type="text"  className="email-input" placeholder="Your name..."/>
        </div>

        <div className="form-control">
        <label htmlFor="email-body">Message:</label>
        <textarea placeholder="Your message..." className="text-body">
        </textarea>
        </div>

        <button type="submit" className="submit-contact">Submit</button>
      </form> 


    </div>
  )
}

export default Contact;