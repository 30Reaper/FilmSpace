import React, { useState } from "react";
import { FaSearch, FaUser } from "react-icons/fa";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import FeedbackModal from "./FeedbackModal";

const Header = () => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchActive, setSearchActive] = useState(false);
  const [feedbackOpen, setFeedbackOpen] = useState(false);

  const toggleUserMenu = () => setUserMenuOpen((open) => !open);

  const toggleSearch = () => {
    setSearchActive((prev) => {
      if (prev) setSearchValue("");
      return !prev;
    });
  };

  const handleSearch = () => {
    if (searchValue.trim()) {
      alert(`Searching for: ${searchValue}`);
      setSearchValue("");
      setSearchActive(false);
    } else {
      alert("Please enter a search term");
    }
  };

  return (
    <header>
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Film Space Logo" />
          </Link>
        </div>

        {/* Navigation menu */}
        <div className="nav-menu">
          <Link to="/">Home</Link>
          <Link to="/Liked">Liked</Link>
          <Link to="/Movies">Movies</Link>
          <Link to="/#trailers">New trailers</Link>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setFeedbackOpen(true);
            }}
          >
            Feedback
          </a>
        </div>

        {/* Icons */}
        <div className="icons">
          <FaSearch
            style={{ height: 39, width: 39, cursor: "pointer" }}
            onClick={toggleSearch}
          />

          {searchActive && (
            <>
              <input
                type="text"
                placeholder="Search..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />
              <button onClick={handleSearch}>Search</button>
            </>
          )}

          {/* User Icon */}
          <div
            className="user-icon"
            onClick={toggleUserMenu}
            style={{ position: "relative", cursor: "pointer" }}
          >
            <FaUser style={{ height: 33, width: 33 }} />
            {userMenuOpen && (
              <div className="user-popup">
                <p style={{ margin: "0 0 10px 0" }}>
                  Logged in as <strong>Roman</strong>
                </p>
                <button
                  onClick={() => {
                    setUserMenuOpen(false);
                    alert("Logged out!");
                  }}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {feedbackOpen && <FeedbackModal onClose={() => setFeedbackOpen(false)} />}
    </header>
  );
};

export default Header;
