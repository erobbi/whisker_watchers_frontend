import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";

export default function Login({ setUser, setLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const history = useHistory();

  function handleSubmit(e) {
      console.log("triggered")
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then(setUser);
        setLoggedIn(true)
        history.push("/weight_tracker");     
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="username"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <br />
      <input
        type="password"
        placeholder="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
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
  );
}
