import React from 'react'
import { useState } from 'react'
import { useHistory } from "react-router-dom";

export default function Signup({ setUser }) {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [avatar_url, setAvatar_url] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setPassword_confirmation] = useState("");
    const [errors, setErrors] = useState([]);
    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            username,
            avatar_url,
            password,
            password_confirmation
          }),
        }).then((r) => {
          if (r.ok) {
            r.json().then((user) => {
              setUser(user);
              // history.push("/feed");
            });
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        });
      }


    return (
      <form onSubmit={handleSubmit}>
        <br />
        <input
          type="text"
          placeholder="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
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
          type="text"
          placeholder="avatar_url"
          id="avatar_url"
          value={avatar_url}
          onChange={(e) => setAvatar_url(e.target.value)}
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
        <input
          type="password"
          placeholder="confirm password"
          id="password_confirmation"
          value={password_confirmation}
          onChange={(e) => setPassword_confirmation(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Sign Up</button>
      </form>
    );
}
