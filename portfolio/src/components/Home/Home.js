import React from 'react';
import './home.css';  
import Amexo from "../../components/image/Amexo (1).jpg"

function Home() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hello, It's Me</h3>
        <h1>Amare Fentaw</h1>
        <h3>And I'm a <span>Full Stack Developer</span></h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas distinctio quo dignissimos, repellat dicta maxime eius. Eveniet magni inventore sint.</p>
        <div className="social-media">
           <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
           <i className="bx bxl-facebook-circle"></i>
           </a>
           <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
           <i className="bx bxl-twitter"></i>
           </a>
           <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
           <i className="bx bxl-instagram"></i>
           </a>
           <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
           <i className="bx bxl-linkedin"></i>
            </a>
        </div>
        <a href="/docs/cv.pdf" download className="btn">
        Download CV
        </a>
      </div>

      <div className="home-img">
        <img src={Amexo} alt="Amare Fentaw" />
      </div>
    </section>
  );
}

export default Home;
