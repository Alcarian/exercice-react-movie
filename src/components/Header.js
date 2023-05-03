import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="navigation">
      <div className="title" id="title">
        <h1>Movies React App</h1>
      </div>
      <div className="link">
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <button>Accueil</button>
        </NavLink>
        <NavLink
          to="/Userlist"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <button>Coups de coeur</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
