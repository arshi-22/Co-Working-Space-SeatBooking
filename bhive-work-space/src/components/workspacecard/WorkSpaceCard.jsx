import React, { useEffect } from "react";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import direction from "../../../public/assests/assistant_direction.svg";
import { setWorkSpace } from "../../redux/feature/workSpaceSlice";
import ArrowIcon from "/assests/arrow.svg";

export const WorkSpaceCard = () => {
  const { workSpace } = useSelector((state) => state.workSpaceSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setWorkSpace());
  }, []);

  return (
    <div className="space-overview-container">
      <h1 className="space-overview">Our Space Overview</h1>
      <div className="workspace-grid">
        {workSpace.map((item) => (
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
                  <span>6 Kms</span>
                </div>
              </div>
              <img className="card-image" src={`${item.images}`} alt="" />
              <div className="booking">
                <div className="daypass">
                  <h4>Day Pass</h4>
                  <div className="price-details">
                    <span className="booking-price">
                      ₹{item.day_pass_price}
                    </span>
                    <span className="perdays">/ Day</span>
                  </div>
                  <div className="next-icon">
                    <img src={ArrowIcon} alt="next-icon1" className="" />
                    <img src={ArrowIcon} alt="next-icon2" className="" />
                    <img src={ArrowIcon} alt="next-icon3" className="" />
                  </div>
                </div>
                <div className="bulkpass">
                  <div className="discount">
                    <span className="offer">20% Discount</span>
                  </div>
                  <div className="pass">
                    <h4>Bulk Pass</h4>
                    <div className="price-details">
                      <span className="booking-price">$ 2400</span>
                      <span className="perdays">/10 Days</span>
                    </div>
                    <div className="next-icon">
                      <img src={ArrowIcon} alt="next-icon1" className="" />
                      <img src={ArrowIcon} alt="next-icon2" className="" />
                      <img src={ArrowIcon} alt="next-icon3" className="" />
                    </div>
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
