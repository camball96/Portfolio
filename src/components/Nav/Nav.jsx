import React from "react";
import Navigation from "./Navigation";
import NavMobile from "./NavMobile";

function Nav() {
  return (
    <div className="navbar">
      <Navigation />
      <NavMobile />
    </div>
  );
}

export default Nav;
