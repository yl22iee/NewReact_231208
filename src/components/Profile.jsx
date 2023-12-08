import React from "react";
import "./Profile.css";
import Avatar from "./Avatar";

export default function Profile({ image, name, job, Isnew }) {
  return (
    <div className="profile">
      <Avatar image={image} Isnew={Isnew} />
      <h1>{name}</h1>
      <p>{job}</p>
    </div>
  );
}
