import React from "react";
import "./services.css";

function Services() {
  return (
    <section className="services" id="services">
      <h2 className="heading">
        Our <span>Services</span>
      </h2>

      <div className="services-container">
        <div className="services-box">
          <i className="bx bx-code-alt"></i>
          <h3>Web Development</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            assumenda iusto culpa sapiente, laborum unde libero reiciendis
            excepturi quam temporibus fugit maxime, qui obcaecati. Nulla, porro
            delectus non at vitae sint quod dolor ea sapiente corporis ullam
            accusamus facere nam enim error. Harum, laborum!
          </p>
          <a href="#web-development" className="btn">
            Read More
          </a>
        </div>

        <div className="services-box">
          <i className="bx bxs-paint"></i>
          <h3>Graphic Design</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            assumenda iusto culpa sapiente, laborum unde libero reiciendis
            excepturi quam temporibus fugit maxime, qui obcaecati. Nulla, porro
            delectus non at vitae sint quod dolor ea sapiente corporis ullam
            accusamus facere nam enim error. Harum, laborum!
          </p>
          <a href="#graphic-design" className="btn">
            Read More
          </a>
        </div>

        <div className="services-box">
          <i className="bx bx-bar-chart-alt"></i>
          <h3>Digital Marketing</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            assumenda iusto culpa sapiente, laborum unde libero reiciendis
            excepturi quam temporibus fugit maxime, qui obcaecati. Nulla, porro
            delectus non at vitae sint quod dolor ea sapiente corporis ullam
            accusamus facere nam enim error. Harum, laborum!
          </p>
          <a href="#digital-marketing" className="btn">
            Read More
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;
