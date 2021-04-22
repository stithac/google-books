import React from "react";
import "./style.css";
import Navbar from "../Navbar";

// Depending on the current path, this component sets the "active" classNameName on the appropriate navigation link item
function Header() {
  return (
    <div>
      <Navbar />
      {/* <span className="snowflake"></span> */}
    </div>

  );
}

export default Header;