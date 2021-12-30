import React from "react";
import "./Home.css";
import img from "./ivan.jpg";

const Home = () => {
  return (
    <section className="sec-home">
      <div className="container-text">
        <h1 className="title">Soy Iván Castro</h1>
        <h2 className="subtitle">Full Stack Developer Jr</h2>
        <div className="social">
          <a href="https://www.linkedin.com/in/ivancastro773/">
            <div className="box-icon animate__animated animate__lightSpeedInLeft">
              <i class="fab fa-linkedin-in fa-3x"></i>
            </div>
          </a>
          <a href="https://github.com/ivancastro773">
            <div className="box-icon animate__animated animate__lightSpeedInLeft">
              <i class="fab fa-github fa-3x"></i>
            </div>
          </a>
        </div>
      </div>
      <div className="container-image">
        <img className="style-img" src={img} alt="" />
      </div>
    </section>
  );
};

export default Home;
