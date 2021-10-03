import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

export default function HomePage({ loggedIn, setLoggedIn, user, setUser }) {
  return (
    <div className="homePage">
      <NavBar
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        setUser={setUser}
        user={user}
      />
      <div className="introduction_mainbox_container2">
        <div className="introduction_background">
          <img
            className="background-image"
            src="https://i.ibb.co/2FShhW6/Cat2.jpg"
            alt="fat cat"
          ></img>
        </div>
        <div className="introduction_splash">
          <div className="introduction_splash_inner">
            <div class="introduction_splash_headline">
              <p class="introduction_splash_headline_line">
                Your future, to a healthier cat.
              </p>
              <div className="introduction_splash_ct">
                <Link to="/cat_calculator">
                  <button class="ui primary button">Continue</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
