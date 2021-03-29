import React from "react";
import "./Howworks.css";

function Howworks() {
  return (
    <div className="howWorks">
      <div className="howWorks__content">
        <h3 className="howWorks__title">HOW IT WORKS</h3>
        <p className="howWorks__desc">
          Quick brief on how simple yet powerful Rentify is
        </p>
        <img
          className="howWorks__image"
          src="./images/howItWorks.png"
          alt="how_works"
        />
        <div className="contents">
          <div className="createAccount">
            <h4 className="createAccount__title">Create An Account</h4>
            <p className="createAccount__descr">
              Start your journey by creating your very first account.
            </p>
          </div>
          <div className="postAdvert">
            <h4 className="createAccount__title">Post An advert</h4>
            <p className="createAccount__descr">
              Now when you are our member, post your first advert.
            </p>
          </div>
          <div className="startEarning">
            <h4 className="createAccount__title">Start Earning</h4>
            <p className="createAccount__descr">
              Is your advert ready to live?Now sit back and starting earning
              money.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Howworks;
