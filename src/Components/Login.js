import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";

export default function Login({ setLoggedIn, setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then(setUser);
        setLoggedIn(true);
        history.push("/weight_tracker");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }
  return (
    <div className="standardBackground">
      <br />
      <br />
      <div className="standardFlexBox">
        <form className="ui form" onSubmit={handleSubmit}>
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              placeholder="username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              placeholder="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <br />
          <Button type="submit" variant="contained">
            Login
          </Button>
          {errors
            ? errors.map((err) => (
                <h3 style={{ color: "red" }} key={err}>
                  {err}
                </h3>
              ))
            : null}
        </form>
      </div>
    </div>
  );
}
