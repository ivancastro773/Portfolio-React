import React from "react";
import "./Info.css";
//ant
import { Card } from "antd";

const Info = () => {
  return (
    <section className="container-info">
      <Card
        title={<i class="fas fa-user-tie"> Presentación</i>}
        extra={<a href="#">Descargar CV</a>}
      >
        <ul>
          <li>
            Soy una persona organizada y con mucha motivación, mi objetivo es
            crecer profesionalmente y además poder adquirir experiencia laboral.
          </li>
          <li>Experiencia en el trabajo en equipo y deseos de aprender.</li>
          <li>Tesis aprobada: Aplicación Android y API Rest para la misma.</li>
        </ul>
      </Card>
      {/* <div className="container-text">
        <p>
          Carácter Personal: organizado y con mucha motivación, mi objetivo es
          crecer profesionalmente y además poder adquirir experiencia laboral.
          Experiencia en el trabajo en equipo y deseos de aprender. Tesis
          aprobada: Aplicación Android y API Rest para la misma.
        </p>
      </div> */}
    </section>
  );
};

export default Info;
