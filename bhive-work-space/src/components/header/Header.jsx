import React from "react";
import "./style.scss";
import callIcon from "/assests/call.svg";
import bhiveLogo from "/assests/BHIVE.svg";

export const Header = () => {
  return (
    <div className="header">
      <span className="bhiveLogo">
        <img src={bhiveLogo} className="logo" alt="BHIVE logo" />
      </span>
      <span className="contact">
        <img src={callIcon} className="callIcon" alt="Call Icon" />
      </span>
    </div>
  );
};
