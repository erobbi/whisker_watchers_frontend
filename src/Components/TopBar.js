import React, { useState } from "react";
import NavBar from "./NavBar.js";

export default function TopBar({ loggedIn, setLoggedIn, user, setUser }) {

  return (
    <>
      <NavBar loggedIn={loggedIn} setLoggedIn={setLoggedIn} setUser={setUser} user={user} />
      <br/>
    </>
  );
}
