import "./NavBar.css";
import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import React from "react";

export default function NavBar({ user, setUser }) {
  // Add the following function
  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    setUser(null);
  }

  return (
    <>
      <div className="navbar pb-3 pt-2 bg-[#003049] text-white font-medium text-lg rounded-b-lg">
        <nav>
          <span className="text-4xl float-left px-8 font-bold underline rounded-lg tracking-tighter">
            MusicSupply
          </span>
          <div className="pt-2 float-right pr-8">
            Welcome, {user.name}
            &nbsp; &nbsp;
            <span className="hover:bg-[#F77F00] rounded-md p-3 duration-200">
              <Link to="/orders/new">Shop</Link>
            </span>
            <span className="hover:bg-[#F77F00] rounded-md p-3 duration-200">
              <Link to="/orders">Order History</Link>
            </span>
            <span className="hover:bg-[#F77F00] rounded-md p-3 duration-200">
              <Link to="/drummachine">Drum Machine</Link>
            </span>
            <span className="hover:bg-[#F77F00] rounded-md p-3 duration-200">
              <Link to="" onClick={handleLogOut}>
                Log Out
              </Link>
            </span>
          </div>
        </nav>
      </div>
    </>
  );
}
