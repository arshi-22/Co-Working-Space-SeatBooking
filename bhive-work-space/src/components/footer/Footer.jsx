import React from "react";
import "./style.scss";
import AppleStore from "/assests/applestore.svg";
import PlyaStore from "/assests/playstore.svg";
import Phone from "/assests/phone.svg";

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="download-container">
        <h1 className="download-title">Donwload our app now</h1>
        <div className="playstore">
          <img src={Phone} alt="" />
          <div className="download-content">
            <p className="download-description">
              Boost your productivity with the BHIVE Workspace app.
            
              Elevate your workspace, collaborate efficiently, and unlock
              exclusive perks.
            </p>
            <div className="store">
              <img src={PlyaStore} alt="" />
              <img src={AppleStore} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="layout">
          <span className="typography">
            © Copyright 2023. Bhive Private Limited
          </span>
        </div>
      </div>
    </div>
  );
};
