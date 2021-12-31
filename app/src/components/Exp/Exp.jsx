import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
//css
import "./Exp.css";
//mocks
import { experience } from "../../Mocks/exp-mocks";
//ant
import { Tabs, Radio, Space } from "antd";
import LangProg from "../LangProg/LangProg";
import Frameworks from "../Frameworks/Frameworks";
import Works from "../Works/Works";
import Tesis from "../Tesis/Tesis";
import { Card, Avatar } from "antd";
import img1 from "../Exp/img/Captura.PNG";
import img2 from "../Exp/img/prueba.jpg";
import img3 from "../Exp/img/ejer.jpg";
import imgd from "../Exp/img/nodeje.jpg";
import { Button, Tooltip } from "antd";
import { CodeOutlined } from "@ant-design/icons";

const { Meta } = Card;

const Exp = () => {
  const [state, setState] = useState({ tabPosition: "top" });

  const changeTabPosition = (e) => {
    setState({ tabPosition: e.target.value });
  };
  const { tabPosition } = state;
const showImg=(num)=>{
  if (num == "1") {
    return img1;
  }
  if (num == "2") {
    return img2;
  }
  if (num == "3") {
    return img3;
  }else{
    return imgd
  }
}
  return (
    <>
      <div className="header-exp">
        <h1>EXPERIENCIA</h1>
        <h2>Algunos de mis proyectos y prácticas...</h2>
      </div>
      <div className="exp-container">
        {experience.map((item, i) => {
          return (
            <div key={i} className="card-exp">
              <img src={showImg(item.img)} className="img-card-exp" alt="" />
             {/*  <Tooltip title="Con dicho proyecto me recibí de Ing. Informtico" placement="top" color='orange'> */}
              
              <h2 className="title-card">{item.title}{(item.title =="Dispo-Deportes SR")?<i class="certificate tooltiptext fas fa-medal"></i>:""} </h2>{/* </Tooltip> */}
              <p className="p-card">{item.description}</p>
              <p className="languaje-card">{item.language}</p>
              {item.typeApp == "APP" ? (
                <>
                  {" "}
                  <Button type="primary" block>
                    Ver Proyecto
                  </Button>
                  <Button className="" icon={<CodeOutlined />} block size="">
                    Ver Código
                  </Button>{" "}
                </>
              ) : (
                <Button className="" icon={<CodeOutlined />} block size="">
                  Ver Código
                </Button>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Exp;
