import React from "react";
import { Footer } from "../../components/footer/Footer";
import coWorkingman from "../../assets/coworkingman.svg";
import backgroundHexagon from "../../assets/backgroundHexagon.svg";
import coworker from "../../assets/coworkerBg.svg";
import "./style.scss";
import { Specifications } from "../../components/specifications/Specifications";

export const Home = () => {
  return (
    <div className="container">
      <div>
        <div
          className="heading"
          style={{
            backgroundImage: `url(${backgroundHexagon})`,
          }}
        >
          <div title="titlecontainer">
            <h2 className="title">
              Host your meeting with world-class amenities. Starting at
              <span className="rate">₹199/-!</span>
            </h2>
          </div>
          <div
            className="coworking"
            style={{
              backgroundImage: `url(${coworker})`,
            }}
          >
            <img
              src={coWorkingman}
              className="coworking"
              alt="coWorkingman logo"
            />
          </div>
        </div>
      </div>

      <Specifications />
      <Footer />
    </div>
  );
};
