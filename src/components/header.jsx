import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../componentsCSS/header.css";

const Header = () => {
  // State to control dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle dropdown visibility on hover
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <>
      <header className="header">
        <NavLink to="/">
          <h2 className="title">
            Sam&apos;s Activity Tracker
            <br />
            <p className="slogan">Manage Your Time Wisely...!</p>
          </h2>
        </NavLink>
        <nav>
          <ul className="nav-links">
            <div className="nav-links-left">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/movies">Movies Track</Link>
              </li>
              {/* "Made For" Dropdown */}
              <li
                className="dropdown"
                onMouseEnter={toggleDropdown}
                onMouseLeave={toggleDropdown}>
                Made For
                {isDropdownOpen && (
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/daily-activity">Task Management</Link>
                    </li>
                    <li>
                      <Link to="/set-reminder">Time Management</Link>
                    </li>
                    <li>
                      <Link to="/add-important">Notify and Alert</Link>
                    </li>
                    <li>
                      <Link to="/add-important">
                        Add Daily Routine Activity
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </div>
            <li>
              <Link className="btn" to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link className="btn" to="/signup">
                Sign Up
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
