import React, { useState } from 'react'

function Login({ user, setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

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
      <button type="submit" className="ui button">Login</button>
    </form>
  );
}

export default Login
