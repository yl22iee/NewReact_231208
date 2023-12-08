import React from "react";
import "./Profile.css";

export default function Avatar({ image, Isnew }) {
  return (
    <div className="avatar">
      <img className="people" src={image} alt="avatar" />
      {Isnew && <span className="new">new</span>}
    </div>
  );
}
