import React from "react";
import Axios from "axios";
import fileDownload from "js-file-download";
import "../Contact/contact.css";

//ant
import { Card } from "antd";

const Contact = () => {
  const url =
    "https://drive.google.com/file/d/1PHYcmclqwAC1qoMzKeTAqobdWt1cRuZT/view?usp=sharing";
  return (
    <>

      <section className="container-contact">
      <h1 className="title-contact">Contacto</h1>
        <div className="item">
          <h3>
            <i class="fas fa-mobile-alt fa-2x"></i> +542604698404
          </h3>
          <h3>
            <i class="fas fa-envelope fa-2x"></i> ivanrcastro773@gmail.com
          </h3>
        </div>
      </section>
    </>
  );
};

export default Contact;
