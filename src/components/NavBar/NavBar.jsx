import "./NavBar.css";
import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";

export default function NavBar({ user, setUser }) {
  // Add the following function
  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    setUser(null);
  }

  return (
    <nav>
      Welcome, {user.name}
      &nbsp; | &nbsp;
      <Link to="/loops">Loops Index</Link>
      &nbsp; | &nbsp;
      <Link to="/genres">Genres Index</Link>
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>
        Log Out
      </Link>
    </nav>
  );
}
