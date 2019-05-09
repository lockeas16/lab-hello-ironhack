import React from "react";

function Navbar(){
  return (
    <div className="uk-section uk-padding-remove-vertical primary-back">
      <div className="uk-container uk-container-large">
        <nav className="uk-navbar-container uk-navbar-transparent" uk-navbar="">
          <div className="uk-navbar-left">
            <a className="uk-navbar-item uk-logo" href="#">
              <img src="images/ironhack-logo.svg" alt="ironhackLogo" />
            </a>
          </div>
          <div className="uk-navbar-right">
            <a className="uk-navbar-item uk-logo" href="#">
              <img src="images/menu-top.svg" alt="menuRight" />
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;