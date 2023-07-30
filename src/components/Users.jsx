import React from "react";
import "../Avatar.css";
export default function Users({ users }) {
  const mailto = `mailto: ${users.email}`;

  return (
    <div className="flex">
      <img className="profile-avatar" src={users.avatar} width={128} height={128} />
      <div className="name">
        {users.first_name} {users.last_name}
        <div>
          <a href={mailto}>{users.email}</a>
        </div>
      </div>
    </div>
  );
}
