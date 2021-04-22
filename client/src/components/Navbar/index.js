import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

// Depending on the current path, this component sets the "active" className on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark navbar-inverse">
      {/* <a className="navbar-brand" href="/">ACS</a> */}

        {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarDiv" aria-controls="navbarDiv" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span>
        </button> */}

        <div className="collapse navbar-collapse right" id="navbarDiv">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>


            </ul>


        </div>
    </nav>
  );
}

export default Navbar;
