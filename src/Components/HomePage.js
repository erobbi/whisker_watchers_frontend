import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function HomePage({ loggedIn, setLoggedIn, user, setUser }) {
  return (
    <div className="standardBackground">
      <div className="homePage">
        <NavBar
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
          setUser={setUser}
          user={user}
        />
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
              <p class="introduction_splash_headline_line"
              >
                <span>Live healthier. Jump Higher.</span>
                <span></span>
              </p>
              <div className="introduction_splash_ct">
                <Link to="/catsurvey/1">
                  <button class="primary_button">Starting today</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
