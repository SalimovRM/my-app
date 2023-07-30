import React from "react";
import Users from "./Users";

export default function Profile({users}) {
  return (
    <div>
      {users.map((users) => {
        return <Users users={users} />;
      })}
    </div>
  );
}
