import React from "react";
import "./Navbar.css";
import { useHistory } from "react-router-dom";

function Navbar() {
  const history = useHistory();
  return (
    <div>
      <div className="fluid-container">
        <div className="row">
          <div className="navbar col">
            <h3
              onClick={() => history.push("/electronic")}
              className="navbar__menu first"
            >
              ELECTRONICS & HOME APPLIANCES
            </h3>
            <h3 onClick={() => history.push("/")} className="navbar__menu second">
              FURNITURE & HOME DECOR
            </h3>
            <h3 onClick={() => history.push("/")} className="navbar__menu third">
              AUTOMOBILES
            </h3>
            <h3 onClick={() => history.push("/")} className="navbar__menu fourth">
              FASHION & BEAUTY
            </h3>
            <h3 onClick={() => history.push("/")} className="navbar__menu fifth">
              BOOKS,SPORTS & HOBBIES
            </h3>
            <h3 onClick={() => history.push("/")} className="navbar__menu sixth">
              PROPERTY
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
