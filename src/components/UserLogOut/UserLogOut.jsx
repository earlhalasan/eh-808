// import './UserLogOut.css';
import { logOut } from "../../utilities/users-service";
import React from "react";

export default function UserLogOut({ user, setUser }) {
  function handleLogOut() {
    logOut();
    setUser(null);
  }

  return (
    <div className="UserLogOut bg-white mb-3">
      <div>{user.name}</div>
      <div className="email">{user.email}</div>
      <button className="btn-sm" onClick={handleLogOut}>
        Log Out
      </button>
    </div>
  );
}
