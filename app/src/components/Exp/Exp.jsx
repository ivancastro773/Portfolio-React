import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
//css
import "./Exp.css";
//ant
import { Tabs, Radio, Space } from "antd";
import LangProg from "../LangProg/LangProg";
import Frameworks from "../Frameworks/Frameworks";
import Works from "../Works/Works";
import Courses from "../Courses/Courses";
import Tesis from "../Tesis/Tesis";

const { TabPane } = Tabs;

const Exp = () => {
  const [state, setState] = useState({ tabPosition: "top" });

  const changeTabPosition = (e) => {
    setState({ tabPosition: e.target.value });
  };
  const { tabPosition } = state;

  return (
    
    <section className="experience">
      <>
        {/* <Space style={{ marginBottom: 24 }}>
          Tab position:
          <Radio.Group value={tabPosition} onChange={changeTabPosition}>
            <Radio.Button value="top">top</Radio.Button>
            <Radio.Button value="bottom">bottom</Radio.Button>
            <Radio.Button value="left">left</Radio.Button>
            <Radio.Button value="right">right</Radio.Button>
          </Radio.Group>
        </Space> */}
        <Tabs tabPosition={tabPosition} centered>
          <TabPane tab="Trabajos" key="1">
            <Works/>
          </TabPane>
          <TabPane tab="Tesis" key="2">
            <Tesis/>
          </TabPane>
          <TabPane tab="Cursos" key="3">
            <Courses/>
          </TabPane>
          <TabPane tab="Lenguajes" key="4">
            <LangProg/>
          </TabPane>
          <TabPane tab="Frameworks" key="5">
            <Frameworks/>
          </TabPane>
        </Tabs>
      </>
    </section>
  );
};

export default Exp;
