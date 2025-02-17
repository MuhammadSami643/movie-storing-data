import { Link } from "react-router-dom";
import "../componentsCSS/header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="title">My Movie Activity Tracker</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/activity-log">Activity Log</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
