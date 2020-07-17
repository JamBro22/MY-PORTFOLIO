import React, { Fragment } from "react";
import "./Navbar.css";

const navItems = ["Home", "Projects", "About Me", "Testimonials", "Contact"];

const Navbar = () => {
  return (
    <Fragment>
      <nav className="nav">
        <h1 className="archivo shadow">Jamie Brown</h1>
        <ul className="nav-list">
          {navItems.map((item) => {
            return item === "Contact" ? (
              <a
                href={`{#${item.toLowerCase()}`}
                key={item}
                className=" nav-item contact"
              >
                <li>{item}</li>
              </a>
            ) : (
              <a
                href={item === "About Me" ? "#about" : `#${item.toLowerCase()}`}
                key={item}
                className="nav-item"
              >
                <li>{item}</li>
              </a>
            );
          })}
        </ul>
      </nav>
    </Fragment>
  );
};

export default Navbar;
