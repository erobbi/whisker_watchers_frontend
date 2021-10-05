import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

export default function NavBar({ loggedIn, setLoggedIn, setUser, user }) {
  const history = useHistory();
  const [reRender, setReRender] = useState(0);

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser({});
        setReRender(reRender + 1);
        setLoggedIn(false);
        history.push("/");
      }
    });
  }

  return (
    <div className="navContainer">
      <div className="logo">Whisker Watchers</div>
      <div className="menuBar">
        <div className="navItem">
          <NavLink exact to="/" className="nav">
            <a>Home</a>
          </NavLink>
        </div>
        <div className="navItem">
          {loggedIn ? (
            <NavLink exact to="/yourpets">
              <a>Your Pets</a>
            </NavLink>
          ) : null}
        </div>
        <div className="navItem">
          <NavLink exact to="/cat_calculator">
            <a>Cat Calculator</a>
          </NavLink>
        </div>
        {loggedIn ? (
          <>
            <div onClick={handleLogoutClick} className="navItem">
              <a>Signout</a>
            </div>
            <div classNam="navItem">
              <NavLink className="nav" exact to="/user">
                <a className="standardFlexBox">
                  <img className="avatarNav" src={user.avatar_url} />
                </a>
              </NavLink>
            </div>
          </>
        ) : (
          <>
            <div className="navItem">
              <NavLink className="nav" exact to="/login">
                <a>Login</a>
              </NavLink>
            </div>
            <div className="navItem">
              <NavLink className="nav" exact to="/signup">
                <a>Signup</a>
              </NavLink>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
