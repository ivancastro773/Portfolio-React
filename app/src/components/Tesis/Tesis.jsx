import React from "react";
import "./Tesis.css";
import AppAndroid from './login.PNG';
//ant
import { Card } from "antd";

const Tesis = () => {
  return (
    <div className="container-tesis">
      <div className="site-card-border-less-wrapper">
        <Card className="animate__animated animate__flipInX" title="Descripción" bordered={false} style={{ width: 300 }}>
          <p className="text">
              Desarrollé una API REST con Node JS para la parte de Back-end 
              y además construí una aplicación Android que se conectaba a dicha API 
              para recuperar los datos.
              <br/>
              La API se conectaba a una base de datos de tipo relacional MySQL la cual diseñé
               con sus respectivas tablas y relaciones.
          </p>
        </Card>
      </div>
      <div>
          <img className="img-app-android animate__animated animate__flipInY" src={AppAndroid} alt="" />
      </div>
    </div>
  );
};
export default Tesis;
