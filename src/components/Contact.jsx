import { useRef } from "react";



const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h1>Contact</h1>
      <form className="contact-form" method="POST" >
        
        <div className="form-control">
        <label htmlFor="">Email:</label>
        <input type="email"  className="email-input" placeholder="Email address..."/>
        </div>

        <div className="form-control">
        <label htmlFor="email-body">Body:</label>
        <textarea placeholder="Email body...." className="email-body">
        </textarea>
        </div>

        <button type="submit" className="submit-contact">Submit</button>
      </form> 


    </div>
  )
}

export default Contact;