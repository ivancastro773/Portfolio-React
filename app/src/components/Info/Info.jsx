import React from "react";
import "./Info.css";
import Axios from 'axios';
import fileDownload from 'js-file-download';


//ant
import { Card } from "antd";

const Info = () => {
  const url="https://drive.google.com/file/d/1PHYcmclqwAC1qoMzKeTAqobdWt1cRuZT/view?usp=sharing";
  return (
    <section className="container-info">
      <Card
        title={<i class="fas fa-user-tie"> Presentación</i>}
        extra={<button className="btnInfo"><a href={url}>Visualizar CV</a></button>}
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
