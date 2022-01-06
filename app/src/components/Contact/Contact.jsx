import React from "react";
import Axios from "axios";
import fileDownload from "js-file-download";
import "../Contact/contact.css";

//ant
import { Card } from "antd";
import { Tooltip, Button, Divider } from "antd";

const Contact = () => {
  const url =
    "https://drive.google.com/file/d/14hISG3j6aHS__c-fsmRKNTRYNsyiKgNh/view?usp=sharing";
  return (
    <>
      <section className="container-contact">
        <h1 className="title-contact">Contacto</h1>
        <div className="item">
          <div className="box-item">
            <i class="fas fa-mobile-alt fa-2x"></i>
            <h3>+542604698404</h3>
          </div>
          <div className="box-item">
            <i class="fas fa-envelope fa-2x"></i>
            <h3>ivanrcastro773@gmail.com</h3>
          </div>

          <div>
            <Button type="primary" size="large">
              <a href={url}>Ver Curriculum</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
