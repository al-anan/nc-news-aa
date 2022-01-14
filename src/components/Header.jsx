import React from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="header">
      <h1 className="main-header" onClick={handleClick}>
        AA News Portal
      </h1>
    </div>
  );
};
