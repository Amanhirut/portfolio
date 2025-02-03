import React from 'react'
import './about.css'
import aboutImg from "../../components/image/about (2).jpg";

function About() {
    return (
      <section className="about" id="about">
        <div className="about-img">
          <img src={aboutImg} alt="About Me" />
        </div>
        <div className="about-content">
          <h2 className="heading">
            About <span>Me</span>
          </h2>
          <h3>Frontend Developer!</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
            porro facere inventore quidem provident officia incidunt similique
            enim? Dolorem tenetur ducimus delectus vel fugit at aliquid. Soluta
            odit esse nesciunt eius natus quis, temporibus earum quam! Quibusdam
            porro facere fuga.
          </p>
          <a href="#read-more" className="btn">
            Read More
          </a>
        </div>
      </section>
    );
  }
  
  export default About;
  