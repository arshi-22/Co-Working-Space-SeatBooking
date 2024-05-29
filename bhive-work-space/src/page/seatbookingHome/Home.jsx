import React from "react";
import { Footer } from "../../components/footer/Footer";
import coWorkingman from "../../assets/coworkingman.svg";
import backgroundHexagon from "../../assets/backgroundHexagon.svg";
import "./style.scss";

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
          <span className="coworking">
            <img
              src={coWorkingman}
              className="coworking"
              alt="coWorkingman logo"
            />
          </span>
        </div>
      </div>

      <Footer />
    </div>
  );
};
