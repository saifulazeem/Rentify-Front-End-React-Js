import React from "react";
import "./Header.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();
  return (
    <div className="header">
      <div className="header__left">
        <h1 onClick={() => history.push("/")} className="header__logo">
          RENTIFY
        </h1>
      </div>
      <div className="header__right">
        <FavoriteIcon
          onClick={() => history.push("/favorite")}
          className="header__favIcon"
        />
        <button className="header__postAd">POST AD</button>

        <button
          onClick={() => history.push("/login")}
          className="header__login"
        >
          LOGIN
        </button>
      </div>
    </div>
  );
}

export default Header;
