import React from "react";
import { Link } from "react-router-dom";
import { navData } from "../../utils/Utils";
import "./nav.css";

function NavLinks() {
  return (
    <div>
      {navData.map((data) => {
        return (
          <Link to={data.link} className="navLink" key={data.id}>
            {data.label}
          </Link>
        );
      })}
    </div>
  );
}

export default NavLinks;
