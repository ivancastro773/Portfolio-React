import React from "react";
//css
import "./LangProg.css";
//ant
import { Progress } from "antd";

const LangProg = () => {
  return (
    <div className="container-lang">
      <div className="lang-single">
        <Progress className="animate__animated animate__rotateIn" type="circle" percent={85} />
        <h4>HTML</h4>
      </div>
      <div className="lang-single">
        <Progress className="animate__animated animate__rotateIn" type="circle" percent={85} />
        <h4>CSS</h4>
      </div>
      <div className="lang-single">
        <Progress className="animate__animated animate__rotateIn" type="circle" percent={80} />
        <h4>JAVASCRIPT</h4>
      </div>
      <div className="lang-single">
        <Progress className="animate__animated animate__rotateIn" type="circle" percent={50} />
        <h4>JAVA</h4>
      </div>
      <div className="lang-single">
        <Progress className="animate__animated animate__rotateIn" type="circle" percent={75} />
        <h4>PHP</h4>
      </div>
    </div>
  );
};

export default LangProg;
