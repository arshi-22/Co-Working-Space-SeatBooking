import React, { useEffect } from "react";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { setFeatures } from "../../redux/feature/workSpaceSlice";
import { FEATURES } from "../../data/features.js";

export const Specifications = () => {
  const {feature} = useSelector((state) => state.workSpaceSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFeatures(FEATURES));
  }, []);

  return (
    <div className="container">
      <h1>Why Choose us?</h1>
      <div className="features-grid">
        {feature?.map((item, index) => (
          <div key={item.title} className="feature-item">
            <img src={item.icon} alt={item.title} className="feature-icon" />
            <div className="feature-content">
              <h3>{item.title}</h3>
              <p>One liner details about the feature</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
