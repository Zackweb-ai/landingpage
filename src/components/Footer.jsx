import React from "react";
import instagram from "../images/icon-instagram.svg";
import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import pintrest from "../images/icon-pinterest.svg";

const Footer = () => {
  return (
    <div className="footer text-center bg-green d-flex justify-content-center align-items-center flex-column pb-5">
      <p className="title-footer pt-5 pb-3">sunnyside</p>
    <div className="text-center d-flex justify-content-center flex-column">
      <div className="footer-links  mb-4">
        <a className="color-change pr" href="#">About</a>
        <a className="color-change pr" href="#">Services</a>
        <a className="color-change" href="#">Projects</a>
      </div>
      <div className="icons mt-5 d-flex justify-content-center align-items-center">
        <div className="d-flex">
        <img className="icon" src={instagram} alt="" />
        <img className="icon" src={facebook} alt="" />
        <img className="icon" src={twitter} alt="" />
        <img className="icon" src={pintrest} alt="" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Footer;
