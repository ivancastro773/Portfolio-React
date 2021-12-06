import React from "react";
import "./Courses.css";
//ant
import { Card, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Meta } = Card;
const Courses = () => {
  return (
    <div className="container-courses">
      <Card className="course-icon" cover={<i class="fas fa-code fa-5x"></i>}>
        <Meta
          title="Programación"
          description={
            <ul>
              <li>Node Js - Creando API con Express y Mongo DB</li>
              <li>Programación de Android desde cero.</li>
              <li>
                {" "}
                Profesional en Material Design/Theming para Android. UX y UI.
              </li>
            </ul>
          }
        />
      </Card>
      <Card
        className="course-icon"
        cover={<i class="fas fa-user-lock fa-5x"></i>}
      >
        <Meta
          title="Seguridad Informática"
          description={
            <ul>
              <li> Hacking con Metasploit desde cero</li>
              <li>Forense Informático Avanzado RFC - Bajo entornos Windows</li>
              <li>The Complete Cyber Security Course : Anonymous Browsing!</li>
            </ul>
          }
        />
      </Card>
      {/*  <div>
        <div className="course-icon">
          <i class="fas fa-code fa-5x"></i>
          <h2>Programación</h2>
        </div>
        <div>
          <h3>Node Js - Creando API con Express y Mongo DB</h3>
          <h3>Programación de Android desde cero.</h3>
          <h3>Profesional en Material Design/Theming para Android. UX y UI.</h3>
        </div>
      </div>
      <div>
        <div className="course-icon">
          <i class="fas fa-user-lock fa-5x"></i>
          <h2>Seguridad Informática</h2>
        </div>
        <div>
          <h3>Hacking con Metasploit desde cero</h3>
          <h3>Forense Informático Avanzado RFC - Bajo entornos Windows</h3>
          <h3>The Complete Cyber Security Course : Anonymous Browsing!</h3>
        </div>
      </div> */}
    </div>
  );
};

export default Courses;
