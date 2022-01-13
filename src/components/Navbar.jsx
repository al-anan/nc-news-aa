import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchNavItems } from "../utils/api";

export const Navbar = () => {
  const [navbar, setNavbar] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchNavItems().then((navFromApi) => {
      setNavbar(navFromApi);
      setIsLoading(false);
    });
  }, []);

  return isLoading ? null : (
    <nav className="nav-bar">
      <Link className="nav-link" to="/articles">
        All Articles
      </Link>
      {navbar.map((navItem) => {
        return (
          <Link
            className="nav-link"
            to={`/articles/topic/${navItem}`}
            key={navItem}
          >
            {navItem}
          </Link>
        );
      })}
    </nav>
  );
};
