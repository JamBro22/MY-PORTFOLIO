import React from "react";
import { Parallax } from "react-parallax";
import { Box } from "@material-ui/core";
import Typed from "react-typed";
import "./Landing.css";
import image from "./1873.jpg";

const Landing = () => {
  return (
    <div id="home">
      <Parallax
        id="home"
        bgImage={image}
        strength={600}
        style={{ padding: "50px", margin: 0 }}
      >
        <Box className="landing-background">
          <Box className="landing-header">
            <h1 className="head">Hello World!</h1>
            <h1 className="head">I am Jamie Brown</h1>
          </Box>
          <Box className="landing-type">
            <Typed
              strings={["Avid coder", "Web developer", "Creator"]}
              typeSpeed={70}
              backSpeed={70}
              startDelay={500}
              loop
            />
          </Box>
        </Box>
      </Parallax>
    </div>
  );
};

export default Landing;
