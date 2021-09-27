import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar({ setLoggedIn, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser({});
        setLoggedIn(false);
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
          <li onClick={handleLogoutClick} className="navItemRight">
            <a>Signout</a>
          </li>
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
          <NavLink className="navItemRight" exact to="user">
            <li>
              <a>User</a>
            </li>
          </NavLink>
        </ul>
      </div>
    );
}
