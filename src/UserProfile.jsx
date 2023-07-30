import React from "react";

import "./UserProfile.css";

export default function UserProfile({ name, email }) {
  const mailto = `mailto: ${email}`;
  return (
    <div>
      <h2>{name}</h2>
      <h3>
        <a href={mailto}>{name}</a>
      </h3>
    </div>
  );
}
