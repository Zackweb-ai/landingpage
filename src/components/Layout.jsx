import React from "react";
import egg from "../images/desktop/image-transform.jpg";
import glass from "../images/desktop/image-stand-out.jpg";
import orange from "../images/desktop/image-graphic-design.jpg";
import cherry from "../images/desktop/image-photography.jpg";


const Layout = () => {
  return (
    <>
    <div className="layout">
      <div className="main d-flex">
        <div className="part col-12 col-md-6 d-flex align-items-center flex-column justify-content-center">
        <div className="content w-50">
        <h1 className="pb-4">Transform your brand</h1>
          <p className="pb-4">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <div className="link-border-yellow">
          <a className="link" href="#">Learn more</a>
          </div>
        </div>
        </div>
        <div className="part col-md-6">
            <img className="image w-100" src={egg} alt="egg" />
        </div>
      </div>
      <div className="main d-flex">
        <div className="part col-md-6">
          <img className="image w-100" src={glass} alt="glass" />
        </div>
        <div className="part col-md-6 d-flex align-items-center flex-column justify-content-center">
        <div className="content w-75">
        <h1 className="w-75 pb-4">Stand out to the right audience</h1>
          <p className="w-75 pb-4">
            Using a collaborative formula of designers, researchers, photographers,
            videographers, and copywriters, we’ll build and extend your brand in
            digital places.
          </p>
          <div className="link-border-red">
          <a className="link" href="#">Learn more</a>
          </div>
        </div>
        </div>
      </div>
      <div className="main d-flex">
        <div className="part col-md-6 relative">
          <img className="image w-100 " src={orange} alt="orange" />
          <div className="details absolute text-center">
          <h3 className="pb-3">Graphic Design</h3>
          <p>
            Great design makes you memorable. We deliver artwork that underscores
            your brand message and captures potential clients’ attention.
          </p>
          </div>
        </div>
        <div className="part col-md-6 relative">
          <img className="image w-100" src={cherry} alt="cherry" />
         <div className="details absolute text-center">
         <h3 className="pb-3">Photography</h3>
          <p>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
         </div>
        </div>
      </div>
    </div>
    <div className="layout-mobile">
    <div className="">
    <div className="part col-12">
          <img className="image w-100" src={egg} alt="egg" />
      </div>
      <div className="part col-12 d-flex align-items-center flex-column justify-content-center">
      <div className="content w-75 text-center">
      <h1 className="pb-4">Transform your brand</h1>
        <p className="pb-4">
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do
          most of the marketing for you.
        </p>
        <div className="link-border-yellow d-flex justify-content-center w-100">
        <a className="link" href="#">Learn more</a>
        </div>
      </div>
      </div>
    
    </div>
    <div className="">
      <div className="part col-12">
        <img className="image w-100" src={glass} alt="glass" />
      </div>
      <div className="part col-12 d-flex align-items-center flex-column justify-content-center">
      <div className="content w-75 text-center">
      <h1 className=" pb-4">Stand out to the right audience</h1>
        <p className=" pb-4">
          Using a collaborative formula of designers, researchers, photographers,
          videographers, and copywriters, we’ll build and extend your brand in
          digital places.
        </p>
        <div className="link-border-red d-flex justify-content-center w-100">
        <a className="link" href="#">Learn more</a>
        </div>
      </div>
      </div>
    </div>
    <div className="">
      <div className="part col-12 relative">
        <img className="image w-100 " src={orange} alt="orange" />
        <div className="details absolute text-center">
        <h3 className="pb-3">Graphic Design</h3>
        <p>
          Great design makes you memorable. We deliver artwork that underscores
          your brand message and captures potential clients’ attention.
        </p>
        </div>
      </div>
      <div className="part col-12 relative">
        <img className="image w-100" src={cherry} alt="cherry" />
       <div className="details absolute text-center">
       <h3 className="pb-3">Photography</h3>
        <p>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
       </div>
      </div>
    </div>
  </div>
  </>
  );
};

export default Layout;
