import React from "react";
import "./style.scss";
import { useSelector } from "react-redux";
import direction from "../../../public/assests/assistant_direction.svg";
import data from "../../data/data.json";
export const WorkSpaceCard = () => {
  // const { workSpace } = useSelector((state) => state.workSpace);

  return (
    <div className="space-overview-container">
      <h1 className="space-overview">Our Space Overview</h1>
      <div className="workspace-grid">
        {data.map((item) => (
          <div className="card-container" key={item.id}>
            <div className="card">
              <div className="card-title">
                <h5>{item.name}</h5>
                <div className="location">
                  <img
                    className="location-icon"
                    src={direction}
                    alt="location icon"
                  />
                  <span>{}</span>
                </div>
              </div>
              <img className="card-image" src={`${item.images}`} alt="" />
              <div className="booking">
                <div className="daypass">
                  <h4>Day Pass</h4>
                  <span>₹{item.day_pass_price} </span>
                </div>
                <div className="bulkpass">
                  <div className="discount">
                    <span className="offer">20% Discount</span>
                  </div>
                  <div className="pass">
                    <h4>Bulk Pass</h4>
                    <span>$ 2000/10 Days</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
