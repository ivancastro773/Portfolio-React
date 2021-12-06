import React from "react";
//css
import "./Works.css";
//ant
import { Card } from "antd";

const Works = () => {
  return (
    <div className="container-works">
      <div className="site-card-border-less-wrapper">
        <Card title="Desarrollos Webs" bordered={false} style={{ width: 300 }}>
          <ul>
              <li  className="text">Páginas webs para empresas.</li>
              <li  className="text">Sistema de stock para la universidad Nacional de cuyo, San Rafael,Mza.</li>
          </ul>
        </Card>
      </div>
      <div className="site-card-border-less-wrapper">
        <Card title="Desarrollo Mobile" bordered={false} style={{ width: 300 }}>
          <p className="text">Desarrollé una aplicacion android que brindaba la 
              disponibilidad de espacios para la practica de deportes en San Rafael,Mza.</p>
        </Card>
      </div>
    </div>
  );
};

export default Works;
