import React from "react";
import NavBar from "./NavBar.js";

export default function TopBar({ loggedIn, setLoggedIn, user, setUser }) {
  console.log({ user });
  return (
    <>
      <NavBar setLoggedIn={setLoggedIn} setUser={setUser} />
      {loggedIn ? (
        <div>Welcome, {user.name}</div>
      ) : (
        <div>Welcome to Whisker Watchers</div>
      )}
    </>
  );
}
