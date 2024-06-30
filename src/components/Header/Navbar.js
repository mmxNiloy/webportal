import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <>
      {/* Header */}
      <header className="header-v4">
        {/* Header desktop */}
        <div className="container-menu-desktop">
          <div className="wrap-menu-desktop how-shadow1">
            <nav className="limiter-menu-desktop container-fluid">
              {/* Logo desktop */}
              <Link href="/" className="logo">
                <img
                  src="https://admission.cu.ac.bd/img/8.5674c9a2.png"
                  alt="IMG-LOGO"
                />
                <strong style={{ color: "black" }}>
                  University of Chittagong
                </strong>
              </Link>
              {/* Icon header */}
              <div className="wrap-icon-header flex-w flex-r-m">
                <div className="menu-desktop">
                  <ul className="main-menu">
                    <li>
                      <a href="#">Notice</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="#">Homepage 1</a>
                        </li>
                        <li>
                          <a href="#">Homepage 2</a>
                        </li>
                      </ul>
                    </li>
                    <li className="">
                      <Link href="/faculty">Faculty/Teachers</Link>
                    </li>
                    <li className="">
                      <a href="#">Research</a>
                    </li>
                    <li className="">
                      <Link href="./about">About</Link>
                    </li>
                    <li className="">
                      <div className="profile">
                        <a href="#" className="">
                          <img
                            style={{ width: "50px", height: "50px" }}
                            src="https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png"
                            alt="IMG-LOGO"
                          />
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
        {/* Header Mobile */}
        <div className="wrap-header-mobile">
          {/* Logo moblie */}
          <div className="logo-mobile">
            <a href="#">
              {" "}
              <img
                src="https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png"
                alt="IMG-LOGO"
              />
            </a>
            <strong
              style={{
                color: "black",
                position: "relative",
                top: 23,
                left: 48,
              }}
            >
              University of Chittagong
            </strong>
          </div>
          {/* Icon header */}
          {/* Button show menu */}
          <div className="btn-show-menu-mobile hamburger hamburger--squeeze">
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </div>
        </div>
        {/* Menu Mobile */}
        <div className="menu-mobile">
          <ul className="main-menu-m">
            <li>
              <a href="#">Notice</a>
              <ul className="sub-menu-m">
                <li>
                  <a href="#">Homepage 1</a>
                </li>
                <li>
                  <a href="#">Homepage 2</a>
                </li>
              </ul>
              <span className="arrow-main-menu-m">
                <i className="fa fa-angle-right" aria-hidden="true" />
              </span>
            </li>
            <li className="">
              <a href="#">Faculty/Teachers</a>
            </li>
            <li className="">
              <a href="#">Research</a>
            </li>
            <li className="">
              <a href="./about.html">About</a>
            </li>
            <li className="">
              <div className="profile-mobile">
                <a href="#" className="">
                  <img
                    style={{ width: "100%" }}
                    src="https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png"
                    alt="IMG-LOGO"
                  />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Navbar;
