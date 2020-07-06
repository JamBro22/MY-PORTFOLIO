import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Box } from "@material-ui/core";
import Typed from "react-typed";
import "./Landing.css";

const Landing = () => {
  return (
    <Fragment>
      <Box className="landing-background">
        <Box className="landing-header">
          <h1>Hello World!</h1>
          <h1>I am Jamie Brown</h1>
        </Box>
        <Box className="landing-search">
          <Typed
            strings={["Programmer", "Web developer", "Weirdo"]}
            typeSpeed={50}
            backSpeed={50}
            startDelay={1200}
          />
        </Box>
      </Box>
    </Fragment>
  );
};

Landing.propTypes = {
  title: PropTypes.string,
};

export default Landing;
