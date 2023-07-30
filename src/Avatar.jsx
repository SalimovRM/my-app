import React from "react";
import "./Avatar.css";

export default function Avatar({ name, url }) {
  return (
    <div>
      <img
        className="profile-avatar"
        width={128}
        alt={name}
        src={url}
        height={128}
      />
    </div>
  );
}
