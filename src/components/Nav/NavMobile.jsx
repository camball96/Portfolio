import React, { useState } from "react";
import NavLinks from "./NavLinks";
import { RiMenu5Fill } from "react-icons/ri";
import { GrClose } from "react-icons/gr";

function NavMobile() {
  const [openMenu, setOpenMenu] = useState(false);

  const hamburger = (
    <RiMenu5Fill className="hamburger-icon" onClick={() => setOpenMenu(true)} />
  );
  const exitMenu = (
    <GrClose className="close-icon" onClick={() => setOpenMenu(false)} />
  );

  return (
    <div className="nav-mobile">
      {openMenu ? exitMenu : hamburger}
      {openMenu && <NavLinks />}
    </div>
  );
}

export default NavMobile;
