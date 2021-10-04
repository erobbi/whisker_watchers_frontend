import React from "react";
import fatmax from "../Images/fatmax.png";
export default function Error() {
  return (
    <div className="standardBackground">
      <img src={fatmax} style={{ height: "200px" }} />
      <h1>Error! Page not found.</h1>
    </div>
  );
}
