import React from 'react';
import './About.css';
import Picture from '../Assets/profile-pic.jpg'

const About = () => (
  <div className="about" id="about">
    <img src={ Picture } alt="smiling-man" className="profile-pic" />
    <div className="about-me">
      <h1>Pedro Henrique</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, expedita tempora voluptates ut repellendus doloremque unde temporibus natus molestiae reiciendis optio? Aspernatur commodi deserunt sed recusandae illo dolor itaque voluptatum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, provident! Aspernatur eos consequatur eum repellat unde! Necessitatibus possimus asperiores debitis alias minus. Fugit in vero odit soluta ducimus id dolor.</p>
    </div>
  </div>
);

export default About;