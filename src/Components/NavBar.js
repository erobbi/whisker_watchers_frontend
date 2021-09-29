import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

export default function NavBar({ loggedIn, setLoggedIn, setUser, user }) {
  const history = useHistory();
  const [reRender, setReRender] = useState(0)

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser({});
        setReRender(reRender + 1)
        setLoggedIn(false);
        history.push('/')
      }
    });
  }

  return (
    <div>
      <ul>
        <NavLink exact to="/" className="navItem">
          <li>
            <a>Home</a>
          </li>
        </NavLink>
        {loggedIn ? (
        <NavLink exact to="weight_tracker">
          <li className="navItem">
            <a>Weight Tracker</a>
          </li>
        </NavLink>
        ) : null }
        <NavLink exact to="cat_calculator">
          <li className="navItem">
            <a>Cat Calculator</a>
          </li>
        </NavLink>
        <NavLink exact to="dog_calculator">
          <li className="navItem">
            <a>Dog Calculator</a>
          </li>
        </NavLink>

        {/* right side of navBar (reverse order, for float right rendering) */}
        {loggedIn ? (
          <>
            <li onClick={handleLogoutClick} className="navItemRight">
              <a>Signout</a>
            </li>
            <NavLink className="navItemRight" exact to="user">
              <li>
                <a>Welcome, {user.name}</a>
              </li>
            </NavLink>
          </>
        ) : (
          <>
            <NavLink className="navItemRight" exact to="login">
              <li>
                <a>Login</a>
              </li>
            </NavLink>
            <NavLink className="navItemRight" exact to="signup">
              <li>
                <a>Signup</a>
              </li>
            </NavLink>
          </>
        )}
      </ul>
    </div>
  );
}
