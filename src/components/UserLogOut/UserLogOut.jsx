// import './UserLogOut.css';
import { logOut } from "../../utilities/users-service";
import React from "react";

export default function UserLogOut({ user, setUser }) {
  function handleLogOut() {
    logOut();
    setUser(null);
  }

  return (
    <div className="UserLogOut mb-3">
      <div>{user.name}</div>
      <div className="email">{user.email}</div>
      <button
        className="btn-sm rounded-lg font-semibold hover:text-black hover:bg-[#fcbf49] duration-200"
        onClick={handleLogOut}
      >
        Log Out
      </button>
    </div>
  );
}
