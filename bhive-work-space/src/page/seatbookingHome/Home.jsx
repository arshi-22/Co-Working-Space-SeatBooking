import React from "react";
import { Footer } from "../../components/footer/Footer";
import coWorkingman from "/assests/coworkingman.svg";
import backgroundHexagon from "/assests/backgroundHexagon.svg";
import coworker from "/assests/coworkerBg.svg";
import "./style.scss";
import { Specifications } from "../../components/specifications/Specifications";
import { WorkSpaceCard } from "../../components/workspacecard/WorkSpaceCard";

export const Home = () => {
  return (
    <div>
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
              <span className="rate"> ₹199/-!</span>
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
      <WorkSpaceCard />
      <Footer />
    </div>
  );
};
