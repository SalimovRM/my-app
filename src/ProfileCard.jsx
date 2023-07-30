import React from "react";
import Avatar from "./Avatar";
import UserProfile from "./UserProfile";
export default function ProfileCard({ user }) {
  const name = `${user.first_name} ,${user.last_name} `;
  return (
    <div>
      <Avatar url={user.avatar} name={name} />
      <UserProfile name={user.name} email={user.email} />
    </div>
  );
}
