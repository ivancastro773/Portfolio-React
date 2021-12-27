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
import img2 from "../Exp/img/nodeje.jpg";
import { Button, Tooltip } from "antd";
import { CodeOutlined } from "@ant-design/icons";

const { Meta } = Card;

const Exp = () => {
  const [state, setState] = useState({ tabPosition: "top" });

  const changeTabPosition = (e) => {
    setState({ tabPosition: e.target.value });
  };
  const { tabPosition } = state;

  return (
    <>
      <div className="exp-container">
        {experience.map((item, i) => {
          return (
            <div className="card-exp">
              <img src={(item.img =="") ? img2 : img1} alt="" />
              <h2 className="title-card">{item.title}{(item.title =="Dispo-Deportes SR")?<i class="certificate tooltiptext fas fa-medal"></i>:""} </h2>
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
/* 
<Card
className="ant-card-exp"
  cover={
    <img
      alt="example"
      src={img1}
    />
  }
  actions={[
    <SettingOutlined key="setting" />,
    <EditOutlined key="edit" />,
    <EllipsisOutlined key="ellipsis" />,
  ]}
>
  <Meta
    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
    title="Card title"
    description="This is the description"
  />
</Card> */
export default Exp;
