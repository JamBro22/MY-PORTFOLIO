import React, { Fragment, useState } from "react";
import "./Navbar.css";

const navItems = ["Home", "Projects", "About Me", "Testimonials", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const onClick = () => {
    !open ? setOpen(true) : setOpen(false);
  };

  return (
    <Fragment>
      <nav className="nav">
        <h1 className="archivo shadow">
          Jamie Brown{" "}
          <i
            className={!open ? "fas fa-bars menu" : "fas fa-times closed"}
            onClick={onClick}
          ></i>
        </h1>
        <ul className={!open ? "close-nav" && "nav-list" : "nav-list"}>
          {navItems.map((item) => {
            return item === "Contact" ? (
              <a
                href={`#${item.toLowerCase()}`}
                key={item}
                className={
                  !open
                    ? "close-nav-item" && "nav-item contact off"
                    : "nav-item contact"
                }
                onClick={onClick}
              >
                <li>{item}</li>
              </a>
            ) : (
              <a
                href={item === "About Me" ? "#about" : `#${item.toLowerCase()}`}
                key={item}
                className={
                  !open ? "close-nav-item" && "nav-item off" : "nav-item"
                }
                onClick={onClick}
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
