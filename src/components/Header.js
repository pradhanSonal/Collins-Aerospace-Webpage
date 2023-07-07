import React from "react";
import image from "../images/collins_logo.png";
import image1 from "../images/Vector.png";


function Header() {
  return (
    <div className="header">
      <div className="first-section">
        <ul className="header-tab">
          <li>Raytheon Technologies</li>
          <li>Collins Aerospace</li>
          <li>Pratt & Whitney</li>
          <li>Raytheon Intelligence & Space</li>
          <li>Raytheon Missiles & Defense</li>
        </ul>
      </div>
      <div className="second-section">
        <div className="logo-section">
          <img src={image} alt="logo"></img>
        </div>
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="www.google.com"
                  >
                    Wo we are{" "}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="www.google.com">
                    What we do
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="www.google.com">
                    News
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="www.google.com">
                    Careers
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="www.google.com"
                  >
                    Supplier
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="www.google.com">
                    Customer service
                  </a>
                </li>
                <li>
                  <img src={image1} alt="search"></img>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        </div>
      </div>
  );
}

export default Header;
