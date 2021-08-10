import React from 'react';
import './About.css';
import Picture from '../Assets/profile-pic.jpg'

const About = () => (
  <div className="about" id="about">
    <img src={ Picture } alt="smiling-man" className="profile-pic" />
    <div className="about-me">
      <h1 className="about-h1">Pedro Henrique</h1>
      <p className="about-p">
        Desde criança tive contato com tecnologia mas nunca havia pensado em deixar de ser uma pessoa usuária e me tornar um desenvolvedor. Acabei escolhendo pela graduação em letras mas passei a atuar no setor de vendas. Por insentivo de minha noiva, enxerguei a oportunidade de abraçar este universo de desenvolvimento web.
      </p>
    </div>
  </div>
);

export default About;