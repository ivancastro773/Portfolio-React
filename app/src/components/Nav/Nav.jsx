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
      <Menu mode="horizontal">
        <Menu.Item key="home" icon={<HomeOutlined />}>
          <a href="#home">Home</a>
        </Menu.Item>
        <Menu.Item key="habilites" icon={<AppstoreOutlined />}>
        <a href="#experience">Experiencia</a>
        </Menu.Item>
        <Menu.Item key="info" icon={<InfoCircleOutlined />}>
        <a href="#info">Información</a>
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
