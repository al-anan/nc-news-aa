import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchNavItems } from "../utils/api";

export const Navbar = ({ setTopic }) => {
  const [navbar, setNavbar] = useState([]);
  useEffect(() => {
    fetchNavItems().then((navFromApi) => {
      setNavbar(navFromApi);
    });
  }, []);

  return (
    <nav className="nav-bar">
      <Link className="nav-link" to="/" onClick={() => setTopic("all")}>
        All Articles
      </Link>
      {navbar.map((navItem) => {
        return (
          <Link
            className="nav-link"
            to={`/articles?topic=${navItem}`}
            onClick={() => setTopic(navItem)}
            key={navItem}
          >
            {navItem}
          </Link>
        );
      })}
    </nav>
  );
};
