import React, { useState } from "react";
//css
import "./Nav.css";
//ant
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
  HomeOutlined,
  InfoCircleOutlined
} from "@ant-design/icons";
//components
import Home from '../Home/Home';
import Exp from '../Exp/Exp'
import Contact from "../Contact/Contact";


const { SubMenu } = Menu;
const Nav = () => {
  return (
    <>
      <Menu className="page-header" mode="horizontal">
        <Menu.Item className="item-nav" key="home" icon={<HomeOutlined />}>
          <a href="#home">Home</a>
        </Menu.Item>
        <Menu.Item className="item-nav" key="habilites" icon={<AppstoreOutlined />}>
        <a href="#experience">Experiencia</a>
        </Menu.Item>
        <Menu.Item className="item-nav" key="info" icon={<InfoCircleOutlined />}>
        <a href="#info">Contacto</a>
        </Menu.Item>
      </Menu>
      <Home />
      <div id="experience">
        <Exp/>
      </div>
      <div id="info">
        <Contact/>
      </div>
    </>
  );
};

export default Nav;
