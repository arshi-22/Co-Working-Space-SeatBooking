import React from "react";
import Coffee from "../../assets/Group.svg";
import Gym from "../../assets/gym.svg";
import Community from "../../assets/community.svg";
import Clock from "../../assets/clock.svg";
import Comfort from "../../assets/comfort.svg";
import Affordable from "../../assets/affordable.svg";
import Wifi from "../../assets/wifi.svg";
import Sports from "../../assets/sports.svg";

export const Specifications = ({ props }) => {
  const features = [
    { title: "Community Events", icon: Community },
    { title: "Gym Facilities", icon: Gym },
    { title: "High-Speed WiFi", icon: Wifi },
    { title: "Cafe & Tea Bar", cion: Coffee },
    { title: "Affortable", icon: Affordable },
    { title: "Comfort Launges", icon: Comfort },
    { title: "Quick Booking", icon: Clock },
    { title: "Sports Area", icon: Sports },
  ];

  return (
    <grid>
      {features.map((item) => (
        <grid key={item.title}>
          <img src={`${item.icon}`} className="" alt="icons"></img>
          <h7>{item.title}</h7>
        </grid>
      ))}
    </grid>
  );
};
