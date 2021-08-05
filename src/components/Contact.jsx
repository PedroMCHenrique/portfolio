import React from 'react';
import './Contact.css';
import Linkedin from '../Assets/linkedin.svg';
import Github from '../Assets/github.svg';
import Whatsapp from '../Assets/whatsapp.svg';

const Contact = () => (
  <div className="contact" id="contact">
    <div className="contact-list">
      <a
        href="https://www.linkedin.com/in/pedro876/"
        target="_blank"
        rel="noopener noreferrer"
      >
          <img src={ Linkedin } alt="linkedin-logo" className="contact-icon" />
      </a>
      <a
        href="https://github.com/PedroMCHenrique"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={ Github } alt="github-logo" className="contact-icon" />
      </a>
      <a
        href="https://wa.me/+5521974566363"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={ Whatsapp } alt="whatsapp-logo" className="contact-icon" />
      </a>
    </div>
  </div>
);

export default Contact;
