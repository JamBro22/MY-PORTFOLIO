import React, { Fragment } from "react";
import { Parallax } from "react-parallax";
import { Box } from "@material-ui/core";
import Typed from "react-typed";
import "./Landing.css";
import image from "./galaxy.jpg";

const Landing = () => {
  return (
    <Fragment>
      <Parallax
        bgImage={image}
        strength={600}
        style={{ padding: "50px", margin: 0 }}
      >
        <Box className="landing-background">
          <Box className="landing-header">
            <h1>Hello World!</h1>
            <h1>I am Jamie Brown</h1>
          </Box>
          <Box className="landing-type">
            <Typed
              strings={["Avid coder", "Web developer", "Weirdo"]}
              typeSpeed={50}
              backSpeed={50}
              startDelay={500}
              loop="loop"
            />
          </Box>
        </Box>
      </Parallax>
    </Fragment>
  );
};

export default Landing;
