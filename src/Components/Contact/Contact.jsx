import React from 'react'
import './Contact.css'
import mail_icon from "../../assets/mail_icon.svg"
import call_icon from "../../assets/call_icon.svg"
import location_icon from "../../assets/location_icon.svg"

const Contact = () => {



    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "04b1d581-94b4-4537-ab72-37357a5fa007");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
    };

  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm currently avaliable to take on new projects, so feel free to contact me.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="mail" /> <p>nikhilsingh86511@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="Phone" /> <p>+91-8229852901</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="location" /> <p>Motihari, Bihar, India </p>
                    </div>
                </div>
            </div>
            <form  onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name' required  />
                <label htmlFor="">Your Email</label>
                <input type="text" placeholder='Enter your email' name='email' required  />
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows="8" placeholder='Enter your message' id="" required ></textarea>
                <button type='submit' className='contact-submit'>Submit now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact