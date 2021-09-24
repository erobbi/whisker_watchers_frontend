import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
    return (
      <div>
        <ul>
          <NavLink exact to="/" className="navItem">
            <li class="active">
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
          <NavLink className="navItemRight" exact to="login">
            <li>
              <a>Login</a>
            </li>
          </NavLink>
          <NavLink className="navItemRight" exact to="user">
            <li class="active">
              <a>User</a>
            </li>
          </NavLink>
        </ul>
      </div>
    );
}
