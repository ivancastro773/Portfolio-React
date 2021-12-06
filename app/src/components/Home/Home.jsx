import React from "react";
import './Home.css';
import img from './ivan.jpg';

const Home=()=>{
    return(
        <section className="sec-home">
            <div className="container-text">
                <h1 className="title">Soy Iván Castro</h1>
                <h2 className="subtitle">Ingeniero Informático</h2>
                <div className="social">
                    <div className="box-icon">
                        <i className="fab fa-facebook-f fa-3x"></i>
                    </div>
                    <div className="box-icon">
                     <i class="fab fa-instagram fa-3x"></i>
                    </div>
                    <div className="box-icon">
                     <i class="fab fa-linkedin-in fa-3x"></i>
                    </div>
                </div>
            </div>  
            <div className="container-image">
                <img className="style-img" src={img} alt="" />
            </div>
        </section>
    )
}

export default Home;