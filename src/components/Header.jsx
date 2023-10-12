
import React, { useState } from "react";
import arrow from "../images/icon-arrow-down.svg";
import hamburger from "../images/icon-hamburger.svg";
import cover from "../images/mobile/image-header.jpg";

const Header = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  }

  return (
    <>
    <div className="active">
    <div className='header d-flex align-items-center flex-column py-5'>
      <div className="menu d-flex justify-content-between w-100 px-5 align-items-center">
        <p className='title m-0 p-0'>sunnyside</p>
        <div className="links">
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Projects</a>
          <a className='contact' href="#">Contact</a>
        </div>
      </div>
      <div className="main-title">
        <h1>WE ARE CREATIVES</h1>
        <img className='arrow' src={arrow} alt="arrow-down" />
      </div>
    </div> 
    </div>
      
     <div className="header-mobile relative">
        <div className="cover ">
          <img className="cover-img w-100" src={cover} alt="" />
        </div>
        <div className="data absolute w-100 pt-5">
        <div className="logo d-flex justify-content-between px-3">
          <p className="title-mobile">sunnyside</p>
        <img className="hamburger" src={hamburger} onClick={handleShow} />
        </div>
        </div>
        <div className="main-title-mobile">
        <h1>WE ARE CREATIVES</h1>
        <img className='arrow' src={arrow} alt="arrow-down" />
      </div>
        {
          show && (
            <div className="flex d-flex justify-content-center">
        <div className="links-mobile d-flex flex-column bg-white align-items-center py-5">
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Projects</a>
          <a className="contact-mobile py-2 px-5 rounded-pill" href="#">
            Contact
          </a>
        </div>
        </div>
          )
        }
      </div>
    </>
  );
};

export default Header;
  // <>
  // <div className='header d-flex align-items-center flex-column py-5'>
  //   <div className="menu d-flex justify-content-between w-100 px-5 align-items-center">
  //     <p className='title m-0 p-0'>sunnyside</p>
  //     <div className="links">
  //       <a href="#">About</a>
  //       <a href="#">Services</a>
  //       <a href="#">Projects</a>
  //       <a className='contact' href="#">Contact</a>
  //     </div>
  //   </div>
  //   <div className="main-title">
  //     <h1>WE ARE CREATIVES</h1>
  //     <img className='arrow' src={arrow} alt="arrow-down" />
  //   </div>
  // </div>
  // <div className="mobile">
  //  <div className="logo">
  //  <p className='title m-0 p-0'>sunnyside</p>
  //  </div>
  //  <img src="" alt="" />
  //   </div>
  // </>