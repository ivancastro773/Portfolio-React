import React from "react";
import "./Info.css";
import Axios from 'axios';
import fileDownload from 'js-file-download';


//ant
import { Card } from "antd";
const filename = "Ivan-Castro-CV";
const url="https://portfolio-ivancastro773.herokuapp.com/static/media/android.9a44c9d3.png";

function download() {
  Axios.get(url, {
    responseType: 'blob',
  }).then(res => {
    fileDownload(res.data, filename);
  });
}
const Info = () => {
  return (
    <section className="container-info">
      <Card
        title={<i class="fas fa-user-tie"> Presentación</i>}
        extra={<button onClick={download}>Descargar CV</button>}
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
