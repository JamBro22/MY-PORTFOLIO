import React, { Fragment } from "react";
import { Box } from "@material-ui/core";
import { Parallax } from "react-parallax";
import "../../App.css";

const Projects = () => {
  return (
    <Fragment>
      <h1 className="header">Projects</h1>
      <Parallax>
        <Box>Project</Box>
      </Parallax>
    </Fragment>
  );
};

export default Projects;
