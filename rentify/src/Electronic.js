import React from "react";
import "./Electronic.css";

function Electronic() {
  return (
    <div className="electronic__head">
      <div className="electronic">
        <div className="electronic__search">
          <input
            className="search__keyword"
            type="text"
            placeholder="Search Keyword e.g. Rental cars"
          />
          <input
            className="search__locationn"
            type="text"
            placeholder="Enter Location e.g. Islamabad"
          />
          <button className="search__button">Search</button>
        </div>
      </div>
      <div className="banners">
        <img
          className="howWorks__imag"
          src="./images/howItWorks.png"
          alt="how_works"
        />
      </div>
    </div>
  );
}

export default Electronic;
