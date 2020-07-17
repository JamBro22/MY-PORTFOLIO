import React, { Fragment } from "react";
import { Box, IconButton } from "@material-ui/core";
import "../../App.css";

const Footer = () => {
  return (
    <Fragment>
      <Box className="footer" id="footer">
        <IconButton>
          <a
            href="https://github.com/Jambro22"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github icon" />
          </a>
        </IconButton>
        <IconButton>
          <a
            href="https://codepen.io/Brown_Jam"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-codepen icon" />
          </a>
        </IconButton>
        <IconButton>
          <a
            href="https://www.linkedin.com/in/jamie-brown-61aa781b1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin icon" />
          </a>
        </IconButton>
      </Box>
    </Fragment>
  );
};

export default Footer;
