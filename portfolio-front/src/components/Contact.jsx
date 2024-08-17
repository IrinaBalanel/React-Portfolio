import './Contact.css'
import {useState} from "react";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import {Link} from "react-router-dom"

export default function Contact(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = { name, email, phone, message };
        try {
            const response = await fetch('http://localhost:8000/contactform/submit', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
      
            const data = await response.json();
            console.log('Success:', data);
            // clears the form fields after submission
            setName('');
            setEmail('');
            setPhone('');
            setMessage('');
            
            setIsSubmitted(true); // updates the button text to "Submitted"
        } catch (error) {
            console.error('Error:', error);
        }
    };

    //resets the button if the user starts typing again
    const handleInputChange = () => {
        setIsSubmitted(false);
    };
    
    return (
        <div id="contact">
            <div id="form-text">
                <h2>Inspired by my work?</h2>
                <p>Fill in the form, and I would be delighted to help you create your dream software!</p>
                <div className="contact-text">
                    <div className="flex-icon">
                        <p>Reach out</p>
                        <img src="/send.svg" alt="send email"/>
                        <Link to="mailto:irina.cowork@gmail.com" id="colored-link">irina.cowork@gmail.com</Link>
                    </div>
                    <div className="socials">
                        <Link to="https://github.com/IrinaBalanel" target="_blank"><img className="icon" src="/github.svg" alt="github"/></Link>
                        <Link to="https://www.linkedin.com/in/irina-balanel/" target="_blank"><img className="icon" src="/linkedIn.svg" alt="linkedin"/></Link>
                        <Link to="https://www.instagram.com/irenmakarova8/" target="_blank"><img className="icon" src="/instagram.svg" alt="instagram"/></Link>
                    </div>
                </div>
                
            </div>
            
            <form method="POST" action="/contactform/submit" onSubmit={handleSubmit} id="form">
                <div id="name-input" className="input">
                    <label htmlFor="name">Name<span className="asterisk"> *</span></label>
                    <input 
                        type="text" id="name" placeholder="Enter your name" 
                        value={name}
                        onChange={(e) => {setName(e.target.value); handleInputChange();}}
                        required 
                    />
                </div>
                <div id="email-input" className="input">
                    <label htmlFor="email">Email<span className="asterisk"> *</span></label>
                    <input type="email" id="email" placeholder="Enter your email" 
                        value={email}
                        onChange={(e) => {setEmail(e.target.value); handleInputChange();}}
                        required 
                    />
                </div>
                <div id="phone-input" className="input">
                    <label htmlFor="phone">Phone<span className="asterisk"> *</span></label>
                    <PhoneInput
                        id="phone"
                        placeholder="999-999-9999"
                        // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        value={phone}
                        onChange={(value) => {
                            setPhone(value);
                            handleInputChange();
                        }}
                        international
                        defaultCountry="CA"
                    />
                </div>
                <div id="message-input" className="input">
                    <label htmlFor="message">Message<span className="asterisk"> *</span></label>
                    <textarea id="message" placeholder="Leave your message here..." 
                        required
                        value={message}
                        onChange={(e) => {setMessage(e.target.value); handleInputChange();}}
                    ></textarea>
                </div>
                <div id="submit-btn-container">
                    <button id="submit-button" type="submit" 
                        className={`btn-filled ${isSubmitted ? 'submitted' : ''}`}
                        disabled={isSubmitted}
                    >
                        {isSubmitted ? 'Submitted!' : 'Submit'}
                    </button>
                </div>
            </form>
        </div>
    )
}